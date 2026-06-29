import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-end">
      <Image
        src="/hero.jpg"
        alt="Mariusz Majewski — Kongijskie piekło"
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />

      {/* gradient od dołu */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      {/* treść */}
      <div className="relative z-10 w-full px-6 pb-14 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <p
            className="text-[#888888] text-[11px] uppercase tracking-[0.3em] mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            POLSKA • DR KONGO • 2024
          </p>

          <h1
            className="text-[#E42A48] text-5xl md:text-6xl lg:text-[72px] leading-[1.08] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Skazany na dożywocie.
            <br />
            Wrócił.
          </h1>

          <p
            className="text-[#F5F5F5]/70 text-base md:text-lg leading-[1.8] mb-10 max-w-[480px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Bez dowodów. Bez szansy na obronę. Bez tłumacza.
            <br />
            Sam słuchał wyroku w języku, którego nie rozumiał.
            <br />
            Mariusz Majewski przeżył ponad 100 dni w piekle&nbsp;—
            <br />
            jednym z najbrutalniejszych więzień Afryki&nbsp;– Makala.
          </p>

          <a
            href="#historia"
            className="inline-flex items-center gap-3 border border-[#C8A84B] text-[#C8A84B] px-8 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-[#C8A84B] hover:text-black transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            POZNAJ HISTORIĘ
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
