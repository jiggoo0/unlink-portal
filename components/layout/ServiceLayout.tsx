/** @format */

import { ReactNode } from "react";
import { Service } from "@unlink/shared/types";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, Terminal } from "lucide-react";
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
    <article className="pb-24">
      <JsonLd data={getServiceSchema(service)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* 0. Breadcrumb Navigation */}
      <div className="container pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{service.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 1. Protocol Intelligence Header */}
      <header className="border-border/50 bg-muted/10 relative mb-20 overflow-hidden border-b py-24 min-h-[400px] flex items-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          {service.image && (
            <Image
              src={getImageUrl(service.image)}
              alt={service.title}
              fill
              priority
              className="object-cover opacity-40 saturate-[0.3]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent)]" />
        </div>

        <div className="relative z-10 container">
          <div className="flex max-w-5xl flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                {service.category} Protocol Active
              </Badge>
              <span className="text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase">
                Service-ID: {service.id}
              </span>
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-none font-mono text-[9px] uppercase tracking-wider"
              >
                {service.type}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] font-bold tracking-tighter text-balance text-white break-words hyphens-auto overflow-wrap-anywhere">
              {service.title}
            </h1>

            <div className="border-border/10 grid gap-8 border-t pt-8 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2">
                  <ShieldCheck className="text-primary/70 h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  Verified Execution Model
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2">
                  <Lock className="text-primary/70 h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
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
          {/* 2.1 Auto-Generated Intelligence Summary (Key Insights) */}
          <section className="mb-16 rounded-2xl border border-primary/10 bg-primary/5 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Terminal className="h-4 w-4" />
              </div>
              <h2 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-white">
                Intelligence Summary & Service Scope
              </h2>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground/90 italic border-l-2 border-primary/30 pl-4">
              {service.shortDescription}
            </p>

            {service.features && service.features.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-3.5 w-3.5 text-primary/60 shrink-0" />
                    <span className="text-[13px] text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Dynamic Content Router */}
          {children}

          {/* 2.2 Takeaways & Strategic Actions */}
          <section className="mt-20 rounded-xl border border-white/5 bg-white/[0.02] p-8">
            <div className="mb-6 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary/70">
              <div className="h-1 w-4 bg-primary/40" />
              Strategic Takeaways
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-sm text-zinc-400">
                <span className="text-primary font-mono">[01]</span>
                <span>
                  ตรวจสอบเงื่อนไขและเตรียมความพร้อมด้านข้อมูลภายใต้การดูแลของผู้เชี่ยวชาญ
                </span>
              </li>
              <li className="flex items-start gap-4 text-sm text-zinc-400">
                <span className="text-primary font-mono">[02]</span>
                <span>
                  ดำเนินการตามขั้นตอนความปลอดภัยสูงสุดเพื่อปกป้องข้อมูลและความเป็นส่วนตัว
                </span>
              </li>
              <li className="flex items-start gap-4 text-sm text-zinc-400">
                <span className="text-primary font-mono">[03]</span>
                <span>
                  ยืนยันความถูกต้องของแผนงานก่อนเริ่มดำเนินการจริงผ่านช่องทางลับที่กำหนด
                </span>
              </li>
            </ul>
          </section>
        </main>

        {/* 3. Secure Side Interface */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="lab-card border-white/5 bg-white/[0.02] border p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-primary/60 flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase">
                  <Terminal className="h-3 w-3" />
                  <span>Service Specification</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Protocol ID
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      {service.id}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Classification
                    </span>
                    <span className="text-xs font-bold text-white uppercase">
                      {service.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Availability
                    </span>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active / Secure
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-[9px] text-zinc-500 leading-relaxed font-light italic">
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
