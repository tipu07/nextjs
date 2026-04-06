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
];

export default function QuoteDisagreeSection() {
  return (
    <Section id="quote-disagree">
      <div className="quote-disagree__wave"></div>
      <Contain>
        <div className="disagree__header">
          <Heading as="h2" className="disagree__title">
            What If You Don&apos;t Agree with Our Offer?
          </Heading>
          <Paragraph className="disagree__subtitle">
            We understand that you might have a different idea of what your
            motorcycle is worth. If our offer doesn&apos;t match your
            expectations, here are a few common reasons why there could be a
            difference
          </Paragraph>
        </div>
        <div className="disagree__cards">
          {CARDS.map((card) => (
            <div key={card.title} className="disagree__card">
              <div className="disagree__icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <Heading as="h3" className="disagree__card-title">
                {card.title}
              </Heading>
              <Paragraph className="disagree__card-desc">{card.desc}</Paragraph>
            </div>
          ))}
        </div>
      </Contain>
    </Section>
  );
}
