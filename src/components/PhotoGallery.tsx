"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PHOTOS = [
  { src: "/gallery/wiezienie-1.avif", alt: "Więzienie Makala, DR Kongo" },
  { src: "/gallery/wiezienie-2.avif", alt: "Więzienie Makala, DR Kongo" },
  { src: "/gallery/wiezienie-3.avif", alt: "Więzienie Makala, DR Kongo" },
  { src: "/gallery/wiezienie-5.jpg",  alt: "Więzienie Makala, DR Kongo" },
  { src: "/gallery/zamieszkanie-7.avif", alt: "Warunki w więzieniu Makala" },
  { src: "/gallery/wiezienie-8.webp", alt: "Więzienie Makala, DR Kongo" },
];

export default function PhotoGallery() {
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
    <section ref={ref} className="bg-[#080808] py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div
          className="mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="text-[#C8A84B] text-[11px] uppercase tracking-[0.25em] mb-3"
            style={{ fontFamily: "var(--font-inter)" }}>
            Dokumentacja
          </p>
          <h2 className="text-[#F5F5F5] text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}>
            Więzienie Makala
          </h2>
        </div>

        {/* mozaika — 2 wiersze, siatka 4 kolumny, fixed height */}
        <div
          className="grid grid-cols-4 grid-rows-2 gap-2 md:gap-3"
          style={{
            height: "480px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          {/* wiersz 1: szerokie (2 kol) + dwa wąskie */}
          <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group">
            <Image src={PHOTOS[0].src} alt={PHOTOS[0].alt} fill
              className="object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" unoptimized />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg group">
            <Image src={PHOTOS[1].src} alt={PHOTOS[1].alt} fill
              className="object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" unoptimized />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg group">
            <Image src={PHOTOS[2].src} alt={PHOTOS[2].alt} fill
              className="object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" unoptimized />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* wiersz 2: dwa wąskie + szerokie (2 kol) */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg group">
            <Image src={PHOTOS[3].src} alt={PHOTOS[3].alt} fill
              className="object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" unoptimized />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg group">
            <Image src={PHOTOS[4].src} alt={PHOTOS[4].alt} fill
              className="object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" unoptimized />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg group">
            <Image src={PHOTOS[5].src} alt={PHOTOS[5].alt} fill
              className="object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" unoptimized />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        <p
          className="text-[#555555] text-xs mt-4 text-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Więzienie Makala, Kinszasa — jedno z najbardziej przeludnionych więzień na świecie
        </p>
      </div>
    </section>
  );
}
