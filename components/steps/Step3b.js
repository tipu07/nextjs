const COSMETIC_ISSUES = [
  "Scratches",
  "Dents / Dings",
  "Broken or Missing Plastics",
  "Drop Damage",
  "Bent or Warped Parts",
  "Rust",
  "Other",
];

export default function Step3b({ data, onChange, bikeLabel }) {
  const selected = data.cosmeticIssues || [];

  const toggle = (issue) => {
    const updated = selected.includes(issue)
      ? selected.filter((i) => i !== issue)
      : [...selected, issue];
    onChange({ cosmeticIssues: updated });
  };

  return (
    <section className="steps__section">
      <h1 className="steps__title">Cosmetic Issues</h1>
      <p className="steps__subtitle">
        Showing: <strong>{bikeLabel}</strong>
      </p>

      <div className="steps__single-col">
        <div className="steps__form-card">
          <p className="steps__field-label steps__field-label--lg">
            Thanks — what kind of cosmetic issues does it have?
          </p>
          <div className="steps__checkbox-list">
            {COSMETIC_ISSUES.map((issue) => {
              const checked = selected.includes(issue);
              return (
                <label
                  key={issue}
                  className={`steps__checkbox-row ${checked ? "steps__checkbox-row--active" : ""}`}
                  onClick={() => toggle(issue)}
                >
                  <span className="steps__checkbox-box">
                    {checked && (
                      <svg viewBox="0 0 12 10" fill="none" width="12" height="10">
                        <polyline
                          points="1,5 4.5,8.5 11,1"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="steps__checkbox-label">{issue}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
