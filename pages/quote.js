import Head from "next/head";
import PageHeroBanner from "../components/PageHeroBanner";
import QuoteStepsSection from "../components/QuoteStepsSection";
import QuoteDisagreeSection from "../components/QuoteDisagreeSection";
import CtaSection from "../components/CtaSection";

export default function QuotePage() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions – MotoBuyers</title>
        <meta
          name="description"
          content="A simple process. A real offer. A smooth ride to instant cash."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main id="quote__page">
        <PageHeroBanner
          title="How Do We Determine Your Motorcycle’s Value?"
          subtitle="Ever wonder how different buyers decide what your motorcycle is worth? Every buyer has their own method — and the truth is, motorcycle values fluctuate often, influenced by local demand, seasonality, condition, and model popularity."
        />
        <QuoteStepsSection />
        <QuoteDisagreeSection />
        <CtaSection />
      </main>
    </>
  );
}
