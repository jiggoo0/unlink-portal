/** @format */

import { NextRequest } from "next/server";
import { z } from "zod";
import { sendServiceRequestNotification } from "@/lib/line";
import { safeErrorLog } from "@/lib/utils";
import { createServiceRequest } from "@/lib/services/service-request-service";
import { reportAuditLog } from "@/lib/audit";
import { syncAuthorityData } from "@/lib/services/authority-sync-service"; // Import the new sync function
import { getPersonSchema } from "@/lib/seo-schemas"; // Import the schema function

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
      console.warn("🚫 [SPAM DETECTED]: Bot submission blocked.");
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

    // 6. *** NEW: Sync Authority Data ***
    // Check if the schema is compatible and proceed with sync
    const personSchema = getPersonSchema(); // Get the schema data
    if (personSchema) {
      try {
        const syncSuccess = await syncAuthorityData(personSchema);
        if (syncSuccess) {
          console.log(`✅ Authority data synced for request ${id}`);
        } else {
          console.warn(`⚠️ Authority data sync failed for request ${id}, but submission continues.`);
          // Optionally, add a specific status or alert for sync failure
        }
      } catch (syncError: any) {
        safeErrorLog("AUTHORITY_SYNC_INIT_ERROR", { requestId: id, error: syncError.message });
        console.warn(`⚠️ Failed to initiate authority sync for request ${id}. Continuing submission.`);
        // Decide if sync failure should block the whole process or just be warned
      }
    } else {
      console.warn(`⚠️ Person schema not available or invalid, skipping authority sync for request ${id}.`);
    }
    // *** END NEW ***

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
