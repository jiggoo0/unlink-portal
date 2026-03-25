/** @format */

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { CaseStudy } from "@unlink/shared/types";
import { getImageUrl } from "@/lib/utils";
import { ArrowRight, FileText, LucideProps, LucideIcon } from "lucide-react";
import { AnimatedCard } from "@/components/animated-section";

interface CaseStudyCardProps {
  study: CaseStudy;
  priority?: boolean;
}

/**
 * DynamicIcon Loader Protocol
 */
const DynamicIcon = dynamic(
  () =>
    import("lucide-react").then((mod) => {
      return (props: LucideProps & { name: string }) => {
        const { name, ...rest } = props;
        const Icon =
          (mod as unknown as Record<string, LucideIcon>)[name] || FileText;
        return <Icon {...rest} />;
      };
    }),
  {
    ssr: true,
    loading: () => (
      <div className="h-7 w-7 animate-pulse bg-primary/10 rounded-lg" />
    ),
  },
);

export default function CaseStudyCard({
  study,
  priority = false,
}: CaseStudyCardProps) {
  if (!study) return null;

  return (
    <Link href={`/case-studies/${study.slug}`} className="block h-full">
      <AnimatedCard className="group relative flex h-full min-h-[520px] cursor-pointer flex-col overflow-hidden rounded-[2.5rem] border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 active:scale-[0.98]">
        {/* 1. Header Image Section - เด่นชัดและดึงดูดสายตา */}
        <div className="relative h-64 w-full overflow-hidden">
          {study.image && (
            <Image
              src={getImageUrl(study.image)}
              alt={study.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-700 group-hover:scale-110"
            />
          )}
          {/* Badge Category */}
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-primary/90 text-primary-foreground text-[10px] font-black px-4 py-2 rounded-xl shadow-lg backdrop-blur-md uppercase tracking-widest">
              {study.category}
            </span>
          </div>
          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
        </div>

        {/* 2. Content Section - อ่านง่าย ชัดเจน */}
        <div className="relative z-10 flex flex-1 flex-col p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="bg-primary/10 border-primary/20 flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-sm">
              <DynamicIcon
                name={study.iconName || "FileText"}
                className="text-primary h-6 w-6"
              />
            </div>
            <div className="text-muted-foreground font-mono text-[9px] tracking-[0.2em] uppercase">
              ID: {study.id || study.slug.toUpperCase()}
            </div>
          </div>

          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-bold tracking-tighter text-card-foreground transition-colors group-hover:text-primary line-clamp-2">
              {study.title}
            </h3>
            <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed font-light">
              {study.excerpt || study.shortDescription || study.description}
            </p>

            {/* Core Outcome - จุดเด่นที่คนไทยชอบดู */}
            {study.outcome && (
              <div className="mt-4 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                <p className="text-[10px] text-emerald-500/60 uppercase font-bold tracking-widest mb-1">
                  Result / Outcome
                </p>
                <p className="text-xs text-emerald-500 font-bold">
                  {study.outcome}
                </p>
              </div>
            )}
          </div>

          {/* 3. Footer Action */}
          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <span className="text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase">
              View Detailed Protocol
            </span>
            <div className="bg-primary/10 group-hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-[-45deg]">
              <ArrowRight className="text-primary h-4 w-4 transition-colors group-hover:text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.05),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </AnimatedCard>
    </Link>
  );
}
