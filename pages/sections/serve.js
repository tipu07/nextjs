import React from "react"
import Text from "@/components/components/text"
import Link from "next/link"

export default function Serve({ content }) {
	/* useEffect(() => {
		if (typeof window === "undefined") return

		const serveCtx = gsap.context(() => {
			const { ScrollTrigger } = require("gsap/ScrollTrigger")
			gsap.registerPlugin(ScrollTrigger)

			const serve = document.querySelector("#serve")
			const wrapper = document.querySelector("#serve .wrapper")
			const panels = gsap.utils.toArray("#serve .wrapper .column")
			const firstColumn = panels[0]

			if (!serve || !wrapper || !panels.length || !firstColumn) return

			// ✅ Pin only the wrapper — not the whole section
			let pinTrigger = ScrollTrigger.create({
				trigger: serve,
				pin: true,
				pinSpacing: true,
				start: () => {
					const rem = parseFloat(
						getComputedStyle(document.documentElement).fontSize
					)
					const offset = 5 * rem // 5rem
					const rect = firstColumn.getBoundingClientRect()
					const scrollY = window.scrollY || window.pageYOffset
					const elementBottom = rect.top + scrollY + rect.height
					return elementBottom + offset - window.innerHeight
				},
				end: () => "+=" + (wrapper.scrollWidth - wrapper.clientWidth),
				anticipatePin: 1,
				invalidateOnRefresh: true,
				// markers: true,
			})

			// 🔹 Horizontal scroll synced with wrapper pinning
			gsap.to(panels, {
				x: () => -(wrapper.scrollWidth - wrapper.clientWidth),
				ease: "none",
				scrollTrigger: {
					trigger: serve, // pinning element
					start: () => pinTrigger.start,
					end: () => pinTrigger.end - 500,
					scrub: true,
					invalidateOnRefresh: true,
					// markers: true,
				},
			})
		}, "#serve")

		return () => serveCtx.revert()
	}, []) */

	return (
		<>
			<section id="serve">
				<div className="contain">
					<div className="content">
						<div className="h1 fw_700">
							<Text string={content?.section1_heading} />
						</div>
						<div className="h4">
							Relevés 3D, scan laser et <br /> modélisation BIM en Suisse
							romande
						</div>
						<p className="fw_500">
							We have created a quality product that will be convenient for
							developers to use. The main advantage is a clean, correct and easy
							to understand code.
						</p>
					</div>
					<div className="wrapper">
						<div className="column flex">
							<div className="inner w-full">
								<div className="image">
									<img src="/images/icon/icon_development.svg" alt="" />
								</div>
								<div className="title">Website development</div>
								<p>
									We provide small to medium sized businesses with a full range
									of Web Services including high quality Custom Website Design,
									Website Development and Search Marketing services. Our clients
									range from small start-up businesses, to sizeable, brand
									recognisable organisations. Whatever your business, we will
									help it to perform better just like we've done for our
									clients.
								</p>
								<div className="btn_blk mt-auto">
									<Link
										href="/website-development"
										className="link_btn"
										aria-label="Website development"
									>
										Explore More
									</Link>
								</div>
							</div>
						</div>
						<div className="column flex">
							<div className="inner w-full">
								<div className="image">
									<img src="/images/icon/icon_design.svg" alt="" />
								</div>
								<div className="title">Ui/Ux design</div>
								<p>
									We provide small to medium sized businesses with a full range
									of Web Services including high quality Custom Website Design,
									Website Development and Search Marketing services. Our clients
									range from small start-up businesses, to sizeable, brand
									recognisable organisations. Whatever your business, we will
									help it to perform better just like we've done for our
									clients.
								</p>
								<div className="btn_blk mt-auto">
									<Link
										href="/ui-ux"
										className="link_btn"
										aria-label="Ui/Ux design"
									>
										Explore More
									</Link>
								</div>
							</div>
						</div>
						<div className="column flex">
							<div className="inner w-full">
								<div className="image">
									<img src="/images/icon/icon_api.svg" alt="" />
								</div>
								<div className="title">API development</div>
								<p>
									Welcome to HeroSolutions's API Development Services. In
									today's interconnected digital landscape, APIs (Application
									Programming Interfaces) play a critical role in enabling
									seamless communication between different software systems. Our
									team of experts is here to help you design, build, and
									maintain robust APIs that drive innovation and enhance your
									digital ecosystem.
								</p>
								<div className="btn_blk mt-auto">
									<Link
										href="/api-development"
										className="link_btn"
										aria-label="API development"
									>
										Explore More
									</Link>
								</div>
							</div>
						</div>
						<div className="column flex">
							<div className="inner w-full">
								<div className="image">
									<img src="/images/icon/icon_support.svg" alt="" />
								</div>
								<div className="title">Support and maintenance</div>
								<p>
									Welcome to HeroSolutions's Support and Maintenance Services.
									We understand that a successful online presence requires not
									only a well-designed website but also consistent support and
									proactive maintenance to keep it running smoothly. We're here
									to ensure that your web assets are always in top shape.
								</p>
								<div className="btn_blk mt-auto">
									<Link
										href="/support_maintenance"
										className="link_btn"
										aria-label="Support and maintenance"
									>
										Explore More
									</Link>
								</div>
							</div>
						</div>
						<div className="column flex">
							<div className="inner w-full">
								<div className="image">
									<img src="/images/icon/icon_marketing.svg" alt="" />
								</div>
								<div className="title">Digital marketing</div>
								<p>
									In today's digital age, having a strong online presence is
									crucial for the success of your business. Our team of experts
									is here to help you navigate the complex world of digital
									marketing and achieve your goals.
								</p>
								<div className="btn_blk mt-auto">
									<Link
										href="/digital-marketing"
										className="link_btn"
										aria-label="Digital marketing"
									>
										Explore More
									</Link>
								</div>
							</div>
						</div>
						<div className="column flex">
							<div className="inner w-full">
								<div className="image">
									<img src="/images/icon/icon_application.svg" alt="" />
								</div>
								<div className="title">Mobile Application development</div>
								<p>
									Welcome to our Mobile Application Development Services page!
									We specialize in creating cutting-edge mobile apps that cater
									to your unique business needs and user requirements. With a
									team of experienced developers, designers, and strategists, we
									are committed to delivering top-notch mobile solutions.
								</p>
								<div className="btn_blk mt-auto">
									<Link
										href="/app-development"
										className="link_btn"
										aria-label="Mobile Application development"
									>
										Explore More
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
