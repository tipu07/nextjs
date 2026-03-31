export default function TipsSection() {
  const tips = [
    {
      label: 'You enter your VIN or motorcycle',
      desc: 'Just enter your motorcycle\'s VIN, or select it\'s year, make & model.',
    },
    {
      label: 'We check ownership & condition history',
      desc: 'We review your motorcycle\'s history to ensure accurate pricing.',
    },
    {
      label: 'We analyze current market demand & pricing',
      desc: 'Our team compares your motorcycle with similar models currently on the market.',
    },
    {
      label: 'You receive a real, ready-to-go offer',
      desc: 'Get a personalized, no-obligation offer sent straight to your inbox—ready when you are.',
    },
  ];

  return (
    <section className="tips-section" aria-label="How we create your personalized offer">
      <div className="tips__inner">
        <header className="tips__heading">
          <h2 className="tips__title">How we create your personalized offer</h2>
          <p className="tips__subtitle">From VIN to value — our appraisal process is fair</p>
        </header>
        
        <div className="tips__grid">
          {tips.map((tip, idx) => (
            <div key={idx} className="tips__card">
              <svg className={`tips__card-img ${idx === 2 ? 'tips__card-img--sm' : ''} ${idx === 3 ? 'tips__card-img--term' : ''}`} viewBox="0 0 246 150" fill="none" aria-label={`${tip.label} illustration`}>
                <rect x="20" y="30" width="202" height="120" rx="12" fill="white" fillOpacity=".15" stroke="white" strokeOpacity=".3" strokeWidth="1.5"/>
                <circle cx="210" cy="40" r="20" fill="white" fillOpacity=".15"/>
                <text x="210" y="47" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="16" fill="white">✓</text>
              </svg>
              <div className="tips__card-body">
                <p className="tips__card-label">{tip.label}</p>
                <p className="tips__card-desc">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="tips__cta">
          <button className="tips__cta-btn" type="button">LEARN MORE ABOUT OUR APPRAISALS</button>
        </div>
      </div>
    </section>
  );
}
