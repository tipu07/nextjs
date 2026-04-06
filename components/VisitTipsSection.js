import Contain from "./contain";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Section from "./section";

export default function VisitTipsSection() {
  return (
    <Section id="visit-tips">
      <Contain>
        <div className="visit-tips__grid">

          {/* Top-left: text only */}
          <div className="visit-tips__text">
            <Heading as="h2" className="visit-tips__title">
              Tips to Make Your Visit Even Easier
            </Heading>
            <Paragraph className="visit-tips__desc">
              We want to ensure your visit is as smooth and stress-free as
              possible. Here are a few simple things you can do to help make the
              process faster and easier.
            </Paragraph>
          </div>

          {/* Top-right: card 1 */}
          <div className="visit-tips__card">
            <img src="/images/visit-tips-clean.png" alt="" className="visit-tips__icon" aria-hidden="true" />
            <div className="visit-tips__card-body">
              <Heading as="h4" className="visit-tips__card-title">Clear Out Personal Items</Heading>
              <Paragraph className="visit-tips__card-desc">
                Ensure all personal belongings are removed from your car, including parking permits and garage openers.
              </Paragraph>
            </div>
          </div>

          {/* Bottom-left: card 2 */}
          <div className="visit-tips__card">
            <img src="/images/visit-tips-dry.png" alt="" className="visit-tips__icon" aria-hidden="true" />
            <div className="visit-tips__card-body">
              <Heading as="h4" className="visit-tips__card-title">No Need for a Clean-Up</Heading>
              <Paragraph className="visit-tips__card-desc">
                Don't worry about washing or detailing your car – we'll handle that during the process.
              </Paragraph>
            </div>
          </div>

          {/* Bottom-right: card 3 */}
          <div className="visit-tips__card">
            <img src="/images/visit-tips-requirement.png" alt="" className="visit-tips__icon" aria-hidden="true" />
            <div className="visit-tips__card-body">
              <Heading as="h4" className="visit-tips__card-title">Check Title Requirements</Heading>
              <Paragraph className="visit-tips__card-desc">
                If your title has two names, both may need to be present. Not sure? Give us a call, and we'll assist you.
              </Paragraph>
            </div>
          </div>

        </div>
      </Contain>
    </Section>
  );
}
