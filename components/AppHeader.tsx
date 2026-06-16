"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ExamId } from "@/lib/exams/types";
import { EXAMS, otherExam } from "@/lib/exams/meta";

export function AppHeader({ exam }: { exam: ExamId }) {
  const router = useRouter();
  const meta = EXAMS[exam];
  const other = EXAMS[otherExam(exam)];
  const [busy, setBusy] = useState(false);

  async function signOut() {
    setBusy(true);
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    router.replace("/login");
  }

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
        <Link href={`/exam/${exam}`} className="flex items-center gap-3">
          <span className="chip-grad text-sm">{meta.code}</span>
          <div className="leading-tight">
            <div className="text-sm font-bold sm:text-base">{meta.title}</div>
            <div className="text-[11px] text-muted">Exam Simulator</div>
          </div>
        </Link>

        <nav className="ml-auto flex items-center gap-1.5 text-sm">
          <Link href={`/exam/${other.id}`} className="btn-ghost px-3 py-2" title={`Go to ${other.code} — ${other.title}`}>
            <SwapIcon />
            <span className="hidden sm:inline">Switch to {other.code}</span>
            <span className="sm:hidden">{other.code}</span>
          </Link>
          <Link href="/settings" className="btn-ghost px-3 py-2">
            <span className="hidden sm:inline">Settings</span>
            <GearIcon />
          </Link>
          <button onClick={signOut} disabled={busy} className="btn-ghost px-3 py-2">
            <span className="hidden sm:inline">Sign out</span>
            <ExitIcon />
          </button>
        </nav>
      </div>
    </header>
  );
}

function SwapIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4 3 8l4 4" /><path d="M3 8h14a4 4 0 0 1 4 4" /><path d="m17 20 4-4-4-4" /><path d="M21 16H7a4 4 0 0 1-4-4" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg className="sm:hidden" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}
function ExitIcon() {
  return (
    <svg className="sm:hidden" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="m16 17 5-5-5-5" /><path d="M21 12H9" />
    </svg>
  );
}
