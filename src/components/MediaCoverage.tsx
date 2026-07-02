"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  { file: "bbc.svg", name: "BBC News", width: 120 },
  { file: "reuters.svg", name: "Reuters", width: 110 },
  { file: "afp.svg", name: "AFP", width: 90 },
  { file: "ap.svg", name: "Associated Press", width: 100 },
  { file: "aljazeera.svg", name: "Al Jazeera", width: 130 },
  { file: "the-guardian.svg", name: "The Guardian", width: 140 },
  { file: "fox-news.svg", name: "Fox News", width: 110 },
  { file: "france24.svg", name: "France 24", width: 110 },
  { file: "euronews.svg", name: "Euronews", width: 120 },
  { file: "voa.svg", name: "Voice of America", width: 110 },
  { file: "tvn24.svg", name: "TVN24", width: 90 },
  { file: "tvn.svg", name: "TVN", width: 70 },
  { file: "tvp-info.svg", name: "TVP Info", width: 100 },
  { file: "polsat-news.svg", name: "Polsat News", width: 130 },
  { file: "rmf.svg", name: "RMF FM", width: 90 },
  { file: "radio-zet.png", name: "Radio ZET", width: 100 },
  { file: "pap.svg", name: "PAP", width: 70 },
  { file: "onet.svg", name: "Onet", width: 80 },
  { file: "wirtualna-polska.png", name: "Wirtualna Polska", width: 120 },
  { file: "interia.png", name: "Interia", width: 100 },
  { file: "newsweek-polska.svg", name: "Newsweek Polska", width: 140 },
  { file: "rzeczpospolita.svg", name: "Rzeczpospolita", width: 130 },
  { file: "gazeta-wyborcza.png", name: "Gazeta Wyborcza", width: 130 },
  { file: "dgp.png", name: "Dziennik Gazeta Prawna", width: 110 },
  { file: "fakt.svg", name: "Fakt", width: 80 },
];

function LogoItem({ logo }: { logo: (typeof logos)[number] }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-4">
      <div className="flex items-center justify-center px-5 py-3 rounded-xl h-16 bg-white">
        <Image
          src={`/media-logos/${logo.file}`}
          alt={logo.name}
          width={logo.width}
          height={40}
          className="object-contain max-h-10 w-auto"
          unoptimized
        />
      </div>
    </div>
  );
}

function Carousel() {
  const doubled = [...logos, ...logos];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex w-max"
        style={{ animation: `scroll-left ${logos.length * 3}s linear infinite` }}
      >
        {doubled.map((logo, i) => (
          <LogoItem key={`${logo.file}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export default function MediaCoverage() {
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
    <section ref={ref} id="media" className="py-20 md:py-28 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-[#C8A84B] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Zasięg medialny
          </p>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Historia, która obiegła świat
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Wyrok z kongijskiego procesu był cytowany przez największe światowe redakcje.
          </p>
        </div>
      </div>

      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 0.3s",
        }}
      >
        <Carousel />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div
          className="mt-16 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.8s",
          }}
        >
          <div className="inline-block border border-[#C8A84B]/30 rounded px-6 py-3">
            <span className="text-[#888888] text-sm">
              i dziesiątki innych tytułów w{" "}
              <span className="text-[#C8A84B]">ponad 40 krajach</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
