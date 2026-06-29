"use client";

import { useEffect, useRef, useState } from "react";

const EVENTS = [
  {
    tag: "Zatrzymanie",
    date: "Luty 2024",
    title: "Kinszasa. Wszystko zmieniło się w jednej chwili.",
    body: "Bezpodstawnie oskarżony o szpiegostwo i sabotaż za polski paszport. Bez kontaktu z rodziną.",
  },
  {
    tag: "Więzienie",
    date: "Marzec 2024",
    title: "Jest jedynym białym wśród ponad 15 tysięcy więźniów.",
    body: "W więzieniu zbudowanym dla 1500 osób każdego dnia walczy o życie. Głód, choroby, przemoc i śmierć stały się codziennością.",
  },
  {
    tag: "Proces",
    date: "Kwiecień 2024",
    title: "Spektakl, którego nie rozumiał.",
    body: "Proces toczył się po francusku i był transmitowany przez media. Każde słowo mogło decydować o jego życiu, ale nie rozumiał ich znaczenia.",
  },
  {
    tag: "Wyrok",
    date: "Maj 2024",
    title: "Najpierw śmierć. Potem dożywocie i 10 milionów dolarów.",
    body: "Nie zrozumiał ani wyroku, ani uzasadnienia. Bez obrońcy. Bez tłumacza. Był wtedy całkowicie sam.",
  },
  {
    tag: "Interwencja",
    date: "Maj 2024",
    title: "Rozpoczęła się walka o powrót.",
    body: "W sprawę zaangażowały się służby dyplomatyczne na najwyższym szczeblu z Prezydentem RP na czele. Pomoc nadeszła z wielu stron, a presja międzynarodowa zaczęła rosnąć.",
  },
  {
    tag: "Powrót",
    date: "Maj 2024",
    title: "Wrócił.",
    body: "Śmierć była blisko, ale miłość do dzieci okazała się silniejsza niż strach. Przeżył i wrócił dzięki ludziom, którzy nie przestali walczyć o jego życie.",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="bg-[#0A0A0A] py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">

        {/* nagłówek sekcji */}
        <div className="mb-16">
          <p
            className="text-[#888888] text-[11px] uppercase tracking-[0.3em] mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Historia
          </p>
          <blockquote
            className="text-[#F5F5F5] text-2xl md:text-3xl leading-snug"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            „To nie była zwykła sprawa sądowa.
            <br />
            To była gra między państwami."
          </blockquote>
          <p
            className="text-[#888888] text-sm mt-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            — Mariusz Majewski
          </p>
        </div>

        {/* timeline */}
        <div className="relative">

          {/* pionowa linia — animowana */}
          <div className="absolute left-[7px] md:left-[11px] top-0 bottom-0 w-px bg-[#2A1F1F]" />
          <div
            ref={lineRef}
            className="absolute left-[7px] md:left-[11px] top-0 w-px bg-[#C8A84B] transition-all duration-[2000ms] ease-out"
            style={{ height: visible ? "100%" : "0%" }}
          />

          <div className="flex flex-col gap-0">
            {EVENTS.map((event, i) => (
              <div
                key={event.tag}
                className="relative flex gap-8 md:gap-12 pb-7 last:pb-0"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${i * 150 + 300}ms, transform 0.5s ease ${i * 150 + 300}ms`,
                }}
              >
                {/* kropka */}
                <div className="relative flex-shrink-0 mt-1">
                  <div
                    className="w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-2 border-[#C8A84B] bg-[#0A0A0A] transition-all duration-300"
                    style={{
                      boxShadow: visible ? "0 0 12px rgba(200,168,75,0.4)" : "none",
                    }}
                  />
                </div>

                {/* karta */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className="text-[#C8A84B] text-[10px] uppercase tracking-[0.25em]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {event.tag}
                    </span>
                    <span
                      className="text-[#888888] text-[11px]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {event.date}
                    </span>
                  </div>

                  <h3
                    className="text-[#F5F5F5] text-xl md:text-2xl mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {event.title}
                  </h3>

                  <p
                    className="text-[#888888] text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {event.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
