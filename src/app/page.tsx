import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import CentralQuote from "@/components/CentralQuote";
import About from "@/components/About";
import MediaCoverage from "@/components/MediaCoverage";
import PressArticles from "@/components/PressArticles";
import BookExcerpt from "@/components/BookExcerpt";
import FAQ from "@/components/FAQ";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Timeline />
      <CentralQuote />
      <About />
      <MediaCoverage />
      <PressArticles />
      <BookExcerpt />
      <FAQ />
      <BookCTA />
      <Footer />
    </main>
  );
}
