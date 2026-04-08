const MECHANICAL_RATINGS = [
  { stars: 5, label: "5 — Excellent", desc: "Runs perfectly." },
  { stars: 4, label: "4 — Very Good", desc: "Runs well." },
  { stars: 3, label: "3 — Good", desc: "Minor symptoms present." },
  { stars: 2, label: "2 — Fair", desc: "Known issues affecting rideability." },
  { stars: 1, label: "1 — Poor", desc: "Not running / major problems." },
];

function Stars({ count }) {
  return (
    <span className="steps__stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`steps__star ${i < count ? "steps__star--filled" : ""}`}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function Step4({ data, onChange, bikeLabel }) {
  return (
    <section className="steps__section">
      <h1 className="steps__title">Mechanical Condition</h1>
      <p className="steps__subtitle">{bikeLabel}</p>

      <div className="steps__single-col">
        <div className="steps__form-card">
          <p className="steps__field-label steps__field-label--lg">
            How would you rate the mechanical condition?
          </p>
          <div className="steps__rating-list">
            {MECHANICAL_RATINGS.map((r) => (
              <button
                key={r.stars}
                type="button"
                className={`steps__rating-card ${data.mechanical === r.stars ? "steps__rating-card--active" : ""}`}
                onClick={() => onChange({ mechanical: r.stars })}
              >
                <Stars count={r.stars} />
                <span className="steps__rating-title">{r.label}</span>
                <span className="steps__rating-desc">{r.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
