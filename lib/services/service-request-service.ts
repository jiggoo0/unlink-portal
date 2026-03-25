import { db } from "@unlink/shared/db";

/**
 * 🛠️ UNLINK-GLOBAL: SERVICE REQUEST SERVICE (Data Access Layer)
 * -------------------------------------------------------------------------
 * ศูนย์กลางการจัดการข้อมูลคำขอรับบริการ (Service Requests)
 */

export interface CreateServiceRequestParams {
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
