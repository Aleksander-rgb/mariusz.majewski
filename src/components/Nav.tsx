"use client";

import { useEffect, useState } from "react";
import { fbqEvent } from "@/lib/fbq";

const LINKS = [
  { label: "Historia",        href: "#historia" },
  { label: "O autorze",       href: "#o-autorze" },
  { label: "Media",           href: "#media" },
  { label: "Fragment książki", href: "#fragment" },
  { label: "FAQ",             href: "#faq" },
  { label: "Kontakt",         href: "#kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42,31,31,0.6)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* logo / marka */}
        <a
          href="#"
          className="text-[#F5F5F5] text-sm tracking-[0.15em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Mariusz Majewski
        </a>

        {/* desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) =>
            link.label === "Kup książkę" ? null : (
              <a
                key={link.href}
                href={link.href}
                className="text-[#888888] hover:text-[#F5F5F5] text-[11px] uppercase tracking-[0.15em] transition-colors duration-200"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="https://www.empik.com/kongijskie-pieklo-polak-w-afrykanskim-wiezieniu-historia-prawdziwa-kocemba-jaroslaw-majewski-mariusz,p1700222284,ksiazka-p?qa=majewski%20mariusz&ac=true"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => fbqEvent("InitiateCheckout", { content_name: "Kongijskie piekło" })}
            className="border border-[#C8A84B] text-[#C8A84B] hover:bg-[#C8A84B] hover:text-black px-5 py-2 text-[11px] uppercase tracking-[0.15em] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Kup książkę
          </a>
        </nav>

        {/* hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[#F5F5F5] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#F5F5F5] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#F5F5F5] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          background: "rgba(10,10,10,0.97)",
        }}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 border-b border-[#1A1A1A] last:border-0 ${
                link.label === "Kup książkę"
                  ? "text-[#C8A84B]"
                  : "text-[#888888] hover:text-[#F5F5F5]"
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
