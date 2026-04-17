import Head from "next/head";
import PageHeroBanner from "../components/PageHeroBanner";
import ChecklistSection from "../components/ChecklistSection";
import VisitTipsSection from "../components/VisitTipsSection";
import CtaSection from "../components/CtaSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const FAQ_GROUPS = [
  {
    groupTitle: "Questions About Your Appointment",
    items: [
      {
        question: "What should I expect from my appointment?",
        answer:
          "Our team will meet with you at a convenient location to inspect your motorcycle. The process is quick, professional, and stress-free.",
      },
      {
        question: "Will my offer change after inspection?",
        answer:
          "In most cases, the offer remains the same. However, if the bike's condition differs significantly from what was described, a small adjustment may be made.",
      },
      {
        question: "What do I need to bring to my appointment?",
        answer:
          "Please bring a valid government-issued photo ID, the motorcycle title, and any relevant service records you may have.",
      },
      {
        question: "Will I need to deal with paperwork?",
        answer:
          "We handle all the paperwork for you. Our team will walk you through every document so you know exactly what you're signing.",
      },
      {
        question: "My bike isn't paid off. What should I bring with me?",
        answer:
          "If your bike still has a loan on it, bring your lender's contact information and your most recent loan statement. We'll help coordinate paying off the remaining balance as part of the transaction.",
      },
    ],
  },
];

export default function AppointmentTipsPage() {
  return (
    <>
      <Head>
        <title>Appointment Tips – MotoBuyers</title>
        <meta
          name="description"
          content="A simple process. A real offer. A smooth ride to instant cash."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main id="tips__page">
        <PageHeroBanner
          title="Ride In, Get Paid Fast!"
          subtitle="Skip the hassle—bring your motorcycle in and walk away with cash in just minutes."
        />
        <ChecklistSection />
        <VisitTipsSection />
        <FaqSection FAQ_GROUPS={FAQ_GROUPS} />
        <CtaSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
