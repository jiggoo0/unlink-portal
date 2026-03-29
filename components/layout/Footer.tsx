/** @format */

import Link from "next/link";
import {
  Globe,
  Terminal,
  ShieldCheck,
  ExternalLink,
  Activity,
  Lock,
  ArrowRight,
} from "lucide-react";
import { footerNav } from "@/constants/navigation";
import VerifiedBadge from "@/components/shared/VerifiedBadge";
import { cn } from "@/lib/utils";

/**
 * 🔒 UNLINK-GLOBAL | PREMIUM EXECUTIVE FOOTER (v6.0)
 * -------------------------------------------------------------------------
 * ปรับปรุงโครงสร้างให้หรูหรา และสอดคล้องกับระบบ Navbar ใหม่
 * เน้นความน่าเชื่อถือระดับสถาบัน (Institutional Trust)
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background pt-32 pb-12">
      {/* 🔮 Background Glow Effect */}
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* --- 💎 BRAND & VISION SECTOR --- */}
          <div className="space-y-10 lg:col-span-5">
            <div className="space-y-6">
              <Link href="/" className="group flex items-center gap-4 transition-all duration-500">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 border border-primary/10 transition-all duration-500 group-hover:bg-primary/10 group-hover:rotate-[5deg] group-hover:scale-105 shadow-xl">
                  <Globe className="text-primary h-8 w-8 transition-transform group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black tracking-tighter text-foreground uppercase italic transition-colors group-hover:text-primary">
                      UNLINK
                    </span>
                    <span className="text-primary font-mono text-sm font-bold tracking-widest">
                      GLOBAL
                    </span>
                  </div>
                  <span className="text-muted-foreground font-mono text-[8px] tracking-[0.5em] uppercase font-black mt-1">
                    Accreditation Authority
                  </span>
                </div>
              </Link>
              <p className="text-muted-foreground/70 max-w-md text-lg leading-relaxed font-medium italic">
                "หน่วยงานกลางในการกำกับดูแลและรับรองข้อมูลตัวตนดิจิทัล สร้างรากฐานความเชื่อมั่นระดับสถาบันด้วยวิศวกรรมข้อมูลขั้นสูง"
              </p>
            </div>

            {/* 🌐 NODE NETWORK SELECTOR */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Portal", icon: Globe, href: "https://www.unlink-th.com" },
                { label: "Registry", icon: ShieldCheck, href: "https://registry.unlink-th.com" },
                { label: "Audit", icon: Activity, href: "https://audit.unlink-th.com" }
              ].map((node) => (
                <Link
                  key={node.label}
                  href={node.href}
                  target="_blank"
                  className="bg-secondary/30 border-border/40 flex items-center gap-3 rounded-xl border px-6 py-3 transition-all hover:border-primary/30 hover:bg-primary/5 group"
                >
                  <node.icon className="text-primary/60 h-4 w-4 transition-transform group-hover:scale-110 group-hover:text-primary" />
                  <span className="text-foreground font-mono text-[9px] tracking-[0.2em] uppercase font-black">
                    {node.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* --- 🔗 STRATEGIC LINKS GRID --- */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.4em] text-foreground uppercase italic border-l-2 border-primary pl-4">
                PROTOCOLS
              </h4>
              <ul className="space-y-4">
                {footerNav.solutions.slice(0, 4).map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground/60 hover:text-primary transition-all text-[13px] font-bold flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.4em] text-foreground uppercase italic border-l-2 border-primary pl-4">
                AUTHORITY
              </h4>
              <ul className="space-y-4">
                {footerNav.support.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground/60 hover:text-primary transition-all text-[13px] font-bold flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- 🖥️ INFRASTRUCTURE MODULE --- */}
          <div className="space-y-8 lg:col-span-3">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-foreground uppercase italic border-l-2 border-primary pl-4">
              SYSTEM INFRA
            </h4>
            <div className="bg-gradient-to-br from-primary/[0.03] to-transparent rounded-[2rem] border border-primary/10 p-8 space-y-6 relative group overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -right-10 opacity-[0.03] transition-opacity group-hover:opacity-[0.08] duration-700">
                <Terminal size={150} className="text-primary rotate-[-15deg]" />
              </div>

              <div className="flex flex-col gap-5 relative z-10">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20">
                  <Terminal className="text-primary h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-foreground text-xl font-black tracking-tighter uppercase italic group-hover:text-primary transition-colors">
                    AEMDEVWEB
                  </p>
                  <p className="text-primary/60 font-mono text-[8px] tracking-widest uppercase font-black">
                    Architecture Lead Node
                  </p>
                  <div className="pt-2">
                    <VerifiedBadge caseId="UL-C-001" variant="minimal" />
                  </div>
                </div>
              </div>
              
              <div className="pt-4 relative z-10 border-t border-border/40">
                <a
                  href="https://www.aemdevweb.com"
                  target="_blank"
                  className="group/btn text-muted-foreground hover:text-primary flex items-center justify-between text-[10px] font-black tracking-widest uppercase transition-all"
                >
                  Connect Node <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- 🔒 SYSTEM INTEGRITY STATUS --- */}
        <div className="mt-24 pt-12 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="flex flex-col gap-1">
              <p className="text-muted-foreground/60 text-[10px] tracking-[0.3em] uppercase font-black">
                © {new Date().getFullYear()} UNLINK-GLOBAL AUTHORITY
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary/40 font-mono text-[8px] tracking-widest uppercase">
                <Lock className="h-3 w-3" /> 
                <span>Secure Node: 0x_STABLE_2026</span>
              </div>
            </div>
            
            {/* Identity Signatures */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[9px] font-black tracking-[0.2em] text-muted-foreground/20 uppercase">
              <span className="hover:text-primary/20 transition-colors cursor-default">นายอลงกรณ์ ยมเกิด</span>
              <span className="hover:text-primary/20 transition-colors cursor-default">9mza</span>
              <span className="hover:text-primary/20 transition-colors cursor-default">เจ้าป่า</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="bg-secondary/20 rounded-full px-6 py-3 border border-border/40 flex items-center gap-3">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-muted-foreground">
                Registry System: <span className="text-primary">OPERATIONAL</span>
              </span>
            </div>
            <p className="text-[8px] font-mono text-muted-foreground/40 uppercase tracking-[0.4em]">
              High-Availability Cluster Active
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
