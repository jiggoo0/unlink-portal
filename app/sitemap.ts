/** @format */

import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";
import { getAllServices, getAllCaseStudies, getAllBlogPosts } from "@/lib/mdx";

/**
 * UNLINK-TH | Dynamic Sitemap Generation (2026 Strategy)
 * -------------------------------------------------------------------------
 * ภารกิจ: สร้างแผนผังเว็บไซต์ที่มีคุณภาพสูง (High-Signal Sitemap)
 * เพื่อบอก Google ว่าเว็บไซต์เรามีความน่าเชื่อถือ (Trust) และมีหลักฐานเชิงประจักษ์ (Evidence)
 * รองรับมาตรฐาน Next.js App Router (Static Site Generation)
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // 1. ดึงข้อมูลจากเนื้อหา MDX ทั้งหมด
  const [servicesData, caseStudiesData, blogPostsData] = await Promise.all([
    getAllServices(),
    getAllCaseStudies(),
    getAllBlogPosts(),
  ]);

  // 1.1 จัดเตรียม URL สำหรับ Services (Core Offerings)
  const serviceEntries: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(), // บริการมักจะมีการปรับปรุงอยู่เสมอ
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 1.2 จัดเตรียม URL สำหรับ Case Studies (Social Proof / Evidence)
  const caseEntries: MetadataRoute.Sitemap = caseStudiesData.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: new Date(item.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 1.3 จัดเตรียม URL สำหรับ Blog Posts (Top-of-Funnel / Education)
  const blogEntries: MetadataRoute.Sitemap = blogPostsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 2. หน้าหลักและโครงสร้างความน่าเชื่อถือ (Static Identity Pages)
  const staticRoutes = [
    { path: "/", priority: 1.0, changeFreq: "daily" as const }, // หน้าแรกสำคัญที่สุด
    { path: "/about", priority: 0.8, changeFreq: "weekly" as const }, // ข้อมูลผู้ก่อตั้งและวิสัยทัศน์
    { path: "/services", priority: 0.8, changeFreq: "daily" as const }, // หน้ารวมโปรโตคอล
    { path: "/case-studies", priority: 0.8, changeFreq: "daily" as const }, // หน้ารวมผลลัพธ์
    { path: "/blog", priority: 0.7, changeFreq: "daily" as const }, // หน้ารวมบทความ
    { path: "/faq", priority: 0.7, changeFreq: "weekly" as const }, // คำถามที่พบบ่อย (Rich Result Signal)
    { path: "/contact", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/privacy", priority: 0.5, changeFreq: "monthly" as const },
    {
      path: "/editorial-policy",
      priority: 0.6,
      changeFreq: "monthly" as const,
    },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));

  // 3. รวมทุกเส้นทางเข้าด้วยกันและส่งออกเป็น Sitemap XML
  return [...staticEntries, ...serviceEntries, ...caseEntries, ...blogEntries];
}
