import { db } from "@unlink/shared/db";

/**
 * 💳 UNLINK-GLOBAL: PAYMENT & REVENUE SERVICE
 * -------------------------------------------------------------------------
 * จัดการข้อมูลการชำระเงิน และการเปลี่ยนสถานะเคสหลังได้รับเงิน
 */

export interface CreatePaymentRevenueParams {
  id: string;
  amount: number;
  service: string;
  provider: string;
  metadata?: Record<string, string | number | boolean | null>;
}

export async function createPaymentRevenue({
  id,
  amount,
  service,
  provider,
  metadata = {},
}: CreatePaymentRevenueParams) {
  const anonymizedMetadata = {
    ...metadata,
    service_type: service,
    amount_captured: amount,
    payment_provider: provider,
    timestamp: new Date().toISOString(),
  };

  return await db.execute({
    sql: "INSERT INTO service_requests (id, service_type, status, metadata, created_at) VALUES (?, ?, ?, ?, ?)",
    args: [
      id,
      "payment_revenue",
      "completed",
      JSON.stringify(anonymizedMetadata),
      new Date().toISOString(),
    ],
  });
}
