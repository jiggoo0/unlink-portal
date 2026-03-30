/** @format */

import { NextRequest } from "next/server";
import { z } from "zod";
import { sendServiceRequestNotification } from "@/lib/line";
import { safeErrorLog } from "@/lib/utils";
import { createServiceRequest } from "@/lib/services/service-request-service";
import { reportAuditLog } from "@/lib/audit";
import { handleCaseUpdateAndSync } from "@/app/actions/cases"; // Import the new server action

/**
 * 🛠️ SERVICE SUBMISSION API (SECURED BY THE SHIELD PROTOCOL)
 * -------------------------------------------------------------------------
 * รับข้อมูลจากฟอร์ม ตรวจสอบความถูกต้อง (Zod) และบันทึกลง Shared Supabase
 * กฎเหล็ก: ห้ามเก็บ PII (Personally Identifiable Information) ลงในฐานข้อมูลหลัก
 */

// 1. กำหนด Schema ที่เข้มงวด (Strict Validation)
const ServiceSubmissionSchema = z
  .object({
    service_type: z.string().min(3).max(50),
    is_draft: z.boolean().optional().default(false),
    website_url: z.string().optional(), // Honeypot field
    metadata: z
      .record(z.string(), z.unknown())
      .refine((data: Record<string, unknown>) => Object.keys(data).length > 0, {
        message: "Metadata cannot be empty",
      }),
  })
  .strict();

export async function POST(req: NextRequest) {
  try {
    const rawBody = (await req.json()) as Record<string, unknown>;

    // 🛡️ [SPAM SHIELD]: Honeypot Logic
    if (rawBody.website_url) {
      safeErrorLog("SPAM_DETECTED", { reason: "Bot submission blocked" });
      return new Response(JSON.stringify({ error: "Access Denied" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 2. Validate Data with Zod
    const validation = ServiceSubmissionSchema.safeParse(rawBody);
    if (!validation.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            details: validation.error.issues,
          },
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const { service_type, metadata, is_draft } = validation.data;
    const id = `UK-${globalThis.crypto.randomUUID().substring(0, 8).toUpperCase()}`;
    const status = is_draft ? "draft_lead" : "pending";

    // 3. บันทึกลง Turso DB ผ่าน Service Layer (PII handled by service)
    await createServiceRequest({
      id,
      serviceType: service_type,
      status,
      metadata: metadata as Record<string, string | number | boolean | null>,
    });

    // 4. แจ้งเตือนผ่าน LINE (ส่งข้อมูลดิบเพื่อการติดต่อกลับ - PII ไม่ลง DB)
    await sendServiceRequestNotification({
      caseId: id,
      serviceType: service_type,
      piiData: metadata as Record<
        string,
        string | number | boolean | null | undefined
      >,
      systemData: metadata as Record<
        string,
        string | number | boolean | null | undefined
      >,
      status,
    });

    // 5. รายงานผลไปยัง Audit Sentinel (Compliance Logic)
    await reportAuditLog("user-unlink-request", id, {
      service_type,
      status,
    });

    // 6. *** NEW: Trigger Server Action for Sync ***
    await handleCaseUpdateAndSync(id);

    return new Response(
      JSON.stringify({
        success: true,
        id,
        message: "Request received and secured by The Shield Protocol.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    safeErrorLog("API_SUBMIT_ERROR", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: { code: "SERVER_ERROR", message: "Internal Server Error" },
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
