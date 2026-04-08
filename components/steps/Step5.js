const TITLE_TYPES = [
  "Clean",
  "Salvage",
  "True Mileage Unknown",
  "Other / Not Sure",
];

export default function Step5({ data, onChange, bikeLabel }) {
  const showLoanDetails = data.hasLoan === "yes";

  return (
    <section className="steps__section">
      <h1 className="steps__title">Title &amp; Financial Info</h1>
      <p className="steps__subtitle">
        Showing: <strong>{bikeLabel}</strong>
      </p>

      <div className="steps__single-col">
        <div className="steps__form-card">

          {/* Title type */}
          <p className="steps__field-label steps__field-label--lg">
            What kind of title do you have?
          </p>
          <div className="steps__option-list">
            {TITLE_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                className={`steps__option-btn ${data.titleType === t ? "steps__option-btn--active" : ""}`}
                onClick={() => onChange({ titleType: t })}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Loan */}
          <p className="steps__field-label" style={{ marginTop: "3rem" }}>
            Do you have a loan on this bike?
          </p>
          <div className="steps__fin-row">
            {["Yes", "No", "Other / Not Sure"].map((opt) => {
              const val = opt.toLowerCase().replace(" / not sure", "").replace(" ", "_");
              const key = opt === "Yes" ? "yes" : opt === "No" ? "no" : "other";
              return (
                <button
                  key={opt}
                  type="button"
                  className={`steps__option-btn ${data.hasLoan === key ? "steps__option-btn--active" : ""}`}
                  onClick={() => onChange({ hasLoan: key, payoffAmount: "", dontKnowPayoff: false })}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Payoff amount — shown only when loan = yes */}
          {showLoanDetails && (
            <div className="steps__fin-reveal">
              <p className="steps__field-label" style={{ marginTop: "2.4rem" }}>
                Do you know what your payoff amount is?
              </p>
              <button
                type="button"
                className={`steps__option-btn ${!data.dontKnowPayoff && data.payoffAmount ? "steps__option-btn--active" : ""}`}
                style={{ marginBottom: "1rem" }}
                onClick={() => onChange({ dontKnowPayoff: false })}
              >
                <input
                  type="text"
                  placeholder="$567"
                  value={data.payoffAmount || ""}
                  className="steps__inline-input"
                  onChange={(e) => onChange({ payoffAmount: e.target.value, dontKnowPayoff: false })}
                  onClick={(e) => e.stopPropagation()}
                />
              </button>
              <button
                type="button"
                className={`steps__option-btn ${data.dontKnowPayoff ? "steps__option-btn--active" : ""}`}
                onClick={() => onChange({ dontKnowPayoff: true, payoffAmount: "" })}
              >
                I don&apos;t know
              </button>
            </div>
          )}

          {/* Hoping price */}
          <p className="steps__field-label" style={{ marginTop: "3rem" }}>
            Is there a price you&apos;re hoping to get for this motorcycle?
          </p>
          <button
            type="button"
            className={`steps__option-btn ${!data.noPriceExpectation && data.hopingPrice ? "steps__option-btn--active" : ""}`}
            style={{ marginBottom: "1rem" }}
            onClick={() => onChange({ noPriceExpectation: false })}
          >
            <input
              type="text"
              placeholder="$567"
              value={data.hopingPrice || ""}
              className="steps__inline-input"
              onChange={(e) => onChange({ hopingPrice: e.target.value, noPriceExpectation: false })}
              onClick={(e) => e.stopPropagation()}
            />
          </button>
          <button
            type="button"
            className={`steps__option-btn ${data.noPriceExpectation ? "steps__option-btn--active" : ""}`}
            onClick={() => onChange({ noPriceExpectation: true, hopingPrice: "" })}
          >
            No / I&apos;m not sure
          </button>

        </div>
      </div>
    </section>
  );
}
