import Head from "next/head";
import PageHeroBanner from "../components/PageHeroBanner";
import ComparisonSection from "../components/ComparisonTableSection";
import HowItWorksCtaSection from "../components/HowItWorksCtaSection";
import EasiestWaySection from "../components/EasiestWaySection";
import ReadyToRideSection from "../components/ReadyToRideSection";

export default function CompareMotoBuyers() {
  return (
    <>
      <Head>
        <title>Compare MotoBuyers – MotoBuyers</title>
        <meta
          name="description"
          content="A simple process. A real offer. A smooth ride to instant cash."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main id="compare__page">
        <PageHeroBanner title="MotoBuyers vs Other Ways to Sell Your Motorcycle" />
        <ComparisonSection />
        <EasiestWaySection />
        <HowItWorksCtaSection />
        <ReadyToRideSection />
      </main>
    </>
  );
}
