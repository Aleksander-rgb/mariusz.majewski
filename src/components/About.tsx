"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="o-autorze"
      className="py-20 md:py-28 bg-[#0A0A0A] px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">

          {/* tekst — 60% (3 z 5 kolumn) */}
          <div
            className="md:col-span-3 order-2 md:order-1"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <p
              className="text-[#C8A84B] text-[11px] uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              O autorze
            </p>

            <h2
              className="text-[#F5F5F5] text-3xl md:text-4xl leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mariusz Majewski
            </h2>

            <p
              className="text-[#888888] text-base md:text-lg leading-[1.85] mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Dziennikarz, podróżnik i przedsiębiorca. Przez lata budował biznes
              na styku Europy i Afryki — aż pewnego dnia granica między
              podróżą a tragedią zniknęła w jednej chwili.
            </p>

            <p
              className="text-[#888888] text-base md:text-lg leading-[1.85] mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              W styczniu 2024 roku został zatrzymany w Kinszasie. Bez tłumacza,
              bez zrozumiałych zarzutów, bez kontaktu z rodziną. Trafił do
              Makala — więzienia zaprojektowanego na 1&nbsp;500 osób, w którym
              przebywa ponad 15&nbsp;000.
            </p>

            <p
              className="text-[#888888] text-base md:text-lg leading-[1.85] mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Po powrocie do Polski postanowił opisać to, co przeżył — nie po
              to, by rozliczyć winnych, ale po to, by świat zobaczył prawdę
              o kongijskim systemie więziennym i sile ludzkiej determinacji.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="border-l-2 border-[#C8A84B] pl-4">
                <p
                  className="text-[#F5F5F5] text-sm font-medium mb-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Jarosław Kocemba
                </p>
                <p
                  className="text-[#888888] text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Współautor. Dziennikarz śledczy, który przez miesiące
                  pomagał zrekonstruować przebieg wydarzeń i kontekst
                  dyplomatyczny sprawy.
                </p>
              </div>
            </div>
          </div>

          {/* portret — 40% (2 z 5 kolumn) */}
          <div
            className="md:col-span-2 order-1 md:order-2 flex justify-center md:justify-end"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
            }}
          >
            <div className="relative w-72 md:w-80">
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#C8A84B]/30 pointer-events-none" />
              <div className="relative overflow-hidden">
                <Image
                  src="/mariusz-portret-2.jpg"
                  alt="Mariusz Majewski"
                  width={400}
                  height={500}
                  className="object-cover w-full h-auto"
                  style={{
                    aspectRatio: "4/5",
                    objectPosition: "center top",
                    filter: "grayscale(20%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
