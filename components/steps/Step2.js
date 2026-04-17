export default function Step2({ data, onChange }) {
  return (
    <section className="steps__section">
      <h1 className="steps__title">Tell us a bit more about your bike</h1>

      <div className="steps__single-col">
        <div className="steps__form-card">
          <label className="steps__field-label">Mileage</label>
          <p className="steps__field-hint">To the best of your knowledge</p>
          <div className="steps__input-wrap">
            <input
              type="text"
              className="steps__input steps__input--suffix"
              placeholder="Enter mileage"
              value={data.mileage || ""}
              onChange={(e) => onChange({ mileage: e.target.value })}
            />
            <span className="steps__input-suffix">miles</span>
          </div>

          <label className="steps__field-label" style={{ marginTop: "2rem" }}>
            ZIP code
          </label>
          <input
            type="text"
            className="steps__input"
            placeholder="Enter Zip code"
            value={data.zip || ""}
            onChange={(e) => onChange({ zip: e.target.value })}
          />

          <label className="steps__field-label" style={{ marginTop: "2rem" }}>
            Has this bike been ridden in the last 30 days?
          </label>
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

          <label className="steps__field-label" style={{ marginTop: "2rem" }}>
            Email address
          </label>
          <p className="steps__field-hint">We send your offer here</p>
          <input
            type="email"
            className="steps__input"
            placeholder="e.g. name@email.com"
            value={data.email || ""}
            onChange={(e) => onChange({ email: e.target.value })}
          />
        </div>
      </div>
    </section>
  );
}
