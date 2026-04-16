const TRIMS = [
  "Standard",
  "ABS Edition",
  "Sport Edition",
  "Special Edition",
  "Track Edition",
  "Limited Edition",
  "Adventure Edition",
  "Street Edition",
  "Custom Build",
];

export default function Step2({ data, onChange, bikeLabel }) {
  return (
    <section className="steps__section">
      <h1 className="steps__title">Tell us a bit more about your bike</h1>

      <div className="steps__single-col">
        <div className="steps__form-card">
          {/* <p className="steps__field-label">Select the trim/variant</p>
          <div className="steps__radio-list">
            {TRIMS.map((trim) => (
              <label
                key={trim}
                className={`steps__radio-row ${data.trim === trim ? "steps__radio-row--active" : ""}`}
              >
                <span className="steps__radio-dot">
                  {data.trim === trim && (
                    <span className="steps__radio-dot-inner" />
                  )}
                </span>
                <input
                  type="radio"
                  name="trim"
                  value={trim}
                  checked={data.trim === trim}
                  onChange={() => onChange({ trim })}
                  hidden
                />
                <span className="steps__radio-label">{trim}</span>
              </label>
            ))}
          </div> */}

          <p className="steps__field-label" style={{ marginTop: "2.4rem" }}>
            Mileage{" "}
            <span className="steps__field-label-hint">
              (to the best of your knowledge)
            </span>
          </p>
          <input
            type="number"
            className="steps__input steps__input--rect"
            placeholder="e.g. 12000"
            value={data.mileage || ""}
            onChange={(e) => onChange({ mileage: e.target.value })}
          />

          <p className="steps__field-label" style={{ marginTop: "2rem" }}>
            ZIP Code{" "}
            <span className="steps__field-label-hint">
              (where the motorcycle is located)
            </span>
          </p>
          <input
            type="text"
            className="steps__input steps__input--rect"
            placeholder="e.g. 90210"
            value={data.zip || ""}
            onChange={(e) => onChange({ zip: e.target.value })}
          />

          <p className="steps__field-label" style={{ marginTop: "2rem" }}>
            Has this bike been ridden in the last 30 days?
          </p>
          <div className="steps__yesno">
            <button
              className={`steps__yesno-btn ${data.ridden === "yes" ? "steps__yesno-btn--active" : ""}`}
              onClick={() => onChange({ ridden: "yes" })}
              type="button"
            >
              Yes
            </button>
            <button
              className={`steps__yesno-btn ${data.ridden === "no" ? "steps__yesno-btn--active" : ""}`}
              onClick={() => onChange({ ridden: "no" })}
              type="button"
            >
              No
            </button>
          </div>
          <p className="steps__field-label" style={{ marginTop: "2.4rem" }}>
            Email Address{" "}
            <span className="steps__field-label-hint">
              (We send your offer here)
            </span>
          </p>
          <input
            type="text"
            className="steps__input steps__input--rect"
            placeholder="e.g. sample@gmail.com"
            value={data.email || ""}
            onChange={(e) => onChange({ email: e.target.value })}
          />
        </div>
      </div>
    </section>
  );
}
