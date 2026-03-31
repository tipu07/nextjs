export default function FooterComponent() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__top">
        <div>
          <svg width="201" height="105" viewBox="0 0 201 105" fill="none" className="footer__logo" aria-label="MotoBuyers logo">
            <circle cx="32" cy="70" r="20" stroke="#ee2524" strokeWidth="3" fill="none"/>
            <circle cx="32" cy="70" r="7" fill="#ee2524"/>
            <circle cx="112" cy="70" r="20" stroke="#ee2524" strokeWidth="3" fill="none"/>
            <circle cx="112" cy="70" r="7" fill="#ee2524"/>
            <path d="M52 70 L68 38 L82 38 L98 56" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M68 38 L75 70" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M82 38 L102 38 L112 44" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <text x="6" y="28" fontFamily="Poppins,sans-serif" fontWeight="800" fontSize="22" fill="white">Moto</text>
            <text x="62" y="28" fontFamily="Poppins,sans-serif" fontWeight="800" fontSize="22" fill="#ee2524">Buyers</text>
            <text x="6" y="44" fontFamily="Poppins,sans-serif" fontSize="9" fill="rgba(255,255,255,.4)" letterSpacing="2">MOTORCYCLE BUYERS</text>
          </svg>
        </div>

        <div>
          <p className="footer__col-title">Quick Links</p>
          <a href="#" className="footer__link">Home</a>
          <a href="#how-it-works" className="footer__link">How It Works</a>
          <a href="#compare" className="footer__link">Compare Moto Buyers</a>
        </div>

        <div>
          <p className="footer__col-title">More Links</p>
          <a href="#" className="footer__link">Contact Us</a>
          <a href="#" className="footer__link">FAQ</a>
          <a href="#" className="footer__link">Appointment Tips</a>
          <a href="#" className="footer__link">Our Appraisals</a>
        </div>

        <div>
          <div className="footer__contact-item">
            <svg className="footer__contact-icon" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 2C9.58 2 6 5.58 6 10c0 6.56 8 16 8 16s8-9.44 8-16c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="#ee2524"/>
            </svg>
            <span>7696 Broadway, Suite C<br/>Lemon Grove, CA 91945</span>
          </div>
          <div className="footer__contact-item">
            <svg className="footer__contact-icon" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M5.4 2.7h4.2L11.2 8 8.6 9.6c1.3 2.7 3.1 4.5 5.8 5.8l1.6-2.6 5.3 1.6v4.2c0 .8-.7 1.4-1.5 1.4C8.5 19.5 2.5 5.3 3 4.2c0-.8.6-1.5 1.4-1.5h1z" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
            <span>(844) 668-6289</span>
          </div>
          <div className="footer__contact-item">
            <svg className="footer__contact-icon" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect x="3" y="6" width="22" height="16" rx="3" stroke="white" strokeWidth="1.5" fill="none"/>
              <polyline points="3,6 14,16 25,6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>info@motobuyers.com</span>
          </div>
          <p className="footer__col-title" style={{marginTop:'14px',marginBottom:'8px'}}>Follow Us</p>
          <div className="footer__social-row">
            <div className="footer__social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
            <div className="footer__social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </div>
            <div className="footer__social-icon" aria-label="Twitter / X">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </div>
            <div className="footer__social-icon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02v-6.04l5.38 3.02z"/></svg>
            </div>
          </div>
        </div>

        <div>
          <p className="footer__nl-title">Signup for Newsletters</p>
          <form className="footer__nl-form" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
            <div className="footer__nl-bg" aria-hidden="true"></div>
            <div className="footer__nl-send-bg" aria-hidden="true"></div>
            <input className="footer__nl-input" type="email" placeholder="Enter your email address" aria-label="Your email address" />
            <button className="footer__nl-send-btn" type="submit" aria-label="Subscribe to newsletter">
              <svg className="footer__nl-send-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polyline points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            Copyright © 2024, All Rights&nbsp;&nbsp;<span className="brand">MotoBuyers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
