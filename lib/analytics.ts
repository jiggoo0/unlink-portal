/**
 * 📊 UNLINK-TH | Analytics Measurement Protocol
 * -------------------------------------------------------------------------
 * มาตรฐานการเก็บข้อมูล Event สำหรับระบบนิเวศ UNLINK
 * รองรับทั้ง Client-side (GTAG) และแผนงาน Server-side ในอนาคต
 */

type AnalyticsEvent =
  | "form_submission"      // เมื่อกดส่งฟอร์ม (Lead Gen)
  | "view_payment_qr"      // เมื่อเข้าสู่หน้าชำระเงิน (Intent to Pay)
  | "line_contact_click"   // เมื่อกดไป LINE (Conversion)
  | "verification_check"   // เมื่อมีการตรวจสอบ Case ID
  | "navigation_click";    // การคลิกเมนูสำคัญ

interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  case_id?: string;
  service_type?: string;
  [key: string]: unknown;
}

/**
 * 🚀 ยิง Event ไปยัง Google Analytics
 * ใช้ window.gtag ที่โหลดมาจาก SafeAnalytics
 */
export const trackEvent = (event: AnalyticsEvent, params: EventParams = {}) => {
  if (typeof window !== "undefined") {
    const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag("event", event, {
        event_category: params.category || "engagement",
        event_label: params.label || event,
        value: params.value,
        ...params,
      });

      // Debug Log สำหรับนักพัฒนา (เฉพาะใน Dev Mode)
      if (process.env.NODE_ENV === "development") {
        console.warn(`📊 [ANALYTICS]: ${event}`, params);
      }
    }
  }
};
