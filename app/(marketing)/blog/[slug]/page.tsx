/** @format */

import { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@/mdx-components";
import { SecureChannel } from "@/components/sections/SecureChannel";
import { Calendar, Clock, ShieldCheck, Lock, Terminal, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/shared/JsonLd";
import { getBlogPostSchema } from "@/lib/seo-schemas";
import { getImageUrl } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";
import { Badge } from "@/components/ui/badge";
import VerifiedBadge from "@/components/shared/VerifiedBadge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

/* @identity 9mza - Institutional Authority Refinement */

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metadata?.defaultTitle || `${post.title} | UNLINK-TH Insights`,
    description: post.metadata?.defaultDescription || post.description,
    keywords: post.metadata?.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  const mdxComponents = getMDXComponents({});

  return (
    <article className="pb-24 bg-background">
      <JsonLd
        data={getBlogPostSchema({
          title: post.title,
          description: post.description,
          image: getImageUrl(post.image),
          datePublished: post.date,
          authorName: post.author,
          url: `${siteConfig.url}/blog/${post.slug}`,
        })}
      />

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
                <Link href="/blog" className="hover:text-primary transition-colors">Insights</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold text-foreground">{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 1. Protocol Intelligence Header (Pristine Light Edition) */}
      <header className="relative mb-20 overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(72,135,255,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
        </div>

        <div className="relative z-10 container">
          <div className="flex max-w-5xl flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/5 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase font-bold"
              >
                {post.category} Protocol
              </Badge>
              <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Calendar className="h-3 w-3 text-primary/60" /> {post.date}
              </span>
              <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Clock className="h-3 w-3 text-primary/60" /> 5 Min Read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] font-black tracking-tighter text-foreground uppercase break-words">
              {post.title}
            </h1>

            <div className="border-border grid gap-8 border-t pt-8 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2 border border-primary/10">
                  <ShieldCheck className="text-primary h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase font-bold">
                  Verified Intelligence
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2 border border-primary/10">
                  <Lock className="text-primary h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase font-bold">
                  {post.priceInfo?.model || "Educational Protocol"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Technical Execution Area */}
      <div className="container grid gap-20 lg:grid-cols-12">
        <main className="lg:col-span-8">
          {/* 2.1 Strategic Analysis Summary */}
          <section className="mb-16 rounded-[2rem] border border-border bg-secondary/30 p-10 backdrop-blur-sm shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Terminal className="h-4 w-4" />
              </div>
              <h2 className="font-mono text-[11px] font-black uppercase tracking-[0.3em] text-foreground">
                Intelligence Summary & Strategic Analysis
              </h2>
            </div>
            <p className="mb-8 text-[16px] leading-relaxed text-muted-foreground italic border-l-4 border-primary/40 pl-6 py-2">
              {post.description}
            </p>

            {post.features && post.features.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {post.features.map((feature: string, idx: number) => (
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

          <div className="prose prose-slate max-w-none w-full break-words prose-headings:text-foreground prose-headings:tracking-tighter prose-headings:font-black prose-p:text-muted-foreground prose-p:leading-[1.8] prose-strong:text-foreground prose-strong:font-bold prose-a:text-primary prose-a:font-bold prose-img:rounded-[2.5rem] prose-img:shadow-xl prose-img:border prose-img:border-border">
            {/* 💰 TOP_AD_PLACEMENT */}
            <div className="ads-placeholder my-8 h-[100px] w-full bg-secondary/50 border border-dashed border-border flex items-center justify-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest rounded-2xl">
              Commercial Intelligence Node
            </div>

            <MDXRemote source={post.content || ""} components={mdxComponents} />

            {/* 💰 BOTTOM_AD_PLACEMENT */}
            <div className="ads-placeholder my-12 h-[250px] w-full bg-secondary/50 border border-dashed border-border flex items-center justify-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest rounded-[2rem]">
              Strategic Network Advertisement
            </div>
          </div>

          {/* 2.2 Takeaways & Strategic Actions */}
          <section className="mt-20 rounded-[2rem] border border-border bg-muted/30 p-10">
            <div className="mb-6 flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              <div className="h-1.5 w-6 bg-primary" />
              Strategic Takeaways
            </div>
            <ul className="space-y-6">
              {[
                "ดำเนินการประเมินความเสี่ยงและจัดเตรียมเอกสารตามเกณฑ์มาตรฐานล่าสุด",
                "ตรวจสอบความถูกต้องของรายการเดินบัญชีและที่มาของรายได้ให้ชัดเจน",
                "ปรึกษาผู้เชี่ยวชาญผ่านช่องทางที่ปลอดภัยเพื่อลดความเสี่ยงในการถูกปฏิเสธ"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[15px] text-muted-foreground font-medium">
                  <span className="text-primary font-mono font-bold">[0{i+1}]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        {/* 3. Secure Side Interface (Authority Panel) */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            {/* 3.1 Author Profile (E-E-A-T Master) */}
            <div className="bg-white border-border border-2 rounded-[2.5rem] p-10 shadow-xl shadow-primary/5 overflow-hidden relative group transition-all hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] transition-opacity group-hover:opacity-[0.08]">
                <ShieldCheck size={120} className="text-primary" />
              </div>

              <div className="space-y-8 relative z-10">
                <div className="text-primary flex items-center gap-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                  <User className="h-4 w-4" />
                  <span>Authority Profile</span>
                </div>

                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-primary/20 bg-primary/5 p-1 transition-all group-hover:border-primary/40">
                    <Image
                      src="/branding/founder-avatar.webp"
                      alt={post.author || "9mza"}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black tracking-tight text-foreground uppercase italic">
                      {post.author || "9mza"}
                    </h4>
                    <p className="text-[11px] text-primary font-mono font-black uppercase tracking-[0.2em]">
                      Lead Architect
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <VerifiedBadge
                    caseId={post.author_id || "UL-P-001"}
                    variant="minimal"
                    className="w-full"
                  />
                </div>

                <p className="text-[14px] text-muted-foreground leading-relaxed font-medium">
                  ผู้เชี่ยวชาญด้านการจัดการข้อมูลตัวตนดิจิทัลและวิศวกรรมภาพลักษณ์
                  ผู้วางโครงสร้างมาตรฐาน <span className="text-foreground font-bold italic">The Shield Protocol</span>
                  เพื่อความโปร่งใสระดับสากล
                </p>

                <div className="pt-4 border-t border-border">
                  <Link href="/about" className="text-primary hover:text-foreground flex items-center justify-between text-[11px] font-black uppercase tracking-widest transition-colors">
                    View Credentials <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 3.2 Metadata Intelligence */}
            <div className="bg-secondary/30 border-border border rounded-[2rem] p-8 space-y-8">
              <div className="text-muted-foreground flex items-center gap-2 font-mono text-[9px] font-black tracking-[0.4em] uppercase">
                <Terminal className="h-3 w-3" />
                <span>Intelligence Metadata</span>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Article ID", value: post.id || "UK-INTEL-09" },
                  { label: "Classification", value: post.category },
                  { label: "Status", value: "Verified Source", status: true }
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

              <p className="text-[10px] text-muted-foreground/50 leading-relaxed font-medium italic text-center">
                * Strategic intelligence strictly managed by UNLINK-GLOBAL Infrastructure
              </p>
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

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
