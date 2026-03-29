/** @format */

"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/constants/site-config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import VerifiedBadge from "@/components/shared/VerifiedBadge";

/**
 * UNLINK-GLOBAL | Institutional Hero Protocol
 * -------------------------------------------------------------------------
 * เน้นอำนาจการตรวจสอบ (Accreditation Authority) และความสะอาดระดับสากล
 */

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-background flex items-center pt-24 pb-20 md:pt-32 md:pb-36">
      {/* 1. Infrastructure Background (Refined Corporate Light) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(72,135,255,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

        <Image
          src={getImageUrl("common/hero-main.webp")}
          alt="UNLINK-GLOBAL Accreditation Authority"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.03] saturate-0 brightness-150 contrast-125"
        />

        {/* Audit Scan Effect - Elite Subtlety */}
        <motion.div
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 h-px w-full bg-primary/20 blur-[2px] z-10"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center space-y-14 text-center">
          {/* Institutional Accreditation Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <VerifiedBadge caseId="UL-P-001" variant="full" />
          </motion.div>

          {/* Authoritative Heading - Massive & Clean */}
          <div className="space-y-10">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl leading-[0.85] font-black tracking-tighter text-foreground sm:text-8xl md:text-[10rem] uppercase"
            >
              สถาปนาตัวตน <br />
              <span className="text-primary italic font-light lowercase opacity-95">
                กู้คืนอำนาจ
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-muted-foreground/90 mx-auto max-w-5xl text-xl leading-relaxed font-light md:text-3xl"
            >
              ผู้นำระดับสถาบันในการบริหารจัดการ{" "}
              <span className="text-foreground font-semibold">ข้อมูลตัวตน</span>{" "}
              และ{" "}
              <span className="text-foreground font-semibold">
                ภาพลักษณ์ดิจิทัล
              </span>
              สร้างรากฐานความเชื่อมั่นด้วยเทคโนโลยีการรับรองอัตลักษณ์ระดับ{" "}
              <span className="text-primary font-bold uppercase tracking-widest text-lg">
                Institutional Trust
              </span>
            </motion.p>
          </div>

          {/* Call to Action Interface - High Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex w-full flex-col items-center justify-center gap-8 pt-12 sm:flex-row"
          >
            <Link
              href={siteConfig.contact.lineUrl}
              className="group relative flex h-20 w-full items-center justify-center overflow-hidden rounded-[2rem] bg-primary px-16 text-xs font-black tracking-[0.4em] text-primary-foreground uppercase transition-all hover:scale-[1.05] shadow-[0_20px_50px_rgba(72,135,255,0.2)] active:scale-[0.98] sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-4">
                Executive Liaison
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-3" />
              </span>
            </Link>

            <Link
              href="/verify"
              className="group flex h-20 w-full items-center justify-center rounded-[2rem] border-2 border-primary/10 bg-white/50 px-16 text-xs font-black tracking-[0.4em] text-primary uppercase backdrop-blur-xl transition-all hover:bg-white hover:border-primary/30 shadow-sm sm:w-auto"
            >
              <span>Verify Identity</span>
            </Link>
          </motion.div>

          {/* Operational Integrity Stats - Minimalist Power */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="border-border/60 grid w-full max-w-5xl grid-cols-1 gap-16 border-t pt-28 md:grid-cols-3"
          >
            {[
              {
                label: "Verified Authority",
                value: "100%",
                sub: "ความถูกต้องแม่นยำทางข้อมูล",
              },
              {
                label: "Institutional Reach",
                value: "GLOBAL",
                sub: "การรับรองมาตรฐานระดับสากล",
              },
              {
                label: "Data Integrity",
                value: "STABLE",
                sub: "ความมั่นคงของฐานข้อมูลตัวตน",
              },
            ].map((stat, i) => (
              <div key={i} className="space-y-2 md:space-y-4">
                <span className="text-primary/60 block font-mono text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-black">
                  {stat.label}
                </span>
                <div className="text-foreground text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-[10px] md:text-xs font-medium tracking-widest uppercase opacity-60">
                  {stat.sub}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-60 w-full bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
    </section>
  );
}
