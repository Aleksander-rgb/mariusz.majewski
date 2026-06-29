"use client";

import { useEffect, useRef, useState } from "react";

const QUESTIONS = [
  {
    q: "Co tak naprawdę zarzucano Mariuszowi Majewskiemu?",
    a: "Został oskarżony o szpiegostwo i sabotaż. Zarzuty były bezpodstawne — nigdy nie przedstawiono mu żadnych dowodów. Sprawa od początku miała charakter polityczny i międzynarodowy, i była pokłosiem wizyty Prezydenta Andrzeja Dudy w sąsiedniej Ruandzie.",
  },
  {
    q: "Czy naprawdę groziła mu kara śmierci?",
    a: "Tak. Za sabotaż przewidziana jest kara śmierci i taką otrzymał, ale dzięki zabiegom dyplomatycznym została ona złagodzona w ostatniej chwili do dożywocia.",
  },
  {
    q: "Jak wyglądały warunki w więzieniu?",
    a: "Makala jest więzieniem, w którym nie ma ani jednego strażnika. Brutalna przemoc, śmiertelne choroby i codzienna niepewność, czy przeżyje kolejny dzień. Brakuje jedzenia, wody, leków i przestrzeni. Każdy dzień to walka o przetrwanie w dosłownym sensie tego słowa.",
  },
  {
    q: "Kto pomógł mu wrócić do Polski?",
    a: "W sprawę zaangażowały się polskie działania dyplomatyczne, bliscy oraz ludzie, którzy nagłośnili sprawę w mediach.",
  },
  {
    q: "Czy Mariusz bał się, że nie wróci?",
    a: "Nie ukrywa, że śmierć była realna — zarówno z rąk innych więźniów, jak i z powodu warunków. Mówi wprost: myśl o dzieciach była silniejsza niż strach. To ona pozwoliła mu nie poddać się przez ponad trzy miesiące.",
  },
  {
    q: "Czy historia opisana w książce jest prawdziwa?",
    a: 'Tak. „Kongijskie piekło” to historia oparta na prawdziwych wydarzeniach, relacjach, dokumentach i rekonstrukcji przeprowadzonej wspólnie ze współautorem Jarosławem Kocembą.',
  },
  {
    q: "Dlaczego Mariusz zdecydował się napisać tę książkę?",
    a: "Żeby opowiedzieć, co naprawdę wydarzyło się w Kongo — i żeby ta historia nie zginęła razem z nim, gdy nie wiedział jeszcze, czy wróci żywy. Książka jest też hołdem dla wszystkich, którzy mu pomogli.",
  },
  {
    q: "Gdzie mogę kupić książkę?",
    a: 'Książka jest dostępna m.in. w Empiku. Najszybsza droga to przycisk „Kup książkę" na tej stronie.',
  },
  {
    q: "Czy będzie wersja anglojęzyczna?",
    a: "Na ten moment książka ukazała się po polsku. Wersja anglojęzyczna oraz francuskojęzyczna jest naturalnym kolejnym krokiem.",
  },
  {
    q: "Czy Mariusz nadal jeździ do Afryki?",
    a: "Dziś najważniejsze jest opowiadanie tej historii, spotkania z czytelnikami i wystąpienia o przetrwaniu, odporności psychicznej i decyzjach podejmowanych pod presją.",
  },
  {
    q: "Czy na podstawie książki powstanie film?",
    a: "Trwają rozmowy z producentami zainteresowanymi ekranizacją książki, ale żadne decyzje jeszcze nie zapadły.",
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

  const half = Math.ceil(QUESTIONS.length / 2);
  const col1 = QUESTIONS.slice(0, half);
  const col2 = QUESTIONS.slice(half);

  const renderItem = (item: (typeof QUESTIONS)[number], i: number) => (
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
          className="text-[#F5F5F5] text-base leading-snug group-hover:text-[#C8A84B] transition-colors duration-200 pr-2"
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
          className="text-[#888888] text-sm leading-[1.85] pb-5"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      id="faq"
      className="py-20 md:py-28 bg-[#111111] px-6"
    >
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20">
          <div className="divide-y divide-[#2A1F1F]">
            {col1.map((item, i) => renderItem(item, i))}
          </div>
          <div className="divide-y divide-[#2A1F1F]">
            {col2.map((item, i) => renderItem(item, i + half))}
          </div>
        </div>
      </div>
    </section>
  );
}
