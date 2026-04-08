const SERVICE_ITEMS = [
  "Valve adjustment or major service",
  "Fork seals",
  "Chain and sprockets",
  "Brake pads or rotors",
  "Battery / charging system",
  "Other",
];

export default function Step4c({ data, onChange, bikeLabel }) {
  const selected = data.serviceItems || [];

  const toggle = (item) => {
    if (item === "None of these") {
      onChange({ serviceItems: selected.includes("None of these") ? [] : ["None of these"] });
      return;
    }
    const filtered = selected.filter((i) => i !== "None of these");
    const updated = filtered.includes(item)
      ? filtered.filter((i) => i !== item)
      : [...filtered, item];
    onChange({ serviceItems: updated });
  };

  return (
    <section className="steps__section">
      <h1 className="steps__title">Service &amp; Maintenance Items</h1>
      <p className="steps__subtitle">
        Showing: <strong>{bikeLabel}</strong>
      </p>

      <div className="steps__single-col">
        <div className="steps__form-card">
          <p className="steps__field-label steps__field-label--lg">
            Are any of the following maintenance items due or in need of attention?
          </p>
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
                    {checked && (
                      <svg viewBox="0 0 12 10" fill="none" width="12" height="10">
                        <polyline
                          points="1,5 4.5,8.5 11,1"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="steps__checkbox-label">{item}</span>
                </label>
              );
            })}

            <label
              className="steps__checkbox-none"
              onClick={() => toggle("None of these")}
            >
              <span className={`steps__checkbox-box ${selected.includes("None of these") ? "steps__checkbox-box--checked" : ""}`}>
                {selected.includes("None of these") && (
                  <svg viewBox="0 0 12 10" fill="none" width="12" height="10">
                    <polyline
                      points="1,5 4.5,8.5 11,1"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className="steps__checkbox-label">None of these</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
