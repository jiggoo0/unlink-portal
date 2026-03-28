/** @format */

import { Metadata } from "next";
import { SERVICES } from "@/constants/services-registry";
import ServiceCard from "@/components/shared/ServiceCard";
import { siteConfig } from "@/constants/site-config";
import { getImageUrl } from "@/lib/utils";
import {
  ShieldAlert,
  Cpu,
  Database,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Lock,
} from "lucide-react";
import JsonLd from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schemas";
import SectionHeader from "@/components/shared/SectionHeader";

/**
 * UNLINK-GLOBAL | Service Protocols (Pure SSG)
 * Elite Standard: SEO 100, Perf 90+
 */

export const metadata: Metadata = {
  title: "Service Protocols | ยุทธศาสตร์การจัดการข้อมูลและภาพลักษณ์ดิจิทัล",
  description:
    "รวบรวมโซลูชันกู้คืนภาพลักษณ์และโอกาสทางการเงิน ตั้งแต่ระบบจองตั๋ววีซ่าสากล ไปจนถึงการวางโครงสร้างตัวตนดิจิทัลใหม่ภายใต้ความลับสูงสุด",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const allServices = SERVICES;

  const filterServices = (cats: string[]) =>
    allServices.filter((s) => {
      const category = (s.category || "").toLowerCase().trim();
      return cats.some((c) => category === c.toLowerCase().trim());
    });

  const categories = [
    {
      id: "reputation-fix",
      name: "Reputation Fix",
      description:
        "ปฏิบัติการกู้คืนและเยียวยาภาพลักษณ์ที่ได้รับผลกระทบอย่างรุนแรง ผ่านโปรโตคอลการจัดการข้อมูลเชิงลึกขั้นสูง",
      icon: ShieldAlert,
      services: filterServices(["Reputation Fix"]),
    },
    {
      id: "reputation-protection",
      name: "Reputation Protection",
      description:
        "การอภิบาลและเสริมสร้างเกียรติภูมิระดับสถาบัน เพื่อธำรงไว้ซึ่งอัตลักษณ์อันทรงคุณค่าในระบบนิเวศดิจิทัล",
      icon: ShieldCheck,
      services: filterServices(["Reputation Protection"]),
    },
    {
      id: "ip-confirmation",
      name: "IP Confirmation",
      description:
        "การรับรองสิทธิและพิทักษ์ทรัพย์สินทางปัญญา ภายใต้มาตรฐานความปลอดภัยและมาตรการรักษาความลับขั้นสูงสุด",
      icon: FileCheck,
      services: filterServices(["IP Confirmation"]),
    },
    {
      id: "pdpa-enforcement",
      name: "PDPA Enforcement",
      description:
        "การบังคับใช้สิทธิตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล เพื่อทวงคืนความยุติธรรมและพิทักษ์ความเป็นส่วนตัวของท่าน",
      icon: Lock,
      services: filterServices(["PDPA Enforcement"]),
    },
  ];

  // รวบรวมบริการที่ยังไม่ถูกจัดหมวดหมู่
  const categorizedServiceIds = new Set(
    categories.flatMap((c) => c.services.map((s) => s.id)),
  );
  const otherServices = allServices.filter(
    (s) => !categorizedServiceIds.has(s.id),
  );

  if (otherServices.length > 0) {
    categories.push({
      id: "others",
      name: "Strategic Protocols",
      description:
        "โปรโตคอลเฉพาะทางสำหรับการจัดการข้อมูลเชิงลึกและการบริหารความเสี่ยงดิจิทัล",
      icon: Database,
      services: otherServices,
    });
  }

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
  ];

  const methodologyAbstractUrl = getImageUrl(
    "common/methodology-abstract.webp",
  );

  return (
    <div className="pb-32 bg-[#050810]">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* 1. Cinematic Header */}
      <header className="relative mb-20 overflow-hidden border-b border-white/5 py-32 md:py-48">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(16,185,129,0.1),transparent)]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${methodologyAbstractUrl})` }}
        />

        <div className="relative z-10 container text-center md:text-left">
          <SectionHeader
            badge={
              <>
                <Database className="h-4 w-4" />
                <span>Operational Excellence 2026</span>
              </>
            }
            title="Operational"
            titleHighlight="Protocols"
            description="ยกระดับโอกาสและพิทักษ์ภาพลักษณ์ดิจิทัล รวบรวมระบบจัดการข้อมูลเชิงลึกที่ผ่านการกลั่นกรองจากสถานการณ์จริง เพื่อให้ท่านบรรลุเป้าหมายในระบบนิเวศดิจิทัลอย่างสง่างาม"
            className="mb-0 max-w-4xl"
            isItalic={true}
          />
        </div>
      </header>

      {/* 2. Grouped Services Section */}
      <div className="container space-y-40">
        {allServices.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-white/5 rounded-[3rem] bg-white/[0.02]">
            <ShieldAlert className="text-primary/20 w-16 h-16 mx-auto mb-6" />
            <p className="text-slate-500 font-mono text-xs tracking-widest uppercase">
              Operational Matrix: Offline or Empty
            </p>
          </div>
        ) : (
          categories.map(
            (cat) =>
              cat.services.length > 0 && (
                <section key={cat.id} id={cat.id} className="scroll-mt-24">
                  <div className="mb-16 flex flex-col items-start justify-between gap-8 border-b border-white/5 pb-12 md:flex-row md:items-end">
                    <div className="space-y-4 max-w-2xl">
                      <div className="flex items-center gap-4 text-primary">
                        <cat.icon className="h-6 w-6" />
                        <span className="font-mono text-[10px] tracking-[0.4em] uppercase">
                          Service Cluster
                        </span>
                      </div>
                      <h2 className="text-4xl font-bold tracking-tighter text-white md:text-5xl uppercase leading-none">
                        {cat.name}
                      </h2>
                      <p className="text-slate-400 text-lg font-light leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                    <div className="text-slate-600 font-mono text-[9px] tracking-[0.2em] uppercase text-right hidden md:block">
                      Active Modules: {cat.services.length} <br />
                      <span className="text-primary/40 text-[8px]">
                        Unlink Strategic Unit
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {cat.services.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </section>
              ),
          )
        )}
      </div>

      {/* 3. Custom Solution Liaison */}
      <section className="container mt-48">
        <div className="relative overflow-hidden rounded-[3.5rem] border border-white/5 bg-[#0a0f1d] p-12 md:p-24 group transition-all duration-700 hover:border-primary/20">
          <div className="text-primary/5 absolute -top-10 -right-10 p-12 transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-12">
            <Cpu className="h-64 w-64" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-10 text-center md:text-left mx-auto md:mx-0">
            <div className="space-y-6">
              <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-4 py-1.5 font-mono text-[9px] tracking-[0.3em] uppercase backdrop-blur-md">
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Special Operations Unit</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-7xl leading-none">
                การสืบสวน <br />
                <span className="text-primary italic font-serif">
                  กรณีซับซ้อนพิเศษ
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light md:text-xl">
                หากท่านประสบปัญหาที่มีความซับซ้อนสูง
                หรืออยู่นอกเหนือจากโปรโตคอลมาตรฐาน
                ทีมที่ปรึกษาเชิงกลยุทธ์ของเราพร้อมร่วมวิเคราะห์และออกแบบโซลูชันเฉพาะราย
                เพื่อแก้ไขปัญหาที่ต้นเหตุภายใต้มาตรฐานความลับสูงสุด
              </p>
            </div>

            <a
              href={siteConfig.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black shadow-primary/20 group inline-flex items-center gap-4 rounded-full px-12 py-6 text-sm font-bold tracking-widest uppercase shadow-2xl transition-all hover:scale-105"
            >
              เจ้าหน้าที่ประสานงานยุทธศาสตร์
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
