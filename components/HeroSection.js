import { useState } from "react";
import Section from "./section";
import Contain from "./contain";
import Heading from "./heading";
import Paragraph from "./paragraph";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("vin");

  const switchFormTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Section id="hero">
        <div
          className="hero__bg"
          style={{
            backgroundImage: "url(/images/hero-bg.png)",
          }}
        ></div>
        <Contain>
          <div className="hero__content">
            <Heading className="hero__title">
              Sell Your Motorcycle Just Got Easier
            </Heading>
            <Paragraph className="hero__subtitle">
              Answer a few questions about your motorcycle to get a
              customized offer from one of our appraisers.
            </Paragraph>
          </div>
          <div className="hero__inner">
            <div className="hero__left">
              <div className="hero__bikes" aria-hidden="true">
                <img src="/images/bikes.png" alt="Motorcycles" />
              </div>

              <div
                className="hero__play"
                aria-label="Watch video"
                role="button"
                tabIndex="0"
              >
                <div className="hero__play-inner">
                  <img
                    src="/images/play-button.svg"
                    alt="Play"
                    className="hero__play-icon"
                  />
                </div>
              </div>
            </div>
            <div
              className="hero__form-card"
              role="form"
              aria-label="Get your motorcycle offer"
            >
              <div className="form__tabs-row" role="tablist">
                <div className="form__tabs-bg" aria-hidden="true"></div>
                <div
                  className="form__tab-indicator"
                  style={{ left: activeTab === "vin" ? "0" : "50%" }}
                  aria-hidden="true"
                ></div>
                <button
                  className={`form__tab form__tab--vin ${activeTab === "vin" ? "is-active" : ""}`}
                  role="tab"
                  aria-selected={activeTab === "vin"}
                  id="tab-vin"
                  aria-controls="panel-vin"
                  onClick={() => switchFormTab("vin")}
                >
                  VIN OR PLATE
                </button>
                <button
                  className={`form__tab form__tab--model ${activeTab === "model" ? "is-active" : ""}`}
                  role="tab"
                  aria-selected={activeTab === "model"}
                  id="tab-model"
                  aria-controls="panel-model"
                  onClick={() => switchFormTab("model")}
                >
                  MAKE &amp; MODEL
                </button>
              </div>

              <div className="grid grid-cols-2 gap-[3rem]">
                <div className="col-span-2">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your VIN"
                    aria-label="Enter your VIN number"
                  />
                </div>
                <div className="col-span-2">
                  <div className="form__or">
                    <span className="form__or-line"></span>
                    <span className="form__or-text">OR</span>
                    <span className="form__or-line"></span>
                  </div>
                </div>
                <div className="col-span-2">
                  <input
                    className="input"
                    type="text"
                    placeholder="License Plate"
                    aria-label="Enter your license plate"
                  />
                </div>
                <div className="col-span-2">
                  <select className="input" aria-label="Select your state">
                    <option value="" disabled selected>
                      State
                    </option>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>Arizona</option>
                    <option>California</option>
                    <option>Colorado</option>
                    <option>Florida</option>
                    <option>Georgia</option>
                    <option>Illinois</option>
                    <option>New York</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <button className="form__submit-btn" type="submit">
                    GET YOUR OFFER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Contain>
      </Section>
    </>
  );
}
