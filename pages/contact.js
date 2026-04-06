import Head from "next/head";
import PageHeroBanner from "../components/PageHeroBanner";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact us – MotoBuyers</title>
        <meta
          name="description"
          content="A simple process. A real offer. A smooth ride to instant cash."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main id="contact__page">
        <PageHeroBanner
          title="We Look Forward to Hearing From You!"
          subtitle="Selling your motorcycle has never been easier — and we're excited to make it a smooth ride for you!"
        />
        <ContactSection />
      </main>
    </>
  );
}
