import Contain from "./contain";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Section from "./section";

export default function TipsSection() {
  const tips = [
    {
      icon: "/images/tips-icon-1.svg",
      label: "You enter your VIN or motorcycle",
      desc: "Just enter your motorcycle's VIN, or select it's year, make & model.",
    },
    {
      icon: "/images/tips-icon-2.svg",
      label: "We check ownership & condition history",
      desc: "We review your motorcycle's history to ensure accurate pricing.",
    },
    {
      icon: "/images/tips-icon-3.svg",
      label: "We analyze current market demand & pricing",
      desc: "Our team compares your motorcycle with similar models currently on the market.",
    },
    {
      icon: "/images/tips-icon-4.svg",
      label: "You receive a real, ready-to-go offer",
      desc: "Get a personalized, no-obligation offer sent straight to your inbox—ready when you are.",
    },
  ];

  return (
    <>
      <Section id="tips">
        <div
          className="tips__bg"
          style={{
            backgroundImage: "url(/images/personalize_offer_background.png)",
          }}
        ></div>
        <Contain>
          <div className="content text-center !mb-[4rem]">
            <Heading className="main__heading !mb-[2rem]">
              How we create your personalized offer
            </Heading>
            <Paragraph className="tips__subtitle">
              From VIN to value — our appraisal process is fair
            </Paragraph>
          </div>
          <div className="tips__grid">
            {tips.map((tip, idx) => (
              <div key={idx} className="tips__card">
                <img src={tip.icon} alt="" className="tips__card-img" aria-hidden="true" />
                <div className="tips__card-body">
                  <p className="tips__card-label">{tip.label}</p>
                  <p className="tips__card-desc">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cta__btn_wrap justify-center">
            <button className="cta__btn" type="button">
              LEARN MORE ABOUT OUR APPRAISALS
            </button>
          </div>
        </Contain>
      </Section>
    </>
  );
}
