/** @format */

import { Metadata } from "next";
import { 
  ShieldCheck, 
  HelpCircle, 
  MessageSquare, 
  Lock, 
  Activity, 
  Database,
  ArrowRight
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย (FAQ) | UNLINK-GLOBAL",
  description: "รวบรวมคำถามและคำตอบที่พบบ่อยเกี่ยวกับระบบรักษาความปลอดภัย การตรวจสอบตัวตน และการบริหารจัดการชื่อเสียงระดับสากล",
};

const faqs = [
  {
    category: "ความปลอดภัยและตัวตน",
    items: [
      {
        question: "UNLINK-GLOBAL คืออะไร?",
        answer: "หน่วยงานกลางในการกำกับดูแลและรับรองข้อมูลตัวตนดิจิทัล (Accreditation Authority) ที่เน้นการสร้างความเชื่อมั่นระดับสถาบันด้วยวิศวกรรมข้อมูลขั้นสูง"
      },
      {
        question: "ข้อมูลของฉันจะถูกเก็บไว้อย่างปลอดภัยหรือไม่?",
        answer: "เราใช้ระบบฐานข้อมูลที่มีการเข้ารหัสแบบ AES-256 และโครงสร้างแบบ Decentralized ผ่าน Node ต่างๆ ใน Ecosystem ทำให้มั่นใจได้ว่าข้อมูลจะถูกเก็บรักษาอย่างเป็นความลับสูงสุด"
      }
    ]
  },
  {
    category: "ระบบ Audit และการรับรอง",
    items: [
      {
        question: "การทำ Security Audit ช่วยอะไรได้บ้าง?",
        answer: "ช่วยระบุช่องโหว่และจุดเสี่ยงในระบบดิจิทัลของคุณ พร้อมออกใบรับรองความน่าเชื่อถือที่สามารถตรวจสอบได้ผ่านระบบ Registry ของเรา"
      },
      {
        question: "ฉันจะตรวจสอบความถูกต้องของใบรับรองได้อย่างไร?",
        answer: "คุณสามารถนำ ID ของใบรับรองไปค้นหาได้ที่หน้า Registry (registry.unlink-th.com) เพื่อยืนยันสถานะแบบ Real-time"
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* 🔮 Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto max-w-4xl">
        {/* --- 💎 HEADER --- */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary">Support Center</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter italic uppercase text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            ค้นหาคำตอบที่คุณต้องการเกี่ยวกับระบบบริหารจัดการความปลอดภัยและชื่อเสียงดิจิทัลระดับสากล
          </p>
        </div>

        {/* --- 📜 FAQ CONTENT --- */}
        <div className="space-y-12">
          {faqs.map((group, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-[11px] font-black tracking-[0.4em] text-primary uppercase italic border-l-4 border-primary pl-6">
                {group.category}
              </h2>
              
              <div className="bg-secondary/20 border border-border/40 rounded-[2rem] overflow-hidden backdrop-blur-sm">
                <Accordion type="single" collapsible className="w-full">
                  {group.items.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${idx}-${i}`} className="border-b border-border/40 last:border-0 px-8">
                      <AccordionTrigger className="py-6 hover:no-underline text-left group">
                        <span className="text-[15px] font-bold text-foreground/80 group-hover:text-primary transition-colors pr-4 leading-relaxed">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-8 text-muted-foreground leading-relaxed text-[14px] font-medium">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>

        {/* --- 📞 CONTACT CALL-TO-ACTION --- */}
        <div className="mt-24 p-12 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-[3rem] text-center relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <MessageSquare size={120} className="text-primary rotate-[15deg]" />
          </div>
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-black tracking-tight uppercase italic">
              ยังต้องการความช่วยเหลือเพิ่มเติม?
            </h3>
            <p className="text-muted-foreground font-medium italic">
              ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาด้านความปลอดภัยและ Reputation Management ตลอด 24 ชั่วโมง
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="/services" 
                className="bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-black text-[11px] tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
              >
                เริ่มโปรเจกต์ของคุณ
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
