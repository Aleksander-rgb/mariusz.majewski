"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FEATURED = {
  source: "TVN24",
  date: "15 maja 2024",
  title: "Polak uwolniony z kongijskiego więzienia. Spędził tam ponad trzy miesiące",
  excerpt:
    "Mariusz Majewski, dziennikarz i podróżnik, po ponad trzech miesiącach spędzonych w największym więzieniu Afryki Centralnej wrócił do Polski. Jego sprawa poruszyła najwyższe szczeble polskiej dyplomacji.",
  href: "#",
  image: null,
};

const ARTICLES = [
  { source: "TOK FM", title: 'Polak w kongijskim piekle: „Zapomniałem, że jestem człowiekiem"', href: "https://www.tokfm.pl/swiat/polak-w-kongijskim-piekle-zapomnialem-ze-jestem-czlowiekiem?utm_id=97758_v0_s00_e0_tv1_a1dennhb4cs1bi&fbclid=IwY2xjawSwctZleHRuA2FlbQIxMABicmlkETI1ZTlkeXNvdWhNZ2lJMkJjc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvAb1yEGTQQmqCZVnPYW87CXRfRs09h7F3YevJ7eWaNXX5cMgnOtMffwjBi7_aem_J0b7Tk5HpHYbjmwXl_-rWQ" },
  { source: "Interia", title: "Jedna wypowiedź miała zmienić jego życie na zawsze. Polski podróżnik w kongijskim piekle", href: "https://wydarzenia.interia.pl/kraj/news-jedna-wypowiedz-miala-zmienic-jego-zycie-na-zawsze-polski-po,nId,23420033" },
  { source: "Onet Podróże", title: "Polak trafił do kongijskiego więzienia. Cele wypełnione ludźmi jak bydłem", href: "https://podroze.onet.pl/ciekawe/polak-trafil-do-kongijskiego-wiezienia-cele-wypelnione-ludzmi-jak-bydlem/1qjwcde" },
  { source: "Wyborcza", title: 'Polski podróżnik w Kongo: miała być kara śmierci, dostałem dożywocie', href: "https://wyborcza.pl/duzyformat/7,127290,32747674,polski-podroznik-w-kongo-miala-byc-kara-smierci-dostalem-dozywocie.html" },
];

export default function PressArticles() {
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
    <section ref={ref} className="bg-[#0A0A0A] py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* nagłówek */}
        <div
          className="mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-[#C8A84B] text-[11px] uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: "var(--font-inter)" }}>
            W mediach
          </p>
          <h2 className="text-[#F5F5F5] text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}>
            Jak pisały o tym media
          </h2>
        </div>

        {/* wyróżniony artykuł */}
        <a
          href={FEATURED.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-10 group"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <div className="relative overflow-hidden rounded-xl border border-[#2A1F1F] bg-[#111111] group-hover:border-[#C8A84B]/40 transition-colors duration-300">
            <div className="relative h-52 md:h-72 overflow-hidden">
              <Image
                src="/press-featured.jpg"
                alt="Artykuł prasowy"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </div>

            <div className="p-7 md:p-9">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#C8A84B] text-[11px] uppercase tracking-[0.2em] font-medium"
                  style={{ fontFamily: "var(--font-inter)" }}>
                  {FEATURED.source}
                </span>
                <span className="text-[#444444] text-[11px]"
                  style={{ fontFamily: "var(--font-inter)" }}>
                  {FEATURED.date}
                </span>
              </div>

              <h3 className="text-[#F5F5F5] text-xl md:text-2xl leading-snug mb-4 group-hover:text-[#C8A84B] transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}>
                {FEATURED.title}
              </h3>

              <p className="text-[#888888] text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter)" }}>
                {FEATURED.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 text-[#C8A84B] text-[11px] uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-inter)" }}>
                Czytaj artykuł
                <span aria-hidden>→</span>
              </span>
            </div>
          </div>
        </a>

        {/* przyciski — pozostałe artykuły */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.35s",
          }}
        >
          {ARTICLES.map((a, i) => (
            <a
              key={i}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-[#2A1F1F] hover:border-[#C8A84B]/50 bg-[#111111] hover:bg-[#161616] px-5 py-3 rounded-lg transition-all duration-200 group"
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity 0.4s ease ${i * 60 + 400}ms`,
              }}
            >
              <span className="text-[#C8A84B] text-[10px] uppercase tracking-[0.2em] whitespace-nowrap"
                style={{ fontFamily: "var(--font-inter)" }}>
                {a.source}
              </span>
              <span className="text-[#888888] text-xs leading-snug group-hover:text-[#F5F5F5] transition-colors duration-200"
                style={{ fontFamily: "var(--font-inter)" }}>
                {a.title}
              </span>
              <span className="text-[#444444] group-hover:text-[#C8A84B] transition-colors duration-200 text-sm flex-shrink-0"
                aria-hidden>
                →
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
