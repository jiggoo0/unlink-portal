import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";

/**
 * UNLINK-TH | Search Engine Accessibility Protocol (v2.0 - Clean Edition)
 * -------------------------------------------------------------------------
 * หน้าที่: ควบคุมการเข้าถึงของ Search Engine Bot ให้เน้นเฉพาะเนื้อหาคุณภาพ
 * ปรับปรุง: ถอดข้อกำหนดเกี่ยวกับ /admin/ ออกเนื่องจากไม่มีระบบแอดมินแล้ว
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/verify/p/", "/verify/c/"],
        disallow: [
          "/api/", // ป้องกันการเข้าถึง Endpoint ภายใน
          "/verify/tg/", // ป้องกัน Google Bot เข้าตรวจสอบหน้าจำลองสายการบิน
          "/verify/transport-co/",
          "/verify/agoda/",
          "/download-vault/", // ป้องกันการ index หน้าแจกไฟล์ลูกค้า
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/case-studies/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
