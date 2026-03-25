/** @format */

import Link from "next/link";
import { ShieldAlert, ArrowLeft, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * UNLINK-TH | Data Loss / Protocol 404
 * -------------------------------------------------------------------------
 * หน้าจอแจ้งเตือนเมื่อไม่พบข้อมูลเป้าหมายในระบบสืบค้น
 */
export default function NotFound() {
  return (
    <div className="container flex min-h-[80vh] flex-col items-center justify-center space-y-12 py-32 text-center">
      <div className="bg-primary/5 border-primary/20 relative flex aspect-square h-40 w-40 items-center justify-center rounded-[3rem] border">
        <ShieldAlert className="text-primary glow-gold h-20 w-20" />
        <div className="from-primary/20 absolute -inset-2 animate-pulse rounded-[3.5rem] bg-gradient-to-tr to-transparent opacity-20 blur-xl" />
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="bg-muted/10 border-border/40 text-muted-foreground mx-auto flex w-fit items-center gap-2 rounded-full border px-4 py-1 font-mono text-[10px] tracking-[0.3em] uppercase">
          <Terminal className="h-3 w-3" />
          <span>Error 404: Protocol Fragment Missing</span>
        </div>

        <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
          Protocol <br />
          <span className="text-primary italic">Not Located</span>
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed font-light md:text-xl">
          ข้อมูลที่คุณกำลังพยายามเข้าถึงอาจถูก De-indexed ออกจากระบบอย่างถาวร
          หรือโครงการดังกล่าวอยู่นอกขอบเขตการเข้าถึงทั่วไปในปัจจุบัน
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <Button
          size="lg"
          className="h-14 rounded-full px-10 text-sm font-bold tracking-widest uppercase"
          asChild
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Command Center
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="lg"
          className="hover:bg-primary/5 h-14 rounded-full px-10 text-sm font-bold tracking-widest uppercase"
          asChild
        >
          <Link href="/services">Browse Operational Specs</Link>
        </Button>
      </div>

      <p className="text-muted-foreground/30 font-mono text-[9px] tracking-[0.4em] uppercase">
        Managed & Secured by UNLINK-TH Security Unit
      </p>
    </div>
  );
}
