/** @format */

import { getAllServices } from "@/lib/mdx";
import ServiceCard from "@/components/shared/ServiceCard";
import { ShieldAlert } from "lucide-react";

/**
 * UNLINK-GLOBAL | Services Items Module
 * ทำหน้าที่ดึงข้อมูลและส่งออกรายการการ์ดบริการ
 * 🛡️ Optimization: ไม่ใส่ Wrapper Grid เพื่อความยืดหยุ่นในการจัดเลย์เอาต์
 */
export default async function ServicesGrid({ limit = 6 }: { limit?: number }) {
  const servicesData = await getAllServices();

  if (!servicesData || servicesData.length === 0) {
    return (
      <div className="border-border bg-secondary col-span-full rounded-[2.5rem] border border-dashed py-24 text-center backdrop-blur-sm">
        <div className="mx-auto max-w-xs space-y-4">
          <ShieldAlert className="text-primary/20 w-10 h-10 mx-auto" />
          <p className="text-muted-foreground font-mono text-[10px] tracking-[0.4em] uppercase">
            Operational Matrix Offline
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {servicesData.slice(0, limit).map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </>
  );
}
