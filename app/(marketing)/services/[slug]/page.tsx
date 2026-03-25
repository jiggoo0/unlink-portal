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
            <StatementOptimizationForm />
          ) : (
            <section className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0f1d] p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent)]" />
              <div className="relative z-10 space-y-8">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <Activity className="h-10 w-10 animate-pulse" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-black tracking-tighter text-white md:text-4xl uppercase">
                    Institutional <br />
                    <span className="text-primary italic font-serif lowercase">
                      Module Initializing
                    </span>
                  </h2>
                  <p className="mx-auto max-w-lg text-slate-400 font-light leading-relaxed">
                    ระบบกำลังเชื่อมโยงโครงข่ายข้อมูลสำหรับโปรโตคอลนี้โดยเฉพาะ
                    ท่านสามารถเข้าใช้งานโมดูลการตรวจสอบได้ในเร็วๆ นี้
                    ภายใต้มาตรฐานการรับรองสากลครับ
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="h-1 w-12 rounded-full bg-primary/20" />
                  <div className="h-1 w-12 rounded-full bg-primary/40 animate-pulse" />
                  <div className="h-1 w-12 rounded-full bg-primary/20" />
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="prose prose-invert prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-strong:text-primary prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80 prose-img:rounded-2xl max-w-4xl mx-auto w-full break-words font-sans">
          <MDXRemote
            source={service.description || ""}
            components={mdxComponents}
          />
        </div>
      )}
    </ServiceLayout>
  );
}
