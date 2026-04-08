import Section from "./section";
import Contain from "./contain";
import Heading from "./heading";
import Paragraph from "./paragraph";

export default function ReadyToRideSection() {
  return (
    <Section id="ready-to-ride">
      <Contain>
        <div className="ready-to-ride__inner">
          <div className="ready-to-ride__text">
            <Heading className="ready-to-ride__title">
              Ready to Ride Forward? Get Your Free Motorcycle Quote Today!
            </Heading>
            <Paragraph className="ready-to-ride__desc">
              We hope this comparison made it clear why MotoBuyers is the
              easiest and most rewarding way to sell your motorcycle. From our
              lightning-fast quote process to handling all the paperwork and
              payment, we take care of everything—so you can skip the stress and
              ride off with cash in hand. No low offers. No headaches. Just a
              smooth and smart way to sell.
            </Paragraph>
            <div className="cta__btn_wrap ready-to-ride__btns">
              <button className="cta__btn cta__btn--primary" type="button">
                SELL YOUR BIKE NOW
              </button>
              <button className="cta__btn cta__btn--dark" type="button">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="ready-to-ride__visual">
            <img
              src="/images/Business-deal-pana-1.png"
              alt=""
            />
          </div>
        </div>
      </Contain>
    </Section>
  );
}
