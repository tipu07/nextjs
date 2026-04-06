import Head from "next/head";
import HowItWorksHeroSection from "../components/HowItWorksHeroSection";
import HowItWorksStepsSection from "../components/HowItWorksStepsSection";
import HowItWorksChooseSection from "../components/HowItWorksChooseSection";
import HowItWorksCtaSection from "../components/HowItWorksCtaSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>How It Works – MotoBuyers</title>
        <meta
          name="description"
          content="A simple process. A real offer. A smooth ride to instant cash."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main id="hiw__page">
        <HowItWorksHeroSection />
        <HowItWorksStepsSection />
        <HowItWorksChooseSection />
        <HowItWorksCtaSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
