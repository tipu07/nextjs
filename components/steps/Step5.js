const TITLE_TYPES = [
  "Clean",
  "Salvage",
  "True mileage unknown",
  "Other or not sure",
];

function CircleBox({ active }) {
  return (
    <span className="steps__radio-box">
      {active && <span className="steps__radio-dot" />}
    </span>
  );
}

function CheckIcon() {
  return (
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
}

export default function Step5({ data, onChange }) {
  const showLoan = data.hasLoan === "yes";

  return (
    <section className="steps__section">
      <h1 className="steps__title">Title and financial details</h1>

      <div className="steps__single-col">

        {/* ── Card 1: Title type ── */}
        <div className="steps__form-card">
          <div className="steps__option-list">
            {TITLE_TYPES.map((t) => {
              const active = data.titleType === t;
              return (
                <label
                  key={t}
                  className={`steps__checkbox-row ${active ? "steps__checkbox-row--active" : ""}`}
                  onClick={() => onChange({ titleType: t })}
                >
                  <CircleBox active={active} />
                  <span className="steps__checkbox-label">{t}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* ── Card 2: Loan ── */}
        <div className="steps__form-card" style={{ marginTop: "2rem" }}>
          <p className="steps__field-label steps__field-label--lg">
            Do you have a loan on this bike?
          </p>

          {/* Yes / No toggle */}
          <div className="steps__yesno">
            {["Yes", "No"].map((opt) => {
              const val = opt.toLowerCase();
              const active = data.hasLoan === val;
              return (
                <button
                  key={opt}
                  type="button"
                  className={`steps__yesno-btn ${active ? "steps__yesno-btn--active" : ""}`}
                  onClick={() => onChange({ hasLoan: val, payoffAmount: "", notSurePayoff: false })}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Payoff amount — visible when loan = yes */}
          {showLoan && (
            <div className="steps__fin-reveal" style={{ marginTop: "2rem" }}>
              <p className="steps__field-label">Payoff amount</p>
              <div className="steps__amount-row">
                <div className={`steps__amount-input-wrap ${!data.notSurePayoff && data.payoffAmount ? "steps__amount-input-wrap--active" : ""} ${data.notSurePayoff ? "steps__amount-input-wrap--disabled" : ""}`}>
                  <span className="steps__amount-dollar">$</span>
                  <input
                    type="text"
                    className="steps__amount-input"
                    placeholder="Enter amount"
                    value={data.payoffAmount || ""}
                    disabled={data.notSurePayoff}
                    onChange={(e) => onChange({ payoffAmount: e.target.value, notSurePayoff: false })}
                  />
                </div>
                <button
                  type="button"
                  className={`steps__not-sure-btn ${data.notSurePayoff ? "steps__not-sure-btn--active" : ""}`}
                  onClick={() => onChange({ notSurePayoff: !data.notSurePayoff, payoffAmount: "" })}
                >
                  {data.notSurePayoff && (
                    <span className="steps__not-sure-icon">
                      <CheckIcon />
                    </span>
                  )}
                  Not sure
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── Card 3: Asking price ── */}
        <div className="steps__form-card" style={{ marginTop: "2rem" }}>
          <p className="steps__field-label steps__field-label--lg">Asking price</p>
          <div className="steps__amount-row">
            <div className={`steps__amount-input-wrap ${!data.notSurePrice && data.askingPrice ? "steps__amount-input-wrap--active" : ""} ${data.notSurePrice ? "steps__amount-input-wrap--disabled" : ""}`}>
              <span className="steps__amount-dollar">$</span>
              <input
                type="text"
                className="steps__amount-input"
                placeholder="Enter amount"
                value={data.askingPrice || ""}
                disabled={data.notSurePrice}
                onChange={(e) => onChange({ askingPrice: e.target.value, notSurePrice: false })}
              />
            </div>
            <button
              type="button"
              className={`steps__not-sure-btn ${data.notSurePrice ? "steps__not-sure-btn--active" : ""}`}
              onClick={() => onChange({ notSurePrice: !data.notSurePrice, askingPrice: "" })}
            >
              {data.notSurePrice && (
                <span className="steps__not-sure-icon">
                  <CheckIcon />
                </span>
              )}
              Not sure
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
