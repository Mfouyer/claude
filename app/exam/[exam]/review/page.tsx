import { notFound } from "next/navigation";
import { isExamId } from "@/lib/exams/meta";
import { ReviewView } from "@/components/ReviewView";

export default function ReviewPage({
  params,
  searchParams,
}: {
  params: { exam: string };
  searchParams: { id?: string };
}) {
  if (!isExamId(params.exam)) notFound();
  const id = typeof searchParams.id === "string" ? searchParams.id : "";
  return <ReviewView exam={params.exam} id={id} />;
}
