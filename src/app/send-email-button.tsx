"use client";

import { useState } from "react";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; id?: string }
  | { type: "error"; message: string };

export function SendEmailButton() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleClick() {
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/send-email", { cache: "no-store" });
      const body = await res.json();
      if (!res.ok || !body.ok) {
        setStatus({ type: "error", message: body.error ?? `HTTP ${res.status}` });
        return;
      }
      setStatus({ type: "success", id: body.id });
    } catch {
      setStatus({ type: "error", message: "無法連線到伺服器" });
    }
  }

  const loading = status.type === "loading";

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="h-12 rounded-full bg-foreground px-8 text-base font-medium text-background transition-colors hover:bg-[#383838] disabled:cursor-not-allowed disabled:opacity-60 dark:hover:bg-[#ccc]"
      >
        {loading ? "寄送中…" : "寄出通知信"}
      </button>

      <p aria-live="polite" className="min-h-6 text-sm">
        {status.type === "success" && (
          <span className="text-green-600 dark:text-green-400">
            已寄出！請到信箱查看。
          </span>
        )}
        {status.type === "error" && (
          <span className="text-red-600 dark:text-red-400">
            寄送失敗：{status.message}
          </span>
        )}
      </p>
    </div>
  );
}
