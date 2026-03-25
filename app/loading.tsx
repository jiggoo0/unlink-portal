/** @format */

import { Shield } from "lucide-react";

/**
 * UNLINK-TH | Operational Loading Interface
 * -------------------------------------------------------------------------
 * หน้าจอระหว่างรอการประมวลผลข้อมูล (Hydration/Navigation)
 * ออกแบบมาเพื่อรักษาบรรยากาศความปลอดภัยและความเป็นมืออาชีพ
 */
export default function Loading() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center space-y-8">
      <div className="relative">
        <Shield className="text-primary glow-gold h-16 w-16 animate-pulse" />
        <div className="bg-primary/20 absolute inset-0 animate-pulse rounded-full blur-xl" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <p className="text-primary animate-pulse font-mono text-xs tracking-[0.4em] uppercase">
          Synchronizing Intelligence...
        </p>
        <div className="bg-muted/30 h-1 w-48 overflow-hidden rounded-full border border-white/5">
          <div className="bg-primary h-full w-1/3 animate-[loading_1.5s_infinite_ease-in-out] rounded-full" />
        </div>
      </div>
    </div>
  );
}
