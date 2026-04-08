import { useState } from "react";
import Section from "./section";
import Contain from "./contain";
import Heading from "./heading";
import Paragraph from "./paragraph";

const CARDS = [
  {
    title: "Book Value Isn't Everything",
    desc: "Some people might believe their motorcycle is worth more based on online \"book values.\" While those numbers can be helpful as a general guide, they don't account for local market conditions, your bike's actual condition, or current demand.",
    icon: "/images/quote-offer-1.png",
  },
  {
    title: "Your Loan Balance vs. Bike Value",
    desc: "Still paying off your motorcycle? It's important to understand that your loan balance doesn't determine your bike's value. What you owe and what your bike is worth are two entirely separate figures.",
    icon: "/images/quote-offer-2.png",
  },
  {
    title: "Wishing for More?",
    desc: "It's natural to hope for the highest possible amount when selling your motorcycle. Some sellers think they can get more through private sales, but that comes with more time, effort, and uncertainty.",
    icon: "/images/quote-offer-3.png",
  },
  {
    title: "Understanding Market Conditions",
    desc: "The motorcycle market fluctuates based on season, geography, and trends. Our offers reflect real-time demand so you always get a number grounded in what buyers are actually paying right now.",
    icon: "/images/hiw-icon-offer.png",
  },
];

export default function EasiestWaySection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? CARDS.length - 1 : i - 1));
  const next = () => setActive((i) => (i === CARDS.length - 1 ? 0 : i + 1));

  return (
    <Section id="easiest-way">
      <Contain>
        <div className="easiest__header">
          <Heading as="h2" className="easiest__title">
            MotoBuyers: The Easiest Way to Sell Your Motorcycle!
          </Heading>
          <Paragraph className="easiest__subtitle">
            Selling your motorcycle with MotoBuyers is simple, fast, and
            hassle-free. Get a fair offer, skip the stress, and sell your bike
            on your terms. We handle everything from start to finish, so you can
            cash out with ease!
          </Paragraph>
        </div>

        {/* Desktop grid — shows 3 at a time */}
        <div className="easiest__grid">
          {CARDS.slice(0, 3).map((card, idx) => (
            <div key={idx} className="easiest__card">
              <div className="easiest__icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <Heading as="h3" className="easiest__card-title">
                {card.title}
              </Heading>
              <Paragraph className="easiest__card-desc">
                {card.desc.length > 120
                  ? card.desc.slice(0, 120) + "........"
                  : card.desc}
              </Paragraph>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="easiest__carousel">
          <div className="easiest__track">
            {CARDS.map((card, idx) => (
              <div
                key={idx}
                className={`easiest__slide${active === idx ? " easiest__slide--active" : ""}`}
              >
                <div className="easiest__card">
                  <div className="easiest__icon">
                    <img src={card.icon} alt={card.title} />
                  </div>
                  <Heading as="h3" className="easiest__card-title">
                    {card.title}
                  </Heading>
                  <Paragraph className="easiest__card-desc">
                    {card.desc.length > 120
                      ? card.desc.slice(0, 120) + "........"
                      : card.desc}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="easiest__dots" role="tablist" aria-label="Slide navigation">
          {CARDS.map((_, idx) => (
            <button
              key={idx}
              className={`easiest__dot${active === idx ? " easiest__dot--active" : ""}`}
              onClick={() => setActive(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              role="tab"
              aria-selected={active === idx}
            />
          ))}
        </div>
      </Contain>
    </Section>
  );
}
