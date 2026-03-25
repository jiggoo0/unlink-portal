import { NextRequest, NextResponse } from "next/server";
import { coreIdentities } from "@/lib/shared-source/identities";

/**
 * 🛰️ UNLINK-GLOBAL | Institutional Verification API (Registry Node)
 * -------------------------------------------------------------------------
 * บริการตรวจสอบความถูกต้องของตัวตน (UL-P/C) และเคสที่ได้รับอนุมัติ (UL-CASE)
 */

interface CaseData {
  id: string;
  customer_name: string;
  email: string;
  status: string;
  file_url: string;
  service: string;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const caseId = searchParams.get("caseId");

  if (!caseId) {
    return NextResponse.json(
      { error: "Identifier (caseId) is required for verification." },
      { status: 400 },
    );
  }

  // 1. ตรวจสอบข้อมูลจาก Core Identities (Identity Registry)
  const identity = coreIdentities.find((id) => id.id === caseId);
  if (identity) {
    return NextResponse.json({
      success: true,
      type: "identity",
      caseData: {
        id: identity.id,
        customer_name: identity.name,
        email: "verified@registry.unlink-th.com",
        status: "ACTIVE",
        file_url: "#",
        service:
          identity.type === "person"
            ? "Verified Individual"
            : "Verified Organization",
      } as CaseData,
    });
  }

  // 2. จำลองข้อมูลเคสที่ผ่านการรับรอง (Mock Case Registry)
  const mockCases: Record<string, CaseData> = {
    "UL-CASE-2026-X1": {
      id: "UL-CASE-2026-X1",
      customer_name: " Alongkorn Yomkerd (9mza)",
      email: "ceo@aemdevweb.com",
      status: "CERTIFIED",
      file_url: "/docs/verified-node-001.pdf",
      service: "Digital Identity Architecture",
    },
    "UL-CASE-2026-X2": {
      id: "UL-CASE-2026-X2",
      customer_name: "Strategic Client (VIP)",
      email: "confidential@registry.node",
      status: "CERTIFIED",
      file_url: "/docs/verified-node-002.pdf",
      service: "High-Stake Reputation Management",
    },
  };

  const caseEntry = mockCases[caseId];

  if (caseEntry) {
    return NextResponse.json({
      success: true,
      type: "case",
      caseData: caseEntry,
    });
  }

  // 3. Fallback: กรณีไม่พบข้อมูล
  return NextResponse.json(
    { error: "Identifier not found in UNLINK-GLOBAL Registry Node." },
    { status: 404 },
  );
}
