import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Script from "next/script";

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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-262CTFD6XT"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-262CTFD6XT');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1265379888389932');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
