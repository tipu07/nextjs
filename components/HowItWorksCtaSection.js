import Contain from "./contain";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Section from "./section";

export default function HowItWorksCtaSection() {
  return (
    <Section id="hiw-cta">
      <Contain>
        <div className="hiw-cta__inner">
          <div className="hiw-cta__text">
            <Heading className="hiw-cta__title">
              Ready to Sell Your Motorcycle?
            </Heading>
            <Paragraph className="hiw-cta__desc">
              We make it easy — get a real offer, fast pickup, and instant
              payment.
              <br />
              Your ride deserves a smooth, fair sale — and we're here to make it
              happen.
            </Paragraph>
          </div>
          <div className="cta__btn_wrap">
            <button className="cta__btn" type="button">
              GET YOUR OFFER NOW
            </button>
          </div>
        </div>
      </Contain>
      <div className="hiw-cta__wave"></div>
    </Section>
  );
}
