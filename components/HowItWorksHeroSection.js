import Section from "./section";
import Contain from "./contain";
import Heading from "./heading";
import Paragraph from "./paragraph";

export default function HowItWorksHeroSection() {
  return (
    <>
      <Section id="hiw-hero">
        <div
          className="hiw-hero__bg"
          style={{ backgroundImage: "url(/images/hiw-hero__bg.png)" }}
        ></div>
        <Contain>
          <div className="hiw-hero__images">
            <img src="/images/hiw_hero_image.png" alt="HIW Photo" />
          </div>
          <div className="hiw-hero__content">
            <Heading className="hiw-hero__title">
              Skip the Hassle. Sell Your Motorcycle in Minutes
            </Heading>
            <Paragraph className="hiw-hero__subtitle">
              A simple process. A real offer. A smooth ride to instant cash.
            </Paragraph>
          </div>
        </Contain>
      </Section>
    </>
  );
}
