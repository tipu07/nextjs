import { useState } from 'react';

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
      <nav className="nav u-container" role="navigation" aria-label="Main navigation">
        <div className="nav__logo">
          <svg className="nav__logo-img" viewBox="0 0 170 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MotoBuyers logo">
            <circle cx="21" cy="46" r="13" stroke="#ee2524" strokeWidth="2.5" fill="none"/>
            <circle cx="21" cy="46" r="5" fill="#ee2524"/>
            <circle cx="74" cy="46" r="13" stroke="#ee2524" strokeWidth="2.5" fill="none"/>
            <circle cx="74" cy="46" r="5" fill="#ee2524"/>
            <path d="M34 46 L45 26 L56 26 L67 39" stroke="#231f20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M45 26 L50 46" stroke="#231f20" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M56 26 L68 26 L74 30" stroke="#231f20" strokeWidth="2.5" strokeLinecap="round"/>
            <text x="88" y="40" fontFamily="Poppins,sans-serif" fontWeight="800" fontSize="17" fill="#231f20">Moto</text>
            <text x="122" y="40" fontFamily="Poppins,sans-serif" fontWeight="800" fontSize="17" fill="#ee2524">Buyers</text>
            <text x="88" y="53" fontFamily="Poppins,sans-serif" fontWeight="400" fontSize="7.5" fill="#999" letterSpacing="2">MOTORCYCLE BUYERS</text>
          </svg>
        </div>

        <div className="nav__links" role="list">
          <a href="#how-it-works" className="nav__link" role="listitem">How It Works</a>
          <a href="#compare" className="nav__link" role="listitem">Compare Moto Buyers</a>
          <button className="nav__more" aria-haspopup="true" aria-expanded="false">
            More
            <svg className="nav__more-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <a href="#" className="nav__cta" role="button">Get my Offer</a>

        <button 
          className="nav__hamburger" 
          id="hamburger" 
          aria-expanded={mobileMenuOpen} 
          aria-controls="mobile-menu" 
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <nav className={`nav__mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`} id="mobile-menu" aria-label="Mobile navigation">
        <a href="#how-it-works" className="nav__mobile-link" onClick={closeMobileMenu}>How It Works</a>
        <a href="#compare" className="nav__mobile-link" onClick={closeMobileMenu}>Compare Moto Buyers</a>
        <a href="#" className="nav__mobile-link" onClick={closeMobileMenu}>More</a>
        <a href="#" className="nav__mobile-cta">Get my Offer</a>
      </nav>
    </header>
  );
}
