/** @format */

"use client";

import { ShieldAlert, RotateCcw, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * UNLINK-TH | Global System Recovery (Level 0)
 * -------------------------------------------------------------------------
 * หน้าจอแจ้งเตือนข้อผิดพลาดระดับรากฐาน (Root Layout Error)
 * จำเป็นต้องมีโครงสร้าง HTML/Body แยกเนื่องจาก Error เกิดขึ้นใน Root Layout หลัก
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="th">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center space-y-12 p-6 text-center">
          {/* Visual Breach Signal */}
          <div className="bg-destructive/10 border-destructive/20 relative flex aspect-square h-40 w-40 items-center justify-center rounded-[3rem] border">
            <ShieldAlert className="text-destructive h-20 w-20" />
            <div className="from-destructive/30 absolute -inset-2 animate-pulse rounded-[3.5rem] bg-gradient-to-tr to-transparent opacity-30 blur-xl" />
          </div>

          <div className="max-w-2xl space-y-6">
            <div className="bg-destructive/10 border-destructive/10 text-destructive mx-auto flex w-fit items-center gap-2 rounded-full border px-4 py-1 font-mono text-[10px] tracking-[0.3em] uppercase">
              <Terminal className="h-3 w-3" />
              <span>Critical Breach: Root Level Failure</span>
            </div>

            <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
              Foundation <br />
              <span className="text-destructive italic">Compromised</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed font-light md:text-xl">
              ระบบตรวจพบข้อผิดพลาดในระดับโครงสร้างพื้นฐาน (Foundation Layer)
              ซึ่งส่งผลกระทบต่อระบบนำทางและเฟรมเวิร์กหลัก
              กรุณาใช้สิทธิ์การกู้คืนระบบเพื่อพยายามเรียกคืนสถานะทำงาน
            </p>

            {error.digest && (
              <div className="mx-auto w-fit rounded border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                Audit Digest: {error.digest}
              </div>
            )}
          </div>

          <Button
            onClick={() => reset()}
            size="lg"
            className="shadow-destructive/20 h-16 rounded-full px-12 text-sm font-bold tracking-widest uppercase shadow-2xl transition-all"
          >
            <RotateCcw className="mr-3 h-4 w-4" />
            Hard Reset Foundation
          </Button>

          <p className="font-mono text-[9px] tracking-[0.4em] text-white/20 uppercase">
            Emergency Recovery Protocol v4.0.0
          </p>
        </div>
      </body>
    </html>
  );
}
