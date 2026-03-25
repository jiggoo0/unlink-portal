/** @format */

"use client";

import { Search, ShieldAlert, Hammer, Eye } from "lucide-react";
import { AnimatedCard } from "@/components/animated-section";

/**
 * UNLINK-TH | Operational Protocol Stepper (2026)
 * -------------------------------------------------------------------------
 * แสดงลำดับขั้นตอนการปฏิบัติการ 4 ระยะ (Phases)
 * ออกแบบในสไตล์ Industrial Lab เพื่อแสดงถึงความแม่นยำและเป็นระบบ
 */

const protocols = [
  {
    title: "PHASE 01: CASE DIAGNOSIS",
    description:
      "วิเคราะห์ช่องโหว่ของข้อมูลและต้นตอของปัญหาเชิงลึก เพื่อวางยุทธศาสตร์การแก้ไขที่ตรงจุดและรัดกุมที่สุดภายใต้ความลับสูงสุด",
    icon: Search,
    color: "text-primary/60",
  },
  {
    title: "PHASE 02: DATA INTERVENTION",
    description:
      "ปฏิบัติการระงับการเข้าถึงและกำจัดข้อมูลเชิงลบในระดับ Cache Layer พร้อมมาตรการทางกฎหมายดิจิทัลเพื่อผลลัพธ์ที่ถาวร",
    icon: ShieldAlert,
    color: "text-primary/70",
  },
  {
    title: "PHASE 03: IDENTITY HARDENING",
    description:
      "สร้างสถาปัตยกรรมอัตลักษณ์ใหม่และวิศวกรรมเครดิตที่ทรงพลัง เพื่อยกระดับความน่าเชื่อถือให้ผ่านเกณฑ์การพิจารณาระดับสากล",
    icon: Hammer,
    color: "text-primary/80",
  },
  {
    title: "PHASE 04: SENTINEL MONITORING",
    description:
      "ระบบเฝ้าระวังอัตโนมัติ 24/7 เพื่อป้องกันการโจมตีซ้ำและรักษาความสะอาดของข้อมูลส่วนบุคคลให้คงอยู่ตลอดไป",
    icon: Eye,
    color: "text-primary",
  },
];

export default function ProtocolStepper() {
  return (
    <div className="relative grid gap-8 md:grid-cols-4">
      {/* Connecting Line (Desktop Interface) */}
      <div className="bg-border absolute top-12 left-0 -z-10 hidden h-px w-full md:block" />

      {protocols.map((step, idx) => (
        <AnimatedCard
          key={idx}
          delay={idx * 0.1}
          className="lab-card group hover:border-primary/30 relative p-6 transition-all duration-500"
        >
          {/* Icon Architecture */}
          <div
            className={`bg-background border-border group-hover:border-primary/40 mb-6 flex h-14 w-14 items-center justify-center rounded-xl border shadow-sm transition-all duration-500 group-hover:scale-110`}
          >
            <step.icon
              className={`h-7 w-7 ${step.color} group-hover:text-primary transition-colors`}
            />
          </div>

          {/* Protocol Specifications */}
          <h3 className="mb-3 text-xl font-bold tracking-tight">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-light">
            {step.description}
          </p>

          {/* Authentication Badge */}
          <div className="bg-muted border-border absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[10px] font-bold shadow-sm">
            0{idx + 1}
          </div>
        </AnimatedCard>
      ))}
    </div>
  );
}
