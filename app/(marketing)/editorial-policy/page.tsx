/** @format */

import { Metadata } from "next";
import {
  BookOpen,
  Scale,
  FileText,
  CheckCircle,
  Info,
  ShieldAlert,
  Fingerprint,
} from "lucide-react";
import { SecureChannel } from "@/components/sections/SecureChannel";
import { siteConfig } from "@/constants/site-config";
import SectionHeader from "@/components/shared/SectionHeader";

/**
 * UNLINK-GLOBAL | Editorial Policy & Data Ethics Framework (2026)
 * -------------------------------------------------------------------------
 * มาตรฐานการคัดกรองเนื้อหาและจริยธรรมในการจัดการชื่อเสียงออนไลน์
 * Infrastructure Managed by: AemDevWeb Studio - Technical Data Architecture Team
 */

export const metadata: Metadata = {
  title: `Editorial Policy & Ethics | ${siteConfig.name}`,
  description:
    "มาตรฐานการคัดกรองเนื้อหาและจริยธรรมในการจัดการชื่อเสียงออนไลน์ภายใต้หลักสิทธิส่วนบุคคลและความชอบธรรมทางกฎหมายของ UNLINK-GLOBAL",
};

export default function EditorialPolicyPage() {
  const lastUpdated = "30 มกราคม 2026";

  const founderRole = "Chief Technology & Data Architect";

  const principles = [
    {
      title: "Verifiable Accuracy",
      description:
        "เนื้อหาที่จัดการต้องอ้างอิงจากข้อเท็จจริงเชิงเทคนิคและหลักฐานทางกฎหมายที่ตรวจสอบได้ เพื่อความยั่งยืนของข้อมูลในระบบสืบค้นสากล",
      icon: CheckCircle,
    },
    {
      title: "Legal & Human Rights",
      description:
        "ดำเนินการภายใต้กรอบกฎหมาย PDPA และเคารพสิทธิสากลในการถูกลืม (Right to be Forgotten) โดยไม่ขัดต่อประโยชน์สาธารณะ",
      icon: Scale,
    },
    {
      title: "Neutrality & Objectivity",
      description:
        "เราใช้ดุลยพินิจที่เป็นอิสระในการประเมินกรณีปฏิบัติการ เพื่อรักษาสมดุลระหว่างความเป็นส่วนตัวและสิทธิในการรับรู้ของสังคม",
      icon: Info,
    },
  ];

  return (
    <div className="pb-24">
      {/* 1. Protocol Header Section */}
      <header className="bg-muted/10 border-border/50 relative overflow-hidden border-b py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent)]" />
        <div className="relative z-10 container">
          <SectionHeader
            badge={
              <>
                <BookOpen className="h-4 w-4" />
                <span>Standards & Compliance 2026</span>
              </>
            }
            title="Editorial"
            titleHighlight="& Ethics"
            description={`พันธกิจของ **${siteConfig.name}** คือการสร้างระบบนิเวศข้อมูลที่สะอาดและถูกต้อง ภายใต้การกำกับดูแลโดยผู้เชี่ยวชาญด้านสถาปัตยกรรมข้อมูลทางเทคนิค`}
            className="mb-8"
          />
          <div className="flex items-center gap-4 pt-4">
            <span className="text-muted-foreground/40 border-border/10 rounded border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
              Policy ID: UTH-ETH-2026
            </span>
            <span className="text-muted-foreground/40 font-mono text-[10px] tracking-widest uppercase">
              Last Updated: {lastUpdated}
            </span>
          </div>
        </div>
      </header>

      {/* 2. Operational Principles Grid */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="lab-card group border-border/40 bg-muted/5 hover:bg-muted/10 p-10 transition-all duration-500"
            >
              <div className="bg-primary/5 group-hover:bg-primary/10 mb-8 w-fit rounded-2xl p-3 transition-colors">
                <p.icon className="text-primary/70 h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-bold tracking-tight">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5 Content Quality Standards (Google AdSense Alignment) */}
      {/* ... (Existing 2.5 section) ... */}

      {/* 2.6 Public Interest & Fraud Disclosure Protocol (The Exposure Shield) */}
      <section className="container pb-24">
        <div className="border-red-500/10 bg-red-500/[0.01] rounded-[3rem] border p-12 lg:p-20">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tighter uppercase">
              Public Interest & <br />
              <span className="text-red-500">Fraud Disclosure</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed font-light">
              มาตรฐานการนำเสนอข้อมูลเพื่อผลประโยชน์สาธารณะและการเตือนภัยสังคม
              (ตีแผ่พฤติการณ์มิจฉาชีพ)
              ภายใต้เกณฑ์ความปลอดภัยสูงสุดต่อระบบนิเวศข้อมูลสากล
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-bold text-red-500/80">
                <CheckCircle className="h-4 w-4" />
                Evidence-Based Only
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed font-light">
                ทุกการตีแผ่ต้องมีหลักฐานเชิงประจักษ์และตรวจสอบย้อนกลับได้
                เรานำเสนอเฉพาะพฤติการณ์ (Modus Operandi) และข้อเท็จจริง
                เพื่อหลีกเลี่ยงการกล่าวอ้างที่ลอยนวลหรือไม่มีมูลฐาน
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-bold text-red-500/80">
                <ShieldAlert className="h-4 w-4" />
                AdSense Safety Alignment
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed font-light">
                ใช้ภาษาที่เป็นกลางเชิงวิชาการ (Educational Tone)
                หลีกเลี่ยงคำด่าทอหรือภาษาที่รุนแรง
                เพื่อให้เนื้อหาสามารถสร้างรายได้ผ่านระบบ AdSense ได้อย่างยั่งยืน
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-bold text-red-500/80">
                <Fingerprint className="h-4 w-4" />
                Responsible Disclosure
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed font-light">
                การระบุตัวตนมิจฉาชีพจะทำภายใต้ขอบเขตที่กฎหมายอนุญาต
                โดยเน้นการปกป้องเหยื่อและป้องกันความเสียหายที่จะเกิดขึ้นในอนาคต
                ตามสิทธิในการรับรู้ของสาธารณชน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Policy Framework */}
      <section className="container pb-32">
        <div className="prose prose-invert prose-h2:text-3xl prose-h2:tracking-tighter prose-h3:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground mx-auto max-w-4xl">
          <h2 className="border-border/10 border-b pb-4 tracking-tighter uppercase">
            Content Management Protocol
          </h2>
          <p className="text-lg">
            เรายึดถือว่าข้อมูลดิจิทัลคือโครงสร้างพื้นฐานของความเชื่อมั่น **
            {siteConfig.name}** จึงกำหนดแนวทางปฏิบัติภายใต้การบริหารของ **
            {founderRole}**
            เพื่อให้การจัดการเนื้อหาเป็นไปอย่างมีประสิทธิภาพและชอบธรรมสูงสุด
          </p>

          <div className="mt-16 grid gap-12">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <ShieldAlert className="h-5 w-5" />
                1. การคัดกรองกรณีปฏิบัติการ (Case Evaluation)
              </h3>
              <p>
                เราทำหน้าที่เป็นหน่วยคัดกรองจริยธรรม
                ทุกคำร้องจะต้องผ่านการตรวจสอบแรงจูงใจและข้อเท็จจริงเบื้องต้น
                เพื่อให้มั่นใจว่าการปฏิบัติการนั้นเป็นไปเพื่อปกป้องสิทธิส่วนบุคคลจากการถูกคุกคามหรือข้อมูลที่บิดเบือน
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <Fingerprint className="h-5 w-5" />
                2. อนามัยข้อมูลและความเป็นส่วนตัว (Data Privacy & Anonymity)
              </h3>
              <p>
                ในฐานะผู้เชี่ยวชาญด้านสถาปัตยกรรมอัตลักษณ์
                เราให้ความสำคัญสูงสุดกับการรักษาความลับและความเป็นส่วนตัวของทั้งลูกค้าและทีมงานวิศวกร
                โดยใช้หลักปฏิบัติแบบ Role-based Identity
                เพื่อให้การดำเนินงานทางเทคนิคเป็นอิสระและปลอดภัยสูงสุด
              </p>
            </div>
          </div>

          {/* Internal Governance Banner */}
          <div className="bg-primary/5 border-primary/10 shadow-primary/5 my-16 flex items-start gap-6 rounded-[2rem] border p-10 shadow-2xl">
            <FileText className="text-primary mt-1 h-7 w-7 shrink-0" />
            <div className="space-y-3">
              <h4 className="text-foreground text-lg font-bold">
                Transparency & AI Governance
              </h4>
              <p className="text-muted-foreground m-0 text-sm leading-relaxed font-light">
                เรามีนโยบายควบคุมการใช้ปัญญาประดิษฐ์ (AI) อย่างเคร่งครัด
                โดยจะไม่ใช้เครื่องมืออัตโนมัติในการตัดสินใจด้านจริยธรรม
                ทุกกระบวนการคัดกรองจะถูกตรวจสอบโดยผู้เชี่ยวชาญเสมอ
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <SecureChannel />
      </div>
    </div>
  );
}
