"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FileCheck,
  Lock,
  RefreshCw,
  MessageCircle,
  Info,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getPaymentConfig, calculateSafeAmount } from "@/lib/payment-utils";

/**
 * 📄 INCOME DOCUMENTATION FORM v3.0 (Manual Verification Edition)
 * -------------------------------------------------------------------------
 * ระบบขอรับพอร์ตเอกสารรับรองรายได้
 * ปรับปรุง: ถอดระบบ Auto-Success และบังคับแจ้งโอนผ่าน LINE Official
 */

export function IncomeDocumentationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    occupation: "",
    averageIncome: "",
    employmentDuration: "1-3 ปี",
    email: "",
    website_url: "", // 🛡️ Honeypot Field
  });

  const [step, setStep] = useState<"form" | "preview" | "payment">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [exactAmount, setExactAmount] = useState<number>(5500);
  const [caseId, setCaseId] = useState<string>("");

  useEffect(() => {
    if (step === "payment") {
      setExactAmount(calculateSafeAmount(5500));
    }
  }, [step]);

  const paymentData = getPaymentConfig(exactAmount);

  // 🛡️ LINE Official Link with Automatic Message
  const lineOALink = `https://line.me/R/ti/p/@unlink-th?text=ยืนยันการโอนเงินบริการเอกสารรับรองรายได้%0D%0Aหมายเลขเคส: ${caseId || "UK-DOC-AUTO"}%0D%0Aยอดเงิน: ${exactAmount.toFixed(2)} บาท`;

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
          service_type: "income-documentation",
          is_draft: true,
          website_url: formData.website_url,
          metadata: {
            ...formData,
            amount: 5500,
            provider: "DOC_UNIT",
          },
        }),
      });

      const data = (await response.json()) as { id?: string };
      if (!response.ok || !data.id) {
        throw new Error("Failed to submit request");
      }

      setCaseId(data.id);
      toast.success("บันทึกข้อมูลเรียบร้อย");
      setStep("preview");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Form Side */}
        <div className="lg:col-span-5 space-y-6">
          {/* ℹ️ Service Information Card */}
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-3xl backdrop-blur-xl">
            <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              ขั้นตอนการขอรับเอกสาร
            </h4>
            <ul className="space-y-3 text-xs text-muted-foreground font-medium">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  1
                </div>
                <span>ระบุชื่อ อาชีพ และรายได้ที่ต้องการให้รับรอง</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  2
                </div>
                <span>ตรวจสอบพอร์ตเอกสารเบื้องต้น (Watermarked)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  3
                </div>
                <span>ชำระค่าธรรมเนียมจัดเตรียมเอกสาร (฿5,500)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/100 text-primary-foreground flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  4
                </div>
                <span className="text-foreground font-bold italic underline">
                  แจ้งโอนเงินผ่าน LINE ทันทีเพื่อรับไฟล์ High-Res
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">
            <h3 className="text-lg font-bold mb-8 flex items-center gap-3 border-b border-border pb-4">
              <Landmark className="text-primary w-5 h-5" />
              ข้อมูลการประกอบอาชีพ
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                  ชื่อ-นามสกุล (ภาษาไทย)
                </label>
                <input
                  required
                  type="text"
                  placeholder="เช่น นายมานะ รักเรียน"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full bg-background border border-input rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-sm font-medium text-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    อาชีพที่ต้องการระบุ
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="เช่น ค้าขายออนไลน์"
                    value={formData.occupation}
                    onChange={(e) =>
                      setFormData({ ...formData, occupation: e.target.value })
                    }
                    className="w-full bg-background border border-input rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    รายได้ต่อเดือน
                  </label>
                  <input
                    required
                    type="number"
                    placeholder="เช่น 55000"
                    value={formData.averageIncome}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        averageIncome: e.target.value,
                      })
                    }
                    className="w-full bg-background border border-input rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                  อีเมลสำหรับส่งไฟล์
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@email.com"
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
                  "ขอรับพอร์ตเอกสาร"
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Preview Side */}
        <div className="lg:col-span-7">
          {step === "form" && (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center p-12 border border-border rounded-[3rem] bg-muted/30 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <FileCheck className="w-20 h-20 text-muted-foreground/20 mb-8 animate-pulse" />
              <h3 className="text-2xl font-bold text-muted-foreground mb-4 tracking-tighter uppercase">
                Document Ready
              </h3>
              <p className="text-muted-foreground/60 max-w-sm text-sm font-light leading-relaxed">
                ข้อมูลของคุณจะถูกใช้เพื่อจัดเตรียมพอร์ตเอกสารรับรองรายที่มีความน่าเชื่อถือสูง
                เพื่อใช้ยื่นธุรกรรมต่างๆ
              </p>
            </div>
          )}

          {step === "preview" && (
            <div className="bg-white border border-primary/20 rounded-[2rem] shadow-2xl p-1 relative overflow-hidden animate-in fade-in zoom-in duration-700">
              <div className="absolute inset-0 z-30 bg-background/80 backdrop-blur-[4px] flex flex-col items-center justify-center p-6 text-center select-none">
                <div className="bg-card border border-primary/20 p-10 rounded-[3rem] shadow-2xl max-w-md w-full border-t-4 border-t-primary">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lock className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="text-card-foreground text-2xl font-bold mb-2 uppercase tracking-tight">
                    Portfolio Locked
                  </h3>
                  <p className="text-muted-foreground text-sm mb-10 leading-relaxed px-4">
                    พอร์ตเอกสารของคุณจัดเตรียมเสร็จแล้ว
                    ชำระค่าธรรมเนียมเพื่อปลดล็อกลายน้ำและรับไฟล์ฉบับเต็มผ่าน
                    LINE
                  </p>
                  <div className="bg-muted/50 border border-border rounded-2xl p-6 mb-10 flex justify-between items-center">
                    <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                      Fixed Rate
                    </span>
                    <span className="text-primary font-black text-3xl">
                      ฿5,500
                    </span>
                  </div>
                  <Button
                    onClick={() => setStep("payment")}
                    className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black tracking-[0.2em] uppercase rounded-2xl"
                  >
                    Get Full Access
                  </Button>
                </div>
              </div>
              <div className="p-10 opacity-10 blur-[1px]">
                <div className="h-40 bg-slate-100 rounded-3xl mb-8" />
                <div className="space-y-4">
                  <div className="h-4 w-full bg-slate-200" />
                  <div className="h-4 w-3/4 bg-slate-200" />
                  <div className="h-20 w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl" />
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
                <div className="mt-4">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                    ยอดสุทธิรวมเศษสตางค์
                  </span>
                  <div className="text-3xl text-black font-black italic">
                    ฿{exactAmount.toFixed(2)}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic text-card-foreground">
                Final Action:{" "}
                <span className="text-primary">LINE Verification</span>
              </h3>
              <p className="text-muted-foreground text-xs mb-10 max-w-sm leading-relaxed">
                กรุณาโอนเงินให้ตรงยอด{" "}
                <span className="text-foreground font-bold">
                  ฿{exactAmount.toFixed(2)}
                </span>
                <br />
                และ{" "}
                <span className="text-primary font-bold italic underline">
                  ต้องกดปุ่มสีเขียวด้านล่าง
                </span>{" "}
                เพื่อแจ้งโอนเงินผ่าน LINE
                <br />
                เพื่อรับพอร์ตเอกสารฉบับสมบูรณ์ทันที
              </p>

              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Button
                  asChild
                  className="w-full h-16 bg-[#06C755] text-white hover:bg-[#06C755]/90 rounded-2xl uppercase tracking-widest text-xs font-black shadow-[0_0_40px_rgba(6,199,85,0.3)]"
                >
                  <a
                    href={lineOALink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    ยืนยันโอนเงินผ่าน LINE
                  </a>
                </Button>
                <Button
                  variant="link"
                  onClick={() => setStep("preview")}
                  className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em]"
                >
                  ย้อนกลับ
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
