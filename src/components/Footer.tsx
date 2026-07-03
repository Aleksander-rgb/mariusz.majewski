export default function Footer() {
  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/mariusz.majewski.vip/?locale=pl_PL", icon: "f" },
    { label: "Instagram", href: "https://www.instagram.com/mariusz.majewski.official", icon: "ig" },
    { label: "YouTube", href: "https://www.youtube.com/@MariuszMajewskiOfficial", icon: "yt" },
    { label: "TikTok", href: "https://www.tiktok.com/@mariusz.majewski.autor", icon: "tt" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mariusz-majewski-38a97736/", icon: "li" },
  ];

  return (
    <footer id="kontakt" className="bg-[#080808] border-t border-[#1A1A1A] px-6 pt-16 pb-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* branding */}
          <div className="md:col-span-1">
            <p
              className="text-[#F5F5F5] text-xl mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mariusz Majewski
            </p>
            <p
              className="text-[#888888] text-xs leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Autor książki „Kongijskie piekło" wraz z Jarosławem Kocembą.<br />
              Polak, niesłusznie oskarżony oraz skazany, który przeżył ponad sto dni w więzieniach Konga i wrócił, by opowiedzieć tę historię światu.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-[#2A2A2A] hover:border-[#C8A84B] text-[#888888] hover:text-[#C8A84B] flex items-center justify-center text-[10px] uppercase tracking-wide transition-all duration-200"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* nawigacja */}
          <div>
            <p
              className="text-[#C8A84B] text-[10px] uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Nawigacja
            </p>
            <ul className="space-y-3">
              {[
                { label: "Historia", href: "#historia" },
                { label: "O autorze", href: "#o-autorze" },
                { label: "Media", href: "#media" },
                { label: "Fragment książki", href: "#fragment" },
                { label: "FAQ", href: "#faq" },
                { label: "Kup książkę", href: "#kup-ksiazke" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#888888] hover:text-[#F5F5F5] text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* kontakt */}
          <div>
            <p
              className="text-[#C8A84B] text-[10px] uppercase tracking-[0.25em] mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Kontakt
            </p>
            <p
              className="text-[#888888] text-sm leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Zaproszenia na spotkania autorskie i wystąpienia publiczne.
            </p>
            <p
              className="text-[#888888] text-sm leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Zapytania medialne, wywiady i współpraca:
            </p>
            <a
              href="mailto:kontakt@mariuszmajewski.com.pl"
              className="text-[#F5F5F5] hover:text-[#C8A84B] text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              kontakt@mariuszmajewski.com.pl
            </a>

            <div className="mt-8">
              <a
                href="https://www.empik.com/kongijskie-pieklo-polak-w-afrykanskim-wiezieniu-historia-prawdziwa-kocemba-jaroslaw-majewski-mariusz,p1700222284,ksiazka-p?qa=majewski%20mariusz&ac=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#C8A84B] text-[#C8A84B] hover:bg-[#C8A84B] hover:text-black px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-all duration-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Kup książkę
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-[#1A1A1A] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-[#888888]/60 text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © {new Date().getFullYear()} Mariusz Majewski. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
