/** @format */

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
  /**
   * หากเป็น true จะรวม Schema พื้นฐาน (Organization, Person, WebSite) เข้าไปด้วย
   * @default true
   */
  includeBase?: boolean;
}

/**
 * UNLINK-TH | Advanced SEO Architecture: Structured Data Injection
 * -------------------------------------------------------------------------
 * หน้าที่: แทรก JSON-LD เพื่อช่วยให้ Search Engine (Google) เข้าใจบริบทเชิงลึก
 * รองรับการแสดงผล Rich Snippets เช่น Organization, Person (Expert), และ WebSite
 * ออกแบบมาเพื่อรองรับ E-E-A-T และ AOE/ZHEMAR (AI Search Optimization)
 */
export default function JsonLd({ data, includeBase = true }: JsonLdProps) {
  const baseSchemas = includeBase
    ? [
        getWebSiteSchema(),
        getOrganizationSchema(),
        getPersonSchema(),
        getLocalBusinessSchema(),
      ]
    : [];

  let schemaData: WithContext<Thing>[] = [];

  if (data) {
    if (Array.isArray(data)) {
      schemaData = [...baseSchemas, ...data];
    } else {
      schemaData = [...baseSchemas, data];
    }
  } else {
    schemaData = baseSchemas;
  }

  if (schemaData.length === 0) {
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
