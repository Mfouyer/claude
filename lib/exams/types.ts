export type ExamId = "ab730" | "ab731";
export type QFormat = "single" | "scenario" | "multiple" | "yesno-series";
export type Difficulty = "easy" | "medium" | "hard";

export interface Option {
  key: string; // "A" | "B" | "C" | "D"
  text: string;
}

export interface Statement {
  id: string;
  text: string;
}

/** Full question, including the answer key + explanation (server-side only). */
export interface Question {
  id: string;
  exam: ExamId;
  domain: string;
  subtopic: string;
  format: QFormat;
  difficulty: Difficulty;
  stem: string;
  /** For single / scenario / multiple — always sorted A → B → C → D. */
  options?: Option[];
  /** For yesno-series. */
  statements?: Statement[];
  /** Correct option key(s) for single / scenario / multiple. */
  correct?: string[];
  /** For yesno-series: statementId → true (Yes) / false (No). */
  answers?: Record<string, boolean>;
  /** Why the correct answer is right (and why the common distractors are not). */
  explanation: string;
}

/** Question shipped to the browser — never contains the answer key. */
export type ClientQuestion = Omit<Question, "correct" | "answers" | "explanation">;

export interface DomainMeta {
  id: string;
  name: string;
  short: string;
}

export interface ExamMeta {
  id: ExamId;
  code: string; // "AB-730"
  title: string;
  subtitle: string;
  blurb: string;
  passMark: number; // 0..1
  timerMinutes: number;
}

/* ----------------------------- sittings & results ----------------------------- */

/** A user's answer to one question: selected option keys, or a yes/no map. */
export type AnswerValue = string[] | Record<string, boolean>;

export interface AssembledSitting {
  id: string;
  exam: ExamId;
  total: number;
  timerMinutes: number | null;
  emphasized: string[];
  questions: ClientQuestion[];
}

export interface DomainScore {
  domain: string;
  correct: number;
  total: number;
}

export interface SubtopicScore {
  subtopic: string;
  correct: number;
  total: number;
}

export interface ReviewItem {
  question: ClientQuestion;
  your: AnswerValue | null;
  correct?: string[];
  correctAnswers?: Record<string, boolean>;
  isCorrect: boolean;
  explanation: string;
}

export interface GradeResult {
  correctCount: number;
  total: number;
  scorePct: number; // 0..100
  passed: boolean;
  byDomain: DomainScore[];
  bySubtopic: SubtopicScore[];
  review: ReviewItem[];
}

/** Stored in the browser (localStorage) as the user's history. */
export interface CompletedSitting extends GradeResult {
  id: string;
  exam: ExamId;
  date: string; // ISO timestamp
  durationSec: number | null;
}
