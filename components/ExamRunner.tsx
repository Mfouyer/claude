"use client";

import { useCallbackRef } from "@/lib/client/useCallbackRef";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  AnswerValue,
  AssembledSitting,
  ClientQuestion,
  CompletedSitting,
  ExamId,
  GradeResult,
} from "@/lib/exams/types";
import { EXAMS } from "@/lib/exams/meta";
import { saveSitting, weakSubtopics } from "@/lib/client/storage";
import { AppHeader } from "./AppHeader";
import { ExamThemer } from "./ExamThemer";

function isAnswered(q: ClientQuestion, a: AnswerValue | undefined): boolean {
  if (a == null) return false;
  if (q.format === "yesno-series") {
    const m = a as Record<string, boolean>;
    return (q.statements ?? []).every((s) => typeof m[s.id] === "boolean");
  }
  return Array.isArray(a) && a.length > 0;
}

function fmtClock(sec: number): string {
  const m = Math.floor(Math.max(0, sec) / 60);
  const s = Math.max(0, sec) % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function ExamRunner({ exam, count, timed }: { exam: ExamId; count: number; timed: boolean }) {
  const router = useRouter();
  const meta = EXAMS[exam];

  const [sitting, setSitting] = useState<AssembledSitting | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [confirming, setConfirming] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const startRef = useRef<number>(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const submittedRef = useRef(false);

  // Assemble the sitting (server side; biased to weak areas)
  useEffect(() => {
    let cancelled = false;
    const emphasize = weakSubtopics(exam).map((w) => w.subtopic);
    fetch("/api/exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ exam, count, emphasize }),
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("assemble"))))
      .then((data: AssembledSitting) => {
        if (!cancelled) {
          setSitting(data);
          startRef.current = Date.now();
        }
      })
      .catch(() => !cancelled && setError("Could not assemble the test. Please try again."));
    return () => {
      cancelled = true;
    };
  }, [exam, count]);

  const submit = useCallbackRef(async (auto: boolean) => {
    if (!sitting || submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    const questionIds = sitting.questions.map((q) => q.id);
    try {
      const res = await fetch("/api/exam/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exam, questionIds, answers }),
      });
      if (!res.ok) throw new Error("grade");
      const result: GradeResult = await res.json();
      const completed: CompletedSitting = {
        ...result,
        id: sitting.id,
        exam,
        date: new Date().toISOString(),
        durationSec: Math.round((Date.now() - startRef.current) / 1000),
      };
      saveSitting(completed);
      router.replace(`/exam/${exam}/review?id=${sitting.id}${auto ? "&auto=1" : ""}`);
    } catch {
      submittedRef.current = false;
      setSubmitting(false);
      setError("Submit failed. Check your connection and try again.");
    }
  });

  // Timer
  const totalSeconds = meta.timerMinutes * 60;
  const remaining = timed ? totalSeconds - elapsed : null;
  useEffect(() => {
    if (!sitting) return;
    const t = setInterval(() => setElapsed(Math.round((Date.now() - startRef.current) / 1000)), 500);
    return () => clearInterval(t);
  }, [sitting]);
  useEffect(() => {
    if (timed && remaining !== null && remaining <= 0 && !submittedRef.current) submit(true);
  }, [timed, remaining, submit]);

  const answeredCount = useMemo(() => {
    if (!sitting) return 0;
    return sitting.questions.filter((q) => isAnswered(q, answers[q.id])).length;
  }, [sitting, answers]);

  if (error && !sitting) {
    return (
      <Shell exam={exam}>
        <div className="card mx-auto mt-10 max-w-md p-8 text-center">
          <p className="text-sm text-bad">{error}</p>
          <button onClick={() => router.replace(`/exam/${exam}`)} className="btn-ghost mt-4">
            Back to dashboard
          </button>
        </div>
      </Shell>
    );
  }

  if (!sitting) {
    return (
      <Shell exam={exam}>
        <div className="card mx-auto mt-10 max-w-md p-8 text-center">
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
          <p className="text-sm text-muted">Assembling your {meta.code} sitting…</p>
        </div>
      </Shell>
    );
  }

  const q = sitting.questions[idx];
  const total = sitting.questions.length;
  const setAnswer = (value: AnswerValue) => setAnswers((a) => ({ ...a, [q.id]: value }));

  return (
    <Shell exam={exam}>
      {/* progress + timer */}
      <div className="mb-4 flex items-center gap-3">
        <div className="text-sm font-semibold">
          Question <span className="text-accent">{idx + 1}</span> / {total}
        </div>
        <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-line">
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ width: `${((idx + 1) / total) * 100}%`, backgroundImage: "var(--exam-grad)", transition: "width .4s" }}
          />
        </div>
        {timed && remaining !== null && (
          <div
            className="rounded-lg px-2.5 py-1 text-sm font-bold tabular-nums"
            style={{
              color: remaining <= 60 ? "rgb(var(--bad))" : "rgb(var(--ink))",
              background: remaining <= 60 ? "rgb(var(--bad) / .1)" : "rgb(var(--line) / .6)",
            }}
          >
            {fmtClock(remaining)}
          </div>
        )}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
        {/* Question */}
        <div className="card p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="chip">{q.id}</span>
            <span className="rounded-full bg-line/60 px-2 py-0.5 font-medium text-muted">{labelForFormat(q.format)}</span>
            <span className="rounded-full bg-line/60 px-2 py-0.5 font-medium capitalize text-muted">{q.difficulty}</span>
            <button
              onClick={() =>
                setFlagged((f) => {
                  const n = new Set(f);
                  n.has(q.id) ? n.delete(q.id) : n.add(q.id);
                  return n;
                })
              }
              className="ml-auto inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold transition"
              style={{
                color: flagged.has(q.id) ? "rgb(var(--warn))" : "rgb(var(--muted))",
                background: flagged.has(q.id) ? "rgb(var(--warn) / .14)" : "transparent",
              }}
            >
              <FlagIcon filled={flagged.has(q.id)} /> {flagged.has(q.id) ? "Flagged" : "Flag"}
            </button>
          </div>

          <h2 className="text-lg font-semibold leading-snug">{q.stem}</h2>
          {q.format === "multiple" && (
            <p className="mt-1 text-xs font-medium text-accent">Select all that apply.</p>
          )}

          <div className="mt-5">
            {q.format === "yesno-series" ? (
              <YesNoList q={q} value={(answers[q.id] as Record<string, boolean>) ?? {}} onChange={setAnswer} />
            ) : (
              <OptionList q={q} value={(answers[q.id] as string[]) ?? []} onChange={setAnswer} />
            )}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <button onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0} className="btn-ghost disabled:opacity-40">
              ← Prev
            </button>
            {idx < total - 1 ? (
              <button onClick={() => setIdx((i) => Math.min(total - 1, i + 1))} className="btn-primary">
                Next →
              </button>
            ) : (
              <button onClick={() => setConfirming(true)} className="btn-primary">
                Review &amp; submit
              </button>
            )}
          </div>
        </div>

        {/* Palette / actions */}
        <aside className="card h-fit w-full p-5 lg:w-64">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="font-semibold">Progress</span>
            <span className="text-muted">
              {answeredCount}/{total}
            </span>
          </div>
          <div className="grid grid-cols-8 gap-1.5 lg:grid-cols-6">
            {sitting.questions.map((qq, i) => {
              const ans = isAnswered(qq, answers[qq.id]);
              const isFlag = flagged.has(qq.id);
              return (
                <button
                  key={qq.id}
                  onClick={() => setIdx(i)}
                  className="relative grid aspect-square place-items-center rounded-md text-xs font-semibold transition"
                  style={{
                    background: i === idx ? "rgb(var(--accent))" : ans ? "rgb(var(--accent) / .16)" : "rgb(var(--line) / .6)",
                    color: i === idx ? "#fff" : "rgb(var(--ink))",
                    outline: i === idx ? "2px solid rgb(var(--accent))" : "none",
                  }}
                >
                  {i + 1}
                  {isFlag && <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full" style={{ background: "rgb(var(--warn))" }} />}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-[11px] text-muted">Filled = answered · dot = flagged</p>
          <button onClick={() => setConfirming(true)} className="btn-primary mt-4 w-full">
            Submit test
          </button>
        </aside>
      </div>

      {confirming && (
        <ConfirmSubmit
          total={total}
          answered={answeredCount}
          flagged={flagged.size}
          submitting={submitting}
          onCancel={() => setConfirming(false)}
          onConfirm={() => submit(false)}
        />
      )}
    </Shell>
  );
}

function Shell({ exam, children }: { exam: ExamId; children: React.ReactNode }) {
  return (
    <>
      <ExamThemer exam={exam} />
      <AppHeader exam={exam} />
      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6">{children}</main>
    </>
  );
}

function OptionList({
  q,
  value,
  onChange,
}: {
  q: ClientQuestion;
  value: string[];
  onChange: (v: string[]) => void;
}) {
  const multi = q.format === "multiple";
  const toggle = (key: string) => {
    if (multi) {
      onChange(value.includes(key) ? value.filter((k) => k !== key) : [...value, key]);
    } else {
      onChange([key]);
    }
  };
  return (
    <div className="space-y-2.5">
      {(q.options ?? []).map((o) => {
        const sel = value.includes(o.key);
        return (
          <button key={o.key} className="opt" data-selected={sel} onClick={() => toggle(o.key)}>
            <span className="opt-key">{o.key}</span>
            <span className="pt-0.5 text-sm leading-snug">{o.text}</span>
          </button>
        );
      })}
    </div>
  );
}

function YesNoList({
  q,
  value,
  onChange,
}: {
  q: ClientQuestion;
  value: Record<string, boolean>;
  onChange: (v: Record<string, boolean>) => void;
}) {
  return (
    <div className="space-y-2.5">
      {(q.statements ?? []).map((s) => (
        <div key={s.id} className="flex items-center gap-3 rounded-xl border border-line p-3">
          <span className="flex-1 text-sm leading-snug">{s.text}</span>
          <div className="flex shrink-0 gap-1">
            {[
              { v: true, label: "Yes" },
              { v: false, label: "No" },
            ].map((opt) => {
              const on = value[s.id] === opt.v;
              return (
                <button
                  key={opt.label}
                  onClick={() => onChange({ ...value, [s.id]: opt.v })}
                  className="rounded-lg px-3 py-1.5 text-sm font-semibold transition"
                  style={{
                    background: on ? "rgb(var(--accent))" : "rgb(var(--line) / .6)",
                    color: on ? "#fff" : "rgb(var(--ink))",
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function ConfirmSubmit({
  total,
  answered,
  flagged,
  submitting,
  onCancel,
  onConfirm,
}: {
  total: number;
  answered: number;
  flagged: number;
  submitting: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const unanswered = total - answered;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="card w-full max-w-sm p-6 animate-pop">
        <h3 className="text-lg font-bold">Submit this sitting?</h3>
        <p className="mt-1 text-sm text-muted">
          You answered <strong>{answered}</strong> of {total}.{" "}
          {unanswered > 0 && <span className="text-bad">{unanswered} unanswered will be marked incorrect.</span>}
          {flagged > 0 && <span className="block">{flagged} flagged for review.</span>}
        </p>
        <div className="mt-5 flex gap-3">
          <button onClick={onCancel} className="btn-ghost flex-1" disabled={submitting}>
            Keep going
          </button>
          <button onClick={onConfirm} className="btn-primary flex-1" disabled={submitting}>
            {submitting ? "Grading…" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

function labelForFormat(f: string): string {
  switch (f) {
    case "multiple":
      return "Multiple response";
    case "yesno-series":
      return "Yes / No series";
    case "scenario":
      return "Scenario";
    default:
      return "Single response";
  }
}

function FlagIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}
