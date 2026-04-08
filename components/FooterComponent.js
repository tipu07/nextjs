import Link from "next/link";
import Contain from "./contain";
import Heading from "./heading";

export default function FooterComponent() {
  return (
    <footer id="footer">
      <div
        className="footer__bg"
        style={{ backgroundImage: "url(/images/footer_background.png)" }}
      ></div>
      <Contain>
        <div className="footer__top">
          <div className="footer__col">
            <div className="footer__logo">
              <img src="/images/footer_logo.png" alt="" />
            </div>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <img
                  src="/images/contact__map_pin.svg"
                  alt=""
                  className="footer__contact-icon"
                  aria-hidden="true"
                />
                <span>
                  7696 Broadway, Suite C<br />
                  Lemon Grove, CA 91945
                </span>
              </div>
              <div className="footer__contact-item">
                <img
                  src="/images/contact__phone.svg"
                  alt=""
                  className="footer__contact-icon"
                  aria-hidden="true"
                />
                <span>(844) 668-6289</span>
              </div>
              <div className="footer__contact-item">
                <img
                  src="/images/contact__email.svg"
                  alt=""
                  className="footer__contact-icon"
                  aria-hidden="true"
                />
                <span>info@motobuyers.com</span>
              </div>
            </div>
          </div>
          <div className="footer__col">
            <Heading as="h6" className="footer__col-title">
              Quick Links
            </Heading>
            <div className="footer__link_wrap">
              <Link href="/" className="footer__link">
                Home
              </Link>
            </div>
            <div className="footer__link_wrap">
              <Link href="/how-it-works" className="footer__link">
                How It Works
              </Link>
            </div>
            <div className="footer__link_wrap">
              <Link href="/compare-moto-buyers" className="footer__link">
                Compare Moto Buyers
              </Link>
            </div>
          </div>
          <div className="footer__col">
            <Heading as="h6" className="footer__col-title">
              More Links
            </Heading>
            <div className="footer__link_wrap">
              <Link href="/contact" className="footer__link">
                Contact Us
              </Link>
            </div>
            <div className="footer__link_wrap">
              <Link href="/faq" className="footer__link">
                FAQ
              </Link>
            </div>
            <div className="footer__link_wrap">
              <Link href="/appointment-tips" className="footer__link">
                Appointment Tips
              </Link>
            </div>
            <div className="footer__link_wrap">
              <Link href="/our-appraisals" className="footer__link">
                Our Appraisals
              </Link>
            </div>
          </div>
          <div className="footer__col">
            <Heading as="h6" className="footer__col-title">
              Signup for Newsletters
            </Heading>
            <form
              className="footer__nl-form"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <div className="footer__nl-bg" aria-hidden="true"></div>
              <div className="footer__nl-send-bg" aria-hidden="true"></div>
              <input
                className="footer__nl-input"
                type="email"
                placeholder="Enter your email address"
                aria-label="Your email address"
              />
              <button
                className="footer__nl-send-btn"
                type="submit"
                aria-label="Subscribe to newsletter"
              >
                <svg
                  className="footer__nl-send-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polyline points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>

            <div className="footer__follow">
              <p className="footer__follow-label">Follow Us</p>
              <div className="footer__social-row">
                <div className="footer__social-icon" aria-label="Facebook">
                  <img src="/images/social__facebook.svg" alt="Facebook" />
                </div>
                <div className="footer__social-icon" aria-label="Instagram">
                  <img src="/images/social__instagram.svg" alt="Instagram" />
                </div>
                <div className="footer__social-icon" aria-label="Twitter / X">
                  <img src="/images/social__twitter.svg" alt="Twitter" />
                </div>
                <div className="footer__social-icon" aria-label="LinkedIn">
                  <img src="/images/social__linkedin.svg" alt="LinkedIn" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              Copyright © 2024, All Rights&nbsp;&nbsp;
              <span className="brand">MotoBuyers</span>
            </p>
          </div>
        </div>
      </Contain>
    </footer>
  );
}
