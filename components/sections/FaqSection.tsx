"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ShieldCheck, Zap, Lock } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/animated-section";

/**
 * UNLINK-TH | Intelligence FAQ Protocol (2026)
 * -------------------------------------------------------------------------
 * ภาคส่วนจัดการข้อโต้แย้งเชิงเทคนิคและกฎหมาย
 * เน้นการสร้างความโปร่งใสในกระบวนการจัดการข้อมูลและการออกแบบตัวตนใหม่
 */

const faqs = [
  {
    question: "การลบข้อมูลหรือประวัติเสียออนไลน์ถือว่าผิดกฎหมายหรือไม่?",
    answer:
      "ไม่ผิดกฎหมายครับ การดำเนินการทั้งหมดอยู่ภายใต้สิทธิ 'Right to be Forgotten' ตามกฎหมาย PDPA และ GDPR สากล เราทำหน้าที่เป็นที่ปรึกษาเชิงยุทธศาสตร์เพื่อใช้สิทธิตามกฎหมายในการระงับข้อมูลที่บิดเบือน ล้าสมัย หรือละเมิดสิทธิส่วนบุคคล เพื่อทวงคืนความถูกต้องให้กับคุณอย่างเป็นระบบครับ",
    icon: ShieldCheck,
  },
  {
    question:
      "เมื่อลบข้อมูลไปแล้ว มีโอกาสที่ข้อมูลเดิมจะกลับมาปรากฏซ้ำอีกหรือไม่?",
    answer:
      "กระบวนการ Data Scrubbing ของเราทำในระดับ Cache Layer ของระบบสืบค้นสากล ซึ่งส่งผลให้ข้อมูลถูกถอดถอนอย่างถาวรครับ อย่างไรก็ตาม เพื่อความปลอดภัยสูงสุด เราจะมีการติดตั้ง 'Reputation Shield' เพื่อเฝ้าระวังและป้องกันการถูกโจมตีซ้ำในอนาคต (Identity Hardening) ให้อัตโนมัติครับ",
    icon: Zap,
  },
  {
    question: "ระยะเวลาในการปฏิบัติการจนเห็นผลลัพธ์ที่ชัดเจนใช้เวลานานเท่าใด?",
    answer:
      "โดยปกติระบบจะเริ่มตอบสนองภายใน 48-72 ชั่วโมง และเห็นผลลัพธ์สมบูรณ์ภายใน 7-14 วันทำการครับ ทั้งนี้ขึ้นอยู่กับความซับซ้อนของโครงสร้างข้อมูลในแต่ละเคส ซึ่งทีมวิเคราะห์ของเราจะแจ้งกรอบเวลาที่แน่นอน (Execution Timeline) ให้คุณทราบก่อนเริ่มปฏิบัติการเสมอครับ",
    icon: HelpCircle,
  },
  {
    question:
      "มาตรฐานการรักษาความลับและการจัดการข้อมูลส่วนบุคคลมีความปลอดภัยเพียงใด?",
    answer:
      "เราใช้มาตรฐานความลับ 'The Vault' ซึ่งเป็นโปรโตคอลความปลอดภัยระดับสูง ข้อมูลเคสทั้งหมดจะถูกเข้ารหัสและทำลายทิ้งทันทีเมื่อภารกิจเสร็จสิ้น (Data Shredding) พร้อมการทำสัญญา NDA เพื่อรับประกันว่าข้อมูลของคุณจะไม่มีวันรั่วไหลสู่สาธารณะ 100% ครับ",
    icon: Lock,
  },
];

export default function FaqSection() {
  return (
    <section className="container py-24" id="faq-protocol">
      <div className="grid gap-20 lg:grid-cols-12">
        {/* Header Column: Strategic Context */}
        <div className="lg:col-span-5">
          <SectionHeader
            badge={
              <>
                <HelpCircle className="h-3.5 w-3.5" />
                <span>ศูนย์ช่วยเหลือและตอบข้อสงสัย</span>
              </>
            }
            title={
              <>
                คำถาม <br />
              </>
            }
            titleHighlight="ที่พบบ่อย"
            description="เรารวบรวมข้อสงสัยที่คุณอาจกังวลใจ เพื่อความโปร่งใสและมั่นใจในบริการของเรา"
            className="mb-8"
          />

          <div className="border-border border-t pt-8">
            <div className="text-primary/40 flex items-center gap-4 font-mono text-[9px] tracking-widest uppercase">
              <span className="bg-primary/20 h-px w-8"></span>
              Verified Response v4.0.1
            </div>
          </div>
        </div>

        {/* Content Column: The Accordion Interface */}
        <AnimatedSection delay={0.2} className="lg:col-span-7">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="lab-card border-border bg-muted/20 hover:bg-muted/30 overflow-hidden rounded-[2rem] border px-10 transition-all duration-500"
              >
                <AccordionTrigger className="hover:text-primary group py-10 text-left text-xl font-bold tracking-tight transition-all hover:no-underline">
                  <div className="flex items-center gap-6">
                    <span className="text-primary/20 group-hover:text-primary font-mono text-xs transition-colors duration-500">
                      /{(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="leading-tight">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground border-border border-t pt-6 pb-10 pl-14 text-lg leading-relaxed font-light">
                  <div className="max-w-2xl">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
