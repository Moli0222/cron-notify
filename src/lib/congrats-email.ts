// 恭喜信的內容：HTML 版使用 table 排版 + inline style，相容 Gmail / Outlook 等信箱
// 另外提供純文字版，給不顯示 HTML 的信箱使用

export const congratsSubject = "🎉 恭喜你！課程積木就快全部收集完成了";

export function congratsHtml(sentAt: string) {
  return `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <title>${congratsSubject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f7;">
  <!-- 預覽文字：顯示在收件匣標題下方 -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    你已經把課程的積木一塊塊拼起來了，終點就在眼前！
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f7;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;">

          <!-- 頂部橫幅 -->
          <tr>
            <td align="center" style="background-color:#4f46e5;padding:40px 24px;">
              <div style="font-size:48px;line-height:1;">🎉</div>
              <h1 style="margin:16px 0 0;font-family:Arial,'PingFang TC','Microsoft JhengHei',sans-serif;font-size:26px;line-height:1.4;color:#ffffff;">
                恭喜你！積木快收集完了
              </h1>
            </td>
          </tr>

          <!-- 內文 -->
          <tr>
            <td style="padding:32px 32px 8px;font-family:Arial,'PingFang TC','Microsoft JhengHei',sans-serif;font-size:16px;line-height:1.8;color:#333333;">
              <p style="margin:0 0 16px;">嗨！</p>
              <p style="margin:0 0 16px;">
                想跟你說聲恭喜 —— 你已經快把這門課的<strong>所有積木</strong>都學完了！
              </p>
              <p style="margin:0 0 16px;">
                從建立 Next.js 專案、寫 API、串接 MongoDB，到用 cron 排程和 Resend 寄出這封信，
                每一塊積木都是你親手拼上去的。
              </p>
            </td>
          </tr>

          <!-- 已完成的積木 -->
          <tr>
            <td style="padding:0 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eef2ff;border-radius:8px;">
                <tr>
                  <td style="padding:20px 24px;font-family:Arial,'PingFang TC','Microsoft JhengHei',sans-serif;font-size:15px;line-height:2;color:#3730a3;">
                    <strong>你已經拼好的積木：</strong><br />
                    🧱 Next.js App Router 專案<br />
                    🧱 API Route<br />
                    🧱 MongoDB + Mongoose 資料庫<br />
                    🧱 cron 排程<br />
                    🧱 Resend 寄信
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px 32px;font-family:Arial,'PingFang TC','Microsoft JhengHei',sans-serif;font-size:16px;line-height:1.8;color:#333333;">
              <p style="margin:0 0 16px;">終點就在眼前，再加把勁，把最後幾塊拼上去吧！💪</p>
              <p style="margin:0;">為你加油的<br /><strong>Cron Notify</strong></p>
            </td>
          </tr>

          <!-- 頁尾 -->
          <tr>
            <td align="center" style="padding:16px 24px;background-color:#fafafa;border-top:1px solid #eeeeee;font-family:Arial,'PingFang TC','Microsoft JhengHei',sans-serif;font-size:12px;line-height:1.6;color:#999999;">
              這封信由 cron-notify-practice 自動寄出<br />
              寄出時間（台北）：${sentAt}
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function congratsText(sentAt: string) {
  return `恭喜你！積木快收集完了 🎉

嗨！

想跟你說聲恭喜 —— 你已經快把這門課的所有積木都學完了！

從建立 Next.js 專案、寫 API、串接 MongoDB，到用 cron 排程和 Resend 寄出這封信，每一塊積木都是你親手拼上去的。

你已經拼好的積木：
- Next.js App Router 專案
- API Route
- MongoDB + Mongoose 資料庫
- cron 排程
- Resend 寄信

終點就在眼前，再加把勁，把最後幾塊拼上去吧！

為你加油的
Cron Notify

---
這封信由 cron-notify-practice 自動寄出
寄出時間（台北）：${sentAt}`;
}
