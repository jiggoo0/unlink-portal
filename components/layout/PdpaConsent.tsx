"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, X } from "lucide-react";
import Link from "next/link";

/**
 * PDPA Consent Protocol (UnlinkTH Standard)
 * บังคับใช้ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล มาตรฐานปี 2026
 * ปรับปรุงประสิทธิภาพสูงสุดเพื่อ PageSpeed Score
 */
export default function PdpaConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 🛡️ ADAPTATION: Wrap in Promise to avoid synchronous setState warning
    void Promise.resolve().then(() => setMounted(true));

    let timer: NodeJS.Timeout;
    try {
      const consent = localStorage.getItem("unlink-pdpa-consent");
      if (!consent) {
        // หน่วงเวลาเล็กน้อยเพื่อให้เบราว์เซอร์จัดการ LCP ของส่วนอื่นให้เสร็จก่อน
        timer = setTimeout(() => setIsVisible(true), 3500);
      }
    } catch (e) {
      console.error("PDPA Consent Storage Access Error:", e);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem("unlink-pdpa-consent", "accepted");
      setIsVisible(false);
    } catch (e) {
      console.error("Failed to save PDPA Consent:", e);
    }
  }, []);

  const closeConsent = useCallback(() => {
    setIsVisible(false);
  }, []);

  // ใช้ mounted เพื่อป้องกัน Hydration Mismatch
  // แต่ถ้ายังไม่ mounted ให้ซ่อนไว้ด้วย CSS แทนการ return null เพื่อความเสถียรของ Layout
  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 transition-all duration-700 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="lab-card flex flex-col items-center gap-4 p-6 md:flex-row md:justify-between shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20">
            <ShieldCheck className="text-primary h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white uppercase italic">
              Data Protection Protocol
            </h3>
            <p className="text-muted-foreground text-[11px] leading-relaxed">
              เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพตามนโยบาย PDPA มาตรฐานปี 2026
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-3 md:w-auto">
          <Button
            onClick={handleAccept}
            size="sm"
            className="h-10 w-full px-8 italic md:w-auto font-bold"
          >
            ยอมรับ
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 h-10 w-full px-6 text-xs md:w-auto"
            asChild
          >
            <Link href="/privacy">นโยบาย</Link>
          </Button>
          <button
            onClick={closeConsent}
            className="text-muted-foreground hover:text-white p-2"
            aria-label="ปิด"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
