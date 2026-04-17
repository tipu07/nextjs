import { useRef } from "react";

const MECHANICAL_ISSUES = [
  "Engine or transmission issue",
  "Electrical issue",
  "Fluid leak",
  "Warning light on dash",
  "Starting problem",
  "Unusual noise or vibration",
  "Overheating or stalling",
  "Other",
];

export default function Step4b({ data, onChange }) {
  const selected = data.mechanicalIssues || [];
  const otherChecked = data.otherChecked || false;
  const otherText = data.otherText || "";
  const noIssues = data.noIssues || false;
  const inputRef = useRef(null);

  const toggle = (issue) => {
    if (issue === "Other") {
      const next = !otherChecked;
      onChange({ otherChecked: next, noIssues: false });
      if (next) setTimeout(() => inputRef.current?.focus(), 50);
      return;
    }
    const updated = selected.includes(issue)
      ? selected.filter((i) => i !== issue)
      : [...selected, issue];
    onChange({ mechanicalIssues: updated, noIssues: false });
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
      <h1 className="steps__title">What mechanical issues are you aware of?</h1>
      <p className="steps__subtitle">Select all that apply.</p>

      <div className="steps__single-col">
        <div className="steps__checkbox-list">
          {MECHANICAL_ISSUES.map((issue) => {
            const isOther = issue === "Other";
            const checked = isOther ? otherChecked : selected.includes(issue);
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
                {isOther && otherChecked ? (
                  <input
                    ref={inputRef}
                    type="text"
                    className="steps__checkbox-other-input"
                    placeholder="Describe the issue..."
                    value={otherText}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) =>
                      onChange({ otherText: e.target.value, noIssues: false })
                    }
                  />
                ) : (
                  <span className="steps__checkbox-label">{issue}</span>
                )}
              </label>
            );
          })}
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
          <span className="steps__radio-box">
            {noIssues && <span className="steps__radio-dot" />}
          </span>
          <span className="steps__checkbox-label">No mechanical issues</span>
        </label>
      </div>
    </section>
  );
}
