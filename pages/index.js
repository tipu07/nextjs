import { useState } from "react";
import Head from "next/head";
import HowItWorksSection from "../components/HowItWorksSection";
import CompareSection from "../components/CompareSection";
import AppraisalSection from "../components/AppraisalSection";

export default function Home() {
  const [formTab, setFormTab] = useState("vin");
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      label: "Get your Offer",
      desc: "Tell us about your motorcycle, and one of our motorcycle appraisers will send you a customized quote",
    },
    {
      num: "02",
      label: "Schedule a Visit",
      desc: "Book a convenient time for our appraiser to inspect your motorcycle in person.",
    },
    {
      num: "03",
      label: "Get Paid",
      desc: "Accept the offer and get paid quickly and securely — no hassle, no haggling.",
    },
  ];

  const compareRows = [
    { icon: "⚡", label: "Get an offer in minutes", moto: true, pvt: false },
    { icon: "📄", label: "We handle Paperwork", moto: true, pvt: false },
    { icon: "🔒", label: "Secure transactions", moto: true, pvt: "maybe" },
    {
      icon: "🏆",
      label: "Will try to beat other offers",
      moto: true,
      pvt: false,
    },
    { icon: "💡", label: "Transparent quote process", moto: true, pvt: false },
    { icon: "🎧", label: "Full customer support", moto: true, pvt: false },
  ];

  const appraisalSteps = [
    {
      num: "1",
      title: "Enter VIN",
      desc: "Just enter your motorcycle's VIN, or select its year, make & model.",
    },
    {
      num: "2",
      title: "We check ownership & condition history",
      desc: "We review your motorcycle's history to ensure accurate pricing.",
    },
    {
      num: "3",
      title: "We analyze current market demand & pricing",
      desc: "Our team compares your motorcycle with similar models currently on the market.",
    },
    {
      num: "4",
      title: "You receive a real, ready-to-go offer",
      desc: "Get a personalized, no-obligation offer sent straight to your inbox—ready when you are.",
    },
  ];

  const testimonials = [
    {
      initials: "SA",
      name: "Samarth Asthana",
      date: "3 weeks ago",
      text: "Sold my bike in less than 24 hours! The offer was fair and the process was smooth.",
    },
    {
      initials: "LM",
      name: "Linda M",
      date: "3 weeks ago",
      text: "Highly recommend. I didn't have to worry about paperwork or meeting strangers.",
    },
    {
      initials: "JR",
      name: "James R",
      date: "3 weeks ago",
      text: "Way easier than listing it myself. Quick appraisal, honest pricing, and no tire-kickers!",
    },
  ];

  return (
    <>
      <Head>
        <title>MotoBuyers – Sell Your Motorcycle Just Got Easier</title>
        <meta
          name="description"
          content="Get a customized offer for your motorcycle from one of our appraisers."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-ring" />
        <div className="hero-ring2" />
        <div className="hero-left">
          <h1>
            Sell Your
            <br />
            Motorcycle
            <br />
            Just Got
            <br />
            Easier
          </h1>
          <p>
            Answer a few questions about your motorcycle to get a customized
            offer from one of our appraisers.
          </p>
          <div className="form-card">
            <div className="form-tabs">
              <button
                className={`form-tab${formTab === "vin" ? " active" : ""}`}
                onClick={() => setFormTab("vin")}
              >
                VIN or Plate
              </button>
              <button
                className={`form-tab${formTab === "model" ? " active" : ""}`}
                onClick={() => setFormTab("model")}
              >
                Make &amp; Model
              </button>
            </div>

            {formTab === "vin" ? (
              <>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Enter Your VIN"
                />
                <div className="or-row">
                  <div className="or-line" />
                  <span>OR</span>
                  <div className="or-line" />
                </div>
                <div className="form-row-grid">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="License Plate"
                  />
                  <select className="form-input">
                    <option value="">State</option>
                    {["CA", "NY", "TX", "FL", "WA", "IL"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <div className="form-row-grid" style={{ marginBottom: 12 }}>
                <select className="form-input">
                  <option value="">Year</option>
                  {[2024, 2023, 2022, 2021, 2020].map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
                <select className="form-input">
                  <option value="">Make</option>
                  {["Honda", "Yamaha", "Kawasaki", "Ducati", "BMW"].map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
            )}
            <button className="form-btn">Get your offer</button>
          </div>
        </div>

        {/* Decorative bikes SVG */}
        <div className="hero-right">
          <svg
            className="hero-bikes"
            viewBox="0 0 600 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="300"
              cy="310"
              rx="290"
              ry="30"
              fill="white"
              opacity="0.15"
            />
            {/* Bike 1 large */}
            <circle
              cx="130"
              cy="260"
              r="65"
              fill="none"
              stroke="white"
              strokeWidth="22"
              opacity="0.5"
            />
            <circle
              cx="450"
              cy="260"
              r="65"
              fill="none"
              stroke="white"
              strokeWidth="22"
              opacity="0.5"
            />
            <path
              d="M80 255 Q130 150 240 170 L320 165 Q420 160 510 255"
              fill="none"
              stroke="white"
              strokeWidth="14"
              opacity="0.6"
            />
            <path
              d="M230 170 L270 120 L340 118 L360 170"
              fill="white"
              opacity="0.3"
            />
            <rect
              x="265"
              y="105"
              width="75"
              height="40"
              rx="8"
              fill="white"
              opacity="0.25"
            />
            {/* Bike 2 small */}
            <circle
              cx="520"
              cy="290"
              r="40"
              fill="none"
              stroke="white"
              strokeWidth="14"
              opacity="0.3"
            />
            <circle
              cx="440"
              cy="290"
              r="40"
              fill="none"
              stroke="white"
              strokeWidth="14"
              opacity="0.3"
            />
            <path
              d="M410 285 Q440 230 490 235 L520 240"
              fill="none"
              stroke="white"
              strokeWidth="9"
              opacity="0.35"
            />
          </svg>
        </div>
      </section>

      <HowItWorksSection steps={steps} />
      <CompareSection compareRows={compareRows} />
      <AppraisalSection appraisalSteps={appraisalSteps} />

      {/* ── CTA + MAP ── */}
      <section className="cta-section">
        <div>
          <div className="tag">
            <div className="tag-dot" />
            Get Started Today
          </div>
          <h2 className="section-title">
            Ready to sell your motorcycle the smart way?
          </h2>
          <p>
            Whether you&apos;ve got questions or you&apos;re ready to get
            started, we&apos;re here to help.
          </p>
          <div className="cta-btns">
            <a href="#" className="btn-red">
              Get Started
            </a>
            <a href="#" className="btn-dark">
              FAQ
            </a>
            <a href="#" className="btn-ghost">
              Contact Us
            </a>
          </div>
        </div>
        <div className="map-card">
          <div className="map-grid" />
          {/* Pins */}
          {[
            { top: "28%", left: "38%" },
            { top: "48%", left: "55%" },
            { top: "20%", left: "62%" },
            { top: "65%", left: "28%" },
            { top: "38%", left: "22%" },
          ].map((p, i) => (
            <div
              key={i}
              className="map-pin"
              style={{ top: p.top, left: p.left }}
            >
              <div className="map-pin-circle" />
            </div>
          ))}
          <div className="map-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#E8261A">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            New York, USA
          </div>
          <div className="map-phone">
            <div className="map-phone-top">
              <div className="map-phone-dot" />
            </div>
            <div className="map-phone-body">
              <div className="map-phone-line" />
              <div className="map-phone-line" style={{ width: "70%" }} />
              <div
                style={{
                  height: 50,
                  background: "#f0f0f0",
                  borderRadius: 6,
                  marginTop: 6,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section" style={{ textAlign: "center" }}>
        <div className="tag">
          <div className="tag-dot" />
          Reviews
        </div>
        <h2 className="section-title">Trusted by Real Riders</h2>
        <p className="section-sub" style={{ maxWidth: 540, margin: "0 auto" }}>
          Thousands of motorcycle owners have trusted MotoBuyers for a fast,
          fair, and hassle-free selling experience. Don&apos;t just take our
          word for it — see what real riders are saying!
        </p>
        <div className="t-grid">
          {testimonials.map((t, i) => (
            <div className="t-card" key={i}>
              <div className="t-stars">
                {[...Array(5)].map((_, j) => (
                  <span className="star" key={j}>
                    ★
                  </span>
                ))}
              </div>
              <p className="t-text">&ldquo;{t.text}&rdquo;</p>
              <div className="t-author">
                <div className="t-avatar">{t.initials}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-date">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="t-dots">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className="t-dot"
              style={{
                width: i === 0 ? 28 : 9,
                background: i === 0 ? "var(--red)" : "var(--gray-mid)",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
