"use client";

import { Cpu, Globe, Scale, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import SectionHeader from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/animated-section";

/**
 * UNLINK-GLOBAL | Core Methodologies Protocol (2026)
 * -------------------------------------------------------------------------
 * รวบรวมยุทธวิธีหลักในการจัดการชื่อเสียงออนไลน์เชิงเทคนิค
 * เน้นความสะอาดของโครงสร้างและการนำเสนอข้อมูลที่คนไทยเข้าใจง่าย
 */

const methods = [
  {
    title: "ลบประวัติเสียถาวร",
    subtitle: "Data Removal",
    description:
      "จัดการถอนรากถอนโคนข้อมูลเสียและประวัติการค้นหาที่ทำร้ายคุณ ให้หายไปจากโลกออนไลน์อย่างถูกต้องและถาวร",
    icon: Cpu,
  },
  {
    title: "สร้างตัวตนใหม่ให้น่าเชื่อถือ",
    subtitle: "Trust Reconstruction",
    description:
      "ออกแบบและจัดวางข้อมูลชุดใหม่ที่แข็งแกร่ง เพื่อยึดครองพื้นที่หน้าแรกของ Google และสร้างความเชื่อมั่นให้ธนาคารและคู่ค้า",
    icon: Globe,
  },
  {
    title: "ปกป้องสิทธิ์ด้วยกฎหมาย PDPA",
    subtitle: "Legal Protection",
    description:
      "ใช้สิทธิ์ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล เพื่อสั่งระงับและทำลายข้อมูลที่บิดเบือนหรือละเมิดความเป็นส่วนตัวของคุณ",
    icon: Scale,
  },
];

export default function Methods() {
  return (
    <section className="border-border container border-t py-24">
      {/* 1. Protocol Header: Strategic Context */}
      <div className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeader
          badge={
            <>
              <ShieldCheck className="h-4 w-4" />
              <span>มาตรฐานการทำงานระดับมืออาชีพ</span>
            </>
          }
          title={
            <>
              ทางรอดที่เป็นระบบ <br />
              เพื่อ{" "}
            </>
          }
          titleHighlight="เริ่มต้นใหม่"
          description="เราผสมผสานเทคนิคการจัดการข้อมูลเข้ากับข้อกฎหมายดิจิทัล เพื่อให้คุณได้กลับมาใช้ชีวิตได้อย่างมั่นใจและสง่างามอีกครั้ง"
          className="mb-0"
        />

        <AnimatedSection delay={0.3} direction="up">
          <Button
            variant="outline"
            className="border-primary/20 bg-primary/5 hover:bg-primary/10 rounded-full px-8 transition-all"
            asChild
          >
            <Link
              href={siteConfig.contact.lineUrl}
              className="flex items-center gap-2"
            >
              คุยกับทีมผู้เชี่ยวชาญ <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>

      {/* 2. Method Grid: Execution Layers */}
      <div className="grid gap-8 md:grid-cols-3">
        {methods.map((method, idx) => (
          <AnimatedSection
            key={idx}
            delay={idx * 0.15}
            className="authority-card group flex flex-col justify-between p-10 transition-all duration-500"
          >
            <div className="space-y-6">
              <div className="bg-secondary/10 border-secondary/20 group-hover:bg-secondary/20 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110">
                <method.icon className="text-secondary h-7 w-7" />
              </div>

              <div className="space-y-2">
                <p className="text-muted-foreground font-mono text-[10px] tracking-[0.25em] uppercase">
                  {method.subtitle}
                </p>
                <h3 className="text-2xl font-bold tracking-tight text-primary">
                  {method.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {method.description}
              </p>
            </div>

            <div className="border-border text-muted-foreground/30 mt-10 flex items-center justify-between border-t pt-6 font-mono text-[9px] tracking-widest uppercase">
              <span>Security Level: Alpha</span>
              <span>Ref: 2026.Q1</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
