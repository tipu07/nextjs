import Head from "next/head";
import { useState } from "react";
import Contain from "../components/contain";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";
import Step3b from "../components/steps/Step3b";
import Step4 from "../components/steps/Step4";
import Step4b from "../components/steps/Step4b";
import Step4c from "../components/steps/Step4c";
import Step4d from "../components/steps/Step4d";
import Step5 from "../components/steps/Step5";
import Step6 from "../components/steps/Step6";
import Step7 from "../components/steps/Step7";

const TOTAL_STEPS = 11;
const PROGRESS = [9, 18, 27, 38, 49, 58, 67, 76, 85, 93, 100];

export default function StepsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const progress = PROGRESS[currentStep - 1];

  const bikeLabel =
    formData.year && formData.make && formData.model
      ? `${formData.year} • ${formData.make} • ${formData.model}`
      : formData.vin
        ? `VIN: ${formData.vin}`
        : "Your Motorcycle";

  const continueBtnLabel =
    currentStep === 10 ? "SUBMIT FOR APPRAISAL" : "CONTINUE";

  return (
    <>
      <Head>
        <title>Get My Offer – MotoBuyers</title>
        <meta
          name="description"
          content="A simple process. A real offer. A smooth ride to instant cash."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main id="steps__page">
        {/* Progress Bar */}
        <div className="steps__progress-bar">
          <Contain>
            <div className="steps__progress-track">
              <div
                className="steps__progress-fill"
                style={{ width: `${progress}%` }}
              />
              <div
                className="steps__progress-bike"
                style={{ left: `${progress}%` }}
              >
                <img src="/images/sakootar.png" alt="motorcycle" />
              </div>
            </div>
          </Contain>
        </div>

        {/* Step Content */}
        <Contain>
          {currentStep === 1 && (
            <Step1 data={formData} onChange={handleChange} />
          )}
          {currentStep === 2 && (
            <Step2
              data={formData}
              onChange={handleChange}
              bikeLabel={bikeLabel}
            />
          )}
          {currentStep === 3 && (
            <Step3
              data={formData}
              onChange={handleChange}
              bikeLabel={bikeLabel}
            />
          )}
          {currentStep === 4 && (
            <Step3b
              data={formData}
              onChange={handleChange}
              bikeLabel={bikeLabel}
            />
          )}
          {currentStep === 5 && (
            <Step4
              data={formData}
              onChange={handleChange}
              bikeLabel={bikeLabel}
            />
          )}
          {currentStep === 6 && (
            <Step4b
              data={formData}
              onChange={handleChange}
              bikeLabel={bikeLabel}
            />
          )}
          {currentStep === 7 && (
            <Step4c
              data={formData}
              onChange={handleChange}
              bikeLabel={bikeLabel}
            />
          )}
          {currentStep === 8 && (
            <Step4d
              data={formData}
              onChange={handleChange}
              bikeLabel={bikeLabel}
            />
          )}
          {currentStep === 9 && (
            <Step5
              data={formData}
              onChange={handleChange}
              bikeLabel={bikeLabel}
            />
          )}
          {currentStep === 10 && (
            <Step6
              data={formData}
              onChange={handleChange}
              bikeLabel={bikeLabel}
            />
          )}
          {currentStep === 11 && <Step7 bikeLabel={bikeLabel} />}
        </Contain>

        {/* Footer Nav */}
        <div className="steps__footer-nav">
          <Contain>
            <div className="steps__footer-nav-inner">
              {currentStep > 1 ? (
                <button className="steps__btn-back" onClick={goBack}>
                  BACK
                </button>
              ) : (
                <span />
              )}
              {currentStep < TOTAL_STEPS && (
                <button className="steps__btn-continue" onClick={goNext}>
                  {continueBtnLabel}
                </button>
              )}
            </div>
          </Contain>
        </div>
      </main>
    </>
  );
}
