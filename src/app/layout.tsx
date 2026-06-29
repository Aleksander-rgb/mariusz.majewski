import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mariusz Majewski — Kongijskie piekło | Skazany na dożywocie. Wrócił.",
  description:
    "Polski podroznik aresztowany w Kongo, skazany na dozywotnie wiezienie za szpiegostwo. Historia interwencji dyplomatycznej i powrotu. Ksiazka Kongijskie pieklo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full bg-[#0A0A0A] text-[#F5F5F5] antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
