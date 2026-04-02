import { useState } from "react";
import Contain from "./contain";
import Section from "./section";
import Heading from "./heading";
import Paragraph from "./paragraph";

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState(0);

  const hiwData = [
    {
      title: "Get your Offer",
      desc: "Tell us about your motorcycle, and one of our motorcycle appraisers will send you a customized quote.",
    },
    {
      title: "Schedule a Visit",
      desc: "Book a convenient time for one of our expert appraisers to inspect your motorcycle in person — no hassle, no pressure.",
    },
    {
      title: "Get Paid",
      desc: "Accept the offer and get paid fast — typically within 24–48 hours. We handle all the paperwork so you don't have to.",
    },
  ];

  return (
    <>
      <Section id="hiw">
        <Contain>
          <Heading className="main__heading text-center !mb-[4rem]">
            How It Works
          </Heading>
          <div className="hiw__section-inner">
            <div
              className="hiw__tabs"
              role="tablist"
              aria-label="How it works steps"
            >
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className={`hiw__tab ${activeTab === idx ? "hiw__tab--active" : "hiw__tab--inactive"}`}
                  role="tab"
                  aria-selected={activeTab === idx}
                  tabIndex="0"
                  onClick={() => setActiveTab(idx)}
                  id={`hiw-tab-${idx}`}
                >
                  <img
                    className="hiw__tab-icon"
                    src={
                      [
                        "/images/hiw-icon-offer.png",
                        "/images/hiw-icon-schedule.png",
                        "/images/hiw-icon-paid.png",
                      ][idx]
                    }
                    alt={hiwData[idx].title}
                  />
                  <span className="hiw__tab-label">{hiwData[idx].title}</span>
                  <div className="hiw__tab-num">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="hiw__panel"
              id="hiw-panel"
              role="tabpanel"
              aria-labelledby={`hiw-tab-${activeTab}`}
            >
              <img
                className="hiw__panel-img"
                src="/images/hiw_image.png"
                alt="How it works illustration"
              />
              <div className="hiw__panel-body">
                <Heading as="h3" className="hiw__panel-title">
                  {hiwData[activeTab].title}
                </Heading>
                <Paragraph className="hiw__panel-desc">
                  {hiwData[activeTab].desc}
                </Paragraph>
              </div>
            </div>
          </div>
        </Contain>
      </Section>
    </>
  );
}
