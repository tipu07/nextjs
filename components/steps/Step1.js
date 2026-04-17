import { useState, useRef, useEffect } from "react";

function CustomSelect({ value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => String(o) === String(value));

  return (
    <div className="steps__custom-select" ref={ref}>
      <button
        type="button"
        className={`steps__custom-select__trigger${selected ? " steps__custom-select__trigger--has-value" : ""}${open ? " steps__custom-select__trigger--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="steps__custom-select__label">{selected ?? placeholder}</span>
        <span className={`steps__custom-select__chevron${open ? " steps__custom-select__chevron--open" : ""}`}>
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
            <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className="steps__custom-select__dropdown">
          {options.map((opt) => (
            <div
              key={opt}
              className={`steps__custom-select__option${String(opt) === String(value) ? " steps__custom-select__option--selected" : ""}`}
              onMouseDown={() => { onChange(String(opt)); setOpen(false); }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const YEARS = Array.from({ length: 30 }, (_, i) => 2025 - i);
const MAKES = ["Honda", "Yamaha", "Kawasaki", "Suzuki", "Harley-Davidson", "BMW", "Ducati", "KTM", "Triumph", "Royal Enfield"];
const MODELS = ["CBR600RR", "Ninja 650", "MT-07", "GSX-R750", "Sportster", "R1250GS", "Panigale V4", "Duke 390", "Street Triple", "Classic 350"];

function isValidVin(vin) {
  return /^[A-HJ-NPR-Z0-9]{17}$/i.test(vin);
}

function VinErrorModal({ onClose }) {
  return (
    <div className="steps__modal-overlay" onClick={onClose}>
      <div className="steps__modal" onClick={(e) => e.stopPropagation()}>
        <button className="steps__modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="steps__modal-icon steps__modal-icon--warn">
          <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
            <path d="M12 2l2.4 2.4L17 3l1 2.7 2.9.3-.3 2.9L23 11l-1.7 2.4.9 2.8-2.8.9-.3 2.9-2.9-.3L14 22l-2-1.7L10 22l-1.9-2.2-2.9.3-.3-2.9-2.8-.9.9-2.8L1 11l1.7-2.1-.3-2.9 2.9-.3L6.9 3l2.7 1z" stroke="var(--color-red)" strokeWidth="1.8" strokeLinejoin="round"/>
            <line x1="12" y1="8" x2="12" y2="13" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="16.5" r="1" fill="var(--color-red)"/>
          </svg>
        </div>
        <h2 className="steps__modal-title">Uh-Oh, We Can&apos;t Decode This VIN Number</h2>
        <div className="steps__modal-rules">
          <p><span className="steps__modal-check">✓</span> A VIN cannot include letters I, O, Q</p>
          <p><span className="steps__modal-check">✓</span> A VIN is made up of 17 characters</p>
        </div>
        <p className="steps__modal-hint">Please try again or enter make &amp; model instead</p>
      </div>
    </div>
  );
}

function VinHelpModal({ onClose }) {
  return (
    <div className="steps__modal-overlay" onClick={onClose}>
      <div className="steps__modal steps__modal--wide" onClick={(e) => e.stopPropagation()}>
        <button className="steps__modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
        <h2 className="steps__modal-title steps__modal-title--left">Where to find your VIN?</h2>
        <p className="steps__modal-subtitle">
          You can usually find the VIN on the steering neck, engine casing, or registration documents.
        </p>
        <div className="steps__vin-cards">
          <div className="steps__vin-card">
            <p className="steps__vin-card-title">Steering neck</p>
            <p className="steps__vin-card-desc">Stamped on the front of the frame, just behind the handlebars.</p>
            <img src="/images/bikes.png" alt="Steering neck location" className="steps__vin-card-img" />
          </div>
          <div className="steps__vin-card">
            <p className="steps__vin-card-title">Engine casing</p>
            <p className="steps__vin-card-desc">Engraved on the side of the engine</p>
            <img src="/images/bikes.png" alt="Engine casing location" className="steps__vin-card-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Step1({ data, onChange }) {
  const [activeTab, setActiveTab] = useState(data.tab || "vin");
  const [showVinError, setShowVinError] = useState(false);
  const [showVinHelp, setShowVinHelp] = useState(false);

  const handleTab = (tab) => {
    setActiveTab(tab);
    onChange({ tab });
  };

  const vinValue = data.vin || "";
  const vinValid = isValidVin(vinValue);

  const handleVinBlur = () => {
    if (vinValue && !vinValid) {
      setShowVinError(true);
    }
  };

  return (
    <section className="steps__section">
      <h1 className="steps__title">Let&apos;s start with your motorcycle</h1>
      <p className="steps__subtitle">
        Use your VIN for the fastest path, or enter the year and make if you do not have it nearby.
      </p>

      <div className="steps__single-col">
        <div className="steps__tabs">
          <button
            className={`steps__tab ${activeTab === "vin" ? "steps__tab--active" : ""}`}
            onClick={() => handleTab("vin")}
          >
            VIN
          </button>
          <button
            className={`steps__tab ${activeTab === "make" ? "steps__tab--active" : ""}`}
            onClick={() => handleTab("make")}
          >
            Year and Make
          </button>
        </div>

        {activeTab === "vin" ? (
          <div className="steps__tab-content">
            <label className="steps__field-label !mb-[0]">Enter your VIN</label>
            <div className="steps__input-icon-wrap">
              <input
                type="text"
                className={`steps__input${vinValid ? " steps__input--valid" : ""}`}
                placeholder="17 character VIN"
                value={vinValue}
                onChange={(e) => onChange({ vin: e.target.value.toUpperCase() })}
                onBlur={handleVinBlur}
                maxLength={17}
              />
              {vinValid && (
                <span className="steps__input-valid-icon">
                  <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                    <circle cx="12" cy="12" r="10" fill="#22c55e"/>
                    <polyline points="7,12 10.5,15.5 17,9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </div>

            <button
              type="button"
              className="steps__vin-link"
              onClick={() => setShowVinHelp(true)}
            >
              Where to find your VIN
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
              </svg>
            </button>

            {vinValid && (
              <>
                <label className="steps__field-label !mb-[0]" style={{ marginTop: "1rem" }}>
                  Vehicle identified
                </label>
                <input
                  type="text"
                  className="steps__input steps__input--readonly"
                  value={data.vehicleIdentified || ""}
                  readOnly
                  placeholder="Decoding VIN..."
                />

                <label className="steps__field-label !-mb-[10px]" style={{ marginTop: "1.2rem" }}>
                  Model
                </label>
                <p className="steps__field-hint !mb-[0]">Pre-filled from VIN — update if needed</p>
                <input
                  type="text"
                  className="steps__input"
                  value={data.model || ""}
                  onChange={(e) => onChange({ model: e.target.value })}
                  placeholder="Enter model"
                />
              </>
            )}

          </div>
        ) : (
          <div className="steps__tab-content">
            <label className="steps__field-label !mb-[0]">Year</label>
            <CustomSelect
              value={data.year || ""}
              onChange={(val) => onChange({ year: val })}
              options={YEARS}
              placeholder="Select Year"
            />

            <label className="steps__field-label !mb-[0]" style={{ marginTop: "1.2rem" }}>Make</label>
            <CustomSelect
              value={data.make || ""}
              onChange={(val) => onChange({ make: val })}
              options={MAKES}
              placeholder="Select Make"
            />

            <label className="steps__field-label !mb-[0]" style={{ marginTop: "1.2rem" }}>Model</label>
            <CustomSelect
              value={data.model || ""}
              onChange={(val) => onChange({ model: val })}
              options={MODELS}
              placeholder="Select Model"
            />
          </div>
        )}
      </div>

      {showVinError && <VinErrorModal onClose={() => setShowVinError(false)} />}
      {showVinHelp && <VinHelpModal onClose={() => setShowVinHelp(false)} />}
    </section>
  );
}
