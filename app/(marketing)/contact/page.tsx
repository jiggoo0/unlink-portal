/** @format */

import { Metadata } from "next";
import { ContactGateway } from "@/components/sections/ContactGateway";
import JsonLd from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schemas";

/**
 * UNLINK-TH | Secure Liaison Access
 * -------------------------------------------------------------------------
 * ช่องทางการติดต่อประสานงานที่ปลอดภัย (Server Component for SEO)
 * ปรับปรุงใหม่: เน้นความโปร่งใส สบายตา และความเชื่อมั่น (Human-Connect)
 */

export const metadata: Metadata = {
  title: "ปรึกษาผู้เชี่ยวชาญแบบส่วนตัว (Confidential) | UNLINK-TH",
  description:
    "เริ่มต้นกู้คืนชื่อเสียงของคุณ ปรึกษาและประเมินเคสภายใต้มาตรการรักษาความลับสูงสุด ข้อมูลของคุณปลอดภัยและได้รับการดูแลโดยมืออาชีพ",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ];

  return (
    <div className="pt-20">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <ContactGateway />
    </div>
  );
}
