/** @format */

import { Suspense } from "react";

/**
 * 📢 UNLINK-GLOBAL: MARKETING LAYOUT (CLEAN)
 * -------------------------------------------------------------------------
 * หมายเหตุ: Navbar และ Footer ถูกย้ายไปที่ RootLayout (app/layout.tsx) แล้ว
 * เพื่อป้องกันการแสดงผลซ้อนกัน และเพื่อให้ครอบคลุมทุกหน้าในระบบ
 */

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-[#050810] animate-pulse" />}
    >
      {children}
    </Suspense>
  );
}
