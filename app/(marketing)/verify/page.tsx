/** @format */

import { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Search, 
  Lock, 
  Activity, 
  Database,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ระบบตรวจสอบสถานะ (Verify) | UNLINK-GLOBAL",
  description: "ตรวจสอบความถูกต้องของใบรับรอง สถานะการ Audit และความน่าเชื่อถือของตัวตนดิจิทัลในระบบ UNLINK",
};

export default function VerifyPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* 🔮 Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 px-6 mx-auto max-w-5xl">
        {/* --- 💎 HEADER --- */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary">Verification Protocol</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase text-foreground">
            Identity <span className="text-primary">&</span> Trust <span className="text-primary">Verification</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium italic text-balance">
            "เครื่องมือตรวจสอบความถูกต้องระดับสถาบัน เพื่อยืนยันความปลอดภัยและสถานะการตรวจสอบใน Ecosystem"
          </p>
        </div>

        {/* --- 🔍 SEARCH INTERFACE --- */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-secondary/20 border border-border/40 p-2 rounded-[2.5rem] shadow-2xl backdrop-blur-xl mb-12 group focus-within:border-primary/30 transition-all">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50" />
                <input 
                  type="text"
                  placeholder="กรอก ID ใบรับรอง หรือรหัสตรวจสอบ (e.O. UL-C-001)..." 
                  className="w-full h-16 pl-16 pr-8 bg-transparent border-0 text-lg font-bold placeholder:text-muted-foreground/30 focus:outline-none focus:ring-0"
                />
              </div>
              <Button className="h-16 px-12 rounded-[2rem] bg-primary text-primary-foreground font-black text-xs tracking-widest uppercase hover:scale-[1.02] transition-all">
                ตรวจสอบสถานะ
              </Button>
            </div>
          </div>

          {/* --- 📊 QUICK STATUS NODES --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/5 p-8 rounded-[2rem] space-y-4 group hover:bg-white/10 transition-all cursor-default">
              <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                <CheckCircle2 className="text-green-500 h-6 w-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-foreground italic text-nowrap">Valid Status</h3>
              <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                เอกสารและตัวตนที่ผ่านการรับรองแล้วจะขึ้นสถานะสีเขdียว พร้อมรายละเอียดการตรวจสอบ
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 p-8 rounded-[2rem] space-y-4 group hover:bg-white/10 transition-all cursor-default">
              <div className="h-12 w-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                <Activity className="text-yellow-500 h-6 w-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-foreground italic text-nowrap">Under Review</h3>
              <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                รายการที่อยู่ระหว่างการตรวจสอบโดยหน่วยงานกลาง จะแสดงสถานะกำลังดำเนินการ
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 p-8 rounded-[2rem] space-y-4 group hover:bg-white/10 transition-all cursor-default">
              <div className="h-12 w-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <AlertCircle className="text-red-500 h-6 w-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-foreground italic text-nowrap">Revoked / Alert</h3>
              <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                สถานะแจ้งเตือนสำหรับรายการที่ไม่ผ่านเกณฑ์ความปลอดภัย หรือถูกยกเลิกการรับรอง
              </p>
            </div>
          </div>
        </div>

        {/* --- 🔒 SECURITY PROTOCOL --- */}
        <div className="mt-24 pt-12 border-t border-border/40 flex flex-Acol md:flex-row items-center justify-between gap-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
              <Lock className="h-5 w-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-widest text-foreground">SHA-512 Verification</span>
              <span className="text-[8px] font-mono text-muted-foreground">NODE_SEC_ACTIVE_2026</span>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-primary" />
              <span className="text-[9px] font-black uppercase tracking-widest">Registry Integrated</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[9px] font-black uppercase tracking-widest">AAAccredited</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
