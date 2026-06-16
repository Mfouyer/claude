import { NextResponse } from "next/server";
import { gradeSitting } from "@/lib/server/grade";
import { isExamId } from "@/lib/exams/meta";
import type { AnswerValue } from "@/lib/exams/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const exam = (body as { exam?: unknown }).exam;
  if (typeof exam !== "string" || !isExamId(exam)) {
    return NextResponse.json({ error: "Unknown exam." }, { status: 400 });
  }

  const rawIds = (body as { questionIds?: unknown }).questionIds;
  const questionIds = Array.isArray(rawIds)
    ? rawIds.filter((x): x is string => typeof x === "string")
    : [];

  const rawAnswers = (body as { answers?: unknown }).answers;
  const answers =
    rawAnswers && typeof rawAnswers === "object"
      ? (rawAnswers as Record<string, AnswerValue>)
      : {};

  const result = gradeSitting(exam, questionIds, answers);
  return NextResponse.json(result);
}
