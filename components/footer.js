import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Footer({ siteSettings }) {
  const router = useRouter();
  const date = new Date();
  let year = date.getFullYear();

  const path = router.pathname;
  return (
    <>
      <footer>
        <div className="footer-grid">
          <div>
            <a href="#" className="footer-logo">
              <div className="footer-logo-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
                </svg>
              </div>
              MotoBuyers
            </a>
            <div className="footer-address">
              <a href="#">
                7696 Broadway, Suite C<br />
                Lemon Grove, CA 91945
              </a>
              <a href="tel:8446686289" style={{ marginTop: 8 }}>
                (844) 668-6289
              </a>
              <a href="mailto:info@motobuyers.com">info@motobuyers.com</a>
            </div>
          </div>
          <div>
            <div className="footer-h">Quick Links</div>
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#compare">Compare Moto Buyers</a>
            </div>
          </div>
          <div>
            <div className="footer-h">More Links</div>
            <div className="footer-links">
              <a href="#">Contact Us</a>
              <a href="#">FAQ</a>
              <a href="#">Appointment Tips</a>
              <a href="#">Our Appraisals</a>
            </div>
          </div>
          <div>
            <div className="footer-h">Signup for Newsletters</div>
            <div className="nl-form">
              <input
                className="nl-input"
                type="email"
                placeholder="Enter your email address"
              />
              <button className="nl-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
            <div className="footer-h" style={{ fontSize: 13 }}>
              Follow Us
            </div>
            <div className="socials">
              {["f", "𝕏", "in", "▶"].map((s, i) => (
                <a
                  href="#"
                  key={i}
                  className="social"
                  style={{ color: "rgba(255,255,255,.7)", fontWeight: 700 }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright © 2024, All Rights MotoBuyers
        </div>
      </footer>
    </>
  );
}
