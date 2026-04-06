import Section from "./section";
import Contain from "./contain";
import Heading from "./heading";

export default function ContactFormSection({ title = "Have Questions? We're here to help." }) {
  return (
    <Section id="contact-form">
      <Contain>
        <Heading as="h2" className="contact-form__heading">
          {title}
        </Heading>
        <div className="contact-form__card">
          <p className="contact-form__card-title">Let's Start</p>
          <form className="contact-form__form">
            <input
              type="email"
              className="contact-form__input"
              placeholder="Email"
            />
            <input
              type="tel"
              className="contact-form__input"
              placeholder="Phone"
            />
            <textarea
              className="contact-form__textarea"
              placeholder="Message"
              rows={6}
            />
            <div className="contact-form__actions">
              <button type="submit" className="contact-form__submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Contain>
    </Section>
  );
}
