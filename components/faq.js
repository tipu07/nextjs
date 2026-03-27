import React, { useState, useRef } from "react"
import { gsap } from "gsap"

import Text from "../components/text"

export default function Faq({ data }) {
	const [openAccordion, setOpenAccordion] = useState(null)
	const accordionRefs = useRef([])
	const handleAccordionClick = (i) => {
		console.log(i)
		if (i === openAccordion) {
			gsap.to(accordionRefs.current[i].querySelector(".accordion__details"), {
				height: 0,
				duration: 0.5,
				ease: "power1.inOut",
				onComplete: () => setOpenAccordion(null),
			})
			console.log(openAccordion)
		} else {
			if (openAccordion !== null) {
				gsap.to(
					accordionRefs.current[openAccordion].querySelector(
						".accordion__details"
					),
					{
						height: 0,
						duration: 0.5,
						ease: "power1.inOut",
					}
				)
			}
			setOpenAccordion(i)
			gsap.fromTo(
				accordionRefs.current[i].querySelector(".accordion__details"),
				{ height: 0 },
				{
					height: "auto",
					duration: 0.5,
					ease: "power1.inOut",
				}
			)
		}
	}

	return (
		<>
			<div className="faq_block">
				{data?.map((val, i) => {
					return (
						<div
							className={`faq_item ${openAccordion === i ? "open" : ""}`}
							key={i}
							ref={(el) => (accordionRefs.current[i] = el)}
						>
							<div
								className="accordion__header"
								onClick={() => handleAccordionClick(i)}
							>
								<div className="h4">
									<Text string={val?.title} />
								</div>
							</div>
							<div className="accordion__details">
								<div dangerouslySetInnerHTML={{ __html: val?.detail }} />
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
