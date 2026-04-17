import { useState } from "react";

const MAX = 5000;
const STEP = 500;

function ToggleSwitch({ on, onToggle }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={onToggle}
      className={`steps__tire-toggle-switch${on ? " steps__tire-toggle-switch--on" : ""}`}
    />
  );
}

function TireCard({ label, value, unknown, onSlide, onToggleUnknown }) {
  const pct = (value / MAX) * 100;

  return (
    <div className={`steps__tire-card${unknown ? " steps__tire-card--unknown" : ""}`}>
      {/* Header */}
      <div className="steps__tire-card-header">
        <span className="steps__tire-card-title">{label}</span>
        <label className="steps__tire-toggle-row">
          <span className={`steps__tire-toggle-label${unknown ? " steps__tire-toggle-label--on" : ""}`}>
            I don&apos;t know
          </span>
          <ToggleSwitch on={unknown} onToggle={onToggleUnknown} />
        </label>
      </div>

      {/* Value display */}
      <div className="steps__tire-card-display">
        {unknown ? (
          <span className="steps__tire-unknown">Unknown</span>
        ) : value > 0 ? (
          <span className="steps__tire-value">{value.toLocaleString()} mi</span>
        ) : (
          <span className="steps__tire-slide-hint">Slide to set range</span>
        )}
      </div>

      {/* Slider */}
      <div className="steps__tire-card-slider">
        <input
          type="range"
          min={0}
          max={MAX}
          step={STEP}
          value={unknown ? 0 : value}
          disabled={unknown}
          onChange={(e) => onSlide(Number(e.target.value))}
          className={`steps__range${unknown ? " steps__range--unknown" : ""}`}
          style={{ "--pct": `${unknown ? 0 : pct}%` }}
        />
        <div className="steps__tire-card-marks">
          <span>0</span>
          <span>5,000+</span>
        </div>
      </div>
    </div>
  );
}

export default function Step4d({ data, onChange }) {
  const [frontMiles, setFrontMiles] = useState(data.frontTireMiles ?? 0);
  const [rearMiles, setRearMiles] = useState(data.rearTireMiles ?? 0);
  const [frontUnknown, setFrontUnknown] = useState(data.frontTireNotSure ?? false);
  const [rearUnknown, setRearUnknown] = useState(data.rearTireNotSure ?? false);

  const handleFront = (val) => { setFrontMiles(val); onChange({ frontTireMiles: val }); };
  const handleRear = (val) => { setRearMiles(val); onChange({ rearTireMiles: val }); };

  const toggleFront = () => {
    const next = !frontUnknown;
    setFrontUnknown(next);
    onChange({ frontTireNotSure: next });
  };

  const toggleRear = () => {
    const next = !rearUnknown;
    setRearUnknown(next);
    onChange({ rearTireNotSure: next });
  };

  return (
    <section className="steps__section">
      <h1 className="steps__title">About how many miles are on the current tires?</h1>
      <p className="steps__subtitle">Approximate is fine. This helps us understand remaining life.</p>

      <div className="steps__tire-grid">
        <TireCard
          label="Front tire"
          value={frontMiles}
          unknown={frontUnknown}
          onSlide={handleFront}
          onToggleUnknown={toggleFront}
        />
        <TireCard
          label="Rear tire"
          value={rearMiles}
          unknown={rearUnknown}
          onSlide={handleRear}
          onToggleUnknown={toggleRear}
        />
      </div>
    </section>
  );
}
