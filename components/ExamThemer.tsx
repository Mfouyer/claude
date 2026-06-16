"use client";

import { useEffect } from "react";
import type { ExamId } from "@/lib/exams/types";

/** Switches the CSS accent palette to match the active exam. */
export function ExamThemer({ exam }: { exam: ExamId }) {
  useEffect(() => {
    document.documentElement.dataset.exam = exam;
  }, [exam]);
  return null;
}
