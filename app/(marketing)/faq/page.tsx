/** @format */

import { Metadata } from "next";
import { siteConfig } from "@/constants/site-config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  ShieldCheck,
  Scale,
  Globe,
  Lock,
  MessageCircle,
} from "lucide-react";
import JsonLd from "@/components/shared/JsonLd";
import { getFaqSchema, getBreadcrumbSchema } from "@/lib/seo-schemas";
import { SecureChannel } from "@/components/sections/SecureChannel";
import SectionHeader from "@/components/shared/SectionHeader";

/**
 * UNLINK-TH | Intelligence FAQ Interface (2026)
 * -------------------------------------------------------------------------
 * ศูนย์รวบรวมข้อมูลเชิงเทคนิคและข้อกฎหมายดิจิทัล
 * ออกแบบเพื่อจัดการข้อโต้แย้งและสร้างความมั่นใจในระดับปฏิบัติการ
 */

export const metadata: Metadata = {
  title: "FAQ & Intelligence Center | UNLINK-TH",
  description:
    "รวบรวมคำตอบเกี่ยวกับกระบวนการจัดการข้อมูล (De-indexing), การออกแบบภาพลักษณ์ใหม่ และระเบียบข้อกฎหมาย PDPA",
  alternates: {
    canonical: "/faq",
  },
};

