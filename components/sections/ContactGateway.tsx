/** @format */

"use client";

import {
  ShieldCheck,
  Lock,
  MessageSquare,
  ClipboardCheck,
  DollarSign,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site-config";
import { motion } from "framer-motion";

/**
 * 🌟 CONTACT GATEWAY (Human-Connect Protocol v1.1)
 * ---------------------------------------------------------
 * ปรับปรุงเนื้อหาให้น่าอ่าน ลดความอัดอัด และเน้นความเชื่อมั่น
 */

export function ContactGateway() {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      title: "ราคาชัดเจน ตรวจสอบได้",
      description: "ตรวจสอบได้ทุกขั้นตอน ไม่มีค่าใช้จ่ายแฝง มั่นใจได้ 100%",
    },
    {
      icon: <Activity className="w-6 h-6 text-green-500" />,
      title: "ประเมินโอกาสสำเร็จ",
      description:
        "วิเคราะห์ก่อนเริ่มงานจริง ไม่ขายฝัน รายงานความคืบหน้าตลอดเวลา",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-purple-500" />,
      title: "รายงานผลต่อเนื่อง",
      description: "แจ้งความคืบหน้าให้ทราบทุกระยะ ไม่ทิ้งงาน มั่นใจในคุณภาพ",
    },
  ];

  return (
    <section className="container py-24 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary font-mono text-[10px] tracking-[0.4em] uppercase"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>ที่ปรึกษาส่วนตัวความลับสูงสุด</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-balance"
          >
            คุยกับ <span className="text-primary italic">ที่ปรึกษาส่วนตัว</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            ปรึกษาแผนการทำงานจริงกับเรา
            เพื่อหาแนวทางที่ดีที่สุดในพื้นที่ปลอดภัยและความลับสูงสุด
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
            >
              <div className="mb-4 p-3 rounded-xl bg-muted w-fit group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-slate-900 p-8 md:p-12 text-white overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-400 font-mono text-xs tracking-widest uppercase">
                <Lock className="w-4 h-4" />
                <span>ช่องทางปรึกษาแบบลับที่สุด</span>
              </div>
              <h3 className="text-3xl font-bold text-balance">
                ความลับของคุณคือหัวใจของเรา
              </h3>
              <p className="text-muted-foreground max-w-md">
                พื้นที่ปลอดภัย 100% สำหรับการวางแผนเชิงกลยุทธ์
                ทักมาคุยกับที่ปรึกษาโดยตรงได้ที่นี่
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-2xl font-bold text-lg px-8 h-16 group"
              >
                <a href={siteConfig.contact.lineUrl} target="_blank">
                  ทักมาคุยกับเราสิครับ
                  <MessageSquare className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-[10px] text-center text-muted-foreground font-mono tracking-widest uppercase">
                ปลอดภัย มั่นใจได้ 100%
              </p>
            </div>
          </div>

          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32 rounded-full" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 blur-[80px] -ml-24 -mb-24 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
