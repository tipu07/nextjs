import { useRef } from "react";

function CircleBox({ active }) {
  return (
    <span className="steps__radio-box">
      {active && <span className="steps__radio-dot" />}
    </span>
  );
}

const MECHANICAL_ISSUES = [
  "Engine or transmission issues",
  "Electrical or electronic problems",
  "Fluid leaks (oil, coolant, brake fluid)",
  "Dash warning lights (check engine, ABS, etc.)",
  "Doesn't start consistently",
  "Unusual sounds or vibrations",
];

export default function Step4b({ data, onChange }) {
  const selected = data.mechanicalIssues || [];
  const otherChecked = data.otherChecked || false;
  const otherText = data.otherText || "";
  const noIssues = data.noIssues || false;
  const inputRef = useRef(null);

  const toggle = (issue) => {
    const updated = selected.includes(issue)
      ? selected.filter((i) => i !== issue)
      : [...selected, issue];
    onChange({ mechanicalIssues: updated, noIssues: false });
  };

  const toggleOther = () => {
    const next = !otherChecked;
    onChange({ otherChecked: next, noIssues: false });
    if (next) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleNoIssues = () => {
    onChange({
      mechanicalIssues: [],
      otherChecked: false,
      otherText: "",
      noIssues: true,
    });
  };

  return (
    <section className="steps__section">
      <h1 className="steps__title">Mechanical Issues</h1>
      <p className="steps__subtitle">
        Select all that apply, or let us know if none of these fit.
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

            {/* Other — text input row */}
            <label
              className={`steps__checkbox-row ${otherChecked ? "steps__checkbox-row--active" : ""}`}
              onClick={toggleOther}
            >
              <span className="steps__checkbox-box">
                {otherChecked && (
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
              {otherChecked ? (
                <input
                  ref={inputRef}
                  type="text"
                  className="steps__checkbox-other-input"
                  placeholder="Describe the issue..."
                  value={otherText}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => onChange({ otherText: e.target.value, noIssues: false })}
                />
              ) : (
                <span className="steps__checkbox-label">Other</span>
              )}
            </label>
          </div>

          {/* OR divider */}
          <div className="steps__vin-or" style={{ margin: "1.6rem 0" }}>
            <span>OR</span>
          </div>

          {/* No mechanical issues */}
          <label
            className={`steps__checkbox-row ${noIssues ? "steps__checkbox-row--active" : ""}`}
            onClick={handleNoIssues}
          >
            <CircleBox active={noIssues} />
            <span className="steps__checkbox-label">No mechanical issues</span>
          </label>
        </div>
      </div>
    </section>
  );
}
