const COSMETIC_RATINGS = [
  { stars: 5, label: "Excellent", desc: "Like-new condition. No damage." },
  { stars: 4, label: "Very Good", desc: "Light scratches, never dropped." },
  {
    stars: 3,
    label: "Good",
    desc: "Minor cosmetic damage from light drop.",
  },
  { stars: 2, label: "Fair", desc: "Moderate damage; may need bodywork." },
  { stars: 1, label: "Poor", desc: "Unrepaired crash damage; bent parts." },
];

function Stars({ count }) {
  return (
    <span className="steps__stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`steps__star ${i < count ? "steps__star--filled" : ""}`}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function Step3({ data, onChange, bikeLabel }) {
  return (
    <section className="steps__section">
      <h1 className="steps__title">Cosmetic Condition</h1>
      <p className="steps__subtitle">
        How would you rate the cosmetic condition of your motorcycle?
      </p>

      <div className="steps__single-col">
        <div className="steps__form-card">
          <div className="steps__rating-list">
            {COSMETIC_RATINGS.map((r) => (
              <button
                key={r.stars}
                type="button"
                className={`steps__rating-card ${data.cosmetic === r.stars ? "steps__rating-card--active" : ""}`}
                onClick={() => onChange({ cosmetic: r.stars })}
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
