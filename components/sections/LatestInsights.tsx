/** @format */

import { getAllPosts } from "@/lib/mdx";
import { BlogPostFrontmatter } from "@unlink/shared/types";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * UNLINK-GLOBAL | Latest Strategic Insights Section
 * แสดงบทความวิเคราะห์เชิงลึกเพื่อส่งเสริม E-E-A-T
 */
export default async function LatestInsights() {
  const allPosts = await getAllPosts<BlogPostFrontmatter>("blog");
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {latestPosts.map((post: BlogPostFrontmatter, index: number) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group relative flex flex-col space-y-4 overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={post.image || "/images/blog/default-insight.webp"}
              alt={post.title}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
          </div>
          <div className="space-y-3">
            <span className="text-primary/60 font-mono text-[9px] tracking-[0.3em] uppercase">
              {post.category}
            </span>
            <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 text-sm font-light leading-relaxed">
              {post.description}
            </p>
          </div>
          <div className="pt-2">
            <span className="text-primary inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase opacity-0 transition-all group-hover:opacity-100">
              Read Protocol <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
