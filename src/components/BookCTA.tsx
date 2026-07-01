"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BookCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="kup-ksiazke"
      className="relative py-24 md:py-32 bg-[#0A0A0A] px-6 overflow-hidden"
    >
      {/* tło — rozmyte złoto */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A84B]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* okładka — 3D mockup */}
          <div
            className="flex justify-center md:justify-end"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "perspective(1000px) rotateY(0deg) translateY(0)" : "perspective(1000px) rotateY(15deg) translateY(30px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <div
              className="relative"
              style={{
                transform: "perspective(800px) rotateY(-8deg) rotateX(2deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* cień książki */}
              <div
                className="absolute -bottom-4 left-4 right-0 h-8 bg-black/50 blur-xl rounded-full"
                style={{ transform: "translateZ(-20px)" }}
              />
              {/* grzbiet */}
              <div
                className="absolute top-0 bottom-0 -left-3 w-3 bg-[#6B3030] origin-right"
                style={{
                  transform: "rotateY(90deg) translateZ(1px)",
                  transformOrigin: "right center",
                }}
              />
              {/* okładka */}
              <div className="relative shadow-[0_20px_60px_rgba(0,0,0,0.8),_0_0_0_1px_rgba(200,168,75,0.15)]">
                <Image
                  src="/book-cover.avif"
                  alt="Kongijskie piekło — okładka książki"
                  width={320}
                  height={460}
                  className="block w-full h-auto"
                  priority
                />
                {/* połysk */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* tekst + CTA */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            <p
              className="text-[#C8A84B] text-[11px] uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Zamów teraz
            </p>

            <h2
              className="text-[#F5F5F5] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kongijskie piekło
            </h2>

            <p
              className="text-[#888888] text-sm mb-1"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Mariusz Majewski, Jarosław Kocemba
            </p>

            <div className="w-10 h-px bg-[#C8A84B]/40 my-6" />

            <p
              className="text-[#F5F5F5]/75 text-base md:text-lg leading-[1.85] mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Historia podróży, która zmieniła się w koszmar. Choć był niewinny, groziła mu kara śmierci.
              Nadzieja potrafi jednak przetrwać wszystko. Nawet piekło.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://www.empik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C8A84B] hover:bg-[#D4B862] text-black px-8 py-4 text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,168,75,0.3)]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Kup książkę
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { label: "Wydawca", value: "Wydawnictwo Harde" },
                { label: "Rok", value: "kwiecień 2026" },
                { label: "Stron", value: "320" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="text-[#888888] text-[10px] uppercase tracking-[0.2em] mb-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-[#F5F5F5] text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
