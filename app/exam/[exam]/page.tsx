import { notFound } from "next/navigation";
import { isExamId } from "@/lib/exams/meta";
import { getBlueprint, getPoolSize } from "@/lib/server/catalog";
import { Dashboard } from "@/components/Dashboard";

export function generateStaticParams() {
  return [{ exam: "ab730" }, { exam: "ab731" }];
}

export default function ExamPage({ params }: { params: { exam: string } }) {
  if (!isExamId(params.exam)) notFound();
  const exam = params.exam;
  return <Dashboard exam={exam} poolSize={getPoolSize(exam)} blueprint={getBlueprint(exam)} />;
}
