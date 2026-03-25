/** @format */

"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/constants/site-config";
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

/**
 * UNLINK-GLOBAL | Institutional Hero Protocol
 * -------------------------------------------------------------------------
 * เน้นอำนาจการตรวจสอบ (Accreditation Authority) และความสะอาดระดับสากล
 */

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-background flex items-center pt-24 pb-20 md:pt-32 md:pb-36">
      {/* 1. Infrastructure Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <Image
          src={getImageUrl("common/hero-main.webp")}
          alt="UNLINK-GLOBAL Accreditation Authority"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.12] saturate-0 brightness-125"
        />

        {/* Audit Scan Effect */}
        <motion.div
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 h-px w-full bg-emerald-500/20 blur-sm z-10"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center space-y-12 text-center">
          {/* Institutional Accreditation Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-500/5 border border-emerald-500/20 text-emerald-500/80 inline-flex items-center gap-3 rounded-full px-6 py-2.5 font-mono text-[9px] font-black uppercase tracking-[0.4em] backdrop-blur-3xl shadow-[0_0_40px_rgba(16,185,129,0.05)]"
          >
            <Globe className="h-3 w-3" />
            <span>Global Accreditation Authority • Identity Registry Node</span>
          </motion.div>

          {/* Authoritative Heading */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl leading-[0.9] font-black tracking-tighter text-white sm:text-7xl md:text-[8.5rem] uppercase"
            >
              สถาปนาตัวตน <br />
              <span className="text-primary italic font-light lowercase opacity-90">
                กู้คืนความเชื่อถือ
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-400 mx-auto max-w-4xl text-lg leading-relaxed font-light md:text-2xl"
            >
              ผู้นำระดับสถาบันในการบริหารจัดการข้อมูลและภาพลักษณ์ดิจิทัล
              ไม่ว่าจะเป็นการวางโครงสร้างการเงินเพื่อ{" "}
              <span className="text-white font-bold">กู้บ้าน</span>
              หรือการรับรองอัตลักษณ์ระดับ{" "}
              <span className="text-primary font-bold uppercase">
                Institutional
              </span>
              เราช่วยให้คุณมีตัวตนที่โปร่งใสและทรงพลังบนโลกออนไลน์ 100%
            </motion.p>
          </div>

          {/* Call to Action Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex w-full flex-col items-center justify-center gap-6 pt-10 sm:flex-row"
          >
            <Link
              href={siteConfig.contact.lineUrl}
              className="group relative flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-12 text-[11px] font-black tracking-[0.3em] text-black uppercase transition-all hover:scale-[1.02] shadow-2xl active:scale-[0.98] sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                Liaison Specialist (24H)
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </span>
            </Link>

            <Link
              href="/verify"
              className="group flex h-16 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-12 text-[11px] font-black tracking-[0.3em] text-white uppercase backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
            >
              <span className="flex items-center gap-2">
                Public Registry Search
              </span>
            </Link>
          </motion.div>

          {/* Operational Integrity Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="border-white/5 grid w-full max-w-4xl grid-cols-1 gap-12 border-t pt-24 md:grid-cols-3"
          >
            {[
              {
                label: "Verified Nodes",
                value: "1,200+",
                sub: "ฐานข้อมูลตัวตนที่ผ่านการรับรอง",
              },
              {
                label: "Trust Level Index",
                value: "99.8%",
                sub: "ความแม่นยำในการระบุตัวตนสากล",
              },
              {
                label: "Audit Frequency",
                value: "REAL-TIME",
                sub: "การเฝ้าระวังข้อมูลตลอด 24 ชม.",
              },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <span className="text-emerald-500 block font-mono text-[9px] tracking-[0.4em] uppercase font-black">
                  {stat.label}
                </span>
                <div className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase font-sans">
                  {stat.value}
                </div>
                <span className="text-slate-500 block text-[10px] font-medium tracking-wide">
                  {stat.sub}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
    </section>
  );
}
