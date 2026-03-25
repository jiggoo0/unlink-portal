/**
 * 🛰️ UNLINK-GLOBAL: Audit Logging Service Client
 * -------------------------------------------------------------------------
 * บริการสำหรับส่ง Log ไปยังศูนย์กลาง (unlink-audit) เพื่อความโปร่งใสและตรวจสอบได้
 */

export interface AuditPayload {
  domain: "auth" | "registry" | "external";
  action: string;
  actor_id?: string;
  metadata?: unknown;
}

export async function logToAudit(payload: AuditPayload) {
  // ⚡ URL ของ Audit Node (ปรับเปลี่ยนตาม Environment)
  const AUDIT_API_URL =
    process.env.NEXT_PUBLIC_AUDIT_API_URL ||
    "https://audit.unlink-th.com/api/logs";

  try {
    const response = await fetch(AUDIT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.warn(
        `[AUDIT_CLIENT_WARN] Failed to send log: ${response.statusText}`,
      );
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("[AUDIT_CLIENT_ERROR] Network failure:", error);
    return null;
  }
}
