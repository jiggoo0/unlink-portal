/** @format */

/**
 * UNLINK-TH | SEO Architecture: Structured Data Injection
 * -------------------------------------------------------------------------
 * หน้าที่: แทรก JSON-LD เพื่อช่วยให้ Search Engine (Google) เข้าใจบริบทเชิงลึก
 * รองรับการแสดงผล Rich Snippets เช่น Organization, Person (9mzm), และ WebSite
 */

import {
  getWebSiteSchema,
  getOrganizationSchema,
  getPersonSchema,
  getLocalBusinessSchema,
} from "@/lib/seo-schemas";

import { Thing, WithContext } from "schema-dts";

interface JsonLdProps {
  /**
   * ข้อมูล Schema ในรูปแบบ Object หรือ Array
   */
  data?: WithContext<Thing> | WithContext<Thing>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  // [1] Integrity Check: หากไม่มีการส่ง data มา ให้ใช้ชุดข้อมูลพื้นฐาน (WebSite + Organization + Person + LocalBusiness)
  // วิธีนี้จะทำให้ Google เห็นความสัมพันธ์ระหว่างบุคคล องค์กร และเว็บไซต์ในทุกหน้า
  const defaultSchemas = [
    getWebSiteSchema(),
    getOrganizationSchema(),
    getPersonSchema(),
    getLocalBusinessSchema(),
  ];

  const schemaData = data ?? defaultSchemas;

  if (
    !schemaData ||
    (Array.isArray(schemaData)
      ? schemaData.length === 0
      : Object.keys(schemaData).length === 0)
  ) {
    return null;
  }

  /**
   * [2] Sanitization Strategy:
   * จัดการกับอักขระพิเศษเพื่อความปลอดภัยสูงสุด (Prevent XSS)
   * และเพื่อให้โครงสร้าง JSON ถูกต้องตามมาตรฐาน Schema.org
   */
  const sanitizeJsonLd = (obj: unknown) => {
    try {
      return JSON.stringify(obj)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026");
    } catch (error) {
      console.error("[JSON_LD_ERROR] Serialization failed:", error);
      return "";
    }
  };

  const jsonLdContent = sanitizeJsonLd(schemaData);

  if (!jsonLdContent) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdContent }}
    />
  );
}
