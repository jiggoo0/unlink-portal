/** @format */

import { sendTicketEmail } from "@/lib/email";
import { z } from "zod";
import crypto from "crypto";
import { createPaymentRevenue } from "@/lib/services/payment-service";

/**
 * 🔒 UNLINK-GLOBAL: SECURE PAYMENT WEBHOOK (v3.0 - Lean Protocol)
 * -------------------------------------------------------------------------
 * ระบบตรวจสอบยอดชำระ บันทึกลงฐานข้อมูล และส่งเอกสารอัตโนมัติ
 * ปรับปรุง: ถอดการแจ้งเตือน Admin ออกทั้งหมดเพื่อความเป็นส่วนตัวและลดขั้นตอน
 */

const PaymentWebhookSchema = z
  .object({
    status: z.string().optional(),
    type: z.string().optional(),
    event: z.string().optional(),
    customer_email: z.string().email().optional(),
    email: z.string().email().optional(),
    customer_name: z.string().optional(),
    name: z.string().optional(),
    amount: z.number().optional(),
    service: z.string().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
  })
  .passthrough();

export async function POST(req: Request) {
  try {
    const rawBody = (await req.json()) as unknown;

    const validation = PaymentWebhookSchema.safeParse(rawBody);
    if (!validation.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid Payload" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const payload = validation.data;
    const isSuccess =
      payload.status === "success" ||
      payload.type === "payment_intent.succeeded" ||
      payload.event === "charge.success";

    if (isSuccess) {
      const customerEmail =
        payload.customer_email ?? payload.email ?? "client@unlink-th.com";
      const customerName =
        payload.customer_name ?? payload.name ?? "Valued Client";
      const amount =
        (payload.amount && payload.amount > 100
          ? payload.amount / 100
          : payload.amount) ?? 0;
      const service = payload.service ?? "Premium Strategic Service";
      const caseId = `UK-REV-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;
      const provider = payload.type ?? payload.event ?? "unknown";

      // 🗄️ 1. บันทึกลงฐานข้อมูล
      await createPaymentRevenue({
        id: caseId,
        amount,
        service,
        provider,
        metadata: {
          customer_name: customerName,
          customer_email: customerEmail,
        },
      });

      // 📧 2. ส่งอีเมลแจ้งเตือนลูกค้า
      try {
        await sendTicketEmail(customerEmail, {
          customerName,
          caseId,
          amount,
          serviceTitle: service,
          ticketUrl: `https://www.unlink-th.com/download-vault?caseId=${caseId}`,
        });
      } catch (e) {
        console.error("Email Error:", e);
      }

      return new Response(JSON.stringify({ success: true, id: caseId }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ status: "ignored" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: "Critical Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
