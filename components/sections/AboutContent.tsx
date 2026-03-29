/** @format */

"use client";

import Image from "next/image";
import {
  CheckCircle2,
  Globe,
  Zap,
  ExternalLink,
  ShieldCheck,
  Target,
  Users,
  Activity,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import { getImageUrl } from "@/lib/utils";
import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import SectionHeader from "@/components/shared/SectionHeader";

interface AboutContentProps {
  founderName: string;
}

export default function AboutContent({ founderName }: AboutContentProps) {
  const values = [
    {
      title: "Accreditation Authority",
      description:
        "เราดำเนินการในฐานะหน่วยงานรับรองที่มีมาตรฐานความแม่นยำสูงสุด เพื่อสถาปนาตัวตนดิจิทัลที่ถูกต้องและยั่งยืน",
      icon: CheckCircle2,
    },
    {
      title: "Institutional Transparency",
      description:
        "ทุกกระบวนการตรวจสอบและรับรองข้อมูล (Audit Matrix) ถูกจัดทำขึ้นอย่างโปร่งใสภายใต้ระเบียบวิธีสากล",
      icon: Globe,
    },
    {
      title: "Data Sovereignty",
      description:
        "เรายึดถืออำนาจอธิปไตยของข้อมูลส่วนบุคคล (PDPA) เพื่อคืนความเชื่อถือและโอกาสให้กับเจ้าของข้อมูลอย่างชอบธรรม",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pb-24">
      {/* 1. Protocol Header */}
      <header className="bg-background border-b border-border relative overflow-hidden py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent)]" />
        <div className="relative z-10 container">
          <AnimatedSection className="max-w-5xl space-y-10">
            <div className="bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
              <Activity className="h-4 w-4" />
              <span>Registry Authority established 2026</span>
            </div>
            <h1 className="text-5xl leading-[1.1] font-black tracking-tighter md:text-8xl text-foreground uppercase">
              The Registry <br />
              <span className="text-primary italic font-light lowercase">
                of High-Trust
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed font-light md:text-3xl">
              &quot;{siteConfig.name}&quot; คือศูนย์กลางการกำกับดูแลตัวตนดิจิทัล
              ที่มุ่งเน้นการสร้างมาตรฐานความเชื่อถือใหม่ให้กับสังคมและโลกการเงิน
              เพื่ออนาคตที่โปร่งใสและตรวจสอบได้จริง
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* 2. Methodology */}
      <section className="container py-32">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tighter md:text-5xl uppercase text-foreground leading-none">
                Institutional <br /> Methodology
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                ระเบียบวิธีปฏิบัติงานของเราไม่ได้เน้นการปกปิด แต่เน้นการ
                &quot;แก้ไขข้อมูลให้ถูกต้องตามข้อเท็จจริง&quot;
                ผ่านกระบวนการทางวิศวกรรมข้อมูลระดับสูงที่สถาบันสากลยอมรับ
                เพื่อยกระดับ E-E-A-T Signal ให้กับเจ้าของข้อมูล
              </p>
            </div>

            <div className="grid gap-6">
              <div className="authority-card flex items-start gap-6 p-10 transition-all">
                <div className="bg-emerald-500/10 text-emerald-500 rounded-xl p-3">
                  <Target className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-emerald-500 font-mono text-[10px] tracking-widest uppercase">
                    Protocol 01: Audit & Rectify
                  </h4>
                  <p className="text-foreground text-lg leading-snug font-black uppercase tracking-tight">
                    การตรวจสอบบัญชีข้อมูลและแก้ไขประวัติเดิมให้ถูกต้องแม่นยำ
                  </p>
                </div>
              </div>
              <div className="authority-card flex items-start gap-6 p-10 transition-all">
                <div className="bg-emerald-500/10 text-emerald-500 rounded-xl p-3">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-emerald-500 font-mono text-[10px] tracking-widest uppercase">
                    Protocol 02: Accreditation
                  </h4>
                  <p className="text-foreground text-lg leading-snug font-black uppercase tracking-tight">
                    การรับรองอัตลักษณ์ใหม่ที่ทรงพลังและน่าเชื่อถือในระดับสากล
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="bg-muted border border-border relative flex aspect-square items-center justify-center overflow-hidden rounded-[3rem]">
              <Image
                src={getImageUrl("common/methodology-abstract.webp")}
                alt="UNLINK-GLOBAL Institutional Registry Node - Global Trust Methodology"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-40 grayscale brightness-125"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-12 text-center bg-background/20 backdrop-blur-[2px]">
                <Globe className="text-emerald-500 h-16 w-16 mb-4" />
                <span className="text-foreground font-black text-xs tracking-[0.5em] uppercase border-y border-border py-2">
                  Global Trust Node
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Technical Backbone */}
      <section className="border-border bg-muted/30 border-y py-32">
        <div className="container grid items-center gap-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="authority-card group relative aspect-square overflow-hidden rounded-[3rem]">
              <Image
                src={getImageUrl("common/operational-core.webp")}
                alt="System Architect"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-60 grayscale transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-12 left-12 z-20 space-y-2">
                <p className="text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase">
                  Lead System Architect
                </p>
                <p className="text-3xl font-black text-foreground tracking-tighter uppercase italic">
                  {founderName}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:col-span-7">
            <div className="space-y-8">
              <div className="text-emerald-500 inline-flex items-center gap-4 font-mono text-[10px] tracking-widest uppercase">
                <span className="bg-emerald-500/30 h-px w-12"></span>
                <span>Visionary Authority</span>
              </div>
              <h2 className="text-5xl leading-[0.95] font-black tracking-tighter md:text-7xl text-foreground uppercase">
                Architecture <br />
                <span className="text-muted-foreground/60">of Legitimacy</span>
              </h2>
              <blockquote className="border-emerald-500/40 space-y-6 border-l-2 pl-10">
                <p className="text-muted-foreground text-xl leading-relaxed font-light italic md:text-3xl">
                  &quot;เราไม่ได้มองหาวิธีปิดบังความจริง
                  แต่เรามองหาวิธีทำให้ความจริงที่ถูกต้องปรากฏขึ้น
                  ผ่านการรับรองข้อมูลที่โปร่งใสและทรงอำนาจที่สุดในระบบนิเวศดิจิทัล&quot;
                </p>
                <footer className="text-emerald-500 mt-4 font-mono text-xs tracking-widest uppercase font-bold">
                  — {founderName}
                </footer>
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-10 pt-4">
              <Link
                href={siteConfig.founder.url}
                target="_blank"
                className="group text-emerald-500/60 hover:text-emerald-500 flex items-center gap-3 font-mono text-xs tracking-widest uppercase transition-colors"
              >
                Accreditation Core <ExternalLink className="h-3.5 w-3.5" />
              </Link>
              <div className="text-muted-foreground flex items-center gap-3 font-mono text-xs tracking-widest uppercase font-bold">
                <Users className="h-3.5 w-3.5" /> Certified Specialist
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="container py-32">
        <SectionHeader
          title="Institutional"
          titleHighlight="Pillars"
          description="รากฐานการกำกับดูแลความถูกต้องและเชื่อถือได้ที่เรายึดถือ"
          align="center"
          className="mb-24"
        />

        <div className="grid gap-10 md:grid-cols-3">
          {values.map((v, i) => (
            <AnimatedCard
              key={i}
              delay={i * 0.1}
              className="authority-card space-y-8 p-12 text-center transition-all duration-500"
            >
              <div className="bg-emerald-500/5 border border-emerald-500/10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl">
                <v.icon className="text-emerald-500 h-10 w-10" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {v.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </div>
  );
}
