/** @format */

import { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";
import JsonLd from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schemas";

/**
 * UNLINK-TH | Identity & Architectural Vision
 * -------------------------------------------------------------------------
 * หน้าที่แสดงวิสัยทัศน์และทีมงานเบื้องหลัง (Server Component for SEO)
 */

import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title:
    "Vision & Architecture - ทีมวิศวกรที่ปรึกษากู้ชื่อเสียงดิจิทัล | UNLINK-GLOBAL",
  description:
    "ทำความรู้จักเบื้องหลัง UNLINK-GLOBAL พันธกิจ 'กอบกู้ตัวตน' โดยการขับเคลื่อนของ 9mza และทีมวิศวกรผู้เชี่ยวชาญจาก AemDevWeb Studio",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const founderName = siteConfig.founder.nameTh;

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <AboutContent founderName={founderName} />
    </>
  );
}
