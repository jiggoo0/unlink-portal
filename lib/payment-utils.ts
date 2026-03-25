/** @format */

/**
 * UNLINK-PAYMENT: SMART AMOUNT GENERATOR
 * สร้างยอดเงินพร้อมเศษสตางค์เพื่อความแม่นยำในการตรวจสอบ
 */
export function calculateSafeAmount(baseAmount: number): number {
  const randomCents = Math.floor(Math.random() * 99 + 1) / 100;
  return Number((baseAmount + randomCents).toFixed(2));
}

/**
 * UNLINK-PAYMENT: EMVCo Standard CRC16 Calculation
 */
function crc16(data: string): string {
  let crc = 0xffff;
  for (let i = 0; i < data.length; i++) {
    let x = ((crc >> 8) ^ data.charCodeAt(i)) & 0xff;
    x ^= x >> 4;
    crc = ((crc << 8) ^ (x << 12) ^ (x << 5) ^ x) & 0xffff;
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

/**
 * UNLINK-PAYMENT: MASTER PAYMENT CONFIGURATION
 */
export function generatePromptPayQR(amount = 0) {
  const mobileNumber = "0066990322175";

  const tag29_content = ["0016A000000677010111", `0113${mobileNumber}`].join(
    "",
  );

  const payloadParts = [
    "000201",
    "010212",
    `29${tag29_content.length.toString().padStart(2, "0")}${tag29_content}`,
    "5303764",
  ];

  if (amount > 0) {
    const amountStr = amount.toFixed(2);
    payloadParts.push(
      `54${amountStr.length.toString().padStart(2, "0")}${amountStr}`,
    );
  }

  payloadParts.push("5802TH");
  payloadParts.push("6304");

  const payloadBeforeCRC = payloadParts.join("");
  const finalPayload = payloadBeforeCRC + crc16(payloadBeforeCRC);

  const formattedAmount = amount > 0 ? amount.toFixed(2) : "";
  const qrImageUrl = `https://promptpay.io/0990322175/${formattedAmount}.png`;

  return {
    qrUrl: qrImageUrl,
    payload: finalPayload,
    accountName: "อลงกรณ์ ยมเกิด (Alongkorl)",
    branchName: "UNLINK-TH STRATEGIC HUB",
    branchId: "56288",
    qrNote:
      "กรุณาโอนยอดเงินให้ตรงตามที่ระบุเพื่อระบบจะทำการยืนยันอัตโนมัติครับ",
    accounts: [
      {
        type: "LH Bank (Land and Houses)",
        no: "801-2-59331-2",
        name: "นาย อลงกรณ์ ยมเกิด",
      },
      {
        type: "TrueMoney Wallet",
        no: "099-032-2175",
        name: "นาย อลงกรณ์ ยมเกิด",
      },
      {
        type: "PromptPay (ID)",
        no: "140000990322175",
        name: "นาย อลงกรณ์ ยมเกิด",
      },
    ],
  };
}

export function getPaymentConfig(amount = 0) {
  return generatePromptPayQR(amount);
}

/**
 * 🔍 VERIFY PAYMENT SLIP (Legacy/System Part)
 * ตรวจสอบความถูกต้องของสลิปโอนเงินผ่านระบบ SlipOK
 */
export async function verifySlip(payload: { data: string }) {
  const apiKey = process.env.SLIPOK_API_KEY;

  if (!apiKey) {
    console.error("🚨 [PAYMENT_ERROR]: SLIPOK_API_KEY is not configured.");
    return { success: false, error: "Payment verification system is offline." };
  }

  try {
    const response = await fetch(
      "https://api.slipok.com/api/line/apikey/21232",
      {
        method: "POST",
        headers: {
          "x-lib-apikey": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const result = (await response.json()) as {
      success: boolean;
      data?: { amount: number; transTime: string };
      error?: string;
    };
    return result;
  } catch (error) {
    console.error("❌ [PAYMENT_FETCH_ERROR]:", error);
    return { success: false, error: "Unable to reach verification server." };
  }
}
