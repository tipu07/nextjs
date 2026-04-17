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
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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
