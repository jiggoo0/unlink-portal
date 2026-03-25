/** @format */

"use client";

import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Lock,
  Terminal,
  ArrowRight,
  Activity,
  Cpu,
} from "lucide-react";
import { siteConfig } from "@/constants/site-config";
import { Button } from "@/components/ui/button";

/**
 * 🔒 SECURE CONSULTATION CHANNEL (The Vault Edition)
 * ---------------------------------------------------------
 * มาตรฐานการติดต่อสื่อสารระดับสูงสุด สำหรับผู้ที่ต้องการความลับและการนำทางที่แม่นยำ
 */

export function SecureChannel() {
  const [isBooting, setIsBooting] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const fullText =
    "Initializing Encrypted Tunnel... Done. Establishing Protocol... Active.";

  useEffect(() => {
    if (isBooting) {
      let i = 0;
      const interval = setInterval(() => {
        setTerminalText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isBooting]);

  return (
    <section id="channel" className="container py-32 relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Strategic Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary font-mono text-[10px] tracking-[0.4em] uppercase">
                <Activity className="h-3 w-3 animate-pulse" />
                <span>ช่องทางปรึกษาแบบลับที่สุด</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                เริ่มแก้ <br />
                <span className="text-primary glow-gold italic">
                  ปัญหาของคุณ
                </span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-md">
                เพื่อความปลอดภัยสูงสุด เราจะคุยตรงกับท่านผ่าน LINE เท่านั้น
                ไม่มีการเก็บข้อมูลลงฐานข้อมูลหน้าเว็บ
                มั่นใจได้ว่าปัญหาของคุณจะเป็นความลับตลอดไป
              </p>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-muted/5 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">
                    Privacy Guarantee
                  </p>
                  <p className="text-sm font-bold">
                    ปกปิดตัวตนและเป็นความลับ 100%
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-muted/5 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">
                    Data Handling
                  </p>
                  <p className="text-sm font-bold">
                    ข้อมูลจบที่การคุย ไม่มีการนำไปใช้ต่อ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Gateway Interface */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-card border border-border rounded-[2.5rem] p-10 shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-10 border-b border-border pb-6">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-500/20" />
                  <div className="h-2 w-2 rounded-full bg-amber-500/20" />
                  <div className="h-2 w-2 rounded-full bg-emerald-500/20" />
                </div>
                <div className="font-mono text-[9px] text-muted-foreground/40 tracking-[0.3em] uppercase">
                  Terminal v4.0.2-Secure
                </div>
              </div>

              {!isBooting ? (
                <div className="space-y-8 py-10 text-center">
                  <div className="mx-auto h-20 w-20 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center mb-6">
                    <ShieldCheck className="h-10 w-10 text-primary animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground uppercase">
                      พร้อมเริ่มต้นไหม?
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono tracking-widest uppercase">
                      กดปุ่มด้านล่างเพื่อเชื่อมต่อกับทีมงาน
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsBooting(true)}
                    size="lg"
                    className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-bold tracking-[0.2em] uppercase hover:scale-[1.02] transition-transform"
                  >
                    เปิดช่องทางติดต่อ <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="bg-muted/40 rounded-xl p-6 border border-border min-h-[120px]">
                    <div className="flex items-start gap-3">
                      <Terminal className="h-4 w-4 text-primary mt-1" />
                      <p className="font-mono text-xs text-emerald-600 leading-relaxed uppercase">
                        {terminalText}
                        <span className="animate-pulse">_</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-primary/60 tracking-widest uppercase ml-1">
                        แจ้งชื่อเล่นหรือรหัสเรียกแทน
                      </label>
                      <input
                        type="text"
                        placeholder="เช่น คุณ A / เคส 01 (เพื่อใช้เรียกแทนตัวท่าน)"
                        className="w-full bg-secondary border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors font-mono"
                      />
                    </div>
                    <Button
                      asChild
                      className="w-full h-16 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-[0.2em] uppercase"
                    >
                      <a href={siteConfig.contact.lineUrl} target="_blank">
                        คุยผ่าน LINE ทันที
                      </a>
                    </Button>
                    <p className="text-[9px] text-center text-muted-foreground/40 font-mono tracking-widest uppercase">
                      เราไม่เก็บข้อมูลส่วนตัวใดๆ ไว้บนหน้าเว็บนี้
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
