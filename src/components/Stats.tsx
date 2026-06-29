"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 15000,
    suffix: "+",
    label: "WIĘŹNIÓW W MAKALA",
    note: "zaprojektowane na 1 500 miejsc",
  },
  {
    value: 100,
    suffix: "+",
    label: "DNI WALKI O PRZETRWANIE",
    note: "codziennie dochodziło do morderstw",
  },
  {
    value: 200,
    suffix: "+",
    label: "REDAKCJI NA ŚWIECIE",
    note: "opisało tę historię",
  },
  {
    value: 6,
    suffix: "",
    label: "KONTYNENTÓW",
    note: "światowy zasięg medialny",
  },
];

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return count;
}

type StatProps = (typeof STATS)[number] & { active: boolean };

function StatCard({ value, suffix, label, note, active }: StatProps) {
  const count = useCountUp(value, 2200, active);

  return (
    <div className="flex flex-col items-center md:items-start px-8 py-10">
      <div
        className="text-[#F5F5F5] text-4xl md:text-5xl mb-2 tabular-nums"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {count.toLocaleString("pl-PL")}
        {suffix}
      </div>

      <div className="w-10 h-[2px] bg-[#8B2020] mb-3" />

      <div
        className="text-[#888888] text-sm text-center md:text-left leading-snug"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {label}
      </div>

      {note && (
        <div
          className="text-[#888888]/50 text-xs mt-1 text-center md:text-left"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {note}
        </div>
      )}
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#111111]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-[#2A1F1F]">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={[
              i < 2 ? "border-b md:border-b-0 border-[#2A1F1F]" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <StatCard {...stat} active={active} />
          </div>
        ))}
      </div>
    </section>
  );
}
