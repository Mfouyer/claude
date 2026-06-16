"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { ExamId } from "@/lib/exams/types";
import { EXAMS, EXAM_IDS } from "@/lib/exams/meta";
import { clearHistory, loadHistory } from "@/lib/client/storage";

const THEME_KEY = "ab-sim:theme";

export default function SettingsPage() {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [counts, setCounts] = useState<Record<ExamId, number>>({ ab730: 0, ab731: 0 });

  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as "light" | "dark") || "light";
    setTheme(saved);
    setCounts({ ab730: loadHistory("ab730").length, ab731: loadHistory("ab731").length });
  }, []);

  function applyTheme(t: "light" | "dark") {
    setTheme(t);
    localStorage.setItem(THEME_KEY, t);
    if (t === "dark") document.documentElement.dataset.theme = "dark";
    else delete document.documentElement.dataset.theme;
  }

  function reset(exam: ExamId) {
    if (!confirm(`Clear all stored ${EXAMS[exam].code} sittings on this device?`)) return;
    clearHistory(exam);
    setCounts((c) => ({ ...c, [exam]: 0 }));
  }

  async function signOut() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    router.replace("/login");
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight">Settings</h1>
        <Link href="/exam/ab730" className="btn-ghost">
          ← Back
        </Link>
      </div>

      <section className="card mb-5 p-6">
        <h2 className="mb-1 text-lg font-bold">Appearance</h2>
        <p className="mb-4 text-sm text-muted">Choose a light or dark interface.</p>
        <div className="flex rounded-xl border border-line p-1">
          {(["light", "dark"] as const).map((t) => (
            <button
              key={t}
              onClick={() => applyTheme(t)}
              data-on={theme === t}
              className="flex-1 rounded-lg px-4 py-2 text-sm font-semibold capitalize transition data-[on=true]:bg-accent data-[on=true]:text-white"
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="card mb-5 p-6">
        <h2 className="mb-1 text-lg font-bold">Stored history</h2>
        <p className="mb-4 text-sm text-muted">
          Your sittings are stored locally in this browser. Clearing is permanent and only affects this device.
        </p>
        <div className="space-y-3">
          {EXAM_IDS.map((exam) => (
            <div key={exam} className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
              <div>
                <div className="text-sm font-semibold">{EXAMS[exam].code}</div>
                <div className="text-xs text-muted">{counts[exam]} sittings</div>
              </div>
              <button onClick={() => reset(exam)} className="btn-danger" disabled={counts[exam] === 0}>
                Clear
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="mb-1 text-lg font-bold">Session</h2>
        <p className="mb-4 text-sm text-muted">The access password is set with the AUTH_PASSWORD environment variable.</p>
        <button onClick={signOut} className="btn-ghost">
          Sign out
        </button>
      </section>
    </main>
  );
}
