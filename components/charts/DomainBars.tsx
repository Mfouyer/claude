"use client";

import { useEffect, useState } from "react";

export interface DomainBarRow {
  name: string;
  short?: string;
  correct: number;
  total: number;
}

function barColor(pct: number): string {
  if (pct >= 80) return "rgb(var(--good))";
  if (pct >= 60) return "rgb(var(--warn))";
  return "rgb(var(--bad))";
}

export function DomainBars({ rows, passMark = 70 }: { rows: DomainBarRow[]; passMark?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-4">
      {rows.map((r) => {
        const pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;
        return (
          <div key={r.name} className="group">
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="truncate text-sm font-medium">{r.name}</span>
              <span className="shrink-0 text-sm tabular-nums text-muted">
                <span className="font-semibold" style={{ color: barColor(pct) }}>{pct}%</span>
                <span className="mx-1.5 opacity-40">·</span>
                {r.correct}/{r.total}
              </span>
            </div>
            <div className="relative h-2.5 overflow-hidden rounded-full" style={{ background: "rgb(var(--line))" }}>
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: mounted ? `${pct}%` : "0%",
                  background: `linear-gradient(90deg, ${barColor(pct)}, color-mix(in srgb, ${barColor(pct)} 55%, white))`,
                  transition: "width 1s cubic-bezier(.16,1,.3,1)",
                }}
              />
              <div
                className="absolute inset-y-0 w-px bg-ink/30"
                style={{ left: `${passMark}%` }}
                title={`Pass ≥ ${passMark}%`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
