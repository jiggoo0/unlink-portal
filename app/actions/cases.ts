/** @format */
"use server";

import { syncAuthorityData } from "@/lib/services/authority-sync-service";
import { getPersonSchema } from "@/lib/seo-schemas";
import { safeErrorLog } from "@/lib/utils";

/**
 * ⚙️ UNLINK-GLOBAL | CASE ACTIONS (Server Actions)
 * -------------------------------------------------------------------------
 * Action ที่ใช้ในการจัดการ Case และ trigger การ Sync ข้อมูล
 */

export async function handleCaseUpdateAndSync(caseId: string) {
  // TODO: Add actual database update logic for the case here
  console.log(`🚀 Updating case: ${caseId} in database...`);

  // After a successful update, trigger the authority sync
  try {
    console.log(`🔄 Triggering Authority Sync for case: ${caseId}...`);
    const personSchema = getPersonSchema();
    await syncAuthorityData(personSchema);
  } catch (error: any) {
    safeErrorLog("CASE_SYNC_TRIGGER_FAILED", {
      caseId,
      error: error.message,
    });
    // The main operation should not fail if sync fails
    console.warn(`⚠️ Sync failed for case ${caseId}, but the case update was successful.`);
  }

  // TODO: Revalidate path or return success message
  console.log(`✅ Case ${caseId} handled successfully.`);
}
