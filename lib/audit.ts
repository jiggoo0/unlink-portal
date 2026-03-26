/** @format */

import { safeErrorLog } from "./utils";

/**
 * 📡 UNLINK-AUDIT: COMPLIANCE SENTINEL REPORTER
 * -------------------------------------------------------------------------
 * ส่งประวัติกิจกรรมสำคัญไปยังระบบตรวจสอบกลาง (Audit Log)
 * ยุทธศาสตร์: ความโปร่งใสระดับสถาบัน (Institutional Transparency)
 */

interface AuditLogPayload {
  domain: string;
  action: string;
  actor_id: string;
  metadata: Record<string, unknown>;
}

export async function reportAuditLog(
  action: string,
  actorId: string,
  metadata: Record<string, unknown> = {},
) {
  const AUDIT_ENDPOINT = "https://audit.unlink-th.com/api/logs";
  const AUDIT_SECRET = process.env.AUDIT_SECRET_KEY;

  if (!AUDIT_SECRET) {
    console.warn("⚠️ AUDIT_SECRET_KEY missing. Skipping audit report.");
    return { success: false, error: "Configuration Error" };
  }

  try {
    const payload: AuditLogPayload = {
      domain: "unlink-portal",
      action,
      actor_id: actorId,
      metadata: {
        ...metadata,
        timestamp: new Date().toISOString(),
        userAgent:
          typeof window !== "undefined"
            ? window.navigator.userAgent
            : "server-side",
      },
    };

    const response = await fetch(AUDIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUDIT_SECRET}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Audit Server responded with ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    safeErrorLog("AUDIT_REPORT_ERROR", error);
    return { success: false, error: "Failed to send audit log" };
  }
}
