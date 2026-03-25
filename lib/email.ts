import { Resend } from "resend";
import { siteConfig } from "@/constants/site-config";
import { safeErrorLog } from "./utils";

/**
 * 📧 UNLINK-GLOBAL: EMAIL AUTOMATION SYSTEM (V1.2)
 * Powered by Resend.com
 */

const getResend = () => {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
};

interface TicketEmailData {
  customerName: string;
  caseId: string;
  amount: number;
  ticketUrl?: string;
  serviceTitle: string;
}

/**
 * ส่งอีเมลยืนยันการชำระเงินและไฟล์ตั๋ว/เอกสารหาลูกค้า
 */
export async function sendTicketEmail(to: string, data: TicketEmailData) {
  const resend = getResend();

  if (!resend) {
    safeErrorLog("EMAIL_CONFIG_MISSING", new Error("RESEND_API_KEY missing"));
    return { success: false, error: "Configuration Error" };
  }

  try {
    const result = await resend.emails.send({
      from: "UNLINK-GLOBAL <support@unlink-th.com>",
      to: [to],
      subject: `ข้อมูลการดำเนินการเคสของคุณเรียบร้อยแล้ว - ${data.caseId}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f6; padding: 30px; color: #2c3e50;">
          <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e1e8ed;">
            <div style="background: #ffffff; padding: 30px; text-align: left; border-bottom: 1px solid #f0f0f0;">
              <h2 style="color: #10B981; margin: 0; font-size: 18px; letter-spacing: 1px;">UNLINK-GLOBAL</h2>
            </div>
            
            <div style="padding: 35px;">
              <p style="font-size: 15px; color: #2c3e50; font-weight: 600;">เรียนคุณ ${data.customerName},</p>
              <p style="line-height: 1.6; color: #515d6a; font-size: 14px;">
                ขอแจ้งความคืบหน้าการดำเนินการสำหรับบริการ <strong>${data.serviceTitle}</strong> 
                ขณะนี้ขั้นตอนการตรวจสอบและจัดเตรียมเอกสารเสร็จสมบูรณ์แล้ว คุณสามารถตรวจสอบและรับเอกสารฉบับจริงได้ผ่านระบบจัดการข้อมูลส่วนบุคคล (Secure Access) ตามรายละเอียดด้านล่างนี้ครับ
              </p>
              
              <div style="background: #f8fafc; border: 1px solid #edf2f7; border-radius: 10px; padding: 25px; margin: 25px 0;">
                <h4 style="margin: 0 0 15px 0; color: #1a202c; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px;">Operational Details</h4>
                <table style="width: 100%; font-size: 13px; color: #4a5568; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #edf2f7;">
                    <td style="padding: 10px 0;">รหัสอ้างอิงเคส (Case Reference):</td>
                    <td style="text-align: right; font-weight: bold; color: #1a202c; padding: 10px 0;">${data.caseId}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #edf2f7;">
                    <td style="padding: 10px 0;">สถานะการดำเนินการ:</td>
                    <td style="text-align: right; color: #10B981; font-weight: bold; padding: 10px 0;">VERIFIED / DISPATCHED</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #edf2f7;">
                    <td style="padding: 10px 0;">ยอดชำระที่ยืนยันแล้ว:</td>
                    <td style="text-align: right; font-weight: bold; color: #1a202c; padding: 10px 0;">฿${data.amount.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">บริการ (Liaison Service):</td>
                    <td style="text-align: right; font-weight: bold; padding: 10px 0;">${data.serviceTitle}</td>
                  </tr>
                </table>
              </div>
              
              <div style="text-align: center; margin: 40px 0;">
                <p style="font-size: 12px; color: #718096; margin-bottom: 20px;">คลิกปุ่มด้านล่างเพื่อเข้าสู่ระบบดาวน์โหลดเอกสารความลับของคุณ</p>
                <a href="${siteConfig.url}/download-vault?caseId=${data.caseId}" style="background: #020617; color: #ffffff; padding: 18px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 15px; display: inline-block; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">ACCESS SECURE VAULT</a>
              </div>
              
              <p style="font-size: 11px; color: #a0aec0; text-align: center; margin-top: 35px; line-height: 1.8; font-style: italic;">
                * ข้อมูลนี้ถูกส่งโดยระบบอัตโนมัติภายใต้มาตรฐานการรักษาความลับสูงสุดของ UNLINK-GLOBAL <br>
                เอกสารจะถูกเก็บรักษาไว้ในระบบเพียงระยะเวลาสั้นๆ โปรดดำเนินการดาวน์โหลดและจัดเก็บในที่ปลอดภัยทันทีครับ
              </p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; text-align: center; font-size: 10px; color: #718096; border-top: 1px solid #edf2f7;">
              © 2026 UNLINK-GLOBAL PRIVATE INTELLIGENCE
            </div>
          </div>
        </div>
      `,
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    safeErrorLog("RESEND_EMAIL_ERROR", error);
    return { success: false, error: "Failed to send email" };
  }
}
