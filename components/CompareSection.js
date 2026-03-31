import React from "react";

export default function CompareSection({ compareRows }) {
  return (
    <section className="compare-section" id="compare" style={{ textAlign: "center" }}>
      <div className="tag"><div className="tag-dot" />Why Choose Us</div>
      <h2 className="section-title">Moto Buyers vs. Private Sale</h2>
      <p className="section-sub">See why Moto Buyers is the smarter choice</p>

      <div className="compare-podium">
        <div className="podium-item">
          <div className="podium-bike">
            <svg viewBox="0 0 110 60" fill="white" width="90" opacity=".7">
              <circle cx="20" cy="50" r="14" fill="none" stroke="white" strokeWidth="5" />
              <circle cx="90" cy="50" r="14" fill="none" stroke="white" strokeWidth="5" />
              <path d="M10 48 Q20 20 40 22 L65 20 Q85 18 100 48" fill="none" stroke="white" strokeWidth="4" />
              <rect x="50" y="10" width="22" height="14" rx="3" fill="white" opacity=".6" />
            </svg>
          </div>
          <div className="podium-block podium-red">Moto Buyers</div>
        </div>
        <div className="podium-item">
          <div className="podium-bike">
            <svg viewBox="0 0 110 60" fill="white" width="90" opacity=".5">
              <circle cx="20" cy="50" r="14" fill="none" stroke="white" strokeWidth="5" />
              <circle cx="90" cy="50" r="14" fill="none" stroke="white" strokeWidth="5" />
              <path d="M10 48 Q20 20 40 22 L65 20 Q85 18 100 48" fill="none" stroke="white" strokeWidth="4" />
            </svg>
          </div>
          <div className="podium-block podium-dark">Private Sale</div>
        </div>
      </div>

      <div className="compare-table">
        <div className="compare-thead">
          <div className="cth">Features</div>
          <div className="cth" style={{ textAlign: "center" }}>Moto Buyers</div>
          <div className="cth" style={{ textAlign: "center" }}>Private Sale</div>
        </div>
        {compareRows.map((row, i) => (
          <div className="compare-row" key={i}>
            <div className="cc"><span className="cc-icon">{row.icon}</span>{row.label}</div>
            <div className="cc">
              {row.moto ? <span className="check">✓</span> : <span className="cross">✕</span>}
            </div>
            <div className="cc">
              {row.pvt === true ? <span className="check">✓</span>
                : row.pvt === "maybe" ? <span className="maybe">May be</span>
                : <span className="cross">✕</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
