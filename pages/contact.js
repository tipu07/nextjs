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
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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
