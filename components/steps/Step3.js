const COSMETIC_RATINGS = [
  { stars: 5, label: "Excellent", desc: "Like-new condition. No visible damage or wear." },
  { stars: 4, label: "Very Good", desc: "Light scratches only, bike has never been dropped." },
  { stars: 3, label: "Good", desc: "Minor cosmetic damage, possibly from a light drop." },
  { stars: 2, label: "Fair", desc: "Moderate damage that may need bodywork or repainting." },
  { stars: 1, label: "Poor", desc: "Unrepaired crash damage, bent or broken parts." },
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

export default function Step3({ data, onChange }) {
  return (
    <section className="steps__section">
      <h1 className="steps__title">How would you rate the cosmetic condition?</h1>
      <p className="steps__subtitle">
        Paint, bodywork, plastics, and overall visual appearance.
      </p>

      <div className="steps__single-col">
        <div className="steps__rating-list">
          {COSMETIC_RATINGS.map((r) => {
            const isActive = data.cosmetic === r.stars;
            return (
              <button
                key={r.stars}
                type="button"
                className={`steps__rating-card ${isActive ? "steps__rating-card--active" : ""}`}
                onClick={() => onChange({ cosmetic: r.stars })}
              >
                <div className="steps__rating-content">
                  <div className="steps__rating-header">
                    <Stars count={r.stars} />
                    <span className="steps__rating-title">{r.label}</span>
                  </div>
                  <span className="steps__rating-desc">{r.desc}</span>
                </div>
                <span className="steps__rating-radio">
                  {isActive && (
                    <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                      <polyline
                        points="4,12 9,17 20,6"
                        stroke="#fff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
