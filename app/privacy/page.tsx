/** @format */

import { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Trash2,
  ShieldAlert,
  Server,
  FileKey,
  ChevronRight,
  Globe,
  Scale,
} from "lucide-react";
import { SecureChannel } from "@/components/sections/SecureChannel";
import { siteConfig } from "@/constants/site-config";
import SectionHeader from "@/components/shared/SectionHeader";

/**
 * UNLINK-TH | Master Privacy Policy (Unified PDPA/GDPR)
 * -------------------------------------------------------------------------
 * มาตรฐานการคุ้มครองข้อมูลภายใต้หลักการ Zero-Knowledge Security
 * ออกแบบเพื่อรองรับมาตรฐาน PDPA (Thailand) และ GDPR (EU/International)
 * Managed by: อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) - Technical Data Architect
 */

export const metadata: Metadata = {
  title: `Master Privacy Policy | ${siteConfig.name}`,
  description:
    "นโยบายการรักษาความลับและมาตรฐานการจัดการข้อมูลส่วนบุคคลภายใต้กฎหมาย PDPA และ GDPR ของ UNLINK-TH เพื่อความปลอดภัยสูงสุดของลูกค้าระดับ VIP",
};

export default function PrivacyPage() {
  const lastUpdated = "29 มีนาคม 2026";

  const protocols = [
    {
      title: "Non-Disclosure Policy",
      description:
        "ข้อมูลทุกอย่างที่ระบุในระหว่างการปรึกษา จะถูกเก็บเป็นความลับสูงสุดภายใต้สัญญา NDA (Non-Disclosure Agreement) ทันที ไม่มีการเปิดเผยตัวตนในทุกกรณี",
      icon: EyeOff,
    },
    {
      title: "Data Destruction Protocol",
      description:
        "นโยบายทำลายข้อมูล (Secure Shredding) ทันทีหลังจบโปรเจกต์ หรือเมื่อการประเมินงานสิ้นสุดลง เพื่อป้องกันการตกค้างของข้อมูลในระบบนิเวศดิจิทัล",
      icon: Trash2,
    },
    {
      title: "Encrypted Communication",
      description:
        "การรับส่งข้อมูลและเอกสารทั้งหมดดำเนินการผ่านช่องทางที่มีการเข้ารหัส (End-to-End Encryption) มาตรฐานระดับเดียวกับสถาบันการเงิน",
      icon: Lock,
    },
  ];

  return (
    <div className="pb-24">
      {/* 1. Technical Header Section */}
      <header className="bg-muted/10 border-border/50 relative overflow-hidden border-b py-32">
        <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full blur-[120px]" />
        <div className="relative z-10 container">
          <SectionHeader
            badge={
              <>
                <ShieldCheck className="h-4 w-4" />
                <span>ความสบายใจของคุณคือภารกิจสำคัญที่สุดของเรา</span>
              </>
            }
            title="Master Privacy"
            titleHighlight="& Protection"
            description="เพราะชื่อเสียงและการเริ่มต้นใหม่ของคุณเริ่มต้นที่ความลับของเรา เราจึงวางระบบจัดการข้อมูลที่เข้มงวดที่สุดเพื่อปกป้องสิทธิส่วนบุคคลตามมาตรฐาน PDPA และ GDPR"
            className="mb-8"
          />
          <div className="flex items-center gap-4 pt-4">
            <span className="text-muted-foreground/40 border-border/10 rounded border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
              Document ID: UTH-MPRV-2026
            </span>
            <span className="text-muted-foreground/40 font-mono text-[10px] tracking-widest uppercase">
              Last Updated: {lastUpdated}
            </span>
          </div>
        </div>
      </header>

      {/* 2. Privacy Pillars Grid */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {protocols.map((p, idx) => (
            <div
              key={idx}
              className="authority-card group p-10 transition-all duration-500"
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

      {/* 3. Formal Regulatory Content */}
      <section className="container pb-32">
        <div className="prose prose-slate prose-h2:text-3xl prose-h2:tracking-tighter prose-h3:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground mx-auto max-w-4xl">
          <h2 className="border-border/10 border-b pb-4 tracking-tighter uppercase">
            Unified Data Protection Standard (PDPA & GDPR)
          </h2>
          <p className="text-lg">
            {siteConfig.name} ในฐานะผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)
            ยึดถือจริยธรรมดิจิทัลในการจัดการข้อมูลสูงสุด
            นโยบายฉบับนี้คือพันธสัญญาในการคุ้มครองสิทธิความเป็นส่วนตัวของท่านตามมาตรฐานสากล
          </p>

          <div className="mt-16 grid gap-12">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <Globe className="h-5 w-5" />
                1. มาตรฐานการคุ้มครองข้อมูลสากล
              </h3>
              <p>
                เราปฏิบัติตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) ของประเทศไทย
                และยึดถือหลักการ General Data Protection Regulation (GDPR) ของสหภาพยุโรป
                เพื่อให้มั่นใจว่าข้อมูลของท่านจะได้รับการดูแลด้วยมาตรฐานสูงสุดไม่ว่าท่านจะอยู่ที่ใดในโลก
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <Server className="h-5 w-5" />
                2. ขอบเขตการจัดเก็บข้อมูล (Data Minimization)
              </h3>
              <p>
                เรายึดถือหลักการจัดเก็บข้อมูลเท่าที่จำเป็น (Minimalism)
                เพื่อใช้ในการดำเนินงานด้านเทคนิคเท่านั้น:
              </p>
              <ul className="border-primary/20 list-none space-y-3 border-l pl-6">
                <li className="flex items-start gap-2 text-sm italic">
                  <ChevronRight className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  ข้อมูลระบุตัวตนที่จำเป็นสำหรับการทำสัญญา NDA
                </li>
                <li className="flex items-start gap-2 text-sm italic">
                  <ChevronRight className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  Digital Footprint (URL หรือลิงก์ที่ต้องการให้จัดการจัดการ)
                </li>
                <li className="flex items-start gap-2 text-sm italic">
                  <ChevronRight className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  หลักฐานแสดงสิทธิ (เพื่อใช้ยื่นต่อผู้ให้บริการ Search Engine
                  หรือ Platform เท่านั้น)
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <FileKey className="h-5 w-5" />
                3. วัตถุประสงค์และการประมวลผล
              </h3>
              <p>
                ข้อมูลของท่านจะถูกประมวลผลภายใต้วัตถุประสงค์เดียวคือ{" "}
                <strong>การจัดการและปกป้องชื่อเสียงออนไลน์</strong>
                โดย {siteConfig.name} จะไม่มีการนำข้อมูลไปใช้ในเชิงพาณิชย์
                หรือเปิดเผยต่อบุคคลที่สามโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร
              </p>
            </div>
          </div>

          {/* Internal Audit Banner */}
          <div className="bg-primary/5 border-primary/10 shadow-primary/5 my-16 flex items-start gap-6 rounded-[2rem] border p-10 shadow-2xl">
            <ShieldAlert className="text-primary mt-1 h-7 w-7 shrink-0" />
            <div className="space-y-3">
              <h4 className="text-foreground text-lg font-bold">
                Zero-Knowledge Infrastructure
              </h4>
              <p className="text-muted-foreground m-0 text-sm leading-relaxed font-light">
                เราใช้ระบบจัดการโครงการที่บันทึกประวัติการเข้าถึง (Access Log)
                อย่างเข้มงวด ข้อมูลจะถูกเข้ารหัสระดับ AES-256
                และจะถูกถอนการติดตั้ง (Secure Purge)
                ออกจากระบบปฏิบัติการของเราทันทีที่ภารกิจลุล่วง
              </p>
            </div>
          </div>

          <div className="border-border/10 space-y-6 border-t pt-10">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight">
              <Scale className="h-5 w-5" />
              4. สิทธิเหนือข้อมูลส่วนบุคคล (Your Rights)
            </h3>
            <p>
              ตามกฎหมาย PDPA และ GDPR ท่านมีสิทธิดังต่อไปนี้:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
              <li className="bg-muted/5 border border-border/20 p-4 rounded-lg text-sm">
                <strong>Right to Access:</strong> สิทธิในการขอเข้าถึงและรับสำเนาข้อมูล
              </li>
              <li className="bg-muted/5 border border-border/20 p-4 rounded-lg text-sm">
                <strong>Right to Rectification:</strong> สิทธิในการขอแก้ไขข้อมูลให้ถูกต้อง
              </li>
              <li className="bg-muted/5 border border-border/20 p-4 rounded-lg text-sm">
                <strong>Right to Erasure:</strong> สิทธิในการขอให้ลบหรือทำลายข้อมูล (Right to be Forgotten)
              </li>
              <li className="bg-muted/5 border border-border/20 p-4 rounded-lg text-sm">
                <strong>Right to Restriction:</strong> สิทธิในการขอให้ระงับการใช้ข้อมูล
              </li>
            </ul>

            <h3 className="text-xl font-bold tracking-tight">
              5. การติดต่อประสานงานด้านความปลอดภัย
            </h3>
            <p>
              หากท่านมีข้อสงสัยเกี่ยวกับมาตรการความเป็นส่วนตัว
              หรือต้องการใช้สิทธิเหนือข้อมูล
              กรุณาติดต่อเจ้าหน้าที่ดูแลความปลอดภัยข้อมูล (DPO) โดยตรง:
            </p>
            <div className="bg-muted/10 border-border/50 inline-block rounded-xl border px-6 py-4">
              <strong className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
                {siteConfig.contact.email.replace("contact", "security")}
              </strong>
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
