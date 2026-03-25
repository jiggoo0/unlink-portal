/** @format */

import { Metadata } from "next";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@/mdx-components";
import { SecureChannel } from "@/components/sections/SecureChannel";
import { Calendar, ShieldCheck, Lock, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/shared/JsonLd";
import { getCaseStudySchema, getBreadcrumbSchema } from "@/lib/seo-schemas";
import { getImageUrl } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: "Operational Record Not Found" };

  return {
    title:
      study.metadata?.defaultTitle ??
      `${study.title} | Operational Record UNLINK-TH`,
    description: study.metadata?.defaultDescription ?? study.excerpt,
    keywords: study.metadata?.keywords,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const cases = await getAllCaseStudies();
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({ params }: CasePageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) notFound();

  const mdxComponents = getMDXComponents({});

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
    {
      name: String(study.title ?? "Classified"),
      item: `/case-studies/${slug}`,
    },
  ];

  return (
    <article className="pb-24">
      <JsonLd data={getCaseStudySchema(study)} />
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
                <Link href="/case-studies">Case Studies</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{study.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 1. Operational Intelligence Header */}
      <header className="border-border/50 bg-muted/10 relative mb-20 overflow-hidden border-b py-24 min-h-[400px] flex items-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          {study.image && (
            <Image
              src={getImageUrl(study.image)}
              alt={study.title}
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
                {study.category} Record
              </Badge>
              <span className="text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Calendar className="h-3 w-3" /> REL-DATE: {study.date}
              </span>
              <div className="text-primary/60 bg-primary/5 border-primary/10 flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                <Lock className="h-3 w-3" /> Classified Intelligence
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.2] font-bold tracking-tight text-white break-words overflow-wrap-anywhere">
              {study.title}
            </h1>

            <div className="border-border/10 grid gap-6 border-t pt-8 md:grid-cols-4">
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground/50 font-sans text-[9px] font-bold tracking-wider uppercase">
                  Service Category
                </span>
                <span className="text-primary font-medium text-xs">
                  {study.category}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground/50 font-sans text-[9px] font-bold tracking-wider uppercase">
                  Execution Date
                </span>
                <span className="text-white/90 font-medium text-xs">
                  {study.date}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground/50 font-sans text-[9px] font-bold tracking-wider uppercase">
                  Primary Platform
                </span>
                <span className="text-white/90 font-medium text-xs">
                  {study.metadata?.keywords?.[0] || "Verified Systems"}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground/50 font-sans text-[9px] font-bold tracking-wider uppercase">
                  Verification
                </span>
                <div className="flex items-center gap-1.5 text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Confirmed Result
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Professional Evidence Area */}
      <div className="container grid gap-16 lg:grid-cols-12">
        <main className="lg:col-span-8">
          {/* 2.1 Case Summary Header */}
          <section className="mb-16 rounded-2xl border border-primary/10 bg-primary/5 p-10 backdrop-blur-sm shadow-2xl shadow-primary/5">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Terminal className="h-4 w-4" />
              </div>
              <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                Operational Case Summary & Strategy
              </h2>
            </div>
            <p className="mb-0 text-[15px] leading-relaxed text-muted-foreground/90 italic border-l-2 border-primary/30 pl-6 py-1">
              {study.excerpt}
            </p>
          </section>

          {/* Tangible Proof Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-muted/5 border border-primary/10 p-8 rounded-xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <ShieldCheck className="text-primary h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Operational Audit Log
                </h4>
              </div>
              <div className="space-y-4">
                {study.auditLog && study.auditLog.length > 0 ? (
                  study.auditLog.map(
                    (log: { date: string; action: string }, i: number) => (
                      <div
                        key={i}
                        className="flex gap-4 items-start border-l-2 border-primary/20 pl-4 py-1"
                      >
                        <span className="text-[10px] font-mono text-primary/60 whitespace-nowrap">
                          {log.date}
                        </span>
                        <span className="text-[11px] text-muted-foreground leading-tight">
                          {log.action}
                        </span>
                      </div>
                    ),
                  )
                ) : (
                  <p className="text-muted-foreground text-xs italic">
                    Confidential operational record.
                  </p>
                )}
              </div>
            </div>

            <div className="bg-muted/5 border border-white/5 p-8 rounded-xl flex flex-col gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/5 rounded-full p-2">
                    <Lock className="text-white/40 h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Verification Guide
                  </h4>
                </div>
                <ul className="space-y-3">
                  {study.verificationSteps &&
                  study.verificationSteps.length > 0 ? (
                    study.verificationSteps.map((step: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed"
                      >
                        <span className="bg-primary/10 text-primary w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-xs text-muted-foreground italic">
                      Consult private channel for verification.
                    </li>
                  )}
                </ul>
              </div>

              {study.legalReference && (
                <div className="pt-6 border-t border-white/5">
                  <span className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-widest block mb-2">
                    Legal/Regulatory Reference
                  </span>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <span className="text-[11px] text-primary/80 font-medium italic">
                      {study.legalReference}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="prose prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-strong:text-primary prose-blockquote:border-primary/50 prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80 prose-img:rounded-[2rem] prose-img:shadow-2xl prose-img:border prose-img:border-white/5 max-w-none w-full break-words">
            <MDXRemote
              source={study.content ?? ""}
              components={mdxComponents}
            />
          </div>
        </main>

        {/* 3. Secure Side Interface */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="lab-card border-white/5 bg-white/[0.02] border p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-primary/60 flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase">
                  <Terminal className="h-3 w-3" />
                  <span>Audit Metadata</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Case Protocol
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      {study.id || "CLASSIFIED"}
                    </span>
                  </div>
                  {study.client && (
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                        Client
                      </span>
                      <span className="text-xs font-bold text-white uppercase">
                        {study.client}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Outcome
                    </span>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase">
                      SUCCESSFUL
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Privacy Tier
                    </span>
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-tighter flex items-center gap-1">
                      <Lock className="h-2 w-2" />
                      Level 4 NDA
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-[9px] text-zinc-500 leading-relaxed font-light italic">
                    *
                    บันทึกปฏิบัติการนี้ได้รับการปกปิดตัวตนเพื่อความปลอดภัยสูงสุด
                    ข้อมูลทางเทคนิคถูกตรวจสอบความถูกต้องแล้ว 100%
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
