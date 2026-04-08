const MECHANICAL_ISSUES = [
  "Engine or transmission issues",
  "Electrical or electronic problems",
  "Fluid leaks (oil, coolant, brake fluid)",
  "Dash warning lights (check engine, ABS, etc.)",
  "Doesn't start consistently",
  "Unusual sounds or vibrations",
  "Other",
];

export default function Step4b({ data, onChange, bikeLabel }) {
  const selected = data.mechanicalIssues || [];

  const toggle = (issue) => {
    if (issue === "None of these") {
      onChange({ mechanicalIssues: selected.includes("None of these") ? [] : ["None of these"] });
      return;
    }
    const filtered = selected.filter((i) => i !== "None of these");
    const updated = filtered.includes(issue)
      ? filtered.filter((i) => i !== issue)
      : [...filtered, issue];
    onChange({ mechanicalIssues: updated });
  };

  return (
    <section className="steps__section">
      <h1 className="steps__title">Mechanical Issues</h1>
      <p className="steps__subtitle">
        Showing: <strong>{bikeLabel}</strong>
      </p>

      <div className="steps__single-col">
        <div className="steps__form-card">
          <p className="steps__field-label steps__field-label--lg">
            What mechanical issues are you aware of?
          </p>
          <div className="steps__checkbox-list">
            {MECHANICAL_ISSUES.map((issue) => {
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

            {/* None of these — no box style */}
            <label
              className="steps__checkbox-none"
              onClick={() => toggle("None of these")}
            >
              <span className="steps__checkbox-box">
                {selected.includes("None of these") && (
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
              <span className="steps__checkbox-label">None of these</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
