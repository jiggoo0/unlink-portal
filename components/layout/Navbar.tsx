/** @format */

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, ChevronDown, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  mainNav,
  navigationConfig,
  serviceCategories,
} from "@/constants/navigation";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";

/**
 * UNLINK-GLOBAL | High-Performance Navigation System (v5.0)
 * -------------------------------------------------------------------------
 * ผสมผสานความสวยงามแบบ Executive และความคล่องตัวบน Mobile
 * รองรับการแสดงผลบริการแบบ Dropdown และ Mobile Menu แบบแยกหมวดหมู่
 */
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null,
  );

  // ปิดเมนูเมื่อตรวจพบการเปลี่ยนหน้า
  React.useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMenu = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="bg-background/70 sticky top-0 z-50 w-full border-b border-border backdrop-blur-2xl transition-all duration-500">
      <div className="container flex h-20 items-center justify-between">
        {/* --- Brand Identity Protocol --- */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-all hover:opacity-90"
          onClick={closeMenu}
        >
          <div className="relative h-10 w-10">
            <Image
              src="/branding/logo.svg"
              alt="Unlink-Global Logo"
              fill
              className="glow-gold transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xl font-black tracking-tighter uppercase leading-none">
              {siteConfig.name.split("-")[0]}
              <span className="text-primary align-top text-sm">
                {siteConfig.name.split("-")[1]
                  ? `-${siteConfig.name.split("-")[1]}`
                  : ""}
              </span>
            </span>
            <span className="text-[8px] font-mono tracking-[0.3em] text-muted-foreground uppercase mt-1">
              Reputation Engineering
            </span>
          </div>
        </Link>

        {/* --- Desktop Navigation Interface --- */}
        <nav className="hidden items-center gap-2 md:flex">
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
                    "hover:text-primary group relative flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300",
                    isActive
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:bg-secondary/50",
                  )}
                >
                  {link.title}
                  {isServices && (
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-300",
                        activeDropdown === "services" && "rotate-180",
                      )}
                    />
                  )}
                </Link>

                {/* --- Services Dropdown Panel --- */}
                {isServices && (
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute left-1/2 top-full mt-2 w-[600px] -translate-x-1/2 overflow-hidden rounded-[2.5rem] border border-border bg-popover/95 p-8 shadow-2xl backdrop-blur-3xl"
                      >
                        <div className="grid grid-cols-3 gap-8">
                          {serviceCategories.map((cat, idx) => (
                            <div key={idx} className="space-y-4">
                              <div className="flex flex-col gap-1">
                                <span className="text-primary font-mono text-[9px] font-black uppercase tracking-[0.2em]">
                                  {cat.title}
                                </span>
                                <p className="text-[10px] text-muted-foreground leading-tight">
                                  {cat.description}
                                </p>
                              </div>
                              <div className="flex flex-col gap-2">
                                {cat.items.map((item, i) => (
                                  <Link
                                    key={i}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-foreground group flex items-center gap-2 text-[11px] font-medium transition-colors"
                                  >
                                    <div className="h-1 w-1 rounded-full bg-primary/20 transition-all group-hover:w-2 group-hover:bg-primary" />
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 border-t border-border pt-6 text-center">
                          <Link
                            href="/services"
                            className="text-primary group flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
                          >
                            สำรวจบริการทั้งหมด{" "}
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}

          <div className="mx-4 h-5 w-px bg-border" />

          <Button
            className="group relative h-11 overflow-hidden rounded-full bg-primary px-8 text-[10px] font-black uppercase tracking-widest text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all hover:scale-105 active:scale-95"
            asChild
          >
            <Link href={navigationConfig.header.ctaLink}>
              <Zap className="mr-2 h-3.5 w-3.5 fill-primary-foreground" />
              {navigationConfig.header.ctaText}
            </Link>
          </Button>
        </nav>

        {/* --- Mobile Interface Toggle --- */}
        <button
          className="bg-secondary hover:bg-secondary/80 flex h-12 w-12 items-center justify-center rounded-2xl text-muted-foreground transition-all active:scale-90 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* --- Mobile Liaison Overlay (Full-screen Architecture) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] flex flex-col bg-background md:hidden"
          >
            {/* Mobile Header Overlay */}
            <div className="flex h-20 items-center justify-between px-8 border-b border-border">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-primary italic">
                Navigation Protocol
              </span>
              <button
                onClick={closeMenu}
                className="bg-secondary flex h-10 w-10 items-center justify-center rounded-xl"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-10 space-y-12">
              {/* Primary Navigation Tracks */}
              <div className="flex flex-col gap-8">
                {mainNav.map((link) => (
                  <div key={link.href} className="space-y-4">
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center justify-between text-3xl font-black italic tracking-tighter uppercase",
                        pathname === link.href
                          ? "text-primary"
                          : "text-foreground",
                      )}
                    >
                      {link.title}
                      <ArrowRight className="h-6 w-6 opacity-20" />
                    </Link>

                    {/* Expandable Services for Mobile */}
                    {link.href === "/services" && (
                      <div className="grid grid-cols-1 gap-4 mt-4 bg-secondary/20 p-6 rounded-3xl border border-border">
                        {serviceCategories.map((cat, i) => (
                          <div key={i} className="space-y-3">
                            <span className="text-primary font-mono text-[9px] font-black uppercase tracking-widest opacity-50">
                              {cat.title}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {cat.items.map((item, j) => (
                                <Link
                                  key={j}
                                  href={item.href}
                                  onClick={closeMenu}
                                  className="bg-secondary rounded-full px-4 py-2 text-[10px] font-bold text-muted-foreground hover:text-foreground"
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Secure Action Sector */}
              <div className="space-y-6 pt-10 border-t border-border">
                <Button
                  className="h-16 w-full rounded-2xl bg-primary text-xs font-black uppercase tracking-[0.2em] text-primary-foreground"
                  asChild
                  onClick={closeMenu}
                >
                  <Link href={navigationConfig.header.ctaLink}>
                    {navigationConfig.header.ctaText}
                  </Link>
                </Button>
                <div className="flex items-center justify-center gap-4 text-muted-foreground/60">
                  <Shield className="h-4 w-4" />
                  <span className="font-mono text-[8px] uppercase tracking-widest">
                    AES-256 Encrypted Connection
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
