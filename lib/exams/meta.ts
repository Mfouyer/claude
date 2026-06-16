import type { ExamId, ExamMeta, DomainMeta } from "./types";

/** Client-safe metadata (no answer keys live here). */

export const DOMAINS: Record<string, DomainMeta> = {
  "generative-ai-fundamentals": {
    id: "generative-ai-fundamentals",
    name: "Generative AI Fundamentals",
    short: "GenAI",
  },
  "drafting-analyzing-business-content": {
    id: "drafting-analyzing-business-content",
    name: "Drafting & Analyzing Business Content",
    short: "Content",
  },
  "managing-prompts-conversations": {
    id: "managing-prompts-conversations",
    name: "Managing Prompts & Conversations",
    short: "Prompts",
  },
};

export const DOMAIN_ORDER = [
  "generative-ai-fundamentals",
  "drafting-analyzing-business-content",
  "managing-prompts-conversations",
];

export const EXAMS: Record<ExamId, ExamMeta> = {
  ab730: {
    id: "ab730",
    code: "AB-730",
    title: "AI Business Professional",
    subtitle: "Apply Microsoft 365 Copilot in everyday business work",
    blurb:
      "Generative AI fundamentals, drafting & analyzing business content, and managing prompts & conversations with Microsoft 365 Copilot.",
    passMark: 0.7,
    timerMinutes: 60,
  },
  ab731: {
    id: "ab731",
    code: "AB-731",
    title: "AI Transformation Leader",
    subtitle: "Lead responsible AI adoption and governance",
    blurb:
      "Responsible AI, governance, generative AI solutions, Microsoft Foundry & Copilot Studio, and driving organization-wide AI adoption.",
    passMark: 0.7,
    timerMinutes: 60,
  },
};

export const EXAM_IDS: ExamId[] = ["ab730", "ab731"];

export function isExamId(v: string): v is ExamId {
  return v === "ab730" || v === "ab731";
}

export function otherExam(id: ExamId): ExamId {
  return id === "ab730" ? "ab731" : "ab730";
}

export function domainName(id: string): string {
  return DOMAINS[id]?.name ?? id;
}

export function domainShort(id: string): string {
  return DOMAINS[id]?.short ?? id;
}

/** Pretty-print a subtopic id like "agent-actions-api" → "Agent actions API". */
export function prettySubtopic(id: string): string {
  if (!id) return "";
  const words = id.split("-");
  return words
    .map((w, i) => {
      if (["ai", "api", "rag", "dlp", "ml", "viva"].includes(w)) return w.toUpperCase();
      return i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w;
    })
    .join(" ");
}
