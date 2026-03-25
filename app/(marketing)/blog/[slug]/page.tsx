/** @format */

import { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXComponents } from "@/mdx-components";
import { SecureChannel } from "@/components/sections/SecureChannel";
import { Calendar, Clock, ShieldCheck, Lock, Terminal } from "lucide-react";
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
    <article className="pb-24">
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
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 1. Protocol Intelligence Header */}
      <header className="border-border/50 bg-muted/10 relative mb-20 overflow-hidden border-b py-24 min-h-[400px] flex items-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          {post.image && (
            <Image
              src={getImageUrl(post.image)}
              alt={post.title}
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
                {post.category} Intelligence
              </Badge>
              <span className="text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Calendar className="h-3 w-3" /> {post.date}
              </span>
              <span className="text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                <Clock className="h-3 w-3" /> 5 Min Read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] font-bold tracking-tighter text-balance text-white break-words overflow-wrap-anywhere">
              {post.title}
            </h1>

            <div className="border-border/10 grid gap-8 border-t pt-8 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2">
                  <ShieldCheck className="text-primary/70 h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
                  Verified Intelligence
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2">
                  <Lock className="text-primary/70 h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
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
          {/* 2.1 Auto-Generated Intelligence Summary (Key Insights) */}
          <section className="mb-16 rounded-2xl border border-primary/10 bg-primary/5 p-10 backdrop-blur-sm shadow-2xl shadow-primary/5">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Terminal className="h-4 w-4" />
              </div>
              <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                Intelligence Summary & Strategic Analysis
              </h2>
            </div>
            <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground/90 italic border-l-2 border-primary/30 pl-6 py-1">
              {post.description}
            </p>

            {post.features && post.features.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {post.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-3.5 w-3.5 text-primary/60 shrink-0" />
                    <span className="text-[13px] leading-snug text-zinc-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          <div className="prose prose-invert prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-strong:text-primary prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80 prose-img:rounded-[2rem] prose-img:shadow-2xl prose-img:border prose-img:border-white/5 max-w-none w-full break-words">
            {/* 💰 TOP_AD_PLACEMENT (AdSense Ready) */}
            <div className="ads-placeholder my-8 h-[100px] w-full bg-white/5 border border-dashed border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest rounded-xl">
              Commercial Intelligence Slot
            </div>

            <MDXRemote source={post.content || ""} components={mdxComponents} />

            {/* 💰 BOTTOM_AD_PLACEMENT (AdSense Ready) */}
            <div className="ads-placeholder my-12 h-[250px] w-full bg-white/5 border border-dashed border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest rounded-2xl">
              Strategic Network Advertisement
            </div>
          </div>

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
                  ดำเนินการประเมินความเสี่ยงและจัดเตรียมเอกสารตามเกณฑ์มาตรฐานล่าสุด
                </span>
              </li>
              <li className="flex items-start gap-4 text-sm text-zinc-400">
                <span className="text-primary font-mono">[02]</span>
                <span>
                  ตรวจสอบความถูกต้องของรายการเดินบัญชีและที่มาของรายได้ให้ชัดเจน
                </span>
              </li>
              <li className="flex items-start gap-4 text-sm text-zinc-400">
                <span className="text-primary font-mono">[03]</span>
                <span>
                  ปรึกษาผู้เชี่ยวชาญผ่านช่องทางที่ปลอดภัยเพื่อลดความเสี่ยงในการถูกปฏิเสธ
                </span>
              </li>
            </ul>
          </section>
        </main>

        {/* 3. Secure Side Interface */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            {/* 3.1 Author Profile (E-E-A-T) */}
            <div className="lab-card border-white/5 bg-white/[0.02] border p-8 shadow-2xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-5 transition-opacity group-hover:opacity-10">
                <ShieldCheck size={80} className="text-primary" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="text-primary/60 flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Verified Author Profile</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-primary/20 bg-primary/5 p-1 transition-all group-hover:border-primary/40">
                    <Image
                      src="/branding/founder-avatar.webp"
                      alt={post.author || "9mza"}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-black tracking-tight text-white uppercase italic">
                      {post.author || "9mza"}
                    </h4>
                    <p className="text-[10px] text-primary/70 font-mono font-bold uppercase tracking-widest">
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

                <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                  ผู้เชี่ยวชาญด้านการจัดการข้อมูลตัวตนดิจิทัลและวิศวกรรมภาพลักษณ์
                  ผู้วางโครงสร้างมาตรฐาน The Shield Protocol
                  เพื่อความโปร่งใสระดับสากล
                </p>
              </div>
            </div>

            <div className="lab-card border-white/5 bg-white/[0.02] border p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-primary/60 flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] uppercase">
                  <Terminal className="h-3 w-3" />
                  <span>Intelligence Summary</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Article ID
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      {post.id || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Classification
                    </span>
                    <span className="text-xs font-bold text-white uppercase">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      Status
                    </span>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Verified Source
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-[9px] text-zinc-500 leading-relaxed font-light italic">
                    *
                    ข้อมูลนี้จัดทำขึ้นเพื่อการศึกษาและการวางแผนเชิงกลยุทธ์ภายใต้มาตรฐานความปลอดภัยระดับสูงของ{" "}
                    {siteConfig.name}
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
