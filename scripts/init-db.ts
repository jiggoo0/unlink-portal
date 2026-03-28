/**
 * 🏗️ UNLINK-GLOBAL: DATABASE INITIALIZATION SCRIPT (v2026)
 * -------------------------------------------------------------------------
 * คำสั่งสำหรับสร้างโครงสร้างตารางใหม่ทั้งหมดใน Turso Shared Core
 * รันด้วยคำสั่ง: pnpm tsx scripts/init-db.ts
 */

import { db } from "../lib/shared-source/db";

async function main() {
  console.log("🚀 Starting Database Initialization for UNLINK Ecosystem...");

  try {
    // 1. ตารางคำขอรับบริการ (Portal Hub)
    console.log("📦 Creating 'service_requests'...");
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

    // 2. ตารางตัวตนกลาง (Registry Core)
    console.log("👤 Creating 'identities'...");
    await db.execute(`
      CREATE TABLE IF NOT EXISTS identities (
          id TEXT PRIMARY KEY,
          type TEXT NOT NULL, -- 'person' หรือ 'organization'
          name TEXT NOT NULL,
          metadata TEXT, -- JSON เก็บรายละเอียดเชิงลึก
          trust_level INTEGER DEFAULT 1,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 3. ตารางประวัติความปลอดภัย (Audit Node)
    console.log("🛡️ Creating 'audit_logs'...");
    await db.execute(`
      CREATE TABLE IF NOT EXISTS audit_logs (
          id TEXT PRIMARY KEY,
          domain TEXT NOT NULL,
          action TEXT NOT NULL,
          actor_id TEXT,
          status TEXT NOT NULL,
          metadata TEXT,
          ip_address TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 4. ตารางประวัติการตรวจสอบตัวตน
    console.log("🔍 Creating 'identities_audit'...");
    await db.execute(`
      CREATE TABLE IF NOT EXISTS identities_audit (
          id TEXT PRIMARY KEY,
          identity_id TEXT NOT NULL,
          check_type TEXT NOT NULL,
          result TEXT NOT NULL,
          notes TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 5. ตารางแจ้งเตือนภัยคุกคาม
    console.log("🚨 Creating 'threat_alerts'...");
    await db.execute(`
      CREATE TABLE IF NOT EXISTS threat_alerts (
          id TEXT PRIMARY KEY,
          type TEXT NOT NULL,
          severity TEXT NOT NULL,
          description TEXT NOT NULL,
          metadata TEXT,
          is_resolved INTEGER DEFAULT 0,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 6. ตารางระบบตั๋ว/เอกสาร (Registry/Immigration)
    console.log("🎫 Creating 'mock_tickets'...");
    await db.execute(`
      CREATE TABLE IF NOT EXISTS mock_tickets (
          id TEXT PRIMARY KEY,
          ticket_type TEXT NOT NULL,
          reference_code TEXT NOT NULL UNIQUE,
          status TEXT NOT NULL DEFAULT 'active',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ All tables created successfully in the Shared Core.");
  } catch (error) {
    console.error("❌ Initialization failed:", error);
    process.exit(1);
  }
}

main();
