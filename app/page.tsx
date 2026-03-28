/** @format */

import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Lock,
  FileCheck,
  ExternalLink,
  ArrowRight,
  Database,
  Search,
} from "lucide-react";
import { siteConfig } from "@/constants/site-config";

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

const serviceDisplayCategories = [
  {
    title: "Reputation Fix",
    description: "ปฏิบัติการกู้คืนและเยียวยาภาพลักษณ์ดิจิทัลในภาวะวิกฤตอย่างเร่งด่วน",
    icon: Shield,
    href: "/services#reputation-fix",
  },
  {
    title: "Reputation Protection",
    description: "การอภิบาลและเสริมสร้างเกียรติภูมิระดับสถาบันเพื่อความยั่งยืน",
    icon: ShieldCheck,
    href: "/services#reputation-protection",
  },
  {
    title: "IP Confirmation",
    description: "การรับรองและพิทักษ์สิทธิในทรัพย์สินทางปัญญาภายใต้มาตรฐานความลับ",
    icon: FileCheck,
    href: "/services#ip-confirmation",
  },
  {
    title: "PDPA Enforcement",
    description: "การบังคับใช้สิทธิตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลเพื่อทวงคืนความยุติธรรม",
    icon: Lock,
    href: "/services#pdpa-enforcement",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* 1. Hero Section: Institutional Authority */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-border">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase mb-6">
              <Shield className="w-3 h-3" />
              <span>Institutional Grade Security</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-primary">
              สถาปนา <span className="text-secondary">อำนาจดิจิทัล</span>{" "}
              <br />
              ในระบบนิเวศระดับสากล
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              UNLINK มอบบริการบริหารจัดการชื่อเสียงระดับสูง การคุ้มครองทรัพย์สินทางปัญญา
              และการบังคับใช้สิทธิความเป็นส่วนตัวของข้อมูล สำหรับองค์กรและบุคคลระดับสูง
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={siteConfig.contact.lineUrl}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                ปรึกษาผู้เชี่ยวชาญระดับยุทธศาสตร์
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-white border border-border text-primary rounded-md font-semibold hover:bg-slate-50 transition-all"
              >
                สำรวจขอบข่ายบริการ
              </Link>
            </div>
          </div>
        </div>
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* 2. Strategic Compliance Bar */}
      <section className="border-b border-border bg-white py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
            {[
              { label: "Data Encryption", value: "AES-256 SECURE" },
              { label: "Privacy Protocol", value: "PDPA COMPLIANT" },
              { label: "Case Handling", value: "NON-DISCLOSURE" },
              { label: "Operation", value: "24/7 ACTIVE" },
            ].map((signal, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <div className="flex flex-col">
                  <span className="text-[8px] font-mono tracking-[0.3em] text-muted-foreground uppercase">
                    {signal.label}
                  </span>
                  <span className="text-[10px] font-black tracking-widest text-primary uppercase">
                    {signal.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Section: Core Solutions */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              ยุทธศาสตร์หลักในการบริหารจัดการ
            </h2>
            <p className="text-muted-foreground">
              โปรโตคอลเฉพาะทางของเราได้รับการออกแบบมาเพื่อจัดการกับความท้าทายทางดิจิทัลที่ซับซ้อนที่สุด
              ด้วยความแม่นยำ อำนาจทางกฎหมาย และความเป็นเลิศทางเทคนิค
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceDisplayCategories.map((service) => (
              <div
                key={service.title}
                className="authority-card group bg-white"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-secondary hover:underline"
                >
                  รายละเอียดเพิ่มเติม <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ecosystem Links: Registry & Audit */}
      <section className="py-24 bg-white border-y border-border">
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
                เริ่มการตรวจสอบสิทธิ์ <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust Section */}
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
