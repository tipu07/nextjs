import { useState } from 'react';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('vin');

  const switchFormTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="hero" aria-label="Hero banner">
      <div className="hero__bg"></div>
      <div className="hero__bg-pattern" aria-hidden="true"></div>

      <div className="hero__inner">
        <div className="hero__heading-block">
          <h1 className="hero__title">Sell Your Motorcycle<br/>Just Got Easier</h1>
          <p className="hero__subtitle">Answer a few questions about your motorcycle to get a<br/>customized offer from one of our appraisers.</p>
        </div>

        <div className="hero__bikes" aria-hidden="true">
          <img src="/images/bikes.png" alt="Motorcycles" />
        </div>

        <div className="hero__play" aria-label="Watch video" role="button" tabIndex="0">
          <div className="hero__play-inner">
            <img src="/images/play-button.svg" alt="Play" className="hero__play-icon" />
          </div>
        </div>

        <div className="hero__form-card" role="form" aria-label="Get your motorcycle offer">
          <div className="form__tabs-row" role="tablist">
            <div className="form__tabs-bg" aria-hidden="true"></div>
            <div className="form__tab-indicator" style={{left: activeTab === 'vin' ? '0' : '237px'}} aria-hidden="true"></div>
            <button 
              className={`form__tab form__tab--vin ${activeTab === 'vin' ? 'is-active' : ''}`} 
              role="tab" 
              aria-selected={activeTab === 'vin'} 
              id="tab-vin" 
              aria-controls="panel-vin" 
              onClick={() => switchFormTab('vin')}
            >
              VIN OR PLATE
            </button>
            <button 
              className={`form__tab form__tab--model ${activeTab === 'model' ? 'is-active' : ''}`} 
              role="tab" 
              aria-selected={activeTab === 'model'} 
              id="tab-model" 
              aria-controls="panel-model" 
              onClick={() => switchFormTab('model')}
            >
              MAKE &amp; MODEL
            </button>
          </div>

          <div className="form__fields" id="panel-vin" role="tabpanel" aria-labelledby="tab-vin">
            <div className="form__field">
              <div className="form__field-bg" aria-hidden="true"></div>
              <input className="form__input" type="text" placeholder="Enter Your VIN" aria-label="Enter your VIN number" />
            </div>
            <div className="form__or" aria-hidden="true">
              <span className="form__or-line"></span>
              <span className="form__or-text">OR</span>
              <span className="form__or-line"></span>
            </div>
            <div className="form__field form__field--lp">
              <div className="form__field-bg" aria-hidden="true"></div>
              <input className="form__input" type="text" placeholder="License Plate" aria-label="Enter your license plate" />
            </div>
            <div className="form__select-wrap">
              <select className="form__select" aria-label="Select your state">
                <option value="" disabled selected>State</option>
                <option>Alabama</option><option>Alaska</option><option>Arizona</option>
                <option>California</option><option>Colorado</option><option>Florida</option>
                <option>Georgia</option><option>Illinois</option><option>New York</option>
                <option>Texas</option><option>Washington</option>
              </select>
              <svg className="form__select-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" stroke="#888" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="form__submit-row">
            <div className="form__submit-bg" aria-hidden="true"></div>
            <button className="form__submit-btn" type="submit">GET YOUR OFFER</button>
          </div>
        </div>
      </div>
    </section>
  );
}
