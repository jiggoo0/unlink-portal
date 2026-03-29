/** @format */

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Shield,
  Zap,
  Activity,
  Database,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  mainNav,
  navigationConfig,
  serviceCategories,
} from "@/constants/navigation";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";

/**
 * 🔒 UNLINK-GLOBAL | EXECUTIVE NAVIGATION SYSTEM (v6.0 - Premium RE)
 * -------------------------------------------------------------------------
 * ดีไซน์ใหม่เน้นความหรูหรา โปร่งใส และความปลอดภัยสูงสุด
 * แก้ไขปัญหา UI ทับซ้อนด้วยระบบ Layering ขั้นสูง
 */
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);

  // ตรวจจับการ Scroll เพื่อเปลี่ยนสไตล์ Navbar
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full transition-all duration-500 z-[1000]",
        scrolled 
          ? "bg-background/80 border-b border-border/40 backdrop-blur-2xl py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* --- 💎 PREMIUM BRANDING SECTOR --- */}
        <Link
          href="/"
          className="group relative flex items-center gap-4 transition-all duration-500"
          onClick={closeMenu}
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-primary/30 group-hover:rotate-[10deg]">
              <Image
                src="/branding/logo.svg"
                alt="UNLINK-GLOBAL"
                width={28}
                height={28}
                className="transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(72,135,255,0.5)]"
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-sans text-2xl font-black tracking-tighter leading-none text-foreground uppercase italic group-hover:text-primary transition-colors">
                UNLINK
              </span>
              <span className="text-primary font-mono text-xs font-bold tracking-widest">
                GLOBAL
              </span>
            </div>
            <span className="text-[8px] font-mono tracking-[0.5em] text-muted-foreground/60 uppercase mt-1 font-black">
              Reputation Authority
            </span>
          </div>
        </Link>

        {/* --- 🖥️ DESKTOP NAVIGATION TRACK --- */}
        <nav className="hidden items-center gap-2 lg:flex">
          {mainNav.map((link) => {
            const isActive = pathname === link.href;
            const isServices = link.href === "/services";

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => isServices && setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative flex items-center gap-2 rounded-full px-6 py-2.5 text-[11px] font-black tracking-[0.15em] uppercase transition-all duration-500",
                    isActive
                      ? "text-primary bg-primary/5 shadow-[0_0_30px_rgba(72,135,255,0.1)]"
                      : "text-muted-foreground/70 hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {link.title}
                  {isServices && (
                    <ChevronDown className={cn(
                      "h-3 w-3 transition-transform duration-500",
                      activeDropdown === "services" && "rotate-180 text-primary"
                    )} />
                  )}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </Link>

                {/* --- 💎 MEGA DROPDOWN PANEL --- */}
                {isServices && (
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        className="absolute left-1/2 top-full mt-4 w-[750px] -translate-x-1/2 overflow-hidden rounded-[2.5rem] border border-white/10 bg-background/95 p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-3xl"
                      >
                        <div className="grid grid-cols-2 gap-16">
                          {serviceCategories.map((cat, idx) => (
                            <div key={idx} className="space-y-6">
                              <div className="flex flex-col gap-2">
                                <h4 className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                                  {cat.title}
                                </h4>
                                <p className="text-[11px] text-muted-foreground/60 leading-relaxed font-medium">
                                  {cat.description}
                                </p>
                              </div>
                              <div className="grid gap-3">
                                {cat.items.map((item, i) => (
                                  <Link
                                    key={i}
                                    href={item.href}
                                    className="group/item flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
                                  >
                                    <span className="text-[12px] font-bold text-muted-foreground group-hover/item:text-foreground transition-colors">
                                      {item.title}
                                    </span>
                                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 text-primary" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-10 border-t border-white/5 pt-8">
                          <Link
                            href="/services"
                            className="group flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
                          >
                            Explore Universal Protocol
                            <Zap className="h-4 w-4 fill-primary text-primary group-hover:scale-125 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}

          <div className="mx-4 h-6 w-px bg-white/10" />

          {/* 🌐 NODE SELECTOR */}
          <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
            <Link 
              href="https://registry.unlink-th.com" 
              target="_blank"
              className="px-4 py-2 text-[9px] font-black tracking-widest text-muted-foreground hover:text-primary transition-all uppercase"
            >
              Registry
            </Link>
            <Link 
              href="https://audit.unlink-th.com" 
              target="_blank"
              className="px-4 py-2 text-[9px] font-black tracking-widest text-muted-foreground hover:text-primary transition-all uppercase"
            >
              Audit
            </Link>
          </div>

          <Button
            className="ml-4 h-12 rounded-2xl bg-primary px-8 text-[11px] font-black uppercase tracking-[0.2em] text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            asChild
          >
            <Link href={navigationConfig.header.ctaLink}>
              {navigationConfig.header.ctaText}
            </Link>
          </Button>
        </nav>

        {/* --- 📱 MOBILE INTERFACE TRIGGER --- */}
        <button
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/50 text-foreground transition-all active:scale-90 lg:hidden border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Access Core"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div 
                key="close" 
                initial={{ rotate: -90, opacity: 0 }} 
                animate={{ rotate: 0, opacity: 1 }} 
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div 
                key="open" 
                initial={{ rotate: 90, opacity: 0 }} 
                animate={{ rotate: 0, opacity: 1 }} 
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* --- 📱 MOBILE ARCHITECTURE OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[2000] flex flex-col bg-background/95 lg:hidden"
          >
            <div className="flex h-24 items-center justify-between px-10 border-b border-white/5">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">
                Secure Channel
              </span>
              <button
                onClick={closeMenu}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-10 py-12 space-y-12">
              <div className="flex flex-col gap-8">
                {mainNav.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center justify-between text-4xl font-black italic tracking-tighter uppercase",
                        pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.title}
                      <ArrowRight className="h-8 w-8 opacity-10" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-8 pt-12 border-t border-white/5">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="https://registry.unlink-th.com"
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/5 bg-white/5 p-8 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
                  >
                    <Database className="h-6 w-6 text-primary" />
                    Registry
                  </Link>
                  <Link
                    href="https://audit.unlink-th.com"
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/5 bg-white/5 p-8 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
                  >
                    <Activity className="h-6 w-6 text-primary" />
                    Audit
                  </Link>
                </div>
                
                <Button
                  className="h-20 w-full rounded-3xl bg-primary text-sm font-black uppercase tracking-[0.3em] text-primary-foreground shadow-2xl shadow-primary/20"
                  asChild
                  onClick={closeMenu}
                >
                  <Link href={navigationConfig.header.ctaLink}>
                    {navigationConfig.header.ctaText}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
