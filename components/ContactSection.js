import Section from "./section";
import Contain from "./contain";
import Heading from "./heading";

const INFO_CARDS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
          fill="var(--color-red)"
        />
      </svg>
    ),
    label: "Address",
    value: "7696 Broadway, Suite C.\nLemon Grove, CA 91945",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
          fill="var(--color-red)"
        />
      </svg>
    ),
    label: "Email",
    value: "info@motobuyers.com",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"
          fill="var(--color-red)"
        />
      </svg>
    ),
    label: "Phone",
    value: "(844) 669-6289",
  },
];

export default function ContactSection() {
  return (
    <>
      {/* ── Form ── */}
      <Section id="contact-form">
        <Contain>
          <Heading as="h2" className="contact-form__heading">
            Have Questions? We&apos;re here to help.
          </Heading>
          <div className="contact-form__card">
            <Heading as="h6" className="contact-form__card-title">
              Let&apos;s Start
            </Heading>
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
                <button type="submit" className="cta__btn cta__btn--primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Contain>
      </Section>

      {/* ── Info Cards + Map ── */}
      <Section id="contact-info">
        <Contain>
          <div className="contact-info__grid">
            {INFO_CARDS.map((card) => (
              <div key={card.label} className="contact-info__card">
                <div className="contact-info__icon">{card.icon}</div>
                <div className="contact-info__divider" />
                <p className="contact-info__label">{card.label}</p>
                <p className="contact-info__value">{card.value}</p>
              </div>
            ))}
          </div>
          <div className="contact-info__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.6!2d-117.03!3d32.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9536b7c3e1dff%3A0x1!2s7696+Broadway%2C+Lemon+Grove%2C+CA+91945!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Contain>
      </Section>
    </>
  );
}
