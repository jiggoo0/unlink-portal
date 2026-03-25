"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  BusFront,
  Lock,
  RefreshCw,
  Receipt,
  MessageCircle,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getPaymentConfig, calculateSafeAmount } from "@/lib/payment-utils";

/**
 * 🚌 EXPRESS BUS FORM COMPONENT v3.0 (Manual Verification Edition)
 * -------------------------------------------------------------------------
 * ระบบฟอร์มสำหรับบริการออกตั๋วรถทัวร์ บขส. 99/999
 * ปรับปรุง: ถอดระบบ Auto-Success และบังคับแจ้งโอนผ่าน LINE Official
 */

export function ExpressBusForm() {
  const [formData, setFormData] = useState({
    passengerName: "",
    departureStation: "กรุงเทพฯ (หมอชิต 2)",
    arrivalStation: "เชียงใหม่",
    travelDate: "",
    price: "850",
    email: "",
    website_url: "", // 🛡️ Honeypot Field
  });

  const [step, setStep] = useState<"form" | "preview" | "payment">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [exactAmount, setExactAmount] = useState<number>(850);
  const [caseId, setCaseId] = useState<string>("");

  useEffect(() => {
    if (step === "payment") {
      setExactAmount(calculateSafeAmount(Number(formData.price) || 850));
    }
  }, [step, formData.price]);

  const paymentData = getPaymentConfig(exactAmount);

  // 🛡️ LINE Official Link with Automatic Message
  const lineOALink = `https://line.me/R/ti/p/@unlink-th?text=ยืนยันการโอนเงินบริการตั๋วรถทัวร์%0D%0Aหมายเลขเคส: ${caseId || "UK-BUS-AUTO"}%0D%0Aยอดเงิน: ${exactAmount.toFixed(2)} บาท`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/services/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_type: "express-bus-ticket",
          is_draft: true,
          website_url: formData.website_url,
          metadata: {
            ...formData,
            provider: "transport-co",
            amount: Number(formData.price) || 850,
          },
        }),
      });

      const data = (await response.json()) as { id?: string };
      if (!response.ok || !data.id) {
        throw new Error("Failed to submit request");
      }

      setCaseId(data.id);
      toast.success("บันทึกข้อมูลสำเร็จ โปรดตรวจสอบรายละเอียด");
      setStep("preview");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("เกิดข้อผิดพลาดในการส่งข้อมูล โปรดลองอีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Form & Service Details Side */}
        <div className="lg:col-span-5 space-y-6">
          {/* ℹ️ Service Information Card */}
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-3xl backdrop-blur-xl">
            <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              รายละเอียดบริการและขั้นตอน
            </h4>
            <ul className="space-y-3 text-xs text-muted-foreground font-medium">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  1
                </div>
                <span>
                  กรอกข้อมูลผู้โดยสารและรายละเอียดการเดินทางให้ครบถ้วน
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  2
                </div>
                <span>ตรวจสอบความถูกต้องของแบบร่างตั๋วโดยสาร</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  3
                </div>
                <span>ชำระค่าธรรมเนียมผ่าน QR Code (ระบบความปลอดภัยสูง)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/100 text-primary-foreground flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  4
                </div>
                <span className="text-foreground font-bold italic underline">
                  บังคับ: กดปุ่มเพื่อแจ้งโอนเงินผ่าน LINE Official พร้อมแนบสลิป
                </span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-primary/10 flex justify-between items-center">
              <span className="text-[10px] text-muted-foreground font-bold uppercase">
                ค่าบริการออกตั๋ว
              </span>
              <span className="text-primary font-black text-lg">฿450.00</span>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">
            <h3 className="text-lg font-bold mb-8 flex items-center gap-3 border-b border-border pb-4">
              <Receipt className="text-primary w-5 h-5" />
              กำหนดข้อมูลตั๋วโดยสาร
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                  ชื่อผู้โดยสาร (ไทย/อังกฤษ)
                </label>
                <input
                  required
                  type="text"
                  placeholder="เช่น นายสมชาย ใจดี"
                  value={formData.passengerName}
                  onChange={(e) =>
                    setFormData({ ...formData, passengerName: e.target.value })
                  }
                  className="w-full bg-background border border-input rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all text-sm font-medium text-foreground"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                  สถานีต้นทาง - ปลายทาง
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    required
                    type="text"
                    placeholder="ต้นทาง"
                    value={formData.departureStation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        departureStation: e.target.value,
                      })
                    }
                    className="w-full bg-background border border-input rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-foreground"
                  />
                  <input
                    required
                    type="text"
                    placeholder="ปลายทาง"
                    value={formData.arrivalStation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        arrivalStation: e.target.value,
                      })
                    }
                    className="w-full bg-background border border-input rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-foreground"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    วันที่เดินทาง
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) =>
                      setFormData({ ...formData, travelDate: e.target.value })
                    }
                    className="w-full bg-background border border-input rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    ราคาหน้าตั๋ว (บาท)
                  </label>
                  <input
                    required
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    className="w-full bg-background border border-input rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                  อีเมลสำหรับรับเอกสาร
                </label>
                <input
                  required
                  type="email"
                  placeholder="your-email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-background border border-input rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-foreground"
                />
              </div>

              <div className="hidden">
                <input
                  type="text"
                  value={formData.website_url}
                  onChange={(e) =>
                    setFormData({ ...formData, website_url: e.target.value })
                  }
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || step !== "form"}
                className="w-full h-16 mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-black tracking-[0.2em] uppercase rounded-2xl transition-all"
              >
                {isSubmitting ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  "ดำเนินการสร้างแบบร่าง"
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Preview & Payment Side */}
        <div className="lg:col-span-7">
          {step === "form" && (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center p-12 border border-border rounded-[3rem] bg-muted/30 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <BusFront className="w-20 h-20 text-muted-foreground/20 mb-8 animate-pulse" />
              <h3 className="text-2xl font-bold text-muted-foreground mb-4 tracking-tighter uppercase">
                Awaiting Journey Parameters
              </h3>
              <p className="text-muted-foreground/60 max-w-sm text-sm font-light leading-relaxed">
                ระบุรายละเอียดการเดินทางเพื่อขอรับแบบร่างตั๋วโดยสาร
                และเริ่มกระบวนการออกเอกสารตัวจริง
              </p>
            </div>
          )}

          {step === "preview" && (
            <div className="bg-slate-100 rounded-[2rem] shadow-2xl p-1 text-black relative overflow-hidden animate-in fade-in zoom-in duration-700">
              {/* 🔒 Mask Overlay */}
              <div className="absolute inset-0 z-30 bg-background/80 backdrop-blur-[3px] flex flex-col items-center justify-center p-6 text-center select-none">
                <div className="bg-card border border-primary/20 p-10 rounded-[3rem] shadow-2xl max-w-md w-full border-t-4 border-t-primary">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lock className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="text-card-foreground text-2xl font-bold mb-2 uppercase tracking-tight">
                    Ticket Masked
                  </h3>
                  <p className="text-muted-foreground text-sm mb-10 leading-relaxed px-4">
                    เอกสารของคุณถูกจัดเตรียมเรียบร้อย
                    ชำระค่าธรรมเนียมเพื่อปลดล็อกและรับเอกสารตัวจริงผ่านเจ้าหน้าที่
                  </p>

                  <div className="bg-muted/50 border border-border rounded-2xl p-6 mb-10 flex justify-between items-center">
                    <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                      Issuance Fee
                    </span>
                    <span className="text-primary font-black text-3xl">
                      ฿450
                    </span>
                  </div>

                  <Button
                    onClick={() => setStep("payment")}
                    className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black tracking-[0.2em] uppercase rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </div>

              {/* TICKET PREVIEW (Mock) */}
              <div className="max-w-md mx-auto my-10 bg-white shadow-xl rounded-xl overflow-hidden opacity-25 select-none font-sans border-2 border-slate-200">
                <div className="bg-[#1a365d] p-6 text-white text-center relative border-b-4 border-amber-400">
                  <h2 className="text-lg font-bold uppercase tracking-tight leading-tight">
                    THE TRANSPORT CO.
                  </h2>
                  <p className="text-[10px] font-bold">OFFICIAL RECORD</p>
                </div>
                <div className="p-8 space-y-4">
                  <div className="h-4 w-3/4 bg-slate-200 rounded" />
                  <div className="h-12 w-full bg-slate-100 rounded-xl" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-8 bg-slate-100 rounded" />
                    <div className="h-8 bg-slate-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === "payment" && (
            <div className="h-full bg-card/50 border border-primary/20 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-right-12 duration-700 backdrop-blur-xl">
              <div className="bg-white p-6 rounded-[2.5rem] mb-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <div className="w-56 h-56 bg-zinc-100 rounded-3xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={paymentData.qrUrl}
                    alt="QR Payment"
                    width={224}
                    height={224}
                    className="p-2"
                  />
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                    ยอดชำระอัตโนมัติ
                  </span>
                  <span className="text-3xl text-black font-black italic">
                    ฿{exactAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic text-card-foreground">
                Final Step:{" "}
                <span className="text-primary">Manual Verification</span>
              </h3>
              <p className="text-muted-foreground text-xs mb-10 max-w-sm leading-relaxed">
                รบกวนโอนยอดให้ตรงเศษสตางค์{" "}
                <span className="text-foreground font-bold">
                  ฿{exactAmount.toFixed(2)}
                </span>
                <br />
                เมื่อโอนสำเร็จแล้ว{" "}
                <span className="text-primary font-bold">
                  ต้องกดปุ่มด้านล่างเพื่อแจ้งโอนผ่าน LINE
                </span>
                <br />
                เพื่อรับเอกสารจากเจ้าหน้าที่โดยตรง
              </p>

              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Button
                  asChild
                  className="w-full h-16 bg-[#06C755] text-white hover:bg-[#06C755]/90 rounded-2xl uppercase tracking-widest text-xs font-black shadow-[0_0_40px_rgba(6,199,85,0.3)] animate-pulse"
                >
                  <a
                    href={lineOALink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    แจ้งโอนเงินผ่าน LINE (ทันที)
                  </a>
                </Button>

                <Button
                  variant="link"
                  onClick={() => setStep("preview")}
                  className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em] hover:text-foreground transition-colors"
                >
                  ย้อนกลับไปดูข้อมูล
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
