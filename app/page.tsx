/** @format */

import { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  Database,
  Search,
  ShieldCheck,
  TrendingUp,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/constants/site-config";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Methods from "@/components/sections/Methods";
import ProtocolStepper from "@/components/sections/ProtocolStepper";
import LatestCaseStudies from "@/components/sections/LatestCaseStudies";
import LatestInsights from "@/components/sections/LatestInsights";
import { PortfolioSection } from "@/components/sections/Portfolio";
import FaqSection from "@/components/sections/FaqSection";
import CaseTrackerInfo from "@/components/sections/CaseTrackerInfo";
import SectionHeader from "@/components/shared/SectionHeader";

/**
 * UNLINK-GLOBAL | Institutional Authority Landing Page (2026)
 * -------------------------------------------------------------------------
 * Focus: High-Trust, Professional, and Authoritative.
 */

export function generateMetadata(): Metadata {
  return {
    title: "UNLINK | Institutional Reputation & Digital Authority",
    description:
      "Professional reputation management, IP protection, and PDPA enforcement for high-stakes digital assets.",
  };
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* 1. Hero Section: Institutional Authority */}
      <Hero />

      {/* 2. Strategic Compliance Bar */}
      <section className="border-b border-border bg-white py-8 md:py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-70">
            {[
              { label: "Data Encryption", value: "AES-256 SECURE" },
              { label: "Privacy Protocol", value: "PDPA COMPLIANT" },
              { label: "Case Handling", value: "NON-DISCLOSURE" },
              { label: "Operation", value: "24/7 ACTIVE" },
            ].map((signal, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-center md:text-left"
              >
                <div className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-1 md:mt-1.5" />
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[9px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground uppercase">
                    {signal.label}
                  </span>
                  <span className="text-[9px] md:text-[11px] font-black tracking-widest text-primary uppercase">
                    {signal.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Section: Core Solutions */}
      <section id="services" className="py-20 md:py-32 bg-slate-50">
        <div className="container">
          <SectionHeader
            align="center"
            badge={
              <>
                <ShieldCheck className="h-4 w-4" />
                <span>ยุทธศาสตร์การจัดการข้อมูล</span>
              </>
            }
            title="บริการหลักระดับสถาบัน"
            description="โปรโตคอลเฉพาะทางของเราได้รับการออกแบบมาเพื่อจัดการกับความท้าทายทางดิจิทัลที่ซับซ้อนที่สุด ด้วยความแม่นยำ อำนาจทางกฎหมาย และความเป็นเลิศทางเทคนิค"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServicesGrid limit={6} />
          </div>
        </div>
      </section>

      {/* 4. Methods Section: Strategic Execution */}
      <Methods />

      {/* 5. Protocol Stepper: Operational Flow */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="container">
          <SectionHeader
            align="center"
            badge={
              <>
                <TrendingUp className="h-4 w-4" />
                <span>กระบวนการปฏิบัติงาน</span>
              </>
            }
            title="4 ระยะสู่ความสำเร็จ"
            description="เราดำเนินการอย่างเป็นระบบและโปร่งใส เพื่อให้คุณมั่นใจในทุกขั้นตอนของปฏิบัติการกู้คืนและปกป้องชื่อเสียง"
          />
          <ProtocolStepper />
        </div>
      </section>

      {/* 6. Ecosystem Links: Registry & Audit */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
                <Database className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                ทะเบียนข้อมูล UNLINK
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                เข้าถึงฐานข้อมูลระดับสากลของสินทรัพย์ดิจิทัลและบันทึกชื่อเสียงที่ได้รับการตรวจสอบแล้ว
                แหล่งข้อมูลที่เชื่อถือได้สำหรับการยืนยันตัวตนดิจิทัลและความโปร่งใสระดับสถาบัน
              </p>
              <Link
                href="https://registry.unlink-th.com"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                เข้าถึงฐานข้อมูลทะเบียน <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="p-10 bg-slate-50 border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-8">
                <Search className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                การตรวจสอบสิทธิ์ UNLINK
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                การวิเคราะห์ร่องรอยดิจิทัลและการประเมินความเสี่ยงอย่างครอบคลุม
                ระบุช่องโหว่ในชื่อเสียงระดับสถาบันของท่านก่อนที่จะถูกแสวงหาประโยชน์โดยผู้ไม่หวังดี
              </p>
              <Link
                href="https://audit.unlink.global"
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/90 transition-colors"
              >
                เริ่มการตรวจสอบสิทธิ์{" "}
                <ExternalLink aria-hidden="true" className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social Proof: Latest Case Studies */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="container">
          <SectionHeader
            align="center"
            badge={
              <>
                <ShieldCheck className="h-4 w-4" />
                <span>บันทึกปฏิบัติการจริง</span>
              </>
            }
            title="กรณีศึกษาล่าสุด"
            description="ตัวอย่างความสำเร็จในการจัดการวิกฤตชื่อเสียงและการปกป้องสิทธิ์ดิจิทัลสำหรับลูกค้าของเรา"
          />
          <LatestCaseStudies />
        </div>
      </section>

      {/* 8. Insights: Strategic Analysis */}
      <section className="py-24 bg-white">
        <div className="container">
          <SectionHeader
            align="center"
            badge={
              <>
                <FileText className="h-4 w-4" />
                <span>คลังความรู้เชิงยุทธศาสตร์</span>
              </>
            }
            title="บทวิเคราะห์และข้อมูลเชิงลึก"
            description="ทำความเข้าใจกลไกของโลกดิจิทัลและวิธีการปกป้องตัวตนของคุณในยุคข้อมูลข่าวสาร"
          />
          <LatestInsights />
        </div>
      </section>

      {/* 9. Portfolio Section */}
      <PortfolioSection />

      {/* 10. FAQ Section */}
      <FaqSection />

      {/* 11. Case Tracker Section */}
      <section className="py-24 bg-slate-50 border-t border-border">
        <div className="container">
          <CaseTrackerInfo />
        </div>
      </section>

      {/* 12. Trust Section (CTA) */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            พร้อมสำหรับการสถาปนาอำนาจดิจิทัลของท่านแล้วหรือยัง?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-12 text-lg">
            เข้าร่วมกับองค์กรและบุคคลระดับสูงที่ไว้วางใจให้ UNLINK
            ปกป้องสินทรัพย์ดิจิทัลที่มีค่าที่สุดของพวกเขา
          </p>
          <Link
            href={siteConfig.contact.lineUrl}
            className="px-10 py-5 bg-secondary text-secondary-foreground rounded-md font-bold text-lg hover:bg-secondary/90 transition-all inline-block"
          >
            ติดต่อหน่วยปฏิบัติการเชิงกลยุทธ์
          </Link>
        </div>
      </section>
    </div>
  );
}
