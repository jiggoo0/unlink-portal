/** @format */

import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import {
  Globe,
  Terminal,
  ShieldCheck,
  ExternalLink,
  Activity,
} from "lucide-react";
import { footerNav } from "@/constants/navigation";

/**
 * UNLINK-GLOBAL | Institutional Footer Protocol
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050810] pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="container relative z-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* --- Brand & Authority Sector --- */}
          <div className="space-y-10 lg:col-span-5">
            <div className="space-y-6">
              <Link href="/" className="group flex items-center gap-4">
                <div className="bg-emerald-500/5 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/10 transition-all duration-500 group-hover:bg-emerald-500/10">
                  <Globe className="text-emerald-500 h-8 w-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
                    {siteConfig.name.split("-")[0]}
                    <span className="text-emerald-500 not-italic text-sm ml-0.5">
                      {siteConfig.name.split("-")[1]
                        ? `-${siteConfig.name.split("-")[1]}`
                        : ""}
                    </span>
                  </span>
                  <span className="text-emerald-500/60 font-mono text-[9px] tracking-[0.4em] uppercase font-bold mt-1">
                    Global Accreditation Authority
                  </span>
                </div>
              </Link>
              <p className="text-slate-400 max-w-sm text-lg leading-relaxed font-light">
                หน่วยงานกลางในการกำกับดูแลและรับรองข้อมูลตัวตนดิจิทัล
                เพื่อสร้างรากฐานความเชื่อมั่นระดับสถาบันและความโปร่งใสสากล
                ภายใต้การดูแลของทีมวิศวกรข้อมูลชั้นนำ
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/5 border-white/10 flex items-center gap-3 rounded-xl border px-6 py-4 backdrop-blur-md">
                <ShieldCheck className="text-emerald-500 h-4 w-4" />
                <span className="text-white font-mono text-[9px] tracking-[0.3em] uppercase font-bold">
                  Institutional Registry
                </span>
              </div>
              <div className="bg-white/5 border-white/10 flex items-center gap-3 rounded-xl border px-6 py-4 backdrop-blur-md">
                <Activity className="text-emerald-500 h-4 w-4" />
                <span className="text-white font-mono text-[9px] tracking-[0.3em] uppercase font-bold">
                  Certified Data Node
                </span>
              </div>
            </div>
          </div>

          {/* --- Strategic Links Grid --- */}
          <div className="grid grid-cols-2 gap-10 lg:col-span-4">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.4em] text-white uppercase italic border-l-2 border-emerald-500 pl-4">
                Protocols
              </h4>
              <ul className="space-y-4">
                {footerNav.solutions.slice(0, 4).map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-slate-500 hover:text-emerald-500 transition-all text-sm font-light flex items-center gap-2 group"
                    >
                      <div className="h-1 w-0 bg-emerald-500/40 transition-all group-hover:w-2" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.4em] text-white uppercase italic border-l-2 border-emerald-500 pl-4">
                Authority
              </h4>
              <ul className="space-y-4">
                {footerNav.support.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-slate-500 hover:text-emerald-500 transition-all text-sm font-light"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- Infrastructure --- */}
          <div className="space-y-8 lg:col-span-3">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-white uppercase italic border-l-2 border-emerald-500 pl-4">
              Registry Infrastructure
            </h4>
            <div className="bg-emerald-500/5 rounded-3xl border border-emerald-500/10 p-8 space-y-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 transition-opacity group-hover:opacity-10">
                <Terminal size={80} />
              </div>

              <div className="flex flex-col gap-4 relative z-10">
                <div className="bg-emerald-500/10 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Terminal className="text-emerald-500 h-6 w-6" />
                </div>
                <div>
                  <p className="text-white text-lg font-black tracking-tighter uppercase italic">
                    AEMDEVWEB
                  </p>
                  <p className="text-emerald-500/60 font-mono text-[7px] mt-1 tracking-widest uppercase font-bold">
                    System Architecture Lead
                  </p>
                </div>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed font-light relative z-10">
                Architected by AEMDEVWEB for global data integrity and registry
                security standards.
              </p>
              <div className="pt-2 relative z-10 border-t border-white/5">
                <a
                  href="https://www.aemdevweb.com"
                  target="_blank"
                  className="text-emerald-500 hover:text-white flex items-center justify-between text-[10px] font-bold tracking-widest uppercase transition-all"
                >
                  Source Node <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">
          <div className="flex flex-col gap-2">
            <p className="text-slate-600 text-[9px] tracking-[0.4em] uppercase font-bold">
              © {new Date().getFullYear()} UNLINK-GLOBAL • Registry Status:
              ACTIVE
            </p>
            <p className="text-slate-700 font-mono text-[7px] tracking-[0.5em] uppercase">
              NODE_ID: 0x_ACCREDITED_2026_STABLE
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {footerNav.connect.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                className="text-slate-500 hover:text-emerald-500 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors flex items-center gap-2"
              >
                {item.title}
                {item.external && (
                  <ExternalLink size={10} className="opacity-40" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
