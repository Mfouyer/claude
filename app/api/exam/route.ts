import { NextResponse } from "next/server";
import { assembleSitting } from "@/lib/server/assemble";
import { isExamId } from "@/lib/exams/meta";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const exam = (body as { exam?: unknown }).exam;
  if (typeof exam !== "string" || !isExamId(exam)) {
    return NextResponse.json({ error: "Unknown exam." }, { status: 400 });
  }

  const rawCount = (body as { count?: unknown }).count;
  const count = typeof rawCount === "number" && Number.isFinite(rawCount) ? Math.floor(rawCount) : 50;

  const rawEmph = (body as { emphasize?: unknown }).emphasize;
  const emphasize = Array.isArray(rawEmph)
    ? rawEmph.filter((x): x is string => typeof x === "string")
    : [];

  const sitting = assembleSitting(exam, count, emphasize);
  return NextResponse.json(sitting);
}
