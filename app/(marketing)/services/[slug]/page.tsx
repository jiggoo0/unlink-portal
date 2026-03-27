/** @format */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/mdx";
import { SERVICES } from "@/constants/services-registry";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@/mdx-components";
import { Activity } from "lucide-react";
import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { StatementOptimizationForm } from "@/components/services/forms/StatementOptimizationForm";

/* @identity 9mza - Service Content Refinement */

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * UNLINK-GLOBAL | Institutional Protocol Registry
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return { title: "Registry Entry Not Found" };

  return {
    title: service.metadata.defaultTitle ?? service.title,
    description:
      service.metadata.defaultDescription ?? service.shortDescription,
    keywords: service.metadata.keywords,
    alternates: {
      canonical: `/services/${slug}/`,
    },
  };
}

/**
 * Static Generation Interface
 */
export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function SingleServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  // Use getServiceBySlug as the unified entry point
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  const mdxComponents = getMDXComponents({});

  return (
    <ServiceLayout service={service}>
      {/* Dynamic Content Router */}
      {service.type === "interactive" ? (
        <>
          {service.slug === "statement-optimization" ? (
            <div className="bg-white border-2 border-border rounded-[2.5rem] p-4 md:p-8 shadow-2xl shadow-primary/5">
              <StatementOptimizationForm />
            </div>
          ) : (
            <section className="relative overflow-hidden rounded-[2.5rem] border-2 border-border bg-secondary/20 p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(72,135,255,0.05),transparent)]" />
              <div className="relative z-10 space-y-8">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white border-2 border-primary/10 text-primary shadow-xl">
                  <Activity className="h-12 w-12 animate-pulse" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-black tracking-tighter text-foreground md:text-5xl uppercase">
                    Institutional <br />
                    <span className="text-primary italic font-light lowercase">
                      Module Initializing
                    </span>
                  </h2>
                  <p className="mx-auto max-w-lg text-muted-foreground font-medium leading-relaxed">
                    ระบบกำลังเชื่อมโยงโครงข่ายข้อมูลสำหรับโปรโตคอลนี้โดยเฉพาะ
                    ท่านสามารถเข้าใช้งานโมดูลการตรวจสอบได้ในเร็วๆ นี้
                    ภายใต้มาตรฐานการรับรองสากลครับ
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="h-1.5 w-16 rounded-full bg-primary/10" />
                  <div className="h-1.5 w-16 rounded-full bg-primary animate-pulse" />
                  <div className="h-1.5 w-16 rounded-full bg-primary/10" />
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="prose prose-slate max-w-4xl mx-auto w-full break-words font-sans prose-headings:text-foreground prose-headings:tracking-tighter prose-headings:font-black prose-p:text-muted-foreground prose-p:leading-[1.8] prose-strong:text-foreground prose-strong:font-bold prose-a:text-primary prose-a:font-bold prose-img:rounded-[2.5rem] prose-img:shadow-xl prose-img:border prose-img:border-border">
          <MDXRemote
            source={service.description || ""}
            components={mdxComponents}
          />
        </div>
      )}
    </ServiceLayout>
  );
}
