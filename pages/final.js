import Head from "next/head";
import HeaderComponent from "../components/HeaderComponent";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ComparisonSection from "../components/ComparisonTableSection";
import TipsSection from "../components/TipsSection";
import CtaSection from "../components/CtaSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FooterComponent from "../components/FooterComponent";
// import "../styles/scss/final.scss";

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

      <HeaderComponent />
      <HeroSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TipsSection />
      <CtaSection />
      <TestimonialsSection />
      <FooterComponent />
    </>
  );
}