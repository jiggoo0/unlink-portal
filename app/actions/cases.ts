/** @format */

"use server";

import { db } from "@unlink/shared/db";
import { revalidatePath } from "next/cache";
import { updateCaseStatus } from "@/lib/google-sheets";
import { put } from "@vercel/blob";
import { verifySlip } from "@/lib/payment-utils";

/**
 * ⚡ UNLINK-GLOBAL: LIAISON SERVER ACTIONS (v3.0 - Client Focused)
 * -------------------------------------------------------------------------
 * ปรับปรุง: ถอดระบบแจ้งเตือนแอดมินและฟังก์ชันอนุมัติออก เพื่อใช้ระบบ LINE OA แทน
 */

/**
 * 📂 UPLOAD FILE & ATTACH TO CASE
 */
export async function uploadFileAction(caseId: string, formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      throw new Error("No file selected");
    }

    if (file.type !== "application/pdf") {
      throw new Error("Only PDF documents are permitted for security");
    }

    // Upload to Vercel Blob
    const blob = await put(`liaison/${caseId}-${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });

    // Update Database with File URL
    await db.execute({
      sql: "UPDATE cases SET file_url = ? WHERE id = ?",
      args: [blob.url, caseId],
    });

    // [AUTOMATED-SYNC]: Update Google Sheets Status
    try {
      await updateCaseStatus(caseId, {
        step2: "Document Prepared",
        currentPhase: "Finalizing Document",
        progress: 85,
      });
    } catch (sheetError) {
      console.warn("⚠️ [SHEETS-SYNC-ERROR]:", sheetError);
    }

    revalidatePath("/payment-verify");
    return { success: true, url: blob.url };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "File upload failed";
    console.error("🚨 [UPLOAD ERROR]:", message);
    return { success: false, error: message };
  }
}

/**
 * 🧾 SUBMIT PAYMENT SLIP (CUSTOMER SIDE)
 */
export async function submitSlipAction(caseId: string, formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      throw new Error("กรุณาเลือกไฟล์สลิปเพื่อยืนยันการโอนเงินครับ");
    }

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      throw new Error(
        "ระบบรองรับเฉพาะไฟล์รูปภาพ (JPG, PNG) หรือ PDF เท่านั้นครับ",
      );
    }

    // 1. Upload to Vercel Blob (slips folder)
    const blob = await put(`slips/${caseId}-${Date.now()}-${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });

    // 2. Update Database with Slip URL
    await db.execute({
      sql: "UPDATE cases SET slip_url = ?, status = 'pending_verification' WHERE id = ?",
      args: [blob.url, caseId],
    });

    // [AUTOMATED-PAYMENT]: Verify Slip via SlipOK API
    try {
      await verifySlip({ data: blob.url });
    } catch (payErr) {
      console.warn("⚠️ [PAYMENT-VERIFY-ERROR]:", payErr);
    }

    // 3. [AUTOMATED-SYNC]: Update Google Sheets Status
    try {
      await updateCaseStatus(caseId, {
        step1: "Verifying Payment",
        mainStatus: "Pending Verification",
        progress: 40,
        slipUrl: blob.url,
      });
    } catch (sheetError) {
      console.warn("⚠️ [SHEETS-SYNC-ERROR]:", sheetError);
    }

    revalidatePath("/payment-verify");
    return { success: true, url: blob.url };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "การอัปโหลดสลิปล้มเหลว";
    console.error("🚨 [SLIP UPLOAD ERROR]:", message);
    return { success: false, error: message };
  }
}
