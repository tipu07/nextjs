import Link from "next/link";
import Contain from "./contain";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Section from "./section";

const CHECKLIST_ITEMS = [
  {
    icon: "/images/checklist-licence.png",
    title: "Valid Photo ID",
    desc: "Bring along a government-issued ID (like your driver's license or passport) so we can verify your identity.",
  },
  {
    icon: "/images/checklist-registration.png",
    title: "Motorcycle Registration",
    desc: "Your current registration helps us confirm the details of your bike, making the offer and sale process quicker and smoother.",
  },
  {
    icon: "/images/checklist-licence-plate.png",
    title: "Title (If Available)",
    desc: "Don't worry if you can't find your title or if it's held by your lender — we can still move forward.",
  },
  {
    icon: "/images/checklist-car-key.png",
    title: "All Keys and Remotes",
    desc: "If you have multiple keys or remotes for your motorcycle, bring them along! Extra sets are a plus.",
  },
  {
    icon: "/images/checklist-brochure.png",
    title: "Manual and Booklets",
    desc: "If you still have the original owner's manual or any brochures that came with your motorcycle, bring them along.",
  },
  {
    icon: "/images/checklist-service.png",
    title: "Maintenance Records",
    desc: "Got a history of oil changes, tune-ups, or major repairs? Bring those records. It will help to boost its value.",
  },
];

export default function ChecklistSection() {
  return (
    <Section id="checklist">
      <Contain>
        <div className="checklist__header">
          <Heading as="h2" className="checklist__title">
            Your Quick Checklist for a Smooth Sale
          </Heading>
          <Link href="/quote" className="cta__btn cta__btn--primary">
            Get Your Offer Now
          </Link>
        </div>

        <div className="checklist__grid">
          {CHECKLIST_ITEMS.map((item, idx) => (
            <div key={idx} className="checklist__card">
              <img
                src={item.icon}
                alt=""
                className="checklist__icon"
                aria-hidden="true"
              />
              <Heading as="h4" className="checklist__card-title">
                {item.title}
              </Heading>
              <Paragraph className="checklist__card-desc">{item.desc}</Paragraph>
            </div>
          ))}
        </div>
      </Contain>
    </Section>
  );
}
