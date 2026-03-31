import React from "react";

export default function AppraisalSection({ appraisalSteps }) {
  return (
    <section className="appraisal-section" style={{ textAlign: "center" }}>
      <div className="tag"><div className="tag-dot" style={{ background: "white" }} />Our Process</div>
      <h2 className="section-title">How we create your<br />personalized offer</h2>
      <p className="section-sub">From VIN to value — our appraisal process is fair</p>
      <div className="apr-grid">
        {appraisalSteps.map((s, i) => (
          <div className="apr-card" key={i}>
            <div className="apr-num">{s.num}</div>
            <div className="apr-title">{s.title}</div>
            <div className="apr-desc">{s.desc}</div>
          </div>
        ))}
      </div>
      <div className="apr-cta">
        <a href="#" className="btn-outline">Learn more about our appraisals</a>
      </div>
    </section>
  );
}
