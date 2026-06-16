"use client";

import { useEffect, useRef, useState } from "react";

const EXCERPT = `Obudziłem się na betonowej podłodze. Nie wiedziałem, która godzina — w Makala nie ma zegarów. Jest za to hałas. Nieustanny, gęsty, ludzki.
  Piętnaście tysięcy ciał ściśniętych w przestrzeni zaprojektowanej dla jednej dziesiątej z nich.

  Pierwsza myśl: żyję. Druga: muszę znaleźć wodę.

  Nikt tu nie pyta, skąd jesteś. Pytają, z czym przyszedłeś. Jedzenie, leki, pieniądze — waluta przetrwania. Ja przyszedłem z niczym prócz dokumentów, których nikt nie chciał czytać, i nazwiska adwokatki, która jeszcze nie wiedziała, że ją potrzebuję.`;

export default function BookExcerpt() {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const indexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    intervalRef.current = setInterval(() => {
      if (indexRef.current >= EXCERPT.length) {
        setDone(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }
      setDisplayed(EXCERPT.slice(0, indexRef.current + 1));
      indexRef.current += 1;
    }, 18);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [started]);

  return (
    <section
      ref={ref}
      id="fragment"
      className="py-20 md:py-28 bg-[#0E0B08] px-6"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-8 h-px bg-[#C8A84B]" />
          <p
            className="text-[#C8A84B] text-[11px] uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Fragment książki
          </p>
        </div>

        {/* strona książki */}
        <div className="relative bg-[#F5EFE0] rounded-sm shadow-2xl overflow-hidden">
          {/* spirala z lewej — efekt notesu */}
          <div className="absolute top-0 bottom-0 left-0 w-10 bg-[#E8E0CC] border-r border-[#D4C8A8] flex flex-col items-center gap-6 py-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-[#C8A84B]/30 border border-[#C8A84B]/50" />
            ))}
          </div>

          <div className="pl-14 pr-8 py-10 md:pl-16 md:pr-12 md:py-14">
            <p
              className="text-[#2A1F1F]/50 text-[10px] uppercase tracking-[0.3em] mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Kongijskie piekło — Rozdział IV
            </p>

            <div
              className="text-[#2A1F1F] text-base md:text-lg leading-[2] min-h-[220px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {displayed.split("\n\n").map((para, i) => (
                <p key={i} className={i > 0 ? "mt-6" : ""}>
                  {para.trim()}
                  {!done && i === displayed.split("\n\n").length - 1 && (
                    <span className="inline-block w-0.5 h-5 bg-[#2A1F1F] ml-0.5 align-middle animate-pulse" />
                  )}
                </p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-[#C8A84B]/30">
              <p
                className="text-[#888888] text-xs italic"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Fragment pochodzi z rozdziału IV. Treść może różnić się od wersji finalnej.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
