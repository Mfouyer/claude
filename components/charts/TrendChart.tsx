"use client";

import { useId, useState } from "react";

export interface TrendPoint {
  label: string; // date
  value: number; // 0..100
}

export function TrendChart({
  points,
  passMark = 70,
  height = 180,
}: {
  points: TrendPoint[];
  passMark?: number;
  height?: number;
}) {
  const uid = useId().replace(/[:]/g, "");
  const [active, setActive] = useState<number | null>(null);

  if (points.length === 0) return null;

  const n = points.length;
  const xAt = (i: number) => (n === 1 ? 50 : (i / (n - 1)) * 100);
  const yAt = (v: number) => 100 - Math.max(0, Math.min(100, v));

  const linePts = points.map((p, i) => `${xAt(i)},${yAt(p.value)}`);
  const linePath = `M ${linePts.join(" L ")}`;
  const areaPath = `M ${xAt(0)},100 L ${linePts.join(" L ")} L ${xAt(n - 1)},100 Z`;
  const thresholdY = yAt(passMark);

  return (
    <div className="relative w-full" style={{ height }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`area-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.32" />
            <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id={`line-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(var(--accent))" />
            <stop offset="100%" stopColor="rgb(var(--accent2))" />
          </linearGradient>
        </defs>
        {/* pass threshold */}
        <line
          x1="0"
          y1={thresholdY}
          x2="100"
          y2={thresholdY}
          stroke="rgb(var(--good))"
          strokeWidth={1}
          strokeDasharray="3 3"
          vectorEffect="non-scaling-stroke"
          opacity={0.7}
        />
        <path d={areaPath} fill={`url(#area-${uid})`} />
        <path
          d={linePath}
          fill="none"
          stroke={`url(#line-${uid})`}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        {active !== null && (
          <line
            x1={xAt(active)}
            y1="0"
            x2={xAt(active)}
            y2="100"
            stroke="rgb(var(--accent))"
            strokeWidth={1}
            strokeDasharray="2 2"
            vectorEffect="non-scaling-stroke"
            opacity={0.5}
          />
        )}
      </svg>

      {/* interactive points + tooltip overlay */}
      {points.map((p, i) => {
        const isActive = active === i;
        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${xAt(i)}%`, top: `${yAt(p.value)}%` }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive((a) => (a === i ? null : a))}
          >
            <button
              aria-label={`${p.label}: ${p.value}%`}
              className="block rounded-full border-2 bg-surface transition-transform"
              style={{
                width: isActive ? 14 : 10,
                height: isActive ? 14 : 10,
                borderColor: "rgb(var(--accent))",
                boxShadow: isActive ? "0 0 0 4px rgb(var(--accent) / 0.18)" : "none",
              }}
            />
            {isActive && (
              <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-line bg-surface px-2.5 py-1.5 text-center shadow-card">
                <div className="text-sm font-bold" style={{ color: "rgb(var(--accent))" }}>{p.value}%</div>
                <div className="text-[10px] text-muted">{p.label}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
