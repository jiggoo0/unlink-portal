/** @format */

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/animated-section";

interface SectionHeaderProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  titleHighlight?: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
  isItalic?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  className,
  align = "left",
  isItalic = true,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <AnimatedSection
      className={cn(
        "mb-16 flex flex-col gap-4 max-w-3xl",
        alignClasses[align],
        className,
      )}
    >
      {badge &&
        (typeof badge === "string" ? (
          <Badge
            variant="outline"
            className="border-primary/20 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.4em] uppercase"
          >
            {badge}
          </Badge>
        ) : (
          <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
            {badge}
          </div>
        ))}

      <h2 className="text-4xl font-bold tracking-tighter md:text-6xl uppercase leading-[0.95] text-white">
        {title}{" "}
        {titleHighlight && (
          <span
            className={cn(
              "text-primary glow-gold block md:inline",
              isItalic && "italic",
            )}
          >
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-muted-foreground text-lg font-light leading-relaxed md:text-xl">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
