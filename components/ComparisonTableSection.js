export default function ComparisonSection() {
  const features = [
    { label: 'Get an offer in minutes', motoBuyers: true, privateSale: false },
    { label: 'We handle Paperwork', motoBuyers: true, privateSale: false },
    { label: 'Secure transactions', motoBuyers: true, privateSale: 'maybe' },
    { label: 'Will try to beat other offers', motoBuyers: true, privateSale: false },
    { label: 'Transparent quote process', motoBuyers: true, privateSale: false },
    { label: 'Full customer support', motoBuyers: true, privateSale: false },
  ];

  return (
    <section className="cmp-section" id="compare" aria-label="Moto Buyers vs Private Sale comparison">
      <div className="cmp__inner">
        <header className="cmp__heading">
          <h2 className="cmp__title">Moto Buyers vs. Private Sale</h2>
          <p className="cmp__subtitle">See why Moto Buyers is the smarter choice</p>
        </header>

        <div className="cmp__podium" aria-hidden="true">
          <svg width="636" height="465" viewBox="0 0 636 465" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="196" y="140" width="200" height="325" rx="8" fill="#ee2524"/>
            <text x="296" y="420" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="16" fill="white">MOTO BUYERS</text>
            <text x="296" y="442" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="400" fontSize="12" fill="rgba(255,255,255,.7)">1ST PLACE</text>
            <rect x="412" y="200" width="160" height="265" rx="8" fill="#aaa"/>
            <text x="492" y="420" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="600" fontSize="14" fill="white">PRIVATE SALE</text>
            <text x="492" y="440" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fill="rgba(255,255,255,.7)">2ND</text>
            <text x="296" y="130" textAnchor="middle" fontSize="36">🏆</text>
          </svg>
        </div>

        <div className="cmp__table" role="table" aria-label="Feature comparison table">
          <div className="cmp__col-highlight" aria-hidden="true"></div>

          <div className="cmp__head" role="row">
            <div className="cmp__head-cell" role="columnheader">Features</div>
            <div className="cmp__head-cell" role="columnheader">Moto Buyers</div>
            <div className="cmp__head-cell" role="columnheader">Private Sale</div>
          </div>

          {features.map((feature, idx) => (
            <div key={idx} className="cmp__row" role="row">
              <div className="cmp__feat" role="cell">
                <svg className="cmp__feat-icon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <rect width="44" height="44" rx="8" fill="#f8f8f8"/>
                  <circle cx="22" cy="22" r="12" stroke="#ee2524" strokeWidth="1.8" fill="none"/>
                </svg>
                <span className="cmp__feat-label">{feature.label}</span>
              </div>
              <div className="cmp__cell" role="cell">
                {feature.motoBuyers ? (
                  <svg className="cmp__check" viewBox="0 0 24 24" fill="none" aria-label="Yes">
                    <polyline points="20 6 9 17 4 12" stroke="#ee2524" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : null}
              </div>
              <div className="cmp__cell" role="cell">
                {feature.privateSale === true ? (
                  <svg className="cmp__check" viewBox="0 0 24 24" fill="none" aria-label="Yes">
                    <polyline points="20 6 9 17 4 12" stroke="#ee2524" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : feature.privateSale === 'maybe' ? (
                  <span className="cmp__maybe">May be</span>
                ) : (
                  <svg className="cmp__cross" viewBox="0 0 24 24" fill="none" aria-label="No">
                    <line x1="18" y1="6" x2="6" y2="18" stroke="#ee2524" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="6" y1="6" x2="18" y2="18" stroke="#ee2524" strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
