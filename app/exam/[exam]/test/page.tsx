import { notFound } from "next/navigation";
import { isExamId } from "@/lib/exams/meta";
import { ExamRunner } from "@/components/ExamRunner";

export default function TestPage({
  params,
  searchParams,
}: {
  params: { exam: string };
  searchParams: { count?: string; timer?: string };
}) {
  if (!isExamId(params.exam)) notFound();
  const count = Math.min(50, Math.max(1, Number(searchParams.count) || 50));
  const timed = searchParams.timer === "1";
  return <ExamRunner exam={params.exam} count={count} timed={timed} />;
}
