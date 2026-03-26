/** @format */

import { ReactNode } from "react";
import { Service } from "@unlink/shared/types";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, Terminal, Activity } from "lucide-react";
import { SecureChannel } from "@/components/sections/SecureChannel";
import { getImageUrl } from "@/lib/utils";
import JsonLd from "@/components/shared/JsonLd";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/seo-schemas";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";

/* @identity 9mza - Institutional Service Architecture Refinement */

interface ServiceLayoutProps {
  service: Service;
  children: ReactNode;
}

export function ServiceLayout({ service, children }: ServiceLayoutProps) {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: service.title, item: `/services/${service.slug}` },
  ];

  return (
    <article className="pb-24 bg-background">
      <JsonLd data={getServiceSchema(service)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* 0. Breadcrumb Navigation */}
      <div className="container pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold text-foreground">{service.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 1. Protocol Intelligence Header (Pristine Edition) */}
      <header className="relative mb-20 overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(72,135,255,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
          
          {service.image && (
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.03] grayscale pointer-events-none">
               <Image
                src={getImageUrl(service.image)}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="relative z-10 container">
          <div className="flex max-w-5xl flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/5 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase font-bold"
              >
                {service.category} Protocol Active
              </Badge>
              <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Activity className="h-3 w-3 text-primary/60" /> Service-ID: {service.id}
              </span>
              <Badge
                variant="secondary"
                className="bg-secondary text-foreground border-none font-mono text-[9px] uppercase tracking-wider font-bold"
              >
                {service.type}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] font-black tracking-tighter text-foreground uppercase break-words">
              {service.title}
            </h1>

            <div className="border-border grid gap-8 border-t pt-8 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2 border border-primary/10">
                  <ShieldCheck className="text-primary h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase font-bold">
                  Verified Execution Model
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2 border border-primary/10">
                  <Lock className="text-primary h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase font-bold">
                  {service.priceInfo?.model || "Operational Standard"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Technical Execution Area */}
      <div className="container grid gap-20 lg:grid-cols-12">
        <main className="lg:col-span-8">
          {/* 2.1 Strategic Scope Summary */}
          <section className="mb-16 rounded-[2rem] border border-border bg-secondary/30 p-10 backdrop-blur-sm shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Terminal className="h-4 w-4" />
              </div>
              <h2 className="font-mono text-[11px] font-black uppercase tracking-[0.3em] text-foreground">
                Intelligence Summary & Service Scope
              </h2>
            </div>
            <p className="mb-8 text-[16px] leading-relaxed text-muted-foreground italic border-l-4 border-primary/40 pl-6 py-2">
              {service.shortDescription}
            </p>

            {service.features && service.features.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <ShieldCheck className="mt-1 h-4 w-4 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-[14px] leading-snug text-foreground/80 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Dynamic Content Router */}
          <div className="relative">
            {children}
          </div>

          {/* 2.2 Takeaways & Strategic Actions */}
          <section className="mt-20 rounded-[2rem] border border-border bg-muted/30 p-10">
            <div className="mb-6 flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              <div className="h-1.5 w-6 bg-primary" />
              Strategic Takeaways
            </div>
            <ul className="space-y-6">
              {[
                "ตรวจสอบเงื่อนไขและเตรียมความพร้อมด้านข้อมูลภายใต้การดูแลของผู้เชี่ยวชาญ",
                "ดำเนินการตามขั้นตอนความปลอดภัยสูงสุดเพื่อปกป้องข้อมูลและความเป็นส่วนตัว",
                "ยืนยันความถูกต้องของแผนงานก่อนเริ่มดำเนินการจริงผ่านช่องทางลับที่กำหนด"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[15px] text-muted-foreground font-medium">
                  <span className="text-primary font-mono font-bold">[0{i+1}]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        {/* 3. Secure Side Interface (Specification Panel) */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="bg-white border-border border-2 rounded-[2.5rem] p-10 shadow-xl shadow-primary/5 overflow-hidden relative group transition-all hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] transition-opacity group-hover:opacity-[0.08]">
                <ShieldCheck size={120} className="text-primary" />
              </div>

              <div className="space-y-8 relative z-10">
                <div className="text-primary flex items-center gap-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                  <Terminal className="h-4 w-4" />
                  <span>Service Specification</span>
                </div>

                <div className="space-y-5">
                  {[
                    { label: "Protocol ID", value: service.id },
                    { label: "Classification", value: service.category },
                    { label: "Availability", value: "Active / Secure", status: true }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-border/50 pb-4">
                      <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-bold">
                        {item.label}
                      </span>
                      {item.status ? (
                         <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter flex items-center gap-2">
                         <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                         {item.value}
                       </span>
                      ) : (
                        <span className="text-xs font-mono font-black text-foreground uppercase">
                          {item.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-medium italic">
                    * ทุกการดำเนินงานภายใต้ Protocol
                    นี้จะถูกเก็บเป็นความลับสูงสุดและทำลายข้อมูลทันทีหลังปิดเคส
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-40">
        <SecureChannel />
      </div>
    </article>
  );
}
