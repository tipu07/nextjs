import { useRef } from "react";

function CircleBox({ active }) {
  return (
    <span className="steps__radio-box">
      {active && <span className="steps__radio-dot" />}
    </span>
  );
}

const SERVICE_ITEMS = [
  "Valve adjustment or major service",
  "Fork seals",
  "Chain or sprockets",
  "Brake pads or rotors",
  "Battery or charging system",
];

const CIRCLE_OPTIONS = [
  "No service or maintenance required",
  "Not sure",
];

export default function Step4c({ data, onChange }) {
  const selected = data.serviceItems || [];
  const otherChecked = data.otherChecked || false;
  const otherText = data.otherText || "";
  const circleOption = data.circleOption || "";
  const inputRef = useRef(null);

  const toggle = (item) => {
    const updated = selected.includes(item)
      ? selected.filter((i) => i !== item)
      : [...selected, item];
    onChange({ serviceItems: updated, circleOption: "" });
  };

  const toggleOther = () => {
    const next = !otherChecked;
    onChange({ otherChecked: next, circleOption: "" });
    if (next) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleCircleOption = (option) => {
    onChange({
      serviceItems: [],
      otherChecked: false,
      otherText: "",
      circleOption: circleOption === option ? "" : option,
    });
  };

  const CheckIcon = () => (
    <svg viewBox="0 0 12 10" fill="none" width="12" height="10">
      <polyline
        points="1,5 4.5,8.5 11,1"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="steps__section">
      <h1 className="steps__title">Are any of these service or maintenance items due?</h1>
      <p className="steps__subtitle">Select all that apply.</p>

      <div className="steps__single-col">
        <div className="steps__form-card">
          <div className="steps__checkbox-list">
            {SERVICE_ITEMS.map((item) => {
              const checked = selected.includes(item);
              return (
                <label
                  key={item}
                  className={`steps__checkbox-row ${checked ? "steps__checkbox-row--active" : ""}`}
                  onClick={() => toggle(item)}
                >
                  <span className="steps__checkbox-box">
                    {checked && <CheckIcon />}
                  </span>
                  <span className="steps__checkbox-label">{item}</span>
                </label>
              );
            })}

            {/* Other — text input row */}
            <label
              className={`steps__checkbox-row ${otherChecked ? "steps__checkbox-row--active" : ""}`}
              onClick={toggleOther}
            >
              <span className="steps__checkbox-box">
                {otherChecked && <CheckIcon />}
              </span>
              {otherChecked ? (
                <input
                  ref={inputRef}
                  type="text"
                  className="steps__checkbox-other-input"
                  placeholder="Describe the issue..."
                  value={otherText}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => onChange({ otherText: e.target.value, circleOption: "" })}
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

          {/* Circle options */}
          <div className="steps__checkbox-list">
            {CIRCLE_OPTIONS.map((option) => {
              const active = circleOption === option;
              return (
                <label
                  key={option}
                  className={`steps__checkbox-row ${active ? "steps__checkbox-row--active" : ""}`}
                  onClick={() => handleCircleOption(option)}
                >
                  <CircleBox active={active} />
                  <span className="steps__checkbox-label">{option}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
