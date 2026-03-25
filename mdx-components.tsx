import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import {
  Info,
  AlertTriangle,
  CheckCircle2,
  Shield,
  ShieldCheck,
  Lock,
  AlertCircle,
  Wrench,
  Search,
  BarChart,
  Lightbulb,
  CheckCircle,
  ShieldAlert,
  Fingerprint,
  ClipboardList,
  FileText,
  Zap,
  Globe,
  Activity,
  ArrowRight,
  Target,
} from "lucide-react";
import { siteConfig } from "@/constants/site-config";

/**
 * UNLINK-GLOBAL | Root MDX Architecture
 * -------------------------------------------------------------------------
 * ไฟล์ศูนย์กลางสำหรับจัดการคอมโพเนนต์ที่ใช้ใน MDX ทั้งหมด
 * เป็นไปตามมาตรฐาน Next.js App Router
 */

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 1. Base HTML Element Overrides
    h1: ({ className, ...props }: React.ComponentPropsWithoutRef<"h1">) => (
      <h1
        className={cn(
          "mt-16 mb-10 text-3xl font-black tracking-tighter text-white uppercase md:text-5xl flex items-center flex-wrap gap-4",
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: React.ComponentPropsWithoutRef<"h2">) => (
      <h2
        className={cn(
          "mt-20 mb-10 border-b border-white/5 pb-8 text-2xl font-bold tracking-tight text-white uppercase md:text-3xl flex items-center flex-wrap gap-3",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: React.ComponentPropsWithoutRef<"h3">) => (
      <h3
        className={cn(
          "text-primary mt-14 mb-8 text-lg font-bold tracking-widest uppercase flex items-center flex-wrap gap-2",
          className,
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: React.ComponentPropsWithoutRef<"p">) => (
      <p
        className={cn(
          "mb-12 text-sm leading-[1.8] font-light tracking-wide text-zinc-400 md:text-lg/9",
          className,
        )}
        {...props}
      />
    ),
    strong: ({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"strong">) => (
      <strong
        className={cn("font-bold text-white italic", className)}
        {...props}
      />
    ),
    a: ({ className, ...props }: React.ComponentPropsWithoutRef<"a">) => (
      <a
        className={cn(
          "text-primary bg-primary/5 px-1 py-0.5 rounded underline decoration-primary/40 underline-offset-[4px] transition-all hover:decoration-primary hover:bg-primary/20 hover:text-white font-bold inline-flex items-center",
          className,
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }: React.ComponentPropsWithoutRef<"ul">) => (
      <ul
        className={cn("my-12 ml-4 list-none space-y-8", className)}
        {...props}
      />
    ),
    ol: ({ className, ...props }: React.ComponentPropsWithoutRef<"ol">) => (
      <ol
        className={cn(
          "my-12 ml-4 list-none space-y-8 counter-reset-item",
          className,
        )}
        {...props}
      />
    ),
    li: ({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"li"> & { parent?: string }) => {
      const isOrdered = props.parent === "ol";
      return (
        <li
          className={cn(
            "relative pl-10 font-light tracking-wide text-zinc-300 md:text-base",
            "before:absolute before:left-0 before:flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:text-[10px] before:font-bold before:transition-all",
            "hover:before:scale-110",
            !isOrdered &&
              "before:content-[''] before:top-2.5 before:h-1.5 before:w-1.5 before:bg-primary/60 before:rounded-full",
            className,
          )}
          {...props}
        />
      );
    },
    blockquote: ({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className={cn(
          "border-primary/30 bg-white/[0.02] my-16 rounded-2xl border-l-4 p-12 text-lg font-light text-zinc-300 italic backdrop-blur-sm leading-loose",
          className,
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: React.ComponentPropsWithoutRef<"code">) => (
      <code
        className={cn(
          "text-primary rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs",
          className,
        )}
        {...props}
      />
    ),
    hr: ({ className, ...props }: React.ComponentPropsWithoutRef<"hr">) => (
      <hr className={cn("my-20 border-white/5", className)} {...props} />
    ),
    pre: ({ className, ...props }: React.ComponentPropsWithoutRef<"pre">) => (
      <pre
        className={cn(
          "my-16 overflow-x-auto rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-black/50 p-8 font-mono text-sm backdrop-blur-sm",
          className,
        )}
        {...props}
      />
    ),
    table: ({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"table">) => (
      <div className="my-16 w-full overflow-x-auto rounded-xl border border-white/10 p-2 backdrop-blur-sm">
        <table
          className={cn("w-full caption-bottom text-sm", className)}
          {...props}
        />
      </div>
    ),
    thead: ({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"thead">) => (
      <thead className={cn("[&_tr]:border-b-0", className)} {...props} />
    ),
    tbody: ({
      className,
      ...props
    }: React.ComponentPropsWithoutRef<"tbody">) => (
      <tbody
        className={cn("[&_tr:last-child]:border-0", className)}
        {...props}
      />
    ),
    tr: ({ className, ...props }: React.ComponentPropsWithoutRef<"tr">) => (
      <tr
        className={cn(
          "border-b border-white/10 transition-colors hover:bg-white/5",
          className,
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }: React.ComponentPropsWithoutRef<"th">) => (
      <th
        className={cn(
          "h-16 px-8 text-left align-middle text-xs font-bold uppercase tracking-widest text-white",
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.ComponentPropsWithoutRef<"td">) => (
      <td
        className={cn(
          "p-8 align-middle font-light text-zinc-300 [&>p]:mb-0",
          className,
        )}
        {...props}
      />
    ),

    // 2. Custom Intelligence Components
    img: (props) => (
      <div className="mx-auto my-16 max-w-4xl overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
        <Image
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          {...(props as ImageProps)}
        />
      </div>
    ),
    Image: (props: React.ComponentPropsWithoutRef<typeof Image>) => {
      const { width: _width, height: _height, src, alt, ...rest } = props;
      return (
        <figure className="mx-auto my-20 max-w-4xl">
          <div className="group relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1122] shadow-2xl">
            <Image
              src={src || ""}
              alt={alt || "Strategic Document Image"}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="scale-[1.01] object-cover opacity-90 transition-all duration-1000 group-hover:scale-100 group-hover:opacity-100"
              {...rest}
            />
          </div>
          {alt && (
            <figcaption className="mt-8 text-center text-[9px] font-bold tracking-[0.6em] text-zinc-600 uppercase">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    },
    Callout: ({
      children,
      type = "info",
    }: {
      children: React.ReactNode;
      type?: "info" | "warning" | "success" | "secure";
    }) => {
      const icons = {
        info: <Info className="h-5 w-5 text-blue-400" />,
        warning: <AlertTriangle className="text-accent h-5 w-5" />,
        success: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
        secure: <Lock className="text-accent h-5 w-5" />,
      };
      return (
        <div
          className={cn(
            "my-10 flex gap-6 rounded-sm border border-white/5 p-8 backdrop-blur-xl",
            type === "info" && "border-blue-500/20 bg-blue-500/5",
            type === "warning" && "border-accent/20 bg-accent/5",
            type === "success" && "border-emerald-500/20 bg-emerald-500/5",
            type === "secure" &&
              "border-accent/30 bg-accent/10 shadow-[inner_0_0_20px_rgba(180,140,40,0.05)]",
          )}
        >
          <div className="mt-1 shrink-0">{icons[type]}</div>
          <div className="text-sm leading-relaxed font-light tracking-wide text-slate-300 uppercase md:text-base">
            {children}
          </div>
        </div>
      );
    },
    ProtocolCTA: () => {
      return (
        <div className="border-accent/20 my-20 rounded-sm border bg-gradient-to-br from-slate-900 to-slate-950 p-12 text-center">
          <Shield className="text-accent mx-auto mb-6 h-10 w-10" />
          <h4 className="mb-4 text-xl font-black tracking-widest text-white uppercase">
            ต้องการเริ่มต้นวางยุทธศาสตร์ทันที?
          </h4>
          <p className="mb-8 text-sm font-light tracking-widest text-slate-400 uppercase">
            ติดต่อฝ่ายวิเคราะห์เชิงกลยุทธ์เพื่อขอรับการประเมินเบื้องต้นได้ทันที
          </p>
          <a
            href={siteConfig.links.line}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-light inline-block rounded-sm px-10 py-4 text-[10px] font-black tracking-[0.3em] text-slate-950 uppercase transition-all hover:scale-105"
          >
            CONTACT VIA LINE OFFICIAL
          </a>
        </div>
      );
    },

    // 3. Operational Icons
    Target: (props: React.ComponentProps<"svg">) => (
      <Target className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    AlertCircle: (props: React.ComponentProps<"svg">) => (
      <AlertCircle
        className="text-primary mr-2 inline-block h-5 w-5"
        {...props}
      />
    ),
    AlertTriangle: (props: React.ComponentProps<"svg">) => (
      <AlertTriangle
        className="text-primary mr-2 inline-block h-5 w-5"
        {...props}
      />
    ),
    Wrench: (props: React.ComponentProps<"svg">) => (
      <Wrench className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    Shield: (props: React.ComponentProps<"svg">) => (
      <Shield className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    ShieldCheck: (props: React.ComponentProps<"svg">) => (
      <ShieldCheck
        className="text-primary mr-2 inline-block h-5 w-5"
        {...props}
      />
    ),
    Lock: (props: React.ComponentProps<"svg">) => (
      <Lock className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    Search: (props: React.ComponentProps<"svg">) => (
      <Search className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    BarChart: (props: React.ComponentProps<"svg">) => (
      <BarChart className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    Lightbulb: (props: React.ComponentProps<"svg">) => (
      <Lightbulb
        className="text-primary mr-2 inline-block h-5 w-5"
        {...props}
      />
    ),
    CheckCircle: (props: React.ComponentProps<"svg">) => (
      <CheckCircle
        className="text-primary mr-2 inline-block h-5 w-5"
        {...props}
      />
    ),
    CheckCircle2: (props: React.ComponentProps<"svg">) => (
      <CheckCircle2
        className="text-primary mr-2 inline-block h-5 w-5"
        {...props}
      />
    ),
    Info: (props: React.ComponentProps<"svg">) => (
      <Info className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    ShieldAlert: (props: React.ComponentProps<"svg">) => (
      <ShieldAlert
        className="text-primary mr-2 inline-block h-5 w-5"
        {...props}
      />
    ),
    Fingerprint: (props: React.ComponentProps<"svg">) => (
      <Fingerprint
        className="text-primary mr-2 inline-block h-5 w-5"
        {...props}
      />
    ),
    ClipboardList: (props: React.ComponentProps<"svg">) => (
      <ClipboardList
        className="text-primary mr-2 inline-block h-5 w-5"
        {...props}
      />
    ),
    FileText: (props: React.ComponentProps<"svg">) => (
      <FileText className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    Zap: (props: React.ComponentProps<"svg">) => (
      <Zap className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    Globe: (props: React.ComponentProps<"svg">) => (
      <Globe className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    Activity: (props: React.ComponentProps<"svg">) => (
      <Activity className="text-primary mr-2 inline-block h-5 w-5" {...props} />
    ),
    ArrowRight: (props: React.ComponentProps<"svg">) => (
      <ArrowRight
        className="text-primary ml-2 inline-block h-4 w-4"
        {...props}
      />
    ),

    ...components,
  };
}
