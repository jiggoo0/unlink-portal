import { db } from "@unlink/shared/db";

/**
 * 🛠️ UNLINK-GLOBAL: SERVICE REQUEST SERVICE (Data Access Layer)
 * -------------------------------------------------------------------------
 * ศูนย์กลางการจัดการข้อมูลคำขอรับบริการ (Service Requests)
 * มาตรฐาน: Shared Turso (SQLite Cloud) - Strategic Core (Post-Supabase migration)
 */

interface CreateServiceRequestParams {
  id: string;
  serviceType: string;
  status: string;
  metadata: Record<string, string | number | boolean | null>;
}

export async function createServiceRequest({
  id,
  serviceType,
  status,
  metadata,
}: CreateServiceRequestParams) {
  // 🛡️ [Security Protocol] Anonymize PII before storage in the shared core
  const anonymizedMetadata = { ...metadata };
  const piiFields = [
    "guestName",
    "firstName",
    "lastName",
    "passengerName",
    "email",
    "phone",
  ];

  piiFields.forEach((field) => {
    delete anonymizedMetadata[field];
  });

  // 🛰️ [AI Standard] Execute via Shared Core bridge (Turso Standard)
  return await db.execute({
    sql: "INSERT INTO service_requests (id, service_type, status, metadata, created_at) VALUES (?, ?, ?, ?, ?)",
    args: [
      id,
      serviceType,
      status,
      JSON.stringify(anonymizedMetadata),
      new Date().toISOString(),
    ],
  });
}
