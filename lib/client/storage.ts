import type { CompletedSitting, ExamId } from "../exams/types";

const KEY = (exam: ExamId) => `ab-sim:history:${exam}`;
const MAX_KEEP = 40;

export function loadHistory(exam: ExamId): CompletedSitting[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY(exam));
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? (arr as CompletedSitting[]) : [];
  } catch {
    return [];
  }
}

export function saveSitting(s: CompletedSitting): void {
  if (typeof window === "undefined") return;
  const hist = loadHistory(s.exam).filter((x) => x.id !== s.id);
  hist.unshift(s); // newest first
  window.localStorage.setItem(KEY(s.exam), JSON.stringify(hist.slice(0, MAX_KEEP)));
}

export function getSitting(exam: ExamId, id: string): CompletedSitting | null {
  return loadHistory(exam).find((s) => s.id === id) ?? null;
}

export function clearHistory(exam: ExamId): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY(exam));
}

export interface WeakArea {
  subtopic: string;
  pct: number; // 0..1
}

/** Subtopics scoring below `threshold` across recent sittings (the weak areas). */
export function weakSubtopics(exam: ExamId, threshold = 0.6, maxSittings = 5): WeakArea[] {
  const hist = loadHistory(exam).slice(0, maxSittings);
  const acc: Record<string, { c: number; t: number }> = {};
  for (const s of hist) {
    for (const st of s.bySubtopic) {
      const a = (acc[st.subtopic] ??= { c: 0, t: 0 });
      a.c += st.correct;
      a.t += st.total;
    }
  }
  return Object.entries(acc)
    .filter(([, a]) => a.t > 0 && a.c / a.t < threshold)
    .map(([subtopic, a]) => ({ subtopic, pct: a.c / a.t }))
    .sort((x, y) => x.pct - y.pct);
}
