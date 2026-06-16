"use client";

import { useState } from "react";

export interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

export function DonutChart({
  segments,
  size = 150,
  thickness = 18,
  centerTop,
  centerBottom,
}: {
  segments: DonutSegment[];
  size?: number;
  thickness?: number;
  centerTop?: string;
  centerBottom?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2;
  const cx = size / 2;
  const circ = 2 * Math.PI * r;

  let acc = 0;
  const arcs = segments.map((seg) => {
    const frac = seg.value / total;
    const dash = frac * circ;
    const arc = { seg, dash, gap: circ - dash, offset: -acc * circ };
    acc += frac;
    return arc;
  });

  return (
    <div className="flex items-center gap-5">
      <div className="relative grid shrink-0 place-items-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgb(var(--line))" strokeWidth={thickness} opacity={0.5} />
          {arcs.map((a, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cx}
              r={r}
              fill="none"
              stroke={a.seg.color}
              strokeWidth={active === i ? thickness + 3 : thickness}
              strokeDasharray={`${a.dash} ${a.gap}`}
              strokeDashoffset={a.offset}
              strokeLinecap="butt"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive((x) => (x === i ? null : x))}
              style={{ transition: "stroke-width .2s ease", cursor: "pointer" }}
            />
          ))}
        </svg>
        <div className="absolute flex flex-col items-center">
          {active !== null ? (
            <>
              <span className="text-xl font-extrabold leading-none">{segments[active].value}</span>
              <span className="mt-0.5 max-w-[5.5rem] text-center text-[10px] leading-tight text-muted">
                {segments[active].label}
              </span>
            </>
          ) : (
            <>
              <span className="text-xl font-extrabold leading-none">{centerTop ?? total}</span>
              {centerBottom && <span className="mt-0.5 text-[10px] text-muted">{centerBottom}</span>}
            </>
          )}
        </div>
      </div>

      <ul className="space-y-1.5">
        {segments.map((s, i) => (
          <li
            key={s.label}
            className="flex cursor-default items-center gap-2 text-sm"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive((x) => (x === i ? null : x))}
            style={{ opacity: active === null || active === i ? 1 : 0.5, transition: "opacity .15s" }}
          >
            <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: s.color }} />
            <span className="truncate">{s.label}</span>
            <span className="ml-auto pl-3 font-semibold tabular-nums text-muted">{s.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
