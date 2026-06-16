"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CompletedSitting, ExamId, ReviewItem } from "@/lib/exams/types";
import { EXAMS, DOMAIN_ORDER, domainName, prettySubtopic } from "@/lib/exams/meta";
import { getSitting } from "@/lib/client/storage";
import { AppHeader } from "./AppHeader";
import { ExamThemer } from "./ExamThemer";
import { Gauge } from "./charts/Gauge";
import { DomainBars } from "./charts/DomainBars";

function fmtDuration(sec: number | null): string {
  if (sec == null) return "untimed";
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

export function ReviewView({ exam, id }: { exam: ExamId; id: string }) {
  const meta = EXAMS[exam];
  const [sitting, setSitting] = useState<CompletedSitting | null | undefined>(undefined);
  const [filter, setFilter] = useState<"wrong" | "all">("wrong");

  useEffect(() => {
    setSitting(getSitting(exam, id));
  }, [exam, id]);

  const wrongCount = sitting ? sitting.review.filter((r) => !r.isCorrect).length : 0;
  const shown = useMemo(() => {
    if (!sitting) return [];
    return filter === "wrong" ? sitting.review.filter((r) => !r.isCorrect) : sitting.review;
  }, [sitting, filter]);

  const domainRows = useMemo(() => {
    if (!sitting) return [];
    const byId = new Map(sitting.byDomain.map((d) => [d.domain, d]));
    return DOMAIN_ORDER.filter((d) => byId.has(d)).map((d) => ({
      name: domainName(d),
      correct: byId.get(d)!.correct,
      total: byId.get(d)!.total,
    }));
  }, [sitting]);

  if (sitting === undefined) {
    return (
      <Shell exam={exam}>
        <div className="card mx-auto mt-10 max-w-md p-8 text-center text-sm text-muted">Loading results…</div>
      </Shell>
    );
  }
  if (sitting === null) {
    return (
      <Shell exam={exam}>
        <div className="card mx-auto mt-10 max-w-md p-8 text-center">
          <p className="text-sm text-muted">That sitting wasn’t found on this device.</p>
          <Link href={`/exam/${exam}`} className="btn-ghost mt-4">
            Back to dashboard
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell exam={exam}>
      {/* Summary */}
      <section className="card mb-6 overflow-hidden">
        <div className="grid gap-6 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-7">
          <div className="mx-auto sm:mx-0">
            <Gauge value={sitting.scorePct} label={`${sitting.correctCount}/${sitting.total} correct`} />
          </div>
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="chip-grad">{meta.code}</span>
              {sitting.passed ? <span className="badge-good">Pass (est.)</span> : <span className="badge-bad">Below pass</span>}
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight">Sitting results</h1>
            <p className="mt-1 text-sm text-muted">
              {new Date(sitting.date).toLocaleString()} · {fmtDuration(sitting.durationSec)} ·{" "}
              {wrongCount === 0 ? "no mistakes 🎉" : `${wrongCount} to review`}
            </p>
            <div className="mt-4">
              <DomainBars rows={domainRows} passMark={Math.round(meta.passMark * 100)} />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/exam/${exam}/test?count=${sitting.total}`} className="btn-primary">
                Retake ({sitting.total})
              </Link>
              <Link href={`/exam/${exam}`} className="btn-ghost">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Review of answers */}
      <section className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Review</h2>
          <p className="text-sm text-muted">
            Every wrong answer below is explained — what the correct answer is, and why.
          </p>
        </div>
        <div className="flex rounded-xl border border-line p-1 text-sm">
          <button
            onClick={() => setFilter("wrong")}
            data-on={filter === "wrong"}
            className="rounded-lg px-3 py-1.5 font-semibold transition data-[on=true]:bg-accent data-[on=true]:text-white"
          >
            Mistakes ({wrongCount})
          </button>
          <button
            onClick={() => setFilter("all")}
            data-on={filter === "all"}
            className="rounded-lg px-3 py-1.5 font-semibold transition data-[on=true]:bg-accent data-[on=true]:text-white"
          >
            All ({sitting.review.length})
          </button>
        </div>
      </section>

      {shown.length === 0 ? (
        <div className="card p-8 text-center">
          <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full bg-good/10">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--good))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <p className="font-semibold">Perfect on this filter</p>
          <p className="text-sm text-muted">No mistakes to review — switch to “All” to revisit every question.</p>
        </div>
      ) : (
        <ol className="space-y-4">
          {shown.map((item, i) => (
            <ReviewCard key={item.question.id} item={item} index={i + 1} />
          ))}
        </ol>
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

function ReviewCard({ item, index }: { item: ReviewItem; index: number }) {
  const q = item.question;
  return (
    <li className="card overflow-hidden">
      <div className="border-b border-line p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-bold text-muted">#{index}</span>
          <span className="chip">{q.id}</span>
          <span className="rounded-full bg-line/60 px-2 py-0.5 font-medium text-muted">{prettySubtopic(q.subtopic)}</span>
          <span className="ml-auto">
            {item.isCorrect ? <span className="badge-good">Correct</span> : <span className="badge-bad">Incorrect</span>}
          </span>
        </div>
        <p className="font-semibold leading-snug">{q.stem}</p>
      </div>

      <div className="p-5">
        {q.format === "yesno-series" ? (
          <YesNoReview item={item} />
        ) : (
          <OptionReview item={item} />
        )}

        <div className="mt-4 rounded-xl border border-accent/30 bg-accent/5 p-4">
          <div className="mb-1 flex items-center gap-2 text-sm font-bold text-accent">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
            </svg>
            Why
          </div>
          <p className="text-sm leading-relaxed">{item.explanation}</p>
        </div>
      </div>
    </li>
  );
}

function OptionReview({ item }: { item: ReviewItem }) {
  const q = item.question;
  const correct = new Set(item.correct ?? []);
  const your = new Set(Array.isArray(item.your) ? item.your : []);
  return (
    <div className="space-y-2">
      {(q.options ?? []).map((o) => {
        const isCorrect = correct.has(o.key);
        const isYour = your.has(o.key);
        const state = isCorrect ? "correct" : isYour ? "wrong" : undefined;
        return (
          <div key={o.key} className="opt" data-state={state} style={{ cursor: "default" }}>
            <span className="opt-key">{o.key}</span>
            <span className="flex-1 pt-0.5 text-sm leading-snug">{o.text}</span>
            <span className="flex shrink-0 gap-1 pt-0.5">
              {isYour && <Tag tone={isCorrect ? "good" : "bad"}>Your answer</Tag>}
              {isCorrect && !isYour && <Tag tone="good">Correct</Tag>}
            </span>
          </div>
        );
      })}
      {your.size === 0 && <p className="pt-1 text-xs italic text-muted">You left this question unanswered.</p>}
    </div>
  );
}

function YesNoReview({ item }: { item: ReviewItem }) {
  const q = item.question;
  const key = item.correctAnswers ?? {};
  const your = (item.your as Record<string, boolean> | null) ?? {};
  return (
    <div className="space-y-2">
      {(q.statements ?? []).map((s) => {
        const correctVal = key[s.id];
        const yourVal = your[s.id];
        const ok = yourVal === correctVal;
        return (
          <div key={s.id} className="opt" data-state={ok ? "correct" : "wrong"} style={{ cursor: "default" }}>
            <span className="flex-1 pt-0.5 text-sm leading-snug">{s.text}</span>
            <span className="flex shrink-0 items-center gap-1.5 pt-0.5 text-xs">
              <Tag tone={ok ? "good" : "bad"}>You: {yourVal === undefined ? "—" : yourVal ? "Yes" : "No"}</Tag>
              {!ok && <Tag tone="good">Correct: {correctVal ? "Yes" : "No"}</Tag>}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Tag({ tone, children }: { tone: "good" | "bad"; children: React.ReactNode }) {
  return tone === "good" ? <span className="badge-good">{children}</span> : <span className="badge-bad">{children}</span>;
}
