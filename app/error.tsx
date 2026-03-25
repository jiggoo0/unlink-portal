/** @format */

"use client";

import * as React from "react";
import { ShieldAlert, RotateCcw, Home, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * UNLINK-TH | Global Protocol Failure
 * -------------------------------------------------------------------------
 * หน้าจอแจ้งเตือนข้อผิดพลาดระดับแอปพลิเคชัน (Global Error Boundary)
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // รายงานข้อผิดพลาดเข้าสู่ระบบ Audit Log
    console.error("Critical System Breach Detected:", error);
  }, [error]);

  return (
    <div className="container flex min-h-[80vh] flex-col items-center justify-center space-y-12 py-32 text-center">
      {/* Visual Error Signal */}
      <div className="bg-destructive/10 border-destructive/20 relative flex aspect-square h-40 w-40 items-center justify-center rounded-[3rem] border">
        <ShieldAlert className="text-destructive glow-gold h-20 w-20" />
        <div className="from-destructive/30 absolute -inset-2 animate-pulse rounded-[3.5rem] bg-gradient-to-tr to-transparent opacity-30 blur-xl" />
      </div>

      {/* Technical Briefing */}
      <div className="max-w-2xl space-y-6">
        <div className="bg-destructive/10 border-destructive/10 text-destructive mx-auto flex w-fit items-center gap-2 rounded-full border px-4 py-1 font-mono text-[10px] tracking-[0.3em] uppercase">
          <Terminal className="h-3 w-3" />
          <span>Alert: Critical System Error</span>
        </div>

        <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
          System <br />
          <span className="text-destructive italic">Breach Occurred</span>
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed font-light md:text-xl">
          ระบบตรวจพบการขัดข้องทางเทคนิคในระดับโครงสร้าง
          ระบบป้องกันความปลอดภัยได้ทำกระบวนการ Sandbox ชั่วคราว
          กรุณาลองทำการเรียกคืนระบบ (System Restore) หรือกลับสู่จุดปลอดภัย
        </p>

        {error.digest && (
          <div className="bg-muted/10 border-border/10 mx-auto w-fit rounded border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
            Digest: {error.digest}
          </div>
        )}
      </div>

      {/* Action Interface Liaison */}
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <Button
          onClick={() => reset()}
          size="lg"
          className="shadow-destructive/20 h-16 rounded-full px-12 text-sm font-bold tracking-widest uppercase shadow-2xl transition-all"
        >
          <RotateCcw className="mr-3 h-4 w-4" />
          System Restore
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-primary/20 hover:bg-primary/5 h-16 rounded-full px-12 text-sm font-bold tracking-widest uppercase backdrop-blur-md transition-all"
          asChild
        >
          <Link href="/">
            <Home className="mr-3 h-4 w-4" />
            Home Protocol
          </Link>
        </Button>
      </div>

      <p className="text-muted-foreground/30 font-mono text-[9px] tracking-[0.4em] uppercase">
        Managed & Secured by UNLINK-TH Incident Response Unit
      </p>
    </div>
  );
}
