import Contain from "./contain";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Section from "./section";

export default function CtaSection() {
  return (
    <>
      <Section id="cta">
        <div
          className="cta__bg"
          style={{
            backgroundImage: "url(/images/moto_app_background.png)",
          }}
        ></div>
        <Contain>
          <div className="cta__inner">
            <div className="cta__text">
              <Heading className="main__heading">
                Ready to sell your motorcycle the smart way?
              </Heading>
              <Paragraph className="cta__desc">
                Whether you've got questions or you're ready to
                <br />
                get started, we're here to help.
              </Paragraph>
              <div className="cta__btn_wrap !mt-[3rem]">
                <button className="cta__btn cta__btn--primary" type="button">
                  GET STARTED
                </button>
                <button className="cta__btn cta__btn--dark" type="button">
                  FAQ
                </button>
                <button className="cta__btn cta__btn--white" type="button">
                  CONTACT US
                </button>
              </div>
            </div>
            <div className="cta__visual">
              <img src="/images/moto__app.png" alt="" />
            </div>
          </div>
        </Contain>
      </Section>
    </>
  );
}
