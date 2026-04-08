export default function Step6({ data, onChange, bikeLabel }) {
  return (
    <section className="steps__section">
      <h1 className="steps__title">Contact Info &amp; Submission</h1>
      <p className="steps__subtitle">
        Showing: <strong>{bikeLabel}</strong>
      </p>

      <div className="steps__single-col">
        <div className="steps__form-card">
          <div className="steps__contact-grid">
            <div className="steps__contact-field">
              <label className="steps__field-label">First Name</label>
              <input
                type="text"
                className="steps__input steps__input--rect"
                placeholder="First Name"
                value={data.firstName || ""}
                onChange={(e) => onChange({ firstName: e.target.value })}
              />
            </div>
            <div className="steps__contact-field">
              <label className="steps__field-label">Last Name</label>
              <input
                type="text"
                className="steps__input steps__input--rect"
                placeholder="Last Name"
                value={data.lastName || ""}
                onChange={(e) => onChange({ lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="steps__contact-field" style={{ marginTop: "2rem" }}>
            <label className="steps__field-label">Phone Number</label>
            <input
              type="tel"
              className="steps__input steps__input--rect"
              placeholder="(555) 000-0000"
              value={data.phone || ""}
              onChange={(e) => onChange({ phone: e.target.value })}
            />
          </div>

          <div className="steps__contact-field" style={{ marginTop: "2rem" }}>
            <label className="steps__field-label">Email Address</label>
            <input
              type="email"
              className="steps__input steps__input--rect"
              placeholder="you@example.com"
              value={data.email || ""}
              onChange={(e) => onChange({ email: e.target.value })}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
