import { useState } from 'react';

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState(0);

  const hiwData = [
    {
      title: 'Get your Offer',
      desc:  'Tell us about your motorcycle, and one of our motorcycle appraisers will send you a customized quote.'
    },
    {
      title: 'Schedule a Visit',
      desc:  'Book a convenient time for one of our expert appraisers to inspect your motorcycle in person — no hassle, no pressure.'
    },
    {
      title: 'Get Paid',
      desc:  'Accept the offer and get paid fast — typically within 24–48 hours. We handle all the paperwork so you don\'t have to.'
    }
  ];

  return (
    <section className="hiw-section-wrap" id="how-it-works" aria-label="How it works">
      <h2 className="hiw__heading-abs">How It Works</h2>
      <div className="hiw__section">
        <div className="hiw__section-inner">
          <div className="hiw__tabs" role="tablist" aria-label="How it works steps">
            {[0, 1, 2].map((idx) => (
              <div 
                key={idx}
                className={`hiw__tab ${activeTab === idx ? 'hiw__tab--active' : 'hiw__tab--inactive'}`} 
                role="tab" 
                aria-selected={activeTab === idx} 
                tabIndex="0" 
                onClick={() => setActiveTab(idx)}
                id={`hiw-tab-${idx}`}
              >
                <div className="hiw__tab-bg"></div>
                <svg className="hiw__tab-icon" viewBox="0 0 57 57" fill="none" aria-hidden="true">
                  {idx === 0 && (
                    <>
                      <rect x="6" y="12" width="45" height="36" rx="6" fill="#fee2e2" stroke="#ee2524" strokeWidth="1.5"/>
                      <path d="M14 24h29M14 32h20" stroke="#ee2524" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="45" cy="15" r="10" fill="#ee2524"/>
                      <path d="M42 15l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <rect x="6" y="10" width="45" height="40" rx="6" fill="#f0f0f0" stroke="#aaa" strokeWidth="1.5"/>
                      <path d="M6 20h45" stroke="#aaa" strokeWidth="1.5"/>
                      <circle cx="18" cy="14" r="3.5" fill="#aaa"/>
                      <circle cx="39" cy="14" r="3.5" fill="#aaa"/>
                      <rect x="14" y="27" width="9" height="7" rx="1.5" fill="#ddd"/>
                      <rect x="28" y="27" width="9" height="7" rx="1.5" fill="#ddd"/>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <rect x="6" y="16" width="45" height="30" rx="6" fill="#f0f0f0" stroke="#aaa" strokeWidth="1.5"/>
                      <path d="M6 25h45" stroke="#aaa" strokeWidth="2"/>
                      <rect x="12" y="32" width="14" height="6" rx="2" fill="#ddd"/>
                      <circle cx="41" cy="35" r="5" fill="#ddd"/>
                    </>
                  )}
                </svg>
                <span className="hiw__tab-label">{hiwData[idx].title}</span>
                <div className="hiw__tab-num-wrap">
                  <div className="hiw__tab-ellipse"></div>
                  <span className="hiw__tab-num">{String(idx + 1).padStart(2, '0')}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="hiw__panel" id="hiw-panel" role="tabpanel" aria-labelledby={`hiw-tab-${activeTab}`}>
            <svg className="hiw__panel-img" viewBox="0 0 378 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Motorcycle offer illustration">
              <rect x="96" y="10" width="150" height="280" rx="22" fill="#1a1a1a"/>
              <rect x="106" y="22" width="130" height="258" rx="14" fill="#fff"/>
              <rect x="106" y="22" width="130" height="88" rx="14" fill="#ee2524"/>
              <rect x="106" y="90" width="130" height="190" rx="0" fill="#fff"/>
              <rect x="124" y="18" width="50" height="10" rx="5" fill="#333"/>
              <text x="171" y="52" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="13" fill="white">MotoBuyers</text>
              <text x="171" y="70" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="9" fill="rgba(255,255,255,.75)">Get Your Offer Now</text>
              <rect x="114" y="105" width="114" height="14" rx="4" fill="#f5f5f5"/>
              <rect x="114" y="126" width="114" height="14" rx="4" fill="#f5f5f5"/>
              <rect x="114" y="147" width="114" height="14" rx="4" fill="#f5f5f5"/>
              <rect x="114" y="175" width="114" height="18" rx="6" fill="#ee2524"/>
              <text x="171" y="188" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="600" fontSize="8" fill="white">GET YOUR OFFER</text>
              <circle cx="310" cy="70" r="30" fill="#ee2524" fillOpacity=".1"/>
              <circle cx="60" cy="200" r="20" fill="#ee2524" fillOpacity=".08"/>
              <ellipse cx="171" cy="348" rx="95" ry="45" fill="#f5c39a"/>
              <ellipse cx="120" cy="362" rx="22" ry="13" fill="#f5c39a"/>
              <ellipse cx="150" cy="368" rx="22" ry="13" fill="#e8b088"/>
              <ellipse cx="182" cy="370" rx="22" ry="12" fill="#f5c39a"/>
              <ellipse cx="212" cy="366" rx="20" ry="11" fill="#e8b088"/>
              <ellipse cx="236" cy="360" rx="18" ry="10" fill="#f5c39a"/>
            </svg>
            <div className="hiw__panel-body">
              <h3 className="hiw__panel-title" id="hiw-panel-title">{hiwData[activeTab].title}</h3>
              <p className="hiw__panel-desc" id="hiw-panel-desc">{hiwData[activeTab].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
