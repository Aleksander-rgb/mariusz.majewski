"use client";

import { useEffect, useRef, useState } from "react";

const QUESTIONS = [
  {
    q: "Co tak naprawdę zarzucano Mariuszowi Majewskiemu?",
    a: "Mariusz był oskarżany o szpiegostwo i sabotaż. Zarzuty były bezpodstawne — nigdy nie przedstawiono mu żadnych dowodów. Rozprawa toczyła się w języku kongijskim, bez tłumacza, a on nie rozumiał ani treści oskarżenia, ani ogłoszonego wyroku.",
  },
  {
    q: "Jak długo Mariusz przebywał w więzieniu Makala?",
    a: "Mariusz spędził w Makala ponad 3 miesiące — od stycznia do maja 2024 roku. W tym czasie jego jedynym łącznikiem z zewnętrznym światem była kongijska adwokatka Carine.",
  },
  {
    q: "Jak wyglądały warunki w więzieniu?",
    a: "Makala jest największym więzieniem Afryki Centralnej. Zaprojektowane na 1 500 więźniów, przetrzymuje ponad 15 000 osób. Brakuje jedzenia, wody, leków i przestrzeni. Każdy dzień to walka o przetrwanie w dosłownym sensie tego słowa.",
  },
  {
    q: "Kto pomógł w uwolnieniu?",
    a: "W uwolnienie Mariusza zaangażowały się najwyższe szczeble polskiej dyplomacji — Prezydent RP Andrzej Duda i Minister Spraw Zagranicznych Radosław Sikorski. Polska uruchomiła kanały dyplomatyczne, których szczegóły do dziś nie są w pełni ujawnione.",
  },
  {
    q: "Czy historia opisana w książce jest w 100% prawdziwa?",
    a: "Tak. Książka jest dokumentem — napisanym na podstawie dziennika prowadzonego przez Mariusza w więzieniu, zeznań świadków, dokumentów sądowych i rozmów z osobami zaangażowanymi w sprawę. Żaden szczegół nie został zmyślony.",
  },
  {
    q: "Czy Mariusz bał się, że nie wróci?",
    a: "Nie ukrywa, że śmierć była realna — zarówno z rąk innych więźniów, jak i z powodu warunków sanitarnych. Mówi wprost: myśl o dzieciach była silniejsza niż strach. To ona pozwoliła mu nie poddać się przez ponad trzy miesiące.",
  },
  {
    q: "Kim jest współautor Jarosław Kocemba?",
    a: "Jarosław Kocemba to doświadczony dziennikarz śledczy, który przez miesiące pomagał Mariuszowi odtworzyć chronologię wydarzeń i zrozumieć dyplomatyczny kontekst sprawy. Jego wkład pozwolił pokazać historię z szerszej, geopolitycznej perspektywy.",
  },
  {
    q: "Dlaczego Mariusz zdecydował się napisać tę książkę?",
    a: "Nie po to, by szukać zemsty czy rozrachunków. Chciał, by świat zobaczył prawdę o kongijskim systemie więziennym i o tym, co dzieje się z ludźmi, którzy znajdą się w nim bez winy. Książka jest też hołdem dla wszystkich, którzy mu pomogli.",
  },
  {
    q: "Czy Mariusz nadal wyjeżdża do Afryki?",
    a: "Tak. Mariusz nie pozwolił, by to doświadczenie odebrało mu pasję do podróży i kontaktów z Afryką. Mówi, że odpowiedzialność za to, co pokazał światu, jest ważniejsza niż strach przed powrotem.",
  },
  {
    q: "Gdzie mogę kupić książkę?",
    a: "Książkę można nabyć w sieci Empik — zarówno w sklepach stacjonarnych, jak i online. Dostępna jest w wersji drukowanej.",
  },
  {
    q: "Czy jest planowana wersja anglojęzyczna?",
    a: "Rozmowy na temat tłumaczeń są prowadzone. Biorąc pod uwagę zasięg medialny tej historii — relacjonowały ją media z ponad 40 krajów — zainteresowanie wydań zagranicznych jest duże. Szczegóły zostaną ogłoszone na oficjalnych kanałach autora.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="faq"
      className="py-20 md:py-28 bg-[#111111] px-6"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p
            className="text-[#C8A84B] text-[11px] uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Najczęściej zadawane pytania
          </p>
          <h2
            className="text-[#F5F5F5] text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Pytania i odpowiedzi
          </h2>
        </div>

        <div className="divide-y divide-[#2A1F1F]">
          {QUESTIONS.map((item, i) => (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`,
              }}
            >
              <button
                className="w-full text-left py-5 flex items-start justify-between gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="text-[#F5F5F5] text-base md:text-lg leading-snug group-hover:text-[#C8A84B] transition-colors duration-200 pr-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full border border-[#C8A84B]/40 flex items-center justify-center text-[#C8A84B] text-lg leading-none transition-transform duration-300 mt-0.5"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden"
                style={{
                  maxHeight: open === i ? "400px" : "0",
                  transition: "max-height 0.4s ease",
                }}
              >
                <p
                  className="text-[#888888] text-sm md:text-base leading-[1.85] pb-5"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
