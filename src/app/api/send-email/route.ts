import { connection } from "next/server";
import { resend } from "@/lib/resend";
import { congratsHtml, congratsSubject, congratsText } from "@/lib/congrats-email";

// 寄件人：尚未在 Resend 驗證網域前，只能用測試地址，且只能寄到註冊 Resend 的信箱
const FROM = "Cron Notify <onboarding@resend.dev>";
// 收件人
const TO = "hope590489@gmail.com";

export async function GET() {
  // 確保每次請求都實際執行，不會在 build 時被預先渲染或快取
  await connection();

  const now = new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei" });

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    subject: congratsSubject,
    html: congratsHtml(now),
    text: congratsText(now),
  });

  if (error) {
    console.error("[send-email] 寄信失敗:", error);
    return Response.json({ ok: false, error: "寄信失敗" }, { status: 500 });
  }

  return Response.json({ ok: true, id: data?.id });
}
