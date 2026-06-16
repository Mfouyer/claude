import "server-only";
import { BANK } from "../exams/bank";
import { DOMAIN_ORDER } from "../exams/meta";
import type { ExamId } from "../exams/types";

export function getPoolSize(exam: ExamId): number {
  return BANK.filter((q) => q.exam === exam).length;
}

export function getBlueprint(exam: ExamId): { domain: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const q of BANK) if (q.exam === exam) counts[q.domain] = (counts[q.domain] ?? 0) + 1;
  return DOMAIN_ORDER.filter((d) => counts[d]).map((d) => ({ domain: d, count: counts[d] }));
}
