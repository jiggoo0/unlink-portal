/** @format */

"use client";

import { useState, useEffect, Suspense } from "react";
import {
  FileCheck,
  Globe,
  FileDown,
  AlertTriangle,
  RefreshCw,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

/**
 * 🏛️ OFFICIAL DOCUMENT REGISTRY (v3.0)
 * ---------------------------------------------------------
 * หน้าดาวน์โหลดเอกสารมาตรฐานสถาบัน
 */

interface CaseData {
  id: string;
  customer_name: string;
  email: string;
  status: string;
  file_url: string;
  service: string;
}

function RegistryContent() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get("caseId");

  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (caseId) {
      void fetchCaseData(caseId);
    }
  }, [caseId]);

  const fetchCaseData = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/services/verify?caseId=${id}`);
      const data = (await res.json()) as {
        caseData?: CaseData;
        error?: string;
      };

      if (res.ok) {
        setCaseData(data.caseData ?? null);
      } else {
        setError(data.error ?? "Identifier not found in registry");
      }
    } catch {
      setError("Failed to establish secure node connection");
    } finally {
      setIsLoading(false);
    }
  };

  if (!caseId) {
    return (
      <div className="space-y-8 text-center py-10">
        <div className="mx-auto h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
          <Globe className="h-8 w-8 text-slate-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-black text-white uppercase tracking-tight">
            Institutional Access Required
          </h3>
          <p className="text-xs text-slate-500 font-mono tracking-widest leading-relaxed">
            โปรดใช้รหัสอ้างอิงจากจดหมายนำส่งอย่างเป็นทางการ <br />
            เพื่อเข้าถึงฐานข้อมูลทะเบียน
          </p>
        </div>
        <Button
          asChild
          className="w-full h-14 rounded-xl bg-white text-black font-black uppercase tracking-widest text-[10px]"
        >
          <Link href="/">Return to Registry Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {isLoading ? (
        <div className="py-20 text-center space-y-4">
          <RefreshCw className="h-10 w-10 text-emerald-500 animate-spin mx-auto" />
          <p className="text-[10px] text-emerald-500 font-mono animate-pulse uppercase tracking-[0.3em]">
            Syncing Registry Node...
          </p>
        </div>
      ) : error ? (
        <div className="space-y-8 text-center py-10">
          <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto" />
          <div className="space-y-2">
            <h3 className="text-xl font-black text-white uppercase italic">
              Registry Mismatch
            </h3>
            <p className="text-xs text-amber-500/70 font-mono leading-relaxed">
              {error}
            </p>
          </div>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full h-14 rounded-xl border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/5"
          >
            Retry Validation
          </Button>
        </div>
      ) : caseData ? (
        <div className="space-y-10 animate-in fade-in zoom-in duration-700">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <FileCheck className="text-white h-6 w-6" />
            </div>
            <div>
              <h4 className="text-emerald-500 font-black text-sm uppercase tracking-tight">
                Accreditation Active
              </h4>
              <p className="text-emerald-500/60 text-[9px] font-mono tracking-[0.2em]">
                ENTRY-ID: {caseData.id}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                <p className="text-[8px] text-slate-500 font-black uppercase mb-1 tracking-widest">
                  Validated Subject
                </p>
                <p className="text-xs font-black text-white truncate uppercase">
                  {caseData.customer_name}
                </p>
              </div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                <p className="text-[8px] text-slate-500 font-black uppercase mb-1 tracking-widest">
                  Registry Status
                </p>
                <p className="text-xs font-black text-emerald-500 truncate uppercase">
                  CERTIFIED
                </p>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl">
              <Button
                asChild
                className="w-full h-20 rounded-xl bg-slate-900 text-white hover:bg-black flex flex-col gap-1 border-none shadow-2xl"
              >
                <a
                  href={caseData.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em]">
                    <FileDown className="h-4 w-4" /> Download Official Record
                  </span>
                  <span className="text-[8px] opacity-40 font-mono uppercase tracking-[0.1em]">
                    Tier-1 Institutional Asset (Verified)
                  </span>
                </a>
              </Button>
            </div>
          </div>

          <p className="text-center text-[9px] text-slate-600 font-medium leading-relaxed px-10">
            * เอกสารนี้ผ่านการรับรองความถูกต้องในระดับโครงสร้าง
            และจะถูกถอนการแสดงผลเพื่อความเป็นส่วนตัวตามระเบียบ PDPA ในเร็วๆ นี้
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default function DownloadVaultPage() {
  return (
    <div className="min-h-screen bg-[#050810] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl">
        <header className="text-center mb-12">
          <div className="mx-auto h-20 w-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <Activity className="h-10 w-10 text-emerald-500" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">
            Institutional <br />
            <span className="text-emerald-500 italic font-light lowercase">
              Document Registry
            </span>
          </h1>
          <p className="text-slate-500 font-mono text-[9px] tracking-[0.4em] uppercase">
            Authorized Data Node Access
          </p>
        </header>

        <main className="bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] p-12 shadow-2xl min-h-[400px]">
          <Suspense
            fallback={
              <div className="py-20 text-center space-y-4">
                <RefreshCw className="h-10 w-10 text-emerald-500 animate-spin mx-auto" />
                <p className="text-[10px] text-emerald-500 font-mono animate-pulse uppercase tracking-[0.3em]">
                  Initializing Registry...
                </p>
              </div>
            }
          >
            <RegistryContent />
          </Suspense>
        </main>

        <footer className="mt-12 text-center">
          <p className="text-slate-700 font-mono text-[8px] uppercase tracking-[0.5em] font-bold">
            UNLINK-GLOBAL ACCREDITED NETWORK
          </p>
        </footer>
      </div>
    </div>
  );
}
