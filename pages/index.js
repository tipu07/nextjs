import Head from "next/head";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ComparisonSection from "../components/ComparisonTableSection";
import TipsSection from "../components/TipsSection";
import CtaSection from "../components/CtaSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Final() {
  return (
    <>
      <Head>
        <title>MotoBuyers – Sell Your Motorcycle Just Got Easier</title>
        <meta
          name="description"
          content="Get a customized offer for your motorcycle from one of our appraisers."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main id="home__page">
        <HeroSection />
        <HowItWorksSection />
        <ComparisonSection />
        <TipsSection />
        <CtaSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
