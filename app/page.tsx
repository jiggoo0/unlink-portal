/** @format */

import { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/constants/site-config";
import Link from "next/link";
import { Database, BookOpen } from "lucide-react";

// 📦 Core Sections
import Hero from "@/components/sections/Hero";
import CaseTrackerInfo from "@/components/sections/CaseTrackerInfo";
import { PortfolioSection } from "@/components/sections/Portfolio";
import { SecureChannel } from "@/components/sections/SecureChannel";
import ProtocolStepper from "@/components/sections/ProtocolStepper";
import Methods from "@/components/sections/Methods";
import FaqSection from "@/components/sections/FaqSection";
import SectionHeader from "@/components/shared/SectionHeader";

// 📦 Dynamic Content Sections
import ServicesGrid from "@/components/sections/ServicesGrid";
import LatestCaseStudies from "@/components/sections/LatestCaseStudies";
import LatestInsights from "@/components/sections/LatestInsights";

/**
 * UNLINK-GLOBAL | High-Signal Home (2026 Strategy)
 * -------------------------------------------------------------------------
 * หน้าแรกที่เน้นการส่งสัญญาณความน่าเชื่อถือ (E-E-A-T)
 * ผ่านโครงสร้างแบบ Modular ที่ดึงข้อมูลจาก MDX แบบ SSG
 */

export function generateMetadata(): Metadata {
  const seo = siteConfig.seo;
  return {
    title: seo.defaultTitle || "UNLINK-GLOBAL",
    description: seo.defaultDescription,
    keywords: seo.keywords,
  };
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 overflow-x-hidden pb-20 md:gap-16">
      {/* 1. Hero Section: First Impression & Primary CTA */}
      <Hero />

      {/* 1.5 Strategic Compliance Bar: High-Trust Signals (E-E-A-T) */}
      <section className="border-y border-border bg-secondary/30 py-6 backdrop-blur-xl">
        <div className="container">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            {[
              { label: "Data Encryption", value: "AES-256 SECURE" },
              { label: "Privacy Protocol", value: "PDPA COMPLIANT" },
              { label: "Case Handling", value: "NON-DISCLOSURE" },
              { label: "Operation", value: "24/7 ACTIVE" },
            ].map((signal, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                <div className="flex flex-col">
                  <span className="text-[8px] font-mono tracking-[0.3em] text-muted-foreground uppercase">
                    {signal.label}
                  </span>
                  <span className="text-[10px] font-black tracking-widest text-foreground uppercase">
                    {signal.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Protocol Matrix: Operational Workflow */}
      <section className="container scroll-mt-24" id="protocol">
        <SectionHeader
          align="center"
          title="จัดการประวัติ"
          titleHighlight="ให้เริ่มต้นใหม่ได้จริง"
          description="จาก 'เรื่องยาก' ให้กลายเป็น 'เรื่องง่าย' ด้วยกระบวนการที่รัดกุม ปิดความลับมิดชิด ปลอดภัย และจ่ายจริงตามเนื้องาน"
        />
        <div className="mx-auto mb-20 max-w-5xl">
          <CaseTrackerInfo />
        </div>
        <ProtocolStepper />
      </section>

      {/* 3. Solutions Matrix: Core Services Discovery */}
      <section className="container">
        <div className="bg-muted/5 border-border/40 shadow-primary/5 relative rounded-[3.5rem] border p-10 shadow-2xl md:p-20">
          <div className="space-y-16">
            <SectionHeader
              align="center"
              badge={
                <>
                  <Database className="h-4 w-4" />
                  <span>Strategic Solutions 2026</span>
                </>
              }
              title="โซลูชันกู้คืน"
              titleHighlight="โอกาสและชื่อเสียง"
              description="รวบรวมโปรโตคอลการจัดการข้อมูลเชิงลึกที่ดึงข้อมูลจากเคสปฏิบัติการจริง เพื่อให้คุณกลับมาโดดเด่นในระบบนิเวศดิจิทัลอีกครั้ง"
              className="max-w-4xl mx-auto"
            />

            <Suspense
              fallback={
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-[480px] bg-muted/20 border border-border rounded-[2.5rem] animate-pulse"
                    />
                  ))}
                </div>
              }
            >
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServicesGrid limit={6} />
              </div>
            </Suspense>
          </div>
        </div>
      </section>

      {/* 4. Proven Methodology & Evidence */}
      <Methods />
      <PortfolioSection />

      {/* 5. Success Records: Operational Transparency */}
      <section className="container">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 border-b border-border pb-8">
          <SectionHeader
            title="Proven"
            titleHighlight="Success"
            description="บันทึกปฏิบัติการจริงที่กู้คืนชื่อเสียงและโอกาสให้กับลูกค้าระดับ VIP"
            className="mb-0"
          />
          <div className="text-primary/40 font-mono text-[10px] tracking-[0.2em] uppercase text-right hidden md:block">
            Operational Records <br />
            <span className="text-[8px]">{siteConfig.name} Unit</span>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-[480px] bg-muted/20 border border-border rounded-2xl animate-pulse"
                />
              ))}
            </div>
          }
        >
          <LatestCaseStudies />
        </Suspense>
      </section>

      {/* 6. Intelligence Hub: Strategic Insights */}
      <section className="container">
        <div className="flex items-center justify-between border-b border-border pb-8 mb-16">
          <SectionHeader
            badge={
              <>
                <BookOpen className="h-4 w-4" />
                <span>Knowledge & Authority</span>
              </>
            }
            title="Strategic"
            titleHighlight="Insights"
            description="เจาะลึกยุทธศาสตร์การจัดการข้อมูลและภาพลักษณ์ระดับมืออาชีพ"
            className="mb-0"
          />
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-primary font-mono text-[10px] tracking-[0.3em] uppercase transition-colors"
          >
            View All Archives
          </Link>
        </div>

        <Suspense
          fallback={
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-[420px] bg-muted/20 border border-border rounded-3xl animate-pulse"
                />
              ))}
            </div>
          }
        >
          <LatestInsights />
        </Suspense>
      </section>

      {/* 7. Final Trust & FAQ Section */}
      <div className="space-y-24">
        <FaqSection />
        <SecureChannel />
      </div>
    </div>
  );
}
