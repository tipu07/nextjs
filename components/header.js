import React from "react";

export default function Header() {
  return (
    <nav>
      <a href="#" className="logo">
        <div className="logo-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
          </svg>
        </div>
        Moto<span>Buyers</span>
      </a>
      <div className="nav-links">
        <a href="#how-it-works">How It Works</a>
        <a href="#compare">Compare Moto Buyers</a>
        <a href="#" className="nav-more">
          More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </a>
      </div>
      <a href="#" className="nav-cta">
        Get my Offer
      </a>
    </nav>
  );
}
