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
              className="text-[#888888] text-base leading-[1.85] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Podróżnik, mówca publiczny, przedsiębiorca i autor książki „Kongijskie piekło".
            </p>

            <p
              className="text-[#888888] text-base leading-[1.85] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Pierwszy Polak przed czterdziestym rokiem życia, który odwiedził wszystkie 193 państwa
              świata – i jeden z dziesięciu najbardziej podróżujących ludzi na świecie według rankingu
              Most Traveled People. Członek prestiżowego Stowarzyszenia Mensa. W 2017 roku ustanowił
              rekord Guinnessa na najdłuższy dzień w historii życia człowieka, przez lata zarządzał
              wieloma firmami, aż w lutym 2024 roku jego życie zmieniło się całkowicie.
            </p>

            <p
              className="text-[#888888] text-base leading-[1.85] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Został zatrzymany w Demokratycznej Republice Konga i trafił do czterech więzień.
              Torturowany i skazany na powolną śmierć spędził tam ponad sto dni, walcząc
              o przetrwanie i powrót do swojej partnerki i czworga dzieci.
            </p>

            <p
              className="text-[#888888] text-base leading-[1.85] mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Po uwolnieniu postanowił opowiedzieć tę historię światu. Tak powstało „Kongijskie
              piekło" – zapis oparty na prawdziwych wydarzeniach, które obiegły media na sześciu
              kontynentach i zostały opisane przez ponad 200 redakcji na całym świecie.
              <br /><br />
              Dziś jako autor i mówca publiczny opowiada o odporności psychicznej, podejmowaniu
              decyzji pod presją i sile więzi rodzinnych, które pomogły mu przetrwać najtrudniejszy
              okres w życiu.
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
                  Współautor książki. Dziennikarz śledczy, który pomógł odtworzyć przebieg
                  wydarzeń i ich międzynarodowy kontekst.
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
