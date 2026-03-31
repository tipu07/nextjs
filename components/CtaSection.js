export default function CtaSection() {
  return (
    <section className="cta-section" aria-label="Ready to sell your motorcycle">
      <div style={{position:'absolute',inset:0,height:'693px',background:'linear-gradient(135deg,#f5f5f5 0%,#ebebeb 100%)',zIndex:0}}></div>
      
      <div className="cta__inner">
        <div className="cta__text">
          <h2 className="cta__heading">Ready to sell your motorcycle the smart way?</h2>
          <p className="cta__desc">Whether you've got questions or you're ready to<br/>get started, we're here to help.</p>
          <div className="cta__buttons">
            <button className="cta__btn cta__btn--primary" type="button">GET STARTED</button>
            <button className="cta__btn cta__btn--dark" type="button">FAQ</button>
            <button className="cta__btn cta__btn--white" type="button">CONTACT US</button>
          </div>
        </div>

        <div className="cta__visual" aria-hidden="true">
          <div className="cta__circle-gold"></div>
          <div className="cta__circle-red"></div>
          <div className="cta__phone">
            <div className="cta__phone-shell">
              <div className="cta__phone-screen">
                <div className="cta__phone-top">
                  <svg width="100" height="28" viewBox="0 0 100 28" fill="none">
                    <text x="0" y="20" fontFamily="Poppins,sans-serif" fontWeight="800" fontSize="13" fill="white">Moto</text>
                    <text x="40" y="20" fontFamily="Poppins,sans-serif" fontWeight="800" fontSize="13" fill="rgba(255,255,255,.75)">Buyers</text>
                  </svg>
                </div>
                <div className="cta__phone-map">
                  <svg style={{position:'absolute',inset:0,width:'100%',height:'100%'}} viewBox="0 0 266 340" fill="none" preserveAspectRatio="xMidYMid slice">
                    <rect width="266" height="340" fill="#dde8f2"/>
                    <line x1="0" y1="80"  x2="266" y2="80"  stroke="white" strokeWidth="9"/>
                    <line x1="0" y1="170" x2="266" y2="170" stroke="white" strokeWidth="7"/>
                    <line x1="0" y1="250" x2="266" y2="250" stroke="white" strokeWidth="6"/>
                    <line x1="66"  y1="0" x2="66"  y2="340" stroke="white" strokeWidth="8"/>
                    <line x1="156" y1="0" x2="156" y2="340" stroke="white" strokeWidth="7"/>
                    <line x1="218" y1="0" x2="218" y2="340" stroke="white" strokeWidth="5"/>
                    <rect x="10" y="90" width="46" height="70" rx="3" fill="#c6d8ea"/>
                    <rect x="74" y="90" width="72" height="70" rx="3" fill="#c6d8ea"/>
                    <rect x="164" y="90" width="44" height="70" rx="3" fill="#c6d8ea"/>
                    <rect x="10" y="178" width="46" height="62" rx="3" fill="#c6d8ea"/>
                    <rect x="74" y="178" width="72" height="62" rx="3" fill="#c6d8ea"/>
                    <path d="M133 110 C120 110 110 120 110 132 C110 148 133 170 133 170 C133 170 156 148 156 132 C156 120 146 110 133 110Z" fill="#ee2524"/>
                    <circle cx="133" cy="132" r="8" fill="white"/>
                    <path d="M80 164 C75 164 70 169 70 174 C70 179 80 190 80 190 C80 190 90 179 90 174 C90 169 85 164 80 164Z" fill="#ee2524" fillOpacity=".65"/>
                    <circle cx="80" cy="174" r="4" fill="white"/>
                    <path d="M200 88 C195 88 190 93 190 98 C190 103 200 114 200 114 C200 114 210 103 210 98 C210 93 205 88 200 88Z" fill="#ee2524" fillOpacity=".55"/>
                    <circle cx="200" cy="98" r="4" fill="white"/>
                  </svg>
                </div>
                <div className="cta__phone-bottom">
                  <div className="cta__phone-get-btn">GET MY OFFER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
