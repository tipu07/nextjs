import React, { useRef, useState } from "react"
import Text from "@/components/components/text"
import { cmsFileUrl } from "@/components/helpers/helpers"

export default function Folio({ content, testimonials }) {
	/* useEffect(() => {
		if (typeof window === "undefined") return

		const folioCtx = gsap.context(() => {
			const { ScrollTrigger } = require("gsap/ScrollTrigger")
			gsap.registerPlugin(ScrollTrigger)

			const folio = document.querySelector("#folio")
			const wrapper = document.querySelector("#folio .wrapper")
			const panels = gsap.utils.toArray("#folio .folio_blk")
			const firstColumn = panels[0]

			if (!folio || !wrapper || !panels.length || !firstColumn) return

			// 🔹 First: pin #folio only when first column bottom hits viewport bottom
			let pinTrigger = ScrollTrigger.create({
				trigger: folio,
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

			// 🔹 Second: horizontal scroll synced to the pin
			gsap.to(panels, {
				x: () => -(wrapper.scrollWidth - wrapper.clientWidth),
				ease: "none",
				scrollTrigger: {
					trigger: folio, // tie to #folio pinning
					start: () => pinTrigger.start, // align with same start
					end: () => pinTrigger.end, // align with same end
					scrub: true,
					invalidateOnRefresh: true,
					// markers: true,
				},
			})
		}, "#folio")

		return () => folioCtx.revert()
	}, []) */

	const videoRefs = useRef([]) // store refs for all videos
	const [activeIndex, setActiveIndex] = useState(null)

	const togglePlay = (index) => {
		const currentVideo = videoRefs.current[index]

		if (!currentVideo) return

		// If clicking the same video
		if (activeIndex === index) {
			if (!currentVideo.paused) {
				currentVideo.pause()
				setActiveIndex(null)
			} else {
				currentVideo.play()
				setActiveIndex(index)
			}
		} else {
			// Pause all other videos
			videoRefs.current.forEach((v, i) => {
				if (v && i !== index) v.pause()
			})

			// Play the clicked one
			currentVideo.play()
			setActiveIndex(index)
		}
	}
	/* useEffect(() => {
		if (typeof window === "undefined") return
		let ctx = gsap.context(() => {
			const { ScrollTrigger } = require("gsap/ScrollTrigger")
			gsap.registerPlugin(ScrollTrigger)

			const panels = gsap.utils.toArray("#folio .folio_blk")
			if (!panels.length) return

			gsap.to(panels, {
				xPercent: -100 * (panels.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: "#folio .wrapper",
					start: "top-=100 top",
					end: () => "+=" + panels.length * window.innerHeight,
					scrub: true,
					pin: true,
					anticipatePin: 1,
					invalidateOnRefresh: true,
					// markers: true,
				},
			})
		}, "#folio")

		return () => ctx.revert()
	}, []) */
	return (
		<>
			<section id="folio">
				<div className="contain">
					<div className="content">
						<div className="h1">
							<Text string={content?.section2_heading} />
						</div>
					</div>
					<div className="wrapper">
						{testimonials?.map((data, i) => {
							return (
								<div className="folio_blk" key={i}>
									<div
										className={`video ${activeIndex === i ? "played" : null}`}
									>
										<video
											// controls
											ref={(el) => (videoRefs.current[i] = el)} // keep refs
											poster={cmsFileUrl(data?.image, "testimonials")}
											src={cmsFileUrl(data?.video, "testimonials")}
											type="video/mp4"
											// autoPlay
											// muted={false}
										/>
										{/* <img src={cmsFileUrl(data?.image, "testimonials")} alt="" /> */}
										<button
											type="button"
											aria-label="Play Button"
											onClick={() => togglePlay(i)}
											style={{
												backgroundImage:
													activeIndex === i
														? "url('/images/pause_icon.svg')"
														: "url('/images/play_icon.svg')",
											}}
										></button>
									</div>
									<div className="text">
										<img src="/images/comma.svg" alt="" />
										<div className="info">Best Design</div>
										<p>{data?.detail}</p>
										<div className="name">
											<Text string={data?.name} />
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}
