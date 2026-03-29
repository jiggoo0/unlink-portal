import { NextRequest, NextResponse } from "next/server";
import { coreIdentities } from "@/lib/shared-source/identities";
import { reportAuditLog } from "@/lib/audit";

/**
 * 🛰️ UNLINK-GLOBAL | Institutional Verification API (Registry Node) v2.0
 * -------------------------------------------------------------------------
 * NEW: Connects to the master registry API for real-time verification.
 * OLD: Uses mock data.
 */

interface CaseData {
  id: string;
  customer_name: string;
  status: string;
  service: string;
}

interface VerificationResponse {
  success: boolean;
  type: "identity" | "case" | "error";
  caseData?: CaseData;
  error?: string;
}

export async function GET(
  req: NextRequest,
): Promise<NextResponse<VerificationResponse>> {
  const { searchParams } = new URL(req.url);
  const caseId = searchParams.get("caseId");

  if (!caseId) {
    return NextResponse.json(
      {
        success: false,
        type: "error",
        error: "Identifier (caseId) is required for verification.",
      },
      { status: 400 },
    );
  }

  // 1. Check local Core Identities first (for foundational entities)
  const identity = coreIdentities.find((id) => id.id === caseId);
  if (identity) {
    return NextResponse.json({
      success: true,
      type: "identity",
      caseData: {
        id: identity.id,
        customer_name: identity.name,
        status: "ACTIVE",
        service:
          identity.type === "person"
            ? "Verified Individual"
            : "Verified Organization",
      },
    });
  }

  // 2. Fetch from the external Master Registry API (Shared Turso Core)
  try {
    const registryUrl = `https://registry.unlink-th.com/api/identity/${caseId}`;
    const response = await fetch(registryUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success && result.data) {
        const identity = result.data;
        // 🛡️ COMPLIANCE: Audit Log
        await reportAuditLog("identity-verification-remote", caseId, { status: "success", type: "identity" });

        return NextResponse.json({
          success: true,
          type: "identity",
          caseData: {
            id: identity.id,
            customer_name: identity.name,
            status: "ACTIVE",
            service:
              identity.type === "person"
                ? "Verified Individual"
                : "Verified Organization",
          },
        });
      }
    }
  } catch (error) {
    console.error("🚨 [MASTER REGISTRY FETCH ERROR]:", error);
    // Do not return error here, proceed to fallback
  }

  // 3. Fallback: If not found in both local and master registry
  return NextResponse.json(
    {
      success: false,
      type: "error",
      error: "Identifier not found in UNLINK-GLOBAL Registry Network.",
    },
    { status: 404 },
  );
}
