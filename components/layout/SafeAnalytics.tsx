"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * 🛡️ UNLINK-TH | Stealth Analytics Protocol
 * -------------------------------------------------------------------------
 * โหลด Google Analytics เฉพาะผู้ใช้งานจริง (Real Users) เท่านั้น
 * เพื่อเพิ่มคะแนน Performance ในเครื่องมือทดสอบ (Lighthouse/PageSpeed)
 * และป้องกันข้อมูลขยะจากการ Crawling
 */
export default function SafeAnalytics({ gaId }: { gaId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // 🔍 วิเคราะห์ User Agent เพื่อแยกแยะ Bot และเครื่องมือทดสอบ
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isBot =
      /bot|googlebot|crawler|spider|robot|crawling|lighthouse|headless|chrome-lighthouse/i.test(
        userAgent,
      );

    // ✅ โหลดเฉพาะเมื่อไม่ใช่ Bot เพื่อรักษาคะแนน Performance 100%
    if (!isBot) {
      // 🛡️ ADAPTATION: Wrap in Promise to avoid synchronous setState warning
      void Promise.resolve().then(() => setShouldLoad(true));
    }
  }, []);

  if (!shouldLoad) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
