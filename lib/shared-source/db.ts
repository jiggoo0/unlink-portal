/** @format */

import { safeErrorLog } from "./utils";

/**
 * 🔒 UNLINK-GLOBAL: ULTIMATE DATABASE CORE (v4.0 - Fetch Edition)
 * -------------------------------------------------------------------------
 * ระบบดึงข้อมูลผ่าน Fetch API โดยตรงเพื่อข้ามปัญหา Native Bindings บน Termux/Android
 * รองรับการทำงานทั้งบน Node.js, Vercel Edge, และสภาพแวดล้อมจำลอง
 */

interface QueryInput {
  sql: string;
  args?: (string | number | boolean | null)[];
}

interface HranaCell {
  type: "null" | "integer" | "float" | "text" | "blob";
  value?: string | number | null;
  base64?: string;
}

export interface ResultSet {
  rows: Record<string, string | number | boolean | null>[];
}

export const db = {
  execute: async (input: string | QueryInput): Promise<ResultSet> => {
    const rawUrl = process.env.TURSO_DATABASE_URL?.trim() ?? "";
    const authToken = process.env.TURSO_AUTH_TOKEN?.trim() ?? "";

    // 🛡️ Robust URL Sanitization
    let cleanUrl = rawUrl.replace("libsql://", "https://");
    if (cleanUrl.endsWith("/")) {
      cleanUrl = cleanUrl.slice(0, -1);
    }

    if (
      !cleanUrl ||
      !authToken ||
      authToken === cleanUrl.replace("https://", "")
    ) {
      throw new Error(
        "Missing or Invalid Database Configuration (URL/Token mismatch)",
      );
    }

    const sql = typeof input === "string" ? input : input.sql;
    const args = typeof input === "string" ? [] : (input.args ?? []);

    try {
      // 🛰️ ใช้ Hrana over HTTP (v2 Pipeline)
      const response = await fetch(`${cleanUrl}/v2/pipeline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requests: [
            {
              type: "execute",
              stmt: {
                sql,
                args: args.map((arg) => {
                  if (arg === null) return { type: "null" };
                  if (typeof arg === "number")
                    return { type: "float", value: arg };
                  if (typeof arg === "boolean")
                    return { type: "integer", value: arg ? 1 : 0 };
                  return { type: "text", value: String(arg) };
                }),
              },
            },
            { type: "close" },
          ],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`DB_HTTP_ERROR: ${response.status} - ${errorText}`);
      }

      const data = (await response.json()) as {
        results?: {
          response?: {
            result?: {
              cols: { name: string }[];
              rows: HranaCell[][];
            };
            error?: { message: string };
          };
        }[];
      };
      const result = data.results?.[0]?.response?.result;

      if (!result) {
        const sqlError = data.results?.[0]?.response?.error;
        if (sqlError) {
          throw new Error(`SQL_ERROR: ${sqlError.message}`);
        }
        return { rows: [] };
      }

      // 🛡️ แปลงรูปแบบให้กลับมาเหมือน ResultSet ของ SDK เพื่อความเสถียรของระบบเดิม
      const columns = result.cols.map((col) => col.name);
      const rows = result.rows.map((row) => {
        const rowObj: Record<string, string | number | boolean | null> = {};
        row.forEach((cell, index) => {
          let val: string | number | boolean | null;

          if (cell && typeof cell === "object") {
            if (cell.type === "null") {
              val = null;
            } else if (cell.type === "integer") {
              // Hrana integers are returned as strings to support 64-bit
              val = Number(cell.value);
            } else if (cell.type === "float") {
              val = cell.value as number;
            } else if (cell.type === "text") {
              val = cell.value as string;
            } else if (cell.type === "blob") {
              val = cell.base64 || null;
            } else if ("value" in cell) {
              val = (cell.value as string | number | boolean) ?? null;
            } else {
              val = null; // Default fallback for unknown Hrana types
            }
          } else {
            val = cell;
          }

          rowObj[columns[index]] = val === undefined ? null : val;
        });
        return rowObj;
      });

      return { rows };
    } catch (error) {
      safeErrorLog("FETCH_DB_ERROR", error);
      throw error;
    }
  },
};

/*
 * 🛠️ [AI Automation] Initial Database Setup
 * ⚡ เพิ่มเติม: ตาราง identities สำหรับระบบ Identity Farming
 *
const initDatabase = async () => {
  try {
    console.warn("🛠️ [AI] Initializing database schema via HTTP...");
    // 🏦 ตารางหลักสำหรับงานบริการ
    await db.execute(`
      CREATE TABLE IF NOT EXISTS service_requests (
          id TEXT PRIMARY KEY,
          service_type TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'pending',
          metadata TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 👤 ตารางสำหรับ Identity Farming (Person & Organization)
    await db.execute(`
      CREATE TABLE IF NOT EXISTS identities (
          id TEXT PRIMARY KEY,
          type TEXT NOT NULL, -- 'person' หรือ 'organization'
          name TEXT NOT NULL,
          gender TEXT, -- สำหรับ person
          expertise TEXT, -- สำหรับ person
          bio TEXT, -- สำหรับ person
          industry TEXT, -- สำหรับ organization
          key_person_id TEXT, -- สำหรับ organization (เชื่อมไป person)
          assets_summary TEXT, -- สำหรับ organization
          trust_level INTEGER DEFAULT 1,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (key_person_id) REFERENCES identities(id)
      );
    `);

    // 🎫 ตารางสำหรับ Mock Tickets
    await db.execute(`
      CREATE TABLE IF NOT EXISTS mock_tickets (
          id TEXT PRIMARY KEY,
          ticket_type TEXT NOT NULL,
          reference_code TEXT NOT NULL UNIQUE,
          status TEXT NOT NULL DEFAULT 'active',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    return true;
  } catch (error) {
    console.error("❌ Database init failed:", error);
    return false;
  }
};

* 📡 ตรวจสอบการเชื่อมต่อฐานข้อมูล
*
const checkDbConnection = async () => {
  try {
    const rs = await db.execute("SELECT 1 AS status");
    return { success: true, data: rs.rows[0] };
  } catch (error) {
    return { success: false, error: String(error) };
  }
};
*/
