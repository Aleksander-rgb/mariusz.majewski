"use client";

import { useEffect, useRef, useState } from "react";

export default function CentralQuote() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-[#111111] overflow-hidden"
    >
      {/* dekoracja — duże cudzysłowie w tle */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 text-[320px] leading-none text-[#C8A84B]/5 select-none pointer-events-none"
        style={{ fontFamily: "var(--font-playfair)" }}
        aria-hidden
      >
        „
      </div>

      {/* cienka złota linia */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#C8A84B]/40" />

      <div className="relative max-w-4xl mx-auto text-center">
        <blockquote
          className="text-[#F5F5F5] text-3xl md:text-4xl lg:text-[44px] leading-[1.35] mb-10"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          „Nie wiedziałem, czy wyjdę stamtąd żywy.
          <br className="hidden md:block" />
          Wiedziałem jedno — nie mogę pozwolić,
          <br className="hidden md:block" />
          żeby ta historia zginęła razem ze mną."
        </blockquote>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.9s ease 0.4s",
          }}
        >
          <div className="w-12 h-px bg-[#C8A84B]/50 mx-auto mb-6" />
          <p
            className="text-[#888888] text-sm tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Mariusz Majewski
          </p>
          <p
            className="text-[#888888]/60 text-xs mt-1 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Makala, Kinszasa — 2024
          </p>
        </div>
      </div>

      {/* linia dolna */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-[#C8A84B]/40" />
    </section>
  );
}
