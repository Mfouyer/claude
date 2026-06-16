import "server-only";
import { BANK } from "../exams/bank";
import { EXAMS } from "../exams/meta";
import type { AssembledSitting, ClientQuestion, ExamId, Question } from "../exams/types";

function toClient(q: Question): ClientQuestion {
  const { correct, answers, explanation, ...rest } = q;
  return rest;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function poolSize(exam: ExamId): number {
  return BANK.filter((q) => q.exam === exam).length;
}

/**
 * Assemble a sitting for ONE exam only (per-exam isolation).
 * When `count` is smaller than the pool, selection is biased toward the
 * `emphasize` subtopics (the user's weak areas) while keeping domain spread.
 */
export function assembleSitting(
  exam: ExamId,
  count: number,
  emphasize: string[] = []
): AssembledSitting {
  const pool = BANK.filter((q) => q.exam === exam);
  const target = Math.max(1, Math.min(count, pool.length));

  let selected: Question[];
  if (target >= pool.length) {
    selected = shuffle(pool);
  } else {
    const weak = new Set(emphasize);
    const weakQs = shuffle(pool.filter((q) => weak.has(q.subtopic)));
    const restQs = shuffle(pool.filter((q) => !weak.has(q.subtopic)));
    // up to ~45% of the sitting drawn from weak areas first, then fill
    const weakQuota = Math.min(weakQs.length, Math.round(target * 0.45));
    selected = shuffle([...weakQs.slice(0, weakQuota), ...restQs].slice(0, target));
  }

  const timer = EXAMS[exam].timerMinutes;
  return {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${exam}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    exam,
    total: selected.length,
    timerMinutes: timer,
    emphasized: emphasize,
    questions: selected.map(toClient),
  };
}