// ข้อมูลคำถามแบ่งตามหมวดหมู่ปฏิบัติการ
const faqCategories = [
  {
    id: "cleanup",
    label: "Cleanup & Removal",
    icon: ShieldCheck,
    questions: [
      {
        q: "กระบวนการ De-indexing คืออะไร และมีความแตกต่างจากการลบข้อมูลปกติอย่างไร?",
        a: "De-indexing คือกระบวนการเชิงเทคนิคเพื่อยื่นคำร้องให้ระบบการค้นหาถอนดัชนี URL ออกจากฐานข้อมูลถาวร ข้อมูลจะไม่ปรากฏในการค้นหาแม้จะใช้คีย์เวิร์ดที่ตรงตัว ต่างจากการลบโพสต์ทั่วไปที่อาจยังมีข้อมูลตกค้างอยู่ในระบบการสืบค้น",
      },
      {
        q: "สามารถดำเนินการถอดถอนกระทู้สาธารณะหรือข่าวสารในอดีตได้จริงหรือไม่?",
        a: "สามารถดำเนินการได้หากข้อมูลนั้นเข้าข่ายละเมิดสิทธิส่วนบุคคล หรือเป็นข้อมูลที่สิ้นสุดผลทางกฎหมายแล้ว เราใช้มาตรการทางเทคนิคร่วมกับข้อกฎหมาย PDPA เพื่อดำเนินการถอดถอนข้อมูลออกอย่างถาวร",
      },
    ],
  },
  {
    id: "architect",
    label: "Reputation Architecting",
    icon: Globe,
    questions: [
      {
        q: "ยุทธศาสตร์การปรับปรุงโครงสร้างตัวตน (SEO Authority) ทำงานอย่างไร?",
        a: "เป็นกระบวนการเชิงรุกโดยการสร้างข้อมูลชุดใหม่ที่มีความน่าเชื่อถือสูง เพื่อเข้ายึดครองพื้นที่การแสดงผลหน้าแรก ส่งผลให้ข้อมูลที่ท่านต้องการนำเสนอโดดเด่นขึ้น และผลักดันข้อมูลเดิมให้พ้นจากความสนใจของระบบการสืบค้นอย่างเป็นระบบ",
      },
      {
        q: "การสร้างตัวตนใหม่บนระบบการค้นหาใช้ระยะเวลาเท่าใด?",
        a: "โดยปกติจะเริ่มเห็นผลการเปลี่ยนแปลงภายใน 4-8 สัปดาห์ เนื่องจากต้องรอให้ระบบประมวลผลทำการเก็บข้อมูลและประเมินค่าความน่าเชื่อถือของเนื้อหาใหม่ที่ถูกจัดวางไว้ในระบบ",
      },
    ],
  },
  {
    id: "legal",
    label: "Security & Confidentiality",
    icon: Scale,
    questions: [
      {
        q: "มาตรการรักษาความลับของลูกค้าถูกจัดการอย่างไร?",
        a: "เรายึดถือมาตรฐานสูงสุด ข้อมูลทุกอย่างจะถูกเข้ารหัสและไม่มีการเปิดเผยข้อมูลการรับบริการต่อสาธารณะในทุกกรณี ทีมปฏิบัติการทุกคนทำงานภายใต้สัญญา NDA ที่เข้มงวด",
      },
      {
        q: "เงื่อนไขโมเดล Success-Based คืออะไร?",
        a: "สำหรับรายการปฏิบัติการบางประเภท เราใช้รูปแบบที่อิงตามผลสำเร็จของงาน โดยท่านจะดำเนินการตามพันธสัญญาเมื่อภารกิจเสร็จสิ้นและข้อมูลเป้าหมายถูกถอดถอนออกจากระบบการค้นหาแล้วเท่านั้น",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((cat) =>
    cat.questions.map((q) => ({
      question: q.q,
      answer: q.a,
    })),
  );

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "FAQ", item: "/faq" },
  ];

  return (
    <div className="pb-20">
      <JsonLd data={getFaqSchema(allFaqs)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      {/* 1. Protocol Header Section */}
      <header className="bg-muted/20 border-border/50 border-b py-24">
        <div className="container">
          <SectionHeader
            badge={
              <>
                <HelpCircle className="h-4 w-4" />
                <span>เราพร้อมคลายทุกข้อสงสัยเพื่อความสบายใจของคุณ</span>
              </>
            }
            title="ศูนย์ดูแล"
            titleHighlight="& ความเข้าใจ"
            description="เราเข้าใจดีว่าปัญหาชื่อเสียงออนไลน์เป็นเรื่องละเอียดอ่อน รวบรวมคำตอบและแนวทางการจัดการข้อมูลเพื่อให้คุณมั่นใจในทุกก้าวของการเริ่มต้นใหม่"
            className="mb-0"
          />
        </div>
      </header>

      {/* 2. Tactical FAQ Grid */}
      <section className="container py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Secure Liaison Side Info */}
          <aside className="lg:col-span-4">
            <div className="lab-card border-border/40 bg-muted/5 sticky top-28 p-8">
              <Lock className="text-primary mb-6 h-8 w-8" />
              <h3 className="mb-4 text-xl font-bold tracking-tight">
                Secure Liaison
              </h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-light">
                ในกรณีที่มีคำถามที่มีความละเอียดอ่อนสูงและไม่สามารถเปิดเผยต่อสาธารณะได้
                กรุณาติดต่อผ่านช่องทางประสานงานส่วนบุคคลเพื่อความปลอดภัยของข้อมูล
              </p>
              <a
                href={siteConfig.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-80"
              >
                <MessageCircle className="h-4 w-4" />
                Private Liaison Center →
              </a>
            </div>
          </aside>

          {/* Categorized Intelligence Content */}
          <main className="space-y-20 lg:col-span-8">
            {faqCategories.map((category) => (
              <div key={category.id} className="space-y-8">
                <div className="border-border/10 flex items-center gap-4 border-b pb-4">
                  <category.icon className="text-primary h-5 w-5" />
                  <h2 className="text-foreground/80 font-mono text-[11px] font-bold tracking-[0.4em] uppercase">
                    {category.label}
                  </h2>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {category.questions.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`${category.id}-${idx}`}
                      className="lab-card border-border/40 bg-muted/5 hover:bg-muted/10 overflow-hidden rounded-2xl px-8 transition-all duration-500"
                    >
                      <AccordionTrigger className="hover:text-primary py-8 text-left text-lg font-bold tracking-tight transition-colors hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-8 text-lg leading-relaxed font-light">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </main>
        </div>
      </section>

      {/* 3. Operational CTA */}
      <SecureChannel />
    </div>
  );
}
