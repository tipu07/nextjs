import { useState } from "react";
import Contain from "./contain";

export default function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <Contain>
        <nav
          className="nav u-container"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="nav__logo">
            <img src="/images/logo.png" alt="" />
          </div>

          <div className="nav__links" role="list">
            <a href="#how-it-works" className="nav__link" role="listitem">
              How It Works
            </a>
            <a href="#compare" className="nav__link" role="listitem">
              Compare Moto Buyers
            </a>
            <button
              className="nav__more"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
              <svg
                className="nav__more-chevron"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <polyline
                  points="6 9 12 15 18 9"
                  stroke="#000"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <a href="#" className="nav__cta" role="button">
            Get my Offer
          </a>

          <button
            className="nav__hamburger"
            id="hamburger"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </Contain>

      <nav
        className={`nav__mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}
        id="mobile-menu"
        aria-label="Mobile navigation"
      >
        <a
          href="#how-it-works"
          className="nav__mobile-link"
          onClick={closeMobileMenu}
        >
          How It Works
        </a>
        <a
          href="#compare"
          className="nav__mobile-link"
          onClick={closeMobileMenu}
        >
          Compare Moto Buyers
        </a>
        <a href="#" className="nav__mobile-link" onClick={closeMobileMenu}>
          More
        </a>
        <a href="#" className="nav__mobile-cta">
          Get my Offer
        </a>
      </nav>
    </header>
  );
}
