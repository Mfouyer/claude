"use client";

import { useEffect, useId, useState } from "react";

function colorFor(value: number): [string, string] {
  if (value >= 70) return ["#16a36e", "#34d39e"]; // good
  if (value >= 50) return ["#d99112", "#f4c150"]; // warn
  return ["#dc434c", "#fb7185"]; // bad
}

export function Gauge({
  value,
  size = 168,
  thickness = 13,
  label = "Score",
  sublabel,
}: {
  value: number;
  size?: number;
  thickness?: number;
  label?: string;
  sublabel?: string;
}) {
  const [shown, setShown] = useState(0);
  const uid = useId().replace(/[:]/g, "");
  useEffect(() => {
    const t = setTimeout(() => setShown(value), 80);
    return () => clearTimeout(t);
  }, [value]);

  const v = Math.max(0, Math.min(100, shown));
  const r = (size - thickness) / 2;
  const cx = size / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - v / 100);
  const [c1, c2] = colorFor(value);
  // pass marker at 70%
  const markAngle = (70 / 100) * 2 * Math.PI - Math.PI / 2;
  const mx = cx + r * Math.cos(markAngle);
  const my = cx + r * Math.sin(markAngle);

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={`gauge-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgb(var(--line))" strokeWidth={thickness} />
        <circle
          cx={cx}
          cy={cx}
          r={r}
          fill="none"
          stroke={`url(#gauge-${uid})`}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(.16,1,.3,1)" }}
        />
        <circle cx={mx} cy={my} r={3} fill="rgb(var(--surface))" stroke="rgb(var(--muted))" strokeWidth={2} />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-[2.1rem] font-extrabold leading-none tracking-tight" style={{ color: c1 }}>
          {Math.round(value)}%
        </span>
        <span className="mt-1 text-xs font-medium text-muted">{label}</span>
        {sublabel && <span className="mt-0.5 text-[11px] text-muted">{sublabel}</span>}
      </div>
    </div>
  );
}
