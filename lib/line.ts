/** @format */

import * as line from "@line/bot-sdk";
import { siteConfig } from "@/constants/site-config";
import { safeErrorLog } from "./utils";

/**
 * 📱 UNLINK-GLOBAL: LINE NOTIFICATION SYSTEM (V1.0)
 * Powered by LINE Messaging API
 */

const getLineClient = () => {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  if (!token) return null;

  return new line.messagingApi.MessagingApiClient({
    channelAccessToken: token,
  });
};

const ADMIN_ID = process.env.LINE_USER_ID ?? "";

interface ServiceRequestNotificationData {
  caseId: string;
  serviceType: string;
  piiData: Record<string, string | number | boolean | null | undefined>;
  systemData: Record<string, string | number | boolean | null | undefined>;
  status: string;
}

/**
 * 🛡️ แจ้งเตือนเคสใหม่พร้อมข้อมูล PII (Personnel Identifiable Information)
 * ข้อมูลนี้จะถูกส่งตรงเข้า LINE Admin และไม่ถูกบันทึกลงฐานข้อมูลหลัก
 */
export async function sendServiceRequestNotification(
  data: ServiceRequestNotificationData,
) {
  const client = getLineClient();
  if (!client || !ADMIN_ID) {
    console.warn(
      "⚠️ LINE Configuration missing (TOKEN or ADMIN_ID). Falling back to log.",
    );
    return { success: false, error: "Configuration Error" };
  }

  try {
    const firstName = String(data.piiData.firstName ?? "");
    const lastName = String(data.piiData.lastName ?? "");

    const customerName =
      String(data.piiData.guestName ?? "") ||
      (firstName ? `${firstName} ${lastName}`.trim() : "") ||
      String(data.piiData.passengerName ?? "") ||
      "ไม่ระบุชื่อ";

    const piiDisplay = Object.entries(data.piiData)
      .map(([key, value]) => `${key}: ${String(value ?? "N/A")}`)
      .join("\n");

    await client.pushMessage({
      to: ADMIN_ID,
      messages: [
        {
          type: "flex",
          altText: `🚨 เคสใหม่: ${data.serviceType.toUpperCase()} (${data.caseId})`,
          contents: {
            type: "bubble",
            styles: {
              header: { backgroundColor: "#0f172a" },
              footer: { separator: true },
            },
            header: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "🔔 มีรายการสอบถามบริการใหม่",
                  color: "#ffffff",
                  weight: "bold",
                  size: "sm",
                },
              ],
            },
            body: {
              type: "box",
              layout: "vertical",
              spacing: "md",
              contents: [
                {
                  type: "text",
                  text: data.serviceType.toUpperCase(),
                  weight: "bold",
                  size: "xl",
                  color: "#0f172a",
                },
                {
                  type: "text",
                  text: `หมายเลขเคส: ${data.caseId} | สถานะ: ${data.status}`,
                  size: "xs",
                  color: "#64748b",
                },
                {
                  type: "separator",
                },
                {
                  type: "box",
                  layout: "vertical",
                  spacing: "xs",
                  contents: [
                    {
                      type: "text",
                      text: "👤 ข้อมูลผู้ติดต่อ (PII)",
                      size: "xs",
                      weight: "bold",
                      color: "#ef4444",
                    },
                    {
                      type: "text",
                      text: customerName,
                      weight: "bold",
                      size: "md",
                    },
                    {
                      type: "text",
                      text: piiDisplay || "ไม่มีข้อมูลระบุตัวตน",
                      size: "sm",
                      wrap: true,
                      color: "#334155",
                    },
                  ],
                },
                {
                  type: "separator",
                },
                {
                  type: "box",
                  layout: "vertical",
                  spacing: "xs",
                  contents: [
                    {
                      type: "text",
                      text: "📊 ข้อมูลระบบ (METADATA)",
                      size: "xs",
                      weight: "bold",
                      color: "#3b82f6",
                    },
                    {
                      type: "text",
                      text: JSON.stringify(data.systemData, null, 2),
                      size: "xs",
                      wrap: true,
                      color: "#475569",
                      style: "italic",
                    },
                  ],
                },
              ],
            },
            footer: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "เปิดดูแดชบอร์ดจัดการเคส",
                    uri: `${siteConfig.url}/admin/liaison`,
                  },
                  style: "primary",
                  color: "#0f172a",
                },
              ],
            },
          },
        },
      ],
    });

    return { success: true };
  } catch (error) {
    safeErrorLog("LINE_SERVICE_NOTIFICATION_ERROR", error);
    return { success: false, error: "Failed to send notification" };
  }
}
