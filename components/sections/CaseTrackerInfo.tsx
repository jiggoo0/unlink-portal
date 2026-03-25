import {
  MessageSquare,
  Fingerprint,
  Activity,
  ShieldCheck,
} from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "แอดไลน์ & แจ้งบริการ",
    description: "เลือกบริการที่คุณต้องการและส่งรหัสเคสที่คุณได้รับจากแอดมิน",
  },
  {
    icon: Fingerprint,
    title: "ระบบเข้ารหัสลับ",
    description: "ทุกข้อมูลจะถูกเก็บเป็นความลับสูงสุดภายใต้ Vault Protocol",
  },
  {
    icon: Activity,
    title: "ติดตามแบบ Real-time",
    description: "พิมพ์รหัสเคสในแชท เพื่อดูแถบความคืบหน้าได้ตลอด 24 ชม.",
  },
  {
    icon: ShieldCheck,
    title: "เสร็จสิ้นปฏิบัติการ",
    description: "รับการแจ้งเตือนทันทีเมื่องานของคุณสำเร็จลุล่วง",
  },
];

export default function CaseTrackerInfo() {
  return (
    <div className="py-12 bg-card rounded-3xl border border-border overflow-hidden">
      <div className="px-6 md:px-12">
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            ทำไมต้องมีระบบ Case Tracking?
          </h3>
          <p className="text-muted-foreground text-sm">
            เพราะเราเข้าใจว่าความสบายใจของคุณคือสิ่งสำคัญที่สุด
            เราจึงสร้างระบบที่โปร่งใสแต่ปลอดภัยสูงสุด
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative">
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-[1px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 border border-[#D4AF37]/20">
                  <step.icon className="text-[#D4AF37]" size={24} />
                </div>
                <h4 className="text-foreground font-bold mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[#D4AF37]/5 rounded-2xl border border-[#D4AF37]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="bg-[#D4AF37] p-2 rounded-lg text-black">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-foreground font-bold text-sm">
                Vault Protocol Level 4
              </p>
              <p className="text-muted-foreground text-xs">
                ข้อมูลของคุณถูกเข้ารหัสและทำลายทิ้งทันทีหลังปิดเคส
              </p>
            </div>
          </div>
          <button className="whitespace-nowrap bg-secondary hover:bg-secondary/80 text-[#D4AF37] px-6 py-2 rounded-full text-sm font-bold border border-[#D4AF37]/20 transition-all">
            ทดลองใช้ระบบ Demo
          </button>
        </div>
      </div>
    </div>
  );
}
