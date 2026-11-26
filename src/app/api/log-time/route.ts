import { connection } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { TimeLogModel } from "@/models/TimeLog";

// 給 cron 排程呼叫：每次 GET 都寫入一筆當下時間
export async function GET() {
  // 確保每次請求都實際執行，不會在 build 時被預先渲染或快取
  await connection();

  try {
    await connectDB();
    const doc = await TimeLogModel.create({ time: new Date() });
    return Response.json({ ok: true, data: doc }, { status: 201 });
  } catch (err) {
    console.error("[log-time] 寫入失敗:", err);
    return Response.json(
      { ok: false, error: "寫入資料庫失敗" },
      { status: 500 }
    );
  }
}
