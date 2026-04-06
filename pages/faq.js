import Head from "next/head";
import PageHeroBanner from "../components/PageHeroBanner";
import FaqSection from "../components/FaqSection";

const FAQ_GROUPS = [
  {
    groupTitle: "Frequently Asked Questions",
    items: [
      {
        question: "What is MotoBuyers?",
        answer:
          "MotoBuyers is a trusted platform designed to make selling your motorcycle easier than ever. Instead of dealing with countless online listings, haggling buyers, or trade-in hassles, you can simply share a few details about your bike and receive a customized offer. We take care of the inspection, paperwork, and payment — making the process fast, secure, and stress-free for you.",
      },
      {
        question: "Why should I sell my motorcycle to MotoBuyers?",
        answer:
          "We offer a simple, hassle-free process with no hidden fees, no lowball offers, and no pressure. Get a fair offer fast and get paid quickly.",
      },
      {
        question: "Will you buy any motorcycle?",
        answer:
          "We buy most makes and models regardless of condition. Whether it's running or not, we'll evaluate it and make you an offer.",
      },
      {
        question: "Is MotoBuyers available in my area?",
        answer:
          "We serve a wide range of areas across the US. Enter your zip code on our website to check availability in your area.",
      },
      {
        question: "Where are you located?",
        answer:
          "Our main office is at 7696 Broadway, Suite C, Lemon Grove, CA 91945. We also operate remotely to serve customers nationwide.",
      },
    ],
  },
  {
    groupTitle: "Questions About Getting Your Quote",
    items: [
      {
        question: "Will I be charged to use your service?",
        answer:
          "No way! Our service is absolutely free and you have no obligation to sell to us if you don't like our quote.",
      },
      {
        question: "How long will it take to get my quote?",
        answer:
          "Most quotes are generated within minutes of submitting your motorcycle's information. In some cases it may take up to one business day.",
      },
      {
        question: "I submitted my form, what now?",
        answer:
          "Once you submit your form, one of our team members will review your motorcycle's details and reach out to you with your personalized quote.",
      },
      {
        question: "What happens if I've let my quote expire?",
        answer:
          "No problem! Simply submit a new request and we'll generate a fresh quote based on current market conditions.",
      },
      {
        question: "What kind of quote should I expect?",
        answer:
          "We provide fair, market-based offers that reflect the true value of your motorcycle. Our goal is to make selling easy and worthwhile for you.",
      },
    ],
  },
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

export default function FAQsPage() {
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
      <main id="faq__page">
        <PageHeroBanner
          title="Got Questions? We've Got Answers!"
          subtitle="Simply answer a few quick questions about your motorcycle on our website."
        />
        <FaqSection FAQ_GROUPS={FAQ_GROUPS} />
      </main>
    </>
  );
}
