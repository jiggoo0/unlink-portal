/**
 * UNLINK-GLOBAL | Service Registry (2026)
 * -------------------------------------------------------------------------
 * ศูนย์กลางการจัดการบริการและตัวกำหนดประเภทการทำงาน (Institutional Registry)
 * ปรับปรุงใหม่เพื่อเน้นโครงสร้าง 4 เสาหลัก (Reputation Fix, Protection, IP, PDPA)
 */

import { Service } from "@unlink/shared/types";

export const SERVICES: Service[] = [
  // 🛡️ REPUTATION FIX (การกู้คืนและเยียวยาภาพลักษณ์)
  {
    id: "SRV-FIX-01",
    slug: "extreme-intervention",
    title: "Extreme Reputation Intervention | ปฏิบัติการกู้คืนและเยียวยาภาพลักษณ์ขั้นสูงสุด",
    shortDescription: "บริหารจัดการวิกฤตและกู้คืนเกียรติภูมิระดับผู้นำอย่างเบ็ดเสร็จ",
    description:
      "มาตรการขั้นสูงสุดเพื่อขจัดมลพิษทางข้อมูลและทวงคืนศักดิ์ศรีในกรณีที่กระบวนการปกติไม่บรรลุผล ผ่านยุทธวิธีพิเศษและการเจรจาระดับสูง",
    iconName: "Zap",
    image: "/images/services/srv-security-protected.webp",
    category: "Reputation Fix",
    type: "content",
    features: [
      "จัดการข่าวเสียบน Google ระดับลึก",
      "ตอบโต้ข้อมูลเท็จเชิงลึก (Counter-Intelligence)",
      "สถาปนาอัตลักษณ์ใหม่ (Identity Re-establishment)",
      "ระบบเฝ้าระวังมลพิษข้อมูล 24 ชม.",
    ],
    priceInfo: {
      startingAt: "50,000",
      unit: "โปรเจกต์",
      model: "High-Stake Intervention",
    },
    metadata: {
      defaultTitle: "Extreme Reputation Intervention | กู้ชื่อเสียงขั้นสูงสุด | UNLINK-GLOBAL",
      defaultDescription:
        "ทางออกสุดท้ายสำหรับเคสกู้ชื่อเสียงที่ซับซ้อน จัดการข่าวเสียและข้อมูลบิดเบือนระดับสถาบัน",
      keywords: ["ลบข่าวเสีย Google", "จัดการคนประจานออนไลน์", "กู้ชื่อเสียง VIP"],
    },
  },
  {
    id: "SRV-FIX-02",
    slug: "blacklist-removal",
    title: "Strategic Blacklist Elimination | การล้างข้อมูลบัญชีดำและประวัติเชิงลบเชิงยุทธศาสตร์",
    shortDescription: "ขจัดรายชื่อจากบัญชีดำออนไลน์และประวัติที่ปราศจากข้อเท็จจริง",
    description:
      "ปฏิบัติการเชิงลึกเพื่อลบข้อมูลจากเว็บไซต์รวบรวมรายชื่อผู้กระทำผิด (Blacklist) ที่ขาดการตรวจสอบหรือถูกกลั่นแกล้ง เพื่อคืนความบริสุทธิ์ให้แก่ประวัติของท่าน",
    iconName: "ShieldAlert",
    image: "/images/services/srv-security-protected.webp",
    category: "Reputation Fix",
    type: "content",
    features: [
      "Blacklistseller Mediation & Removal",
      "False Accusation Counter-Measures",
      "Digital Footprint Cleansing Protocol",
    ],
    priceInfo: {
      startingAt: "15,000",
      unit: "เคส",
      model: "Intervention Protocol",
    },
    metadata: {
      defaultTitle: "Strategic Blacklist Elimination | ลบชื่อติดแบล็คลิสต์ | UNLINK-GLOBAL",
      defaultDescription:
        "บริการจัดการลบชื่อออกจากเว็บไซต์แบล็คลิสต์ที่ไม่มีหลักฐานหรือถูกใส่ร้ายด้วยกระบวนการทางเทคนิค",
      keywords: ["ลบแบล็คลิสต์", "Blacklistseller", "ลบประวัติเสีย"],
    },
  },
  {
    id: "SRV-FIX-03",
    slug: "crisis-cleanup",
    title: "Digital Crisis Management & Cleanup | การบริหารจัดการวิกฤตและเยียวยาภาพลักษณ์ดิจิทัล",
    shortDescription: "ระงับวิกฤตชื่อเสียงออนไลน์และควบคุมความเสียหายเร่งด่วนตลอด 24 ชั่วโมง",
    description:
      "หน่วยตอบโต้สถานการณ์ฉุกเฉินเมื่อเกิดการโจมตีชื่อเสียงหรือข้อมูลรั่วไหลที่ส่งผลกระทบอย่างรุนแรงต่อเกียรติภูมิของสถาบัน",
    iconName: "Flame",
    image: "/images/services/srv-crisis-cleanup.webp",
    category: "Reputation Fix",
    type: "content",
    features: [
      "Rapid Response Unit (RRU)",
      "Search Engine Result Control (SERC)",
      "Social Media Damage Containment",
    ],
    priceInfo: {
      startingAt: "35,000",
      unit: "วิกฤต",
      model: "Emergency Protocol",
    },
    metadata: {
      defaultTitle: "Digital Crisis Management | จัดการวิกฤตชื่อเสียงออนไลน์ | UNLINK-GLOBAL",
      defaultDescription:
        "ทีมตอบโต้สถานการณ์ฉุกเฉินเมื่อถูกโจมตีชื่อเสียงบนโลกออนไลน์เพื่อรักษาความน่าเชื่อถือ",
      keywords: ["วิกฤตชื่อเสียง", "ลบโพสต์ประจาน", "Digital Crisis"],
    },
  },

  // 🛡️ REPUTATION PROTECTION (การอภิบาลและเสริมสร้างเกียรติภูมิสถาบัน)
  {
    id: "SRV-PRO-01",
    slug: "brand-identity-engineering",
    title: "Elite Brand Identity Engineering | วิศวกรรมอัตลักษณ์และภาพลักษณ์แบรนด์ระดับสูง",
    shortDescription: "สถาปนาและบริหารจัดการภาพลักษณ์แบรนด์ระดับพรีเมียม",
    description:
      "บริการวิเคราะห์และออกแบบอัตลักษณ์แบรนด์ใหม่ (Brand Re-engineering) พร้อมจัดการข้อมูลเชิงลบเพื่อยกระดับความน่าเชื่อถือสู่มาตรฐานสูงสุด",
    iconName: "Sparkles",
    image: "/images/services/srv-sme-rescue.webp",
    category: "Reputation Protection",
    type: "content",
    features: [
      "Strategic Brand Re-engineering",
      "Negative Content Suppression",
      "Premium PR & Positive Content Seeding",
      "E-E-A-T Signal Optimization",
    ],
    priceInfo: {
      startingAt: "45,000",
      unit: "โปรเจกต์",
      model: "Strategic Brand Engineering",
    },
    metadata: {
      defaultTitle: "Elite Brand Identity Engineering | สร้างภาพลักษณ์แบรนด์ | UNLINK-GLOBAL",
      defaultDescription:
        "บริการสร้างภาพลักษณ์ใหม่ให้แบรนด์ จัดการข้อมูลเชิงลบ และยกระดับความน่าเชื่อถือระดับสถาบัน",
      keywords: ["สร้างภาพลักษณ์แบรนด์", "บริหารชื่อเสียงองค์กร", "Brand Reputation"],
    },
  },
  {
    id: "SRV-PRO-02",
    slug: "professional-digital-detox",
    title: "Executive Digital Identity Detox | การชำระประวัติดิจิทัลระดับบริหาร",
    shortDescription: "ชำระร่องรอยออนไลน์และปรับปรุงโปรไฟล์ดิจิทัลเพื่อความก้าวหน้าในระดับสูง",
    description:
      "จัดการข้อมูลในอดีตที่อาจเป็นอุปสรรคต่อความก้าวหน้าทางอาชีพหรือภาพลักษณ์ส่วนบุคคล เพื่อการเริ่มต้นใหม่ที่สมบูรณ์แบบและสง่างาม",
    iconName: "History",
    image: "/images/services/srv-digital-detox.webp",
    category: "Reputation Protection",
    type: "content",
    features: [
      "Deep Scan (10-Year Historical Audit)",
      "Digital Identity Cleansing",
      "Privacy & Security Hardening",
      "SERP Optimization for Professionals",
    ],
    priceInfo: {
      startingAt: "5,000",
      unit: "ครั้ง",
      model: "Executive Protocol",
    },
    metadata: {
      defaultTitle: "Executive Digital Identity Detox | ล้างประวัติออนไลน์ | UNLINK-GLOBAL",
      defaultDescription:
        "ล้างประวัติโซเชียล ลบข้อมูลส่วนตัวที่ไม่เหมาะสม เพื่อเตรียมความพร้อมสำหรับตำแหน่งระดับสูง",
      keywords: ["ลบโพสต์เก่า", "ฟอกประวัติออนไลน์", "Executive Detox"],
    },
  },
  {
    id: "SRV-PRO-03",
    slug: "institutional-reliability",
    title: "Institutional Reliability & Trust Alignment | การเสริมสร้างความน่าเชื่อถือและเกียรติภูมิระดับสถาบัน",
    shortDescription: "ยกระดับความเชื่อมั่นเพื่อการทำธุรกรรมและพันธกิจระดับสากล",
    description:
      "วางโครงสร้างตัวตนและเอกสารเพื่อสอดรับกับเกณฑ์การตรวจสอบของสถาบันระดับสากล พร้อมบริหารจัดการร่องรอยดิจิทัลให้ใสสะอาด",
    iconName: "ShieldCheck",
    image: "/images/services/srv-institutional-reliability.webp",
    category: "Reputation Protection",
    type: "content",
    features: [
      "Institutional Profile Alignment",
      "Financial & Identity Structuring",
      "Due Diligence Readiness",
      "Global Trust Signal Engineering",
    ],
    priceInfo: {
      startingAt: "25,000",
      unit: "โปรเจกต์",
      model: "Bespoke Engineering",
    },
    metadata: {
      defaultTitle: "Institutional Reliability & Trust Alignment | UNLINK-GLOBAL",
      defaultDescription:
        "สร้างภาพลักษณ์ที่น่าเชื่อถือผ่านการจัดการประวัติออนไลน์และโครงสร้างตัวตนระดับสถาบัน",
      keywords: ["ความน่าเชื่อถือสถาบัน", "Due Diligence", "Trust Alignment"],
    },
  },

  // ⚖️ IP CONFIRMATION (การรับรองและพิทักษ์สิทธิในทรัพย์สินทางปัญญา)
  {
    id: "SRV-IPC-01",
    slug: "private-ip-registration",
    title: "Private Intellectual Property Registration | การจดทะเบียนและพิทักษ์ทรัพย์สินทางปัญญาส่วนบุคคล",
    shortDescription: "คุ้มครองสิทธิและจดทะเบียนทรัพย์สินทางปัญญาภายใต้มาตรฐานความลับสูงสุด",
    description:
      "บริการจดทะเบียนสิทธิบัตร เครื่องหมายการค้า และลิขสิทธิ์ พร้อมการบริหารจัดการสิทธิเพื่อความมั่นคงของสินทรัพย์ดิจิทัลและนวัตกรรมของท่าน",
    iconName: "FileSignature",
    image: "/images/services/srv-statement-optimization.webp",
    category: "IP Confirmation",
    type: "content",
    features: [
      "Discreet IP Registration",
      "Copyright & Trademark Protection",
      "Digital Asset Rights Management",
      "IP Portfolio Audit",
    ],
    priceInfo: {
      startingAt: "20,000",
      unit: "เคส",
      model: "Registration Protocol",
    },
    metadata: {
      defaultTitle: "Private IP Registration | จดทะเบียนทรัพย์สินทางปัญญา | UNLINK-GLOBAL",
      defaultDescription:
        "บริการจดทะเบียนและคุ้มครองทรัพย์สินทางปัญญาด้วยความเป็นส่วนตัวและความปลอดภัยสูงสุด",
      keywords: ["จดสิทธิบัตร", "จดเครื่องหมายการค้า", "คุ้มครองลิขสิทธิ์"],
    },
  },
  {
    id: "SRV-IPC-02",
    slug: "patent-trademark-strategy",
    title: "Global Patent & Trademark Strategic Planning | การวางแผนยุทธศาสตร์สิทธิบัตรและเครื่องหมายการค้าระดับสากล",
    shortDescription: "กำหนดกลยุทธ์การคุ้มครองทรัพย์สินทางปัญญาในระดับสากล",
    description:
      "ออกแบบโครงสร้างการถือครองและปกป้องทรัพย์สินทางปัญญา เพื่อสร้างความได้เปรียบทางการแข่งขันและเพิ่มมูลค่าทางธุรกิจในระดับสากล",
    iconName: "Globe",
    image: "/images/services/srv-lifestyle-mobility.webp",
    category: "IP Confirmation",
    type: "content",
    features: [
      "Global IP Strategy Development",
      "Competitive Landscape Analysis",
      "IP Monetization Consulting",
      "Infringement Risk Mitigation",
    ],
    priceInfo: {
      startingAt: "35,000",
      unit: "โปรเจกต์",
      model: "Strategic Planning",
    },
    metadata: {
      defaultTitle: "Global Patent & Trademark Strategy | กลยุทธ์ IP สากล | UNLINK-GLOBAL",
      defaultDescription:
        "วางแผนกลยุทธ์ทรัพย์สินทางปัญญาระดับสากลเพื่อปกป้องนวัตกรรมและสร้างมูลค่าเพิ่ม",
      keywords: ["กลยุทธ์สิทธิบัตร", "Trademark Strategy", "IP Global"],
    },
  },

  // 🛡️ PDPA ENFORCEMENT (การบังคับใช้กฎหมายคุ้มครองข้อมูลส่วนบุคคล)
  {
    id: "SRV-PDP-01",
    slug: "pdpa-legal-action",
    title: "Strategic PDPA Legal Enforcement | การบังคับใช้สิทธิตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลเชิงยุทธศาสตร์",
    shortDescription: "บังคับใช้สิทธิตามกฎหมาย PDPA เพื่อพิทักษ์ความเป็นส่วนตัวของท่าน",
    description:
      "ดำเนินการทางกฎหมายกับผู้ที่ละเมิดข้อมูลส่วนบุคคลหรือนำข้อมูลไปใช้โดยมิชอบ เพื่อทวงคืนความยุติธรรมและค่าชดเชยที่พึงได้",
    iconName: "Gavel",
    image: "/images/services/srv-mobility-vip.webp",
    category: "PDPA Enforcement",
    type: "content",
    features: [
      "PDPA Violation Investigation",
      "Legal Notice & Litigation Support",
      "Data Breach Compensation Claims",
      "Right to be Forgotten Enforcement",
    ],
    priceInfo: {
      startingAt: "30,000",
      unit: "เคส",
      model: "Legal Action Protocol",
    },
    metadata: {
      defaultTitle: "Strategic PDPA Legal Enforcement | ฟ้องละเมิด PDPA | UNLINK-GLOBAL",
      defaultDescription:
        "บริการดำเนินการทางกฎหมายกรณีถูกละเมิดข้อมูลส่วนบุคคลตาม พรบ. คุ้มครองข้อมูลส่วนบุคคล",
      keywords: ["ฟ้อง PDPA", "ละเมิดข้อมูลส่วนบุคคล", "กฎหมายคุ้มครองข้อมูล"],
    },
  },
  {
    id: "SRV-PDP-02",
    slug: "corporate-compliance",
    title: "Corporate Data Governance & Compliance | ธรรมาภิบาลข้อมูลและมาตรฐานการคุ้มครองข้อมูลองค์กร",
    shortDescription: "วางระบบคุ้มครองข้อมูลส่วนบุคคลและธรรมาภิบาลข้อมูลระดับมาตรฐานสากล",
    description:
      "บริการที่ปรึกษาและวางระบบ PDPA Compliance ครบวงจร เพื่อให้องค์กรดำเนินธุรกิจได้อย่างถูกต้องตามกฎหมายและเปี่ยมด้วยความน่าเชื่อถือ",
    iconName: "Lock",
    image: "/images/services/srv-transparent-investment.webp",
    category: "PDPA Enforcement",
    type: "content",
    features: [
      "PDPA Compliance Audit",
      "Data Governance Framework",
      "Consent Management Systems",
      "DPO as a Service",
    ],
    priceInfo: {
      startingAt: "50,000",
      unit: "โปรเจกต์",
      model: "Compliance Framework",
    },
    metadata: {
      defaultTitle: "Corporate PDPA Compliance | วางระบบ PDPA องค์กร | UNLINK-GLOBAL",
      defaultDescription:
        "บริการวางระบบ PDPA และธรรมาภิบาลข้อมูลสำหรับองค์กรเพื่อความถูกต้องตามกฎหมาย",
      keywords: ["วางระบบ PDPA", "Data Governance", "Compliance"],
    },
  },
];
