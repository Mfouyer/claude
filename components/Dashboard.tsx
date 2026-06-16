"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { CompletedSitting, ExamId } from "@/lib/exams/types";
import { EXAMS, DOMAIN_ORDER, domainName, prettySubtopic } from "@/lib/exams/meta";
import { loadHistory, weakSubtopics } from "@/lib/client/storage";
import { AppHeader } from "./AppHeader";
import { ExamThemer } from "./ExamThemer";
import { Gauge } from "./charts/Gauge";
import { DomainBars } from "./charts/DomainBars";
import { TrendChart } from "./charts/TrendChart";
import { DonutChart } from "./charts/DonutChart";

const DOMAIN_COLORS: Record<string, string> = {
  "generative-ai-fundamentals": "#4f46e5",
  "drafting-analyzing-business-content": "#8b5cf6",
  "managing-prompts-conversations": "#0ea5e9",
};

function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso.slice(0, 10);
  }
}

export function Dashboard({
  exam,
  poolSize,
  blueprint,
}: {
  exam: ExamId;
  poolSize: number;
  blueprint: { domain: string; count: number }[];
}) {
  const router = useRouter();
  const meta = EXAMS[exam];
  const [history, setHistory] = useState<CompletedSitting[]>([]);
  const [count, setCount] = useState(50);
  const [timer, setTimer] = useState(false);
  const [starting, setStarting] = useState(false);

  useEffect(() => {
    setHistory(loadHistory(exam));
  }, [exam]);

  const last = history[0];
  const weak = useMemo(() => weakSubtopics(exam), [exam, history]);

  const trend = useMemo(
    () =>
      [...history]
        .slice(0, 12)
        .reverse()
        .map((s) => ({ label: fmtDate(s.date), value: s.scorePct })),
    [history]
  );

  const domainRows = useMemo(() => {
    if (!last) return [];
    const byId = new Map(last.byDomain.map((d) => [d.domain, d]));
    return DOMAIN_ORDER.filter((d) => byId.has(d)).map((d) => ({
      name: domainName(d),
      correct: byId.get(d)!.correct,
      total: byId.get(d)!.total,
    }));
  }, [last]);

  const blueprintSegments = blueprint.map((b) => ({
    label: domainName(b.domain),
    value: b.count,
    color: DOMAIN_COLORS[b.domain] ?? "#94a3b8",
  }));

  function start() {
    setStarting(true);
    const params = new URLSearchParams({ count: String(count) });
    if (timer) params.set("timer", "1");
    router.push(`/exam/${exam}/test?${params.toString()}`);
  }

  return (
    <>
      <ExamThemer exam={exam} />
      <AppHeader exam={exam} />

      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        {/* Hero */}
        <section className="card mb-6 overflow-hidden">
          <div className="relative p-6 sm:p-7">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{ backgroundImage: "var(--exam-grad)" }}
            />
            <div className="relative flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="chip-grad">{meta.code}</span>
                <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">{meta.title}</h1>
                <p className="mt-1 max-w-xl text-sm text-muted">{meta.subtitle}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold tabular-nums">{history.length}</div>
                <div className="text-xs text-muted">sittings recorded</div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Start a new sitting — THIS exam only */}
          <section className="card p-6 lg:col-span-3">
            <div className="mb-1 flex items-center gap-2">
              <h2 className="text-lg font-bold">Start a new sitting</h2>
              <span className="chip">{meta.code} only</span>
            </div>
            <p className="mb-5 text-sm text-muted">
              Stratified selection from the <strong>{poolSize}-question</strong> {meta.code} pool, weighted to the exam
              blueprint and biased toward your weak areas. This page is exclusive to {meta.code} — switch exams from the
              top bar.
            </p>

            <div className="mb-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Length</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { v: 50, label: "Full mock", note: "50 questions" },
                  { v: 20, label: "Quick set", note: "20 questions" },
                  { v: 10, label: "Warm-up", note: "10 questions" },
                ].map((o) => (
                  <button
                    key={o.v}
                    onClick={() => setCount(o.v)}
                    data-on={count === o.v}
                    className="flex-1 rounded-xl border border-line px-4 py-3 text-left transition data-[on=true]:border-accent data-[on=true]:bg-accent/5"
                  >
                    <div className="text-sm font-semibold">{o.label}</div>
                    <div className="text-xs text-muted">{o.note}</div>
                  </button>
                ))}
              </div>
            </div>

            <label className="mb-5 flex items-center justify-between rounded-xl border border-line px-4 py-3">
              <span>
                <span className="text-sm font-semibold">Timer</span>
                <span className="block text-xs text-muted">Auto-submits at zero · {meta.timerMinutes} min</span>
              </span>
              <button
                role="switch"
                aria-checked={timer}
                onClick={() => setTimer((t) => !t)}
                className="relative h-6 w-11 rounded-full transition"
                style={{ background: timer ? "rgb(var(--accent))" : "rgb(var(--line))" }}
              >
                <span
                  className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all"
                  style={{ left: timer ? "22px" : "2px" }}
                />
              </button>
            </label>

            <button onClick={start} disabled={starting} className="btn-primary w-full py-3 text-base">
              {starting ? "Assembling…" : `Start ${meta.code} test`}
            </button>
          </section>

          {/* Last sitting */}
          <section className="card p-6 lg:col-span-2">
            <h2 className="mb-4 text-lg font-bold">Last sitting</h2>
            {last ? (
              <div className="flex flex-col items-center">
                <Gauge value={last.scorePct} label={`${last.correctCount}/${last.total} correct`} />
                <div className="mt-3 flex items-center gap-2">
                  {last.passed ? (
                    <span className="badge-good">Pass (est.)</span>
                  ) : (
                    <span className="badge-bad">Below pass</span>
                  )}
                  <span className="text-xs text-muted">{fmtDate(last.date)}</span>
                </div>
                <Link href={`/exam/${exam}/review?id=${last.id}`} className="btn-ghost mt-4 w-full justify-center">
                  Review answers
                </Link>
              </div>
            ) : (
              <EmptyHint exam={exam} />
            )}
          </section>
        </div>

        {/* Domain performance + Blueprint */}
        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <section className="card p-6 lg:col-span-3">
            <h2 className="mb-4 text-lg font-bold">Domain performance {last && <span className="text-sm font-normal text-muted">· last sitting</span>}</h2>
            {last ? (
              <DomainBars rows={domainRows} passMark={Math.round(meta.passMark * 100)} />
            ) : (
              <p className="text-sm text-muted">Complete a sitting to see your performance per domain.</p>
            )}
          </section>

          <section className="card p-6 lg:col-span-2">
            <h2 className="mb-4 text-lg font-bold">Exam blueprint</h2>
            <DonutChart segments={blueprintSegments} centerTop={String(poolSize)} centerBottom="questions" />
          </section>
        </div>

        {/* Trend */}
        {trend.length >= 2 && (
          <section className="card mt-6 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Score trend</h2>
              <span className="text-xs text-muted">last {trend.length} sittings · hover a point</span>
            </div>
            <TrendChart points={trend} passMark={Math.round(meta.passMark * 100)} />
          </section>
        )}

        {/* Weak areas */}
        {weak.length > 0 && (
          <section className="card mt-6 p-6">
            <h2 className="mb-1 text-lg font-bold">Next test will emphasize</h2>
            <p className="mb-4 text-sm text-muted">Subtopics under 60% across your recent sittings get extra weight.</p>
            <div className="flex flex-wrap gap-2">
              {weak.slice(0, 8).map((w) => (
                <span key={w.subtopic} className="badge-warn">
                  {prettySubtopic(w.subtopic)} · {Math.round(w.pct * 100)}%
                </span>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-8 text-center text-xs text-muted">
          Pass proxy = ≥{Math.round(meta.passMark * 100)}% correct (approximation; the real exam uses a scaled score).
        </footer>
      </main>
    </>
  );
}

function EmptyHint({ exam }: { exam: ExamId }) {
  return (
    <div className="grid place-items-center py-6 text-center">
      <div className="mb-2 grid h-14 w-14 place-items-center rounded-full" style={{ background: "rgb(var(--accent) / 0.1)" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 3v16a2 2 0 0 0 2 2h12" /><path d="m19 9-5 5-4-4-3 3" />
        </svg>
      </div>
      <p className="text-sm font-medium">No sittings yet</p>
      <p className="text-xs text-muted">Start your first {EXAMS[exam].code} test to unlock metrics.</p>
    </div>
  );
}
