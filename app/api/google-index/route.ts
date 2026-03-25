import { NextRequest, NextResponse } from "next/server";
import { db } from "@unlink/shared/db";
import { safeErrorLog } from "@/lib/utils";

/**
 * 🛰️ GOOGLE INDEXING TRIGGER API (v1.0)
 * ---------------------------------------------------------
 * API สำหรับส่งสัญญาณให้ Search Engines เข้ามาทำการ Index ข้อมูลใหม่
 * เมื่อมีการทำ Identity Swap หรืออัปเดตข้อมูลสำคัญ
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { identityId, action } = body;

    if (!identityId) {
      return NextResponse.json(
        { error: "Identity ID is required" },
        { status: 400 },
      );
    }

    // 1. ตรวจสอบว่า Identity มีจริงหรือไม่
    const result = await db.execute({
      sql: "SELECT name FROM identities WHERE id = ? LIMIT 1",
      args: [identityId.toUpperCase()],
    });

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: `Identity "${identityId}" not found` },
        { status: 404 },
      );
    }

    const identity = result.rows[0];

    // 2. จำลองการส่งคำขอไปยัง Google Indexing API
    // ในโปรดักชั่นจริง จะต้องใช้ googleapis library และ Service Account
    console.warn(
      `🚀 [SEO_TRIGGER] Sending Index Request for: ${identityId} (${identity.name})`,
    );
    console.warn(`📡 [ACTION]: ${action || "URL_UPDATED"}`);

    // 3. อัปเดตเวลาการแก้ไขล่าสุดในฐานข้อมูล
    await db.execute({
      sql: "UPDATE identities SET updated_at = CURRENT_TIMESTAMP, last_checked = CURRENT_TIMESTAMP WHERE id = ?",
      args: [identityId.toUpperCase()],
    });

    return NextResponse.json({
      success: true,
      message: `Indexing request triggered successfully for ${identityId}`,
      timestamp: new Date().toISOString(),
      simulated: true,
    });
  } catch (error: unknown) {
    safeErrorLog("API_GOOGLE_INDEX_ERROR", error);
    return NextResponse.json(
      { error: "Internal server error during indexing trigger" },
      { status: 500 },
    );
  }
}
