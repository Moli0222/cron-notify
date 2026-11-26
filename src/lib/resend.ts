import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("環境變數 RESEND_API_KEY 未設定");
}

export const resend = new Resend(apiKey);
