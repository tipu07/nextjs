export default function Step6({ data, onChange, bikeLabel }) {
  return (
    <section className="steps__section">
      <h1 className="steps__title">How can we reach you?</h1>
      <p className="steps__subtitle">
        We will use this information to follow up with your appraisal.
      </p>

      <div className="steps__single-col">
        <div className="steps__form-card">
          <div className="steps__contact-field">
            <label className="steps__field-label !mb-[0]">First Name</label>
            <input
              type="text"
              className="steps__input steps__input--rect"
              placeholder="Enter your full name"
              value={data.firstName || ""}
              onChange={(e) => onChange({ firstName: e.target.value })}
            />
          </div>

          <div className="steps__contact-field" style={{ marginTop: "2rem" }}>
            <label className="steps__field-label !mb-[0]">Phone Number</label>
            <input
              type="tel"
              className="steps__input steps__input--rect"
              placeholder="(555) 000-0000"
              value={data.phone || ""}
              onChange={(e) => onChange({ phone: e.target.value })}
            />
          </div>

          <div className="steps__contact-field" style={{ marginTop: "2rem" }}>
            <label className="steps__field-label !mb-[0]">Email Address</label>
            <input
              type="email"
              className="steps__input steps__input--rect"
              placeholder="you@example.com"
              value={data.email || ""}
              onChange={(e) => onChange({ email: e.target.value })}
            />
          </div>

          <div className="steps__contact-field" style={{ marginTop: "2rem" }}>
            <label className="steps__field-label !mb-[0]">
              Anything else we should know?
            </label>
            <textarea
              name=""
              id=""
              rows={5}
              placeholder="Add any details that might affect the offer..."
              className="steps__input steps__input--rect"
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
}
