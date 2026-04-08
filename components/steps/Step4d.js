import { useState } from "react";

const MAX = 5000;
const STEP = 500;
const MARKS = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000];

function TireSlider({ label, value, notSure, onChange, onToggleNotSure }) {
  const pct = (value / MAX) * 100;

  return (
    <div className="steps__tire">
      <p className="steps__tire-label">{label}</p>
      <p className="steps__tire-hint">
        Slide to estimate miles on the {label.toLowerCase()} (0 mi — 5,000+ mi)
      </p>
      <div className="steps__slider-row">
        <div className="steps__slider-wrap">
          {!notSure && (
            <div
              className="steps__slider-bubble"
              style={{ left: `${pct}%` }}
            >
              {value.toLocaleString()} mi
            </div>
          )}
          <input
            type="range"
            min={0}
            max={MAX}
            step={STEP}
            value={notSure ? 0 : value}
            disabled={notSure}
            onChange={(e) => onChange(Number(e.target.value))}
            className="steps__range"
            style={{
              "--pct": `${notSure ? 0 : pct}%`,
            }}
          />
          <div className="steps__slider-marks">
            {MARKS.map((m) => (
              <span key={m} className="steps__slider-mark">
                {m === 5000 ? "5,000+" : m === 0 ? "0" : m.toLocaleString()}
              </span>
            ))}
          </div>
        </div>
        <button
          type="button"
          className={`steps__not-sure-btn ${notSure ? "steps__not-sure-btn--active" : ""}`}
          onClick={onToggleNotSure}
        >
          I&apos;m not sure
        </button>
      </div>
    </div>
  );
}

export default function Step4d({ data, onChange, bikeLabel }) {
  const [frontMiles, setFrontMiles] = useState(data.frontTireMiles ?? 0);
  const [rearMiles, setRearMiles] = useState(data.rearTireMiles ?? 0);
  const [frontNotSure, setFrontNotSure] = useState(data.frontTireNotSure ?? false);
  const [rearNotSure, setRearNotSure] = useState(data.rearTireNotSure ?? false);

  const handleFront = (val) => {
    setFrontMiles(val);
    onChange({ frontTireMiles: val });
  };

  const handleRear = (val) => {
    setRearMiles(val);
    onChange({ rearTireMiles: val });
  };

  const toggleFrontNotSure = () => {
    const next = !frontNotSure;
    setFrontNotSure(next);
    onChange({ frontTireNotSure: next });
  };

  const toggleRearNotSure = () => {
    const next = !rearNotSure;
    setRearNotSure(next);
    onChange({ rearTireNotSure: next });
  };

  return (
    <section className="steps__section">
      <h1 className="steps__title">
        About how many miles are on your current tires?
      </h1>
      <p className="steps__subtitle">
        Showing: <strong>{bikeLabel}</strong>
      </p>

      <div className="steps__single-col">
        <div className="steps__form-card">
          <p className="steps__field-label steps__field-label--lg">
            Adjust the sliders for each tire below. Use the &ldquo;I&apos;m not
            sure&rdquo; toggle if you don&apos;t know.
          </p>

          <TireSlider
            label="Front Tire"
            value={frontMiles}
            notSure={frontNotSure}
            onChange={handleFront}
            onToggleNotSure={toggleFrontNotSure}
          />

          <TireSlider
            label="Rear Tire"
            value={rearMiles}
            notSure={rearNotSure}
            onChange={handleRear}
            onToggleNotSure={toggleRearNotSure}
          />

          <p className="steps__tire-footer">
            Step increments: 500 mi. Use the slider or tap &ldquo;I&apos;m not
            sure&rdquo; if unknown.
          </p>
        </div>
      </div>
    </section>
  );
}
