import "server-only";
import { BANK } from "../exams/bank";
import { EXAMS } from "../exams/meta";
import type {
  AnswerValue,
  ClientQuestion,
  DomainScore,
  ExamId,
  GradeResult,
  Question,
  ReviewItem,
  SubtopicScore,
} from "../exams/types";

function toClient(q: Question): ClientQuestion {
  const { correct, answers, explanation, ...rest } = q;
  return rest;
}

function sameSet(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const s = new Set(a);
  return b.every((x) => s.has(x));
}

function isQuestionCorrect(q: Question, your: AnswerValue | null): boolean {
  if (your == null) return false;
  if (q.format === "yesno-series") {
    const given = your as Record<string, boolean>;
    const key = q.answers ?? {};
    return (q.statements ?? []).every((s) => given[s.id] === key[s.id]);
  }
  const given = Array.isArray(your) ? your : [];
  return sameSet(given, q.correct ?? []);
}

/**
 * Grade a sitting from the answer key (server side only).
 * `answers` maps questionId → the user's AnswerValue. Missing = unanswered.
 */
export function gradeSitting(
  exam: ExamId,
  questionIds: string[],
  answers: Record<string, AnswerValue>
): GradeResult {
  const byId = new Map(BANK.filter((q) => q.exam === exam).map((q) => [q.id, q]));

  const review: ReviewItem[] = [];
  const domAcc: Record<string, DomainScore> = {};
  const subAcc: Record<string, SubtopicScore> = {};
  let correctCount = 0;

  for (const qid of questionIds) {
    const q = byId.get(qid);
    if (!q) continue;
    const your = (answers[qid] ?? null) as AnswerValue | null;
    const ok = isQuestionCorrect(q, your);
    if (ok) correctCount++;

    review.push({
      question: toClient(q),
      your,
      correct: q.correct,
      correctAnswers: q.answers,
      isCorrect: ok,
      explanation: q.explanation,
    });

    const d = (domAcc[q.domain] ??= { domain: q.domain, correct: 0, total: 0 });
    d.total++;
    if (ok) d.correct++;

    const s = (subAcc[q.subtopic] ??= { subtopic: q.subtopic, correct: 0, total: 0 });
    s.total++;
    if (ok) s.correct++;
  }

  const total = review.length;
  const scorePct = total ? Math.round((correctCount / total) * 100) : 0;
  return {
    correctCount,
    total,
    scorePct,
    passed: scorePct / 100 >= EXAMS[exam].passMark,
    byDomain: Object.values(domAcc),
    bySubtopic: Object.values(subAcc),
    review,
  };
}
