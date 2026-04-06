import Contain from "./contain";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Section from "./section";

export default function HowItWorksChooseSection() {
  const features = [
    {
      icon: "/images/why-icon-1.png",
      title: "Safe Transaction",
      desc: "Work with a licensed dealer for a smooth, professional, and worry-free sale – guaranteed",
    },
    {
      icon: "/images/why-icon-2.png",
      title: "Fair Market Offers",
      desc: "Accurate, market-based valuations calculated from real data. No guesswork, just honest numbers",
    },
    {
      icon: "/images/why-icon-3.png",
      title: "We handle the Paperwork",
      desc: "From DMV docs to loan payoffs, we take care of it all so you can simply collect a check",
    },
    {
      icon: "/images/why-icon-4.png",
      title: "A Decade of Experience",
      desc: "We've purchased thousands of motorcycles over the last 13+ years - trusted by riders nationwide",
    },
  ];

  return (
    <>
      <Section id="why-choose">
        <div
          className="why-choose__bg"
          style={{
            backgroundImage: "url(/images/why_choose_us_background.png)",
          }}
        ></div>
        <Contain>
          <div className="content text-center !mb-[4rem]">
            <Heading className="main__heading">Why Choose Us?</Heading>
            <Paragraph className="why__subtitle">
              Thousands of motorcycle owners have trusted MotoBuyers for a fast,
              fair, and hassle-free selling experience. Don’t just take our word
              for it — see what real riders are saying!
            </Paragraph>
          </div>

          <div className="why__grid">
            {features.map((f, idx) => (
              <div key={idx} className="why__card">
                <img
                  src={f.icon}
                  alt=""
                  className="why__icon"
                  aria-hidden="true"
                />
                <Heading as="h4" className="why__title">
                  {f.title}
                </Heading>
                <Paragraph className="why__desc">{f.desc}</Paragraph>
              </div>
            ))}
          </div>
        </Contain>
      </Section>
    </>
  );
}
