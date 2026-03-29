import { Identity } from "./types";

/**
 * 🆔 UNLINK-GLOBAL: CORE IDENTITY REGISTRY (Source of Truth)
 * -------------------------------------------------------------------------
 * มาตรฐานข้อมูลบุคคล (5 ราย) และบริษัท (1 ราย) ตามระบบสากล
 * ใช้สำหรับการตรวจสอบสิทธิ์ (Auth), บันทึกประวัติ (Audit) และการยืนยันสาธารณะ (Registry)
 */

export const coreIdentities: Identity[] = [
  // --- 👥 5 INDIVIDUALS (PERSONS) ---
  {
    id: "UL-P-001",
    type: "person",
    name: "9mza / Alongkorn Yomkerd",
    gender: "Male",
    expertise: "Strategic Intelligence & InfoSec",
    bio: "Founding Architect of The Shield Protocol. Specializing in high-stakes reputation management and digital identity recovery.",
    trust_level: 10,
    last_checked: new Date().toISOString(),
    created_at: "2024-01-01T00:00:00Z",
    updated_at: new Date().toISOString(),
    sameAs: [
      "https://me.aemdevweb.com",
      "https://www.aemdevweb.com",
      "https://github.com/9mza",
    ],
    metadata: JSON.stringify({
      alias: "9mza",
      role: "Founder / Ultimate Authority Owner",
      tags: ["Infrastructure", "Security", "Crisis Management"],
    }),
  },
  {
    id: "UL-P-002",
    type: "person",
    name: "นาย ก. (นายสมมุติ)",
    gender: "Male",
    expertise: "Financial Profile Engineering",
    bio: "Senior Consultant for financial statement optimization and mortgage approval strategies in the digital era.",
    trust_level: 8,
    last_checked: new Date().toISOString(),
    created_at: "2024-01-15T00:00:00Z",
    updated_at: new Date().toISOString(),
    metadata: JSON.stringify({
      alias: "Mr. S",
      role: "Financial Advisor",
      tags: ["Banking", "Mortgage", "Statement"],
    }),
  },
  {
    id: "UL-P-003",
    type: "person",
    name: "คุณ จิราภรณ์ (นามสมมุติ)",
    gender: "Female",
    expertise: "Digital Reputation Management",
    bio: "Expert in Google search content removal and PDPA enforcement for individual privacy rights.",
    trust_level: 9,
    last_checked: new Date().toISOString(),
    created_at: "2024-02-01T00:00:00Z",
    updated_at: new Date().toISOString(),
    metadata: JSON.stringify({
      role: "Reputation Expert",
      tags: ["SEO", "Content Removal", "Privacy"],
    }),
  },
  {
    id: "UL-P-004",
    type: "person",
    name: "คุณ กิตติพงษ์ (นามสมมุติ)",
    gender: "Male",
    expertise: "Legal Compliance & Data Privacy",
    bio: "Specializing in online defamation cases and legal framework for identity restoration.",
    trust_level: 9,
    last_checked: new Date().toISOString(),
    created_at: "2024-02-10T00:00:00Z",
    updated_at: new Date().toISOString(),
    metadata: JSON.stringify({
      role: "Legal Officer",
      tags: ["Law", "Compliance", "PDPA"],
    }),
  },
  {
    id: "UL-P-005",
    type: "person",
    name: "คุณ สุรีรัตน์ (นามสมมุติ)",
    gender: "Female",
    expertise: "Strategic Communications",
    bio: "Director of re-branding and crisis communication for high-profile clients transitioning to new professional identities.",
    trust_level: 8,
    last_checked: new Date().toISOString(),
    created_at: "2024-03-01T00:00:00Z",
    updated_at: new Date().toISOString(),
    metadata: JSON.stringify({
      role: "Comms Director",
      tags: ["Branding", "PR", "Crisis Comms"],
    }),
  },

  // --- 🍜 2 INDIVIDUALS FROM CH.SAHACHAI (nextjs_nuddle) ---
  {
    id: "UL-P-006",
    type: "person",
    name: "เฮียเนก (Mr. Nake)",
    gender: "Male",
    expertise: "Traditional Charcoal Roasted Pork & Noodle Crafting",
    bio: "The master chef behind Ch. Sahachai. 9 years of excellence in traditional BBQ pork roasting and handmade egg noodle standards in Tak Province.",
    trust_level: 9,
    last_checked: new Date().toISOString(),
    created_at: "2024-03-26T00:00:00Z",
    updated_at: new Date().toISOString(),
    metadata: JSON.stringify({
      alias: "เฮียเนก",
      role: "Master Chef",
      tags: ["Culinary Art", "BBQ Specialist", "Traditional Recipes"],
    }),
  },
  {
    id: "UL-P-007",
    type: "person",
    name: "เจ๊ตั๊ก (Mrs. Tuk)",
    gender: "Female",
    expertise: "Quality Control & Service Excellence",
    bio: "Strategic operator and quality controller for Ch. Sahachai. Ensuring the freshness of premium crab meat and delivering hospitality with a 9-year track record.",
    trust_level: 9,
    last_checked: new Date().toISOString(),
    created_at: "2024-03-26T00:00:00Z",
    updated_at: new Date().toISOString(),
    metadata: JSON.stringify({
      alias: "เจ๊ตั๊ก",
      role: "Service Director",
      tags: ["Quality Assurance", "Customer Service", "Ingredient Sourcing"],
    }),
  },

  // --- 🏢 2 COMPANIES (ORGANIZATIONS) ---
  {
    id: "UL-C-001",
    type: "organization",
    name: "UNLINK-GLOBAL (Thailand)",
    industry: "Digital Identity & Reputation Management",
    key_person_id: "UL-P-001",
    assets_summary: "The Shield Protocol & Global Verification Network",
    trust_level: 10,
    last_checked: new Date().toISOString(),
    created_at: "2024-01-01T00:00:00Z",
    updated_at: new Date().toISOString(),
    metadata: JSON.stringify({
      slogan: "ยุติอดีตที่ทำร้ายคุณ ทวงคืนสิทธิ์การเริ่มต้นชีวิตใหม่",
      operator: "AEMDEVWEB",
    }),
  },
  {
    id: "UL-C-002",
    type: "organization",
    name: "ช.สหชัย เกี๊ยวปูหมูแดง (Ch. Sahachai)",
    industry: "Food & Beverage (Traditional Cuisine)",
    key_person_id: "UL-P-006",
    assets_summary:
      "9 Years of Culinary Excellence • Signature Crab Noodles & Charcoal Roasted Pork",
    trust_level: 9,
    last_checked: new Date().toISOString(),
    created_at: "2024-03-26T00:00:00Z",
    updated_at: new Date().toISOString(),
    metadata: JSON.stringify({
      slogan: "9 ปี แห่งความภูมิใจ จากหัวใจเฮียเนกและเจ๊ตั๊ก",
      address: "จ.ตาก (สะพานกิตติขจร)",
      branch: "Main Branch (Tak)",
      social: {
        facebook: "SahachaiNoodleTak",
        phone: "083-630-1174",
      },
    }),
  },

  // --- 👥 1 INDIVIDUAL (PERSON) - JP-VISUAL&DOCS ---
  {
    id: "UL-P-008",
    type: "person",
    name: "เจ้าป่า (Chao Pa)",
    gender: "Male",
    expertise: "Digital Identity Verification & Reputation Management",
    bio: "Official representative and verification officer for UNLINK-TH. Specializing in institutional trust linkage and E-E-A-T optimization.",
    trust_level: 10,
    last_checked: new Date().toISOString(),
    created_at: "2024-03-26T00:00:00Z",
    updated_at: new Date().toISOString(),
    sameAs: ["https://jpvisouldocs.website", "https://jpvisouldocs.shop"],
    metadata: JSON.stringify({
      alias: "เจ้าป่า",
      role: "Verification Officer",
      tags: ["Verification", "Trust", "E-E-A-T"],
    }),
  },

  // --- 🏢 1 ORGANIZATION - JP-VISUAL&DOCS ---
  {
    id: "UL-C-003",
    type: "organization",
    name: 'JP-Visual&Docs ("เจ้าป่า")',
    industry: "Digital Verification & Institutional Trust Services",
    key_person_id: "UL-P-008",
    assets_summary:
      "Official Representative for UNLINK-TH Verification Services",
    trust_level: 10,
    last_checked: new Date().toISOString(),
    created_at: "2024-03-26T00:00:00Z",
    updated_at: new Date().toISOString(),
    sameAs: ["https://jpvisouldocs.website", "https://jpvisouldocs.shop"],
    metadata: JSON.stringify({
      role: "Verification Node",
      slogan: "The Guardian of Digital Identity",
      operator: "เจ้าป่า",
    }),
  },
];

export const getIdentityById = (id: string) =>
  coreIdentities.find((identity) => identity.id === id);

/* @identity 9mza */
