import { google } from "googleapis";
import { safeErrorLog } from "./utils";

/**
 * 👑 CASE STATUS INTERFACE
 * กำหนดโครงสร้างข้อมูลให้ชัดเจนเพื่อความปลอดภัย (Type Safety)
 */
export interface CaseStatus {
  caseId: string;
  customerName: string;
  mainStatus: string;
  currentPhase: string;
  progress: number;
  step1: string;
  step2: string;
  step3: string;
  slipUrl?: string;
}

/**
 * 🛰️ GOOGLE SHEETS CONNECTOR (SERVICE ACCOUNT)
 * ดึงข้อมูลโดยตรงจากฐานข้อมูล AppSheet/Sheets แบบ Real-time
 */

/**
 * 🛰️ GOOGLE SHEETS UPDATER
 * อัปเดตข้อมูลสถานะเคสใน Sheets อัตโนมัติ (เช่น เมื่อชำระเงินสำเร็จ)
 */
export async function updateCaseStatus(
  caseId: string,
  updates: Partial<CaseStatus>,
): Promise<{ success: boolean; message: string }> {
  try {
    const SPREADSHEET_ID = "1S4QuqkPxzuUK9NUkSBaR_12iKw-rShNEsTqpAsVuL4I";
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

    if (!serviceAccountJson) {
      return { success: false, message: "System Configuration Error" };
    }

    const credentials = JSON.parse(serviceAccountJson) as {
      client_email?: string;
      private_key?: string;
    };
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const sheetName = process.env.GOOGLE_SHEET_NAME ?? "ชีต1";

    // 1. Find the row index
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:A`,
    });

    const rows = response.data.values as string[][] | null | undefined;
    if (!rows) return { success: false, message: "No data found" };

    const rowIndex = rows.findIndex(
      (row) =>
        row[0]?.toString().toUpperCase().trim() === caseId.toUpperCase().trim(),
    );

    if (rowIndex === -1)
      return { success: false, message: "Case ID not found" };

    const sheetRowIndex = rowIndex + 1; // 1-based index

    // 2. Prepare updates (Mapping: A=0, B=1, C=2, D=3, E=4, F=5, G=6, H=7, I=8)
    // We only update columns that are provided in 'updates'
    const updatePromises = [];

    if (updates.mainStatus) {
      updatePromises.push(
        sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!C${sheetRowIndex}`,
          valueInputOption: "RAW",
          requestBody: { values: [[updates.mainStatus]] },
        }),
      );
    }

    if (updates.currentPhase) {
      updatePromises.push(
        sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!D${sheetRowIndex}`,
          valueInputOption: "RAW",
          requestBody: { values: [[updates.currentPhase]] },
        }),
      );
    }

    if (updates.progress !== undefined) {
      updatePromises.push(
        sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!E${sheetRowIndex}`,
          valueInputOption: "RAW",
          requestBody: { values: [[updates.progress]] },
        }),
      );
    }

    if (updates.step1) {
      updatePromises.push(
        sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!F${sheetRowIndex}`,
          valueInputOption: "RAW",
          requestBody: { values: [[updates.step1]] },
        }),
      );
    }

    if (updates.slipUrl) {
      updatePromises.push(
        sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!I${sheetRowIndex}`,
          valueInputOption: "RAW",
          requestBody: { values: [[updates.slipUrl]] },
        }),
      );
    }

    await Promise.all(updatePromises);

    return { success: true, message: "Case status updated successfully" };
  } catch (error) {
    safeErrorLog("UPDATE_SHEETS_ERROR", error);
    return { success: false, message: "Failed to update Google Sheets" };
  }
}
