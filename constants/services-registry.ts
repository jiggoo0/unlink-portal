/**
 * UNLINK-GLOBAL | Service Registry (2026)
 * -------------------------------------------------------------------------
 * ศูนย์กลางการจัดการบริการและตัวกำหนดประเภทการทำงาน (Hybrid Registry)
 * ปรับปรุงใหม่เพื่อเน้นการเข้าถึงระบบอัตโนมัติ (Instant Conversion)
 */

import { Service } from "@unlink/shared/types";

export const SERVICES: Service[] = [
  // 🛡️ REPUTATION SERVICES (จัดการชื่อเสียง)
  {
    id: "SRV-REP-01",
    slug: "extreme-intervention",
    title: "Extreme Reputation Intervention",
    shortDescription: "จัดการข่าวเสียและกู้ชื่อเสียงระดับ VIP ขั้นเด็ดขาด",
    description:
      "เมื่อการแจ้งลบปกติไม่ได้ผล เราเข้าจัดการด้วยเทคนิคพิเศษเพื่อจัดการมลพิษข้อมูลและทวงคืนศักดิ์ศรีให้คุณ",
    iconName: "Zap",
    image: "/images/services/srv-security-protected.webp",
    category: "Reputation",
    type: "content",
    features: [
      "จัดการข่าวเสียบน Google",
      "ตอบโต้ข้อมูลเท็จเชิงลึก",
      "สถาปนาอัตลักษณ์ใหม่",
      "ระบบเฝ้าระวัง 24 ชม.",
    ],
    priceInfo: {
      startingAt: "50,000",
      unit: "โปรเจกต์",
      model: "High-Stake Intervention",
    },
    metadata: {
      defaultTitle: "ลบข่าวเสีย Google กู้ชื่อเสียงขั้นสูงสุด | UNLINK-GLOBAL",
      defaultDescription:
        "ทางออกสุดท้ายสำหรับเคสกู้ชื่อเสียงที่ซับซ้อน จัดการข่าวเสียและข้อมูลบิดเบือน",
      keywords: ["ลบข่าวเสีย Google", "จัดการคนประจานออนไลน์", "กู้ชื่อเสียง"],
    },
  },
  {
    id: "SRV-REP-02",
    slug: "blacklist-remover",
    title: "Blacklist Intelligence Removal",
    shortDescription: "ลบชื่อติดแบล็คลิสต์ออนไลน์ที่ไม่มีหลักฐาน",
    description:
      "ปฏิบัติการเชิงลึกเพื่อลบข้อมูลจากเว็บไซต์รวบรวมรายชื่อผู้กระทำผิดที่ขาดการตรวจสอบข้อเท็จจริง",
    iconName: "ShieldAlert",
    image: "/images/services/srv-security-protected.webp",
    category: "Reputation",
    type: "content",
    features: [
      "Blacklistseller Mediation",
      "False Accusation Counter",
      "Digital Footprint Cleansing",
    ],
    priceInfo: {
      startingAt: "15,000",
      unit: "เคส",
      model: "Intervention Protocol",
    },
    metadata: {
      defaultTitle: "ลบชื่อติดแบล็คลิสต์ออนไลน์ | UNLINK-GLOBAL",
      defaultDescription:
        "บริการจัดการลบชื่อออกจากเว็บไซต์แบล็คลิสต์ที่ไม่มีหลักฐานหรือถูกใส่ร้าย",
      keywords: ["ลบแบล็คลิสต์", "Blacklistseller", "ลบประวัติเสีย"],
    },
  },
  {
    id: "SRV-REP-03",
    slug: "crisis-cleanup",
    title: "Digital Crisis Cleanup",
    shortDescription: "ระงับวิกฤตชื่อเสียงออนไลน์เร่งด่วน 24/7",
    description:
      "มาตรการตอบโต้ทันทีเมื่อเกิดเหตุการณ์โจมตีชื่อเสียง หรือข้อมูลรั่วไหลที่ส่งผลกระทบอย่างรุนแรง",
    iconName: "Flame",
    image: "/images/services/srv-crisis-cleanup.webp",
    category: "Reputation",
    type: "content",
    features: [
      "Rapid Response Unit",
      "Search Engine Result Control",
      "Social Media Containment",
    ],
    priceInfo: {
      startingAt: "35,000",
      unit: "วิกฤต",
      model: "Emergency Protocol",
    },
    metadata: {
      defaultTitle: "จัดการวิกฤตชื่อเสียงออนไลน์เร่งด่วน | UNLINK-GLOBAL",
      defaultDescription:
        "ทีมตอบโต้สถานการณ์ฉุกเฉินเมื่อถูกโจมตีชื่อเสียงบนโลกออนไลน์",
      keywords: ["วิกฤตชื่อเสียง", "ลบโพสต์ประจาน", "Digital Crisis"],
    },
  },
  {
    id: "SRV-REP-04",
    slug: "digital-detox-jobbers",
    title: "Professional Digital Detox",
    shortDescription: "ล้างประวัติออนไลน์เพื่อการสมัครงานและปรับโปรไฟล์ใหม่",
    description:
      "จัดการข้อมูลในอดีตที่อาจเป็นอุปสรรคต่อความก้าวหน้าทางอาชีพ เพื่อให้คุณเริ่มต้นใหม่ได้อย่างมั่นใจ",
    iconName: "History",
    image: "/images/services/srv-digital-detox.webp",
    category: "Reputation",
    type: "content",
    features: [
      "สแกนหาจุดเสี่ยงเชิงลึกย้อนหลัง 10 ปี",
      "ทำความสะอาดอัตลักษณ์ดิจิทัลในทุกแพลตฟอร์ม",
      "ยกระดับความปลอดภัยและความเป็นส่วนตัวขั้นสูง",
      "วิเคราะห์และจัดการผลการค้นหาที่ไม่พึงประสงค์ใน Google",
    ],
    priceInfo: {
      startingAt: "2,900",
      unit: "ครั้ง",
      model: "One-time Payment",
    },
    metadata: {
      defaultTitle:
        "บริการลบโพสต์ย้อนหลัง ฟอกประวัติออนไลน์ก่อนสมัครงาน | UNLINK-GLOBAL",
      defaultDescription:
        "ล้างประวัติโซเชียล ลบข้อมูลส่วนตัวที่ไม่เหมาะสม เตรียมความพร้อมสำหรับการสมัครงาน",
      keywords: ["ลบโพสต์เก่า", "ฟอกประวัติออนไลน์", "ตรวจประวัติโซเชียล"],
    },
  },
  {
    id: "SRV-REP-05",
    slug: "ex-partner-eraser",
    title: "Personal History Containment",
    shortDescription:
      "จัดการข้อมูลและความสัมพันธ์ในอดีตที่ส่งผลกระทบต่อปัจจุบัน",
    description:
      "บริการลบรูปภาพ ข้อความ หรือโพสต์ที่เกี่ยวข้องกับความสัมพันธ์เก่าภายใต้ความเป็นส่วนตัวสูงสุด",
    iconName: "ImageOff",
    image: "/images/services/srv-ex-partner-eraser.webp",
    category: "Reputation",
    type: "content",
    features: [
      "กำจัดเนื้อหาที่ไม่พึงประสงค์ออกจากโซเชียลมีเดีย",
      "จัดการข้อมูลละเอียดอ่อนและรูปภาพที่ถูกประจาน",
      "ล้างประวัติรูปภาพจากระบบการค้นหา Google",
      "รักษาความลับขั้นสูงสุดตลอดกระบวนการจัดการ",
    ],
    priceInfo: {
      startingAt: "3,900",
      unit: "เคส",
      model: "Starting Price",
    },
    metadata: {
      defaultTitle: "รับลบรูปหลุด ลบรูปแฟนเก่า ลบประจานออนไลน์ | UNLINK-GLOBAL",
      defaultDescription:
        "บริการลบภาพส่วนตัว ข้อมูลละเอียดอ่อน และจัดการร่องรอยดิจิทัลหลังเลิกรา",
      keywords: ["ลบรูปหลุด", "ลบประจาน", "ลบรูปแฟนเก่า"],
    },
  },
  {
    id: "SRV-REP-06",
    slug: "sme-reputation-rescue",
    title: "SME Reputation Rescue",
    shortDescription:
      "กู้ชื่อเสียงและจัดการรีวิวเชิงลบสำหรับธุรกิจขนาดกลางและย่อม",
    description:
      "รับมือกับการรีวิวที่กลั่นแกล้งหรือข้อมูลเท็จที่ทำลายความเชื่อมั่นของลูกค้าต่อแบรนด์ของคุณ",
    iconName: "Store",
    image: "/images/services/srv-sme-rescue.webp",
    category: "Reputation",
    type: "content",
    features: [
      "จัดการรีวิวปลอมและดิสเครดิตบน Google Maps และ Facebook",
      "ระงับกระทู้โจมตีหรือโพสต์ใส่ร้ายที่ทำลายภาพลักษณ์แบรนด์",
      "วางแผนกระตุ้นรีวิวบวกจากลูกค้าจริงเพื่อเพิ่มคะแนน",
      "จัดโครงสร้างข้อมูลใหม่เพื่อครองพื้นที่การค้นหาหน้าแรก",
    ],
    priceInfo: {
      startingAt: "12,000",
      unit: "เดือน/โปรเจกต์",
      model: "Monthly/Project",
    },
    metadata: {
      defaultTitle: "รับลบรีวิวแย่ Google Maps กู้ดาวร้านค้า | UNLINK-GLOBAL",
      defaultDescription:
        "จัดการรีวิวหน้าม้า กู้ชื่อเสียงร้านอาหาร คลินิก และธุรกิจ SME",
      keywords: ["ลบรีวิว Google Maps", "แก้ดาวตก", "กู้ชื่อร้านค้า"],
    },
  },
  {
    id: "SRV-REP-07",
    slug: "brand-identity-engineering",
    title: "Brand Identity & Reputation Engineering",
    shortDescription:
      "สร้างภาพลักษณ์และบริหารชื่อเสียงเฉพาะทางตามชื่อแบรนด์ของคุณ",
    description:
      "บริการวิเคราะห์และสร้างภาพลักษณ์แบรนด์ใหม่ (Brand Re-engineering) พร้อมจัดการข้อมูลเชิงลบ เพื่อยกระดับความน่าเชื่อถือให้กับแบรนด์ในโลกดิจิทัล",
    iconName: "Sparkles",
    image: "/images/services/srv-sme-rescue.webp",
    category: "Reputation",
    type: "content",
    features: [
      "วิเคราะห์และวางกลยุทธ์ภาพลักษณ์แบรนด์ใหม่",
      "จัดการข้อมูลเชิงลบที่ส่งผลกระทบต่อแบรนด์",
      "สร้างคอนเทนต์เชิงบวกและ PR ระดับพรีเมียม",
      "ยกระดับ E-E-A-T Signal ให้กับแบรนด์บน Google",
    ],
    priceInfo: {
      startingAt: "45,000",
      unit: "โปรเจกต์",
      model: "Strategic Brand Engineering",
    },
    metadata: {
      defaultTitle:
        "รับสร้างภาพลักษณ์แบรนด์ บริหารชื่อเสียงองค์กร | UNLINK-GLOBAL",
      defaultDescription:
        "บริการสร้างภาพลักษณ์ใหม่ให้แบรนด์ จัดการข้อมูลเชิงลบ และยกระดับความน่าเชื่อถือบนโลกออนไลน์",
      keywords: [
        "สร้างภาพลักษณ์แบรนด์",
        "บริหารชื่อเสียงองค์กร",
        "Brand Reputation",
      ],
    },
  },

  // 💰 FINANCIAL SERVICES (วิศวกรรมการเงิน)
  {
    id: "SRV-FIN-001",
    slug: "credit-engineering",
    title: "Credit Engineering & Recovery",
    shortDescription: "ฟื้นฟูเครดิตและการปรับโครงสร้างเพื่อการอนุมัติสินเชื่อ",
    description:
      "สำหรับคนอยากกู้บ้านแต่ติดแบล็คลิสต์ เราช่วยวิเคราะห์จุดตายและฟื้นฟูประวัติให้ธนาคารยอมรับ",
    iconName: "TrendingUp",
    image: "/images/services/srv-credit-engineering.webp",
    category: "Financial",
    type: "content",
    features: [
      "วิเคราะห์สาเหตุการถูกปฏิเสธ",
      "ฟื้นฟู Credit Scoring",
      "จัดเตรียมเอกสารรายได้",
      "ที่ปรึกษาจนถึงวันโอน",
    ],
    priceInfo: {
      startingAt: "9,900",
      unit: "โปรเจกต์",
      model: "Success-Based Action",
    },
    metadata: {
      defaultTitle: "กู้บ้านไม่ผ่าน ติดบูโร ทำยังไงดี? | UNLINK-GLOBAL",
      defaultDescription:
        "ทางออกสำหรับคนกู้บ้านไม่ผ่านเพราะติดบูโร ฟื้นฟูเครดิตและจัดเตรียมเอกสาร",
      keywords: ["กู้บ้านไม่ผ่าน", "แก้เครดิตบูโร", "ฟื้นฟูเครดิต"],
    },
  },
  {
    id: "SRV-FIN-002",
    slug: "statement-optimization",
    title: "Statement Optimization Protocol",
    shortDescription: "จัดระเบียบสเตทเม้นท์เพื่อการยื่นกู้และขอวีซ่า",
    description:
      "เราช่วยจัดการรายการเดินบัญชีของคุณให้กลายเป็นข้อมูลที่ธนาคารเชื่อถือ ผ่านการวางแผนที่ถูกต้อง",
    iconName: "FileText",
    image: "/images/services/srv-statement-optimization.webp",
    category: "Financial",
    type: "interactive",
    features: [
      "วางแผนการเดินเงินเข้า-ออก",
      "สร้างสภาพคล่องให้น่าเชื่อถือ",
      "ปรับพฤติกรรมการใช้จ่าย",
      "เชื่อมโยงข้อมูลกับเอกสารรายได้",
    ],
    priceInfo: {
      startingAt: "12,000",
      unit: "โปรเจกต์",
      model: "Success Protocol",
    },
    metadata: {
      defaultTitle: "วิธีเดินสเตทเม้นท์กู้บ้าน 2569 | UNLINK-GLOBAL",
      defaultDescription:
        "ที่ปรึกษาออกแบบรายการเดินบัญชี เตรียมความพร้อมเพื่อกู้บ้าน",
      keywords: [
        "วิธีเดินสเตทเม้นท์",
        "จัดระเบียบบัญชีธนาคาร",
        "วางแผนการเงิน",
      ],
    },
  },
  {
    id: "SRV-FIN-003",
    slug: "institutional-reliability",
    title: "Institutional Reliability Alignment",
    shortDescription:
      "ยกระดับความน่าเชื่อถือระดับสถาบันเพื่อการทำธุรกรรมขนาดใหญ่",
    description:
      "วางโครงสร้างตัวตนและเอกสารเพื่อสอดรับกับเกณฑ์การตรวจสอบของสถาบันการเงินระดับสากล",
    iconName: "ShieldCheck",
    image: "/images/services/srv-institutional-reliability.webp",
    category: "Financial",
    type: "content",
    features: [
      "ปรับปรุงประวัติออนไลน์: ล้างข้อมูลเชิงลบและสร้างชื่อเสียงใหม่ที่น่าเชื่อถือ",
      "จัดวางโครงสร้างการเงิน: เตรียมรายได้และทรัพย์สินให้เป็นระบบตามเกณฑ์ธนาคาร",
      "เตรียมความพร้อมการตรวจสอบ: จัดทำข้อมูลเพื่อรองรับการตรวจสอบประวัติเชิงลึก",
      "เปิดประตูสู่โอกาสใหม่: แก้ปัญหาประวัติในอดีตที่เคยปิดกั้นโอกาสของคุณ",
    ],
    priceInfo: {
      startingAt: "25,000",
      unit: "Integrated Protocol",
      model: "Bespoke Engineering",
    },
    metadata: {
      defaultTitle:
        "สร้างความน่าเชื่อถือเพื่อกู้บ้านและทำธุรกิจ | UNLINK-GLOBAL",
      defaultDescription:
        "สร้างภาพลักษณ์ที่น่าเชื่อถือผ่านการจัดการประวัติออนไลน์และโครงสร้างการเงิน",
      keywords: ["กู้บ้านไม่ผ่าน", "แก้เครดิตบูโร", "ฟอกประวัติออนไลน์"],
    },
  },
  {
    id: "SRV-FIN-004",
    slug: "transparent-investment",
    title: "Transparent Investment Documentation",
    shortDescription: "จัดทำเอกสารแสดงแหล่งที่มาของเงินลงทุนอย่างโปร่งใส",
    description:
      "ช่วยเตรียมข้อมูลและหลักฐานการลงทุนให้มีความชัดเจนตามกฎระเบียบป้องกันการฟอกเงิน (AMLO)",
    iconName: "FileText",
    image: "/images/services/srv-transparent-investment.webp",
    category: "Financial",
    type: "content",
    features: [
      "การวิเคราะห์เคสรายบุคคลเชิงลึก",
      "กำหนดขอบเขตงาน (Scope of Work) ที่ชัดเจน",
      "ระบบโครงสร้างราคาที่ไม่มีค่าใช้จ่ายแฝง",
      "การจัดทำเอกสารรับรองที่โปร่งใสและตรวจสอบได้",
    ],
    priceInfo: {
      startingAt: "0",
      unit: "Project",
      model: "Transparent Pricing",
    },
    metadata: {
      defaultTitle: "ค่าบริการและขั้นตอนการดำเนินงาน | UNLINK-GLOBAL",
      defaultDescription:
        "รายละเอียดค่าบริการวางแผนการเงิน แก้เครดิตบูโร และกู้บ้าน ชัดเจน โปร่งใส",
      keywords: ["ราคาบริการ", "แก้เครดิตบูโร", "กู้บ้านไม่ผ่าน"],
    },
  },

  // ✈️ IMMIGRATION & MOBILITY (วีซ่าและการเดินทาง)
  {
    id: "SRV-IMM-04",
    slug: "lifestyle-mobility-independent-visa",
    title: "Lifestyle Mobility & Independent Visa",
    shortDescription:
      "ยุทธศาสตร์การเตรียมโปรไฟล์เพื่อขอวีซ่าพำนักระยะยาวสำหรับอาชีพอิสระ",
    description:
      "ออกแบบแผนการเดินทางและเอกสารประกอบเพื่อรองรับ Lifestyle การทำงานแบบ Digital Nomad ทั่วโลก",
    iconName: "Globe",
    image: "/images/services/srv-lifestyle-mobility.webp",
    category: "Immigration",
    type: "content",
    features: [
      "ปรับปรุงสถานะทางการเงิน (Financial Grooming) ให้สอดคล้องกับอาชีพอิสระ",
      "สร้างอัตลักษณ์มืออาชีพ (Professional Identity) ที่สถาบันการยอมรับ",
      "ร่างเอกสารรับรองงานและจดหมายแนะนำตัวระดับสูง",
      "แนะนำวิธีรับมือสถานการณ์หน้าด่าน ตม. และการตอบคำถามอย่างมั่นใจ",
    ],
    priceInfo: {
      startingAt: "19,000",
      unit: "โปรเจกต์",
      model: "Discreet VIP Protocol",
    },
    metadata: {
      defaultTitle:
        "รับทำวีซ่าอาชีพอิสระ 2569 | ปรึกษาวีซ่าไลฟ์สไตล์ | UNLINK-GLOBAL",
      defaultDescription:
        "ทางเลือกใหม่สำหรับคนทำงานอิสระที่ต้องการวีซ่าไปต่างประเทศ จัดเตรียมเอกสารและรับรองรายได้ให้ดูเป็นมืออาชีพ",
      keywords: ["วีซ่าอาชีพอิสระ", "เตรียมเอกสารวีซ่า", "วีซ่าไลฟ์สไตล์"],
    },
  },
  {
    id: "SRV-IMM-06",
    slug: "global-career-mobility-vip",
    title: "Elite Global Career Mobility (VIP)",
    shortDescription:
      "ดูแลวีซ่าและปั้นโปรไฟล์เพื่อการทำงานต่างประเทศสำหรับผู้หญิงโดยเฉพาะ",
    description:
      "บริการที่ปรึกษาและจัดเตรียมเอกสารสำหรับผู้หญิงที่ต้องการย้ายไปทำงานหรือพำนักในต่างประเทศ เราเน้นการสร้างโปรไฟล์ที่น่าเชื่อถือและจัดการอุปสรรคด้านเอกสารภายใต้ความลับสูงสุด",
    iconName: "UserRound",
    image: "/images/services/srv-mobility-vip.webp",
    category: "Immigration",
    type: "content",
    features: [
      "Zero Judgment Policy: ดูแลทุกอาชีพด้วยความเข้าใจและให้เกียรติ",
      "Financial Profile Grooming: ปรับปรุงสเตทเม้นท์ให้สอดคล้องกับรายได้จริง",
      "Discreet Documentation: จัดเตรียมเอกสารรับรองที่ดูเป็นมืออาชีพและตรวจสอบได้",
      "Global Network Support: แนะนำแนวทางการพำนักในดูไบ มาเลเซีย และยุโรป",
    ],
    priceInfo: {
      startingAt: "25,000",
      unit: "โปรเจกต์",
      model: "VIP Personal Concierge",
    },
    metadata: {
      defaultTitle:
        "รับทำวีซ่าสาวทำงานต่างประเทศ | ปั้นโปรไฟล์ย้ายถิ่นฐาน | UNLINK-GLOBAL",
      defaultDescription:
        "บริการดูแลวีซ่าและจัดเตรียมเอกสารสำหรับผู้หญิงที่ต้องการไปทำงานต่างประเทศ เน้นความปลอดภัย ความลับ และผลลัพธ์ที่จับต้องได้",
      keywords: [
        "วีซ่าทำงานต่างประเทศ",
        "รับทำวีซ่าผู้หญิง",
        "ย้ายไปทำงานต่างประเทศ",
        "วีซ่าดูไบ",
        "วีซ่ามาเลเซีย",
      ],
    },
  },
];
