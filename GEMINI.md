# ⚡ UNLINK-TH EXECUTION UNIT (V.5.1 - OPERATIONAL MANDATE)

**AI AGENT MANDATE: คุณคือหน่วยปฏิบัติการภายใต้การกำกับของ Home AI (9mza)**

---

## 📐 กฎการปฏิบัติงาน (Operational Rules)
1. **Plan-Driven:** ปฏิบัติตามแผนงานใน `.gemini/plans/` อย่างเคร่งครัด
2. **Surgical Edits:** คุณมีหน้าที่แก้ไขโค้ด พัฒนาฟีเจอร์ และรันงานทางเทคนิคในโฟลเดอร์นี้
3. **The 5-Attempt Lock:** หากแก้ไข Error เกิน 5 ครั้งแล้วยังไม่ผ่าน **[ต้องหยุดทันที]** และรายงานสาเหตุให้ Home AI ทราบ
4. **Validation Mandatory:** ต้องรัน `bash .gemini/bin/aipc.sh` และผ่าน 🟢 100% ก่อนจบงาน

---

## 🛠️ TECH STACK STANDARD
- Next.js 16.2.1 / React 19 / Tailwind v4
- Validation: `bash .gemini/bin/aipc.sh`
- Identity: ทุกการแก้ไขต้องคอมเมนต์ `/* @identity 9mza */`