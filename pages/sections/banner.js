import React from "react"
import Text from "@/components/components/text"
import { cmsFileUrl } from "@/components/helpers/helpers"

export default function Banner({ content, projects }) {
	/* useEffect(() => {
		if (typeof window === "undefined") return

		const ring = document.querySelector(".curved_carousel__ring")
		const slides = ring?.querySelectorAll(".curved_carousel__slide")
		const stage = document.querySelector(".curved_carousel__stage")

		if (!ring || !slides?.length || !stage) return

		const stageWidth = stage.offsetWidth
		const stageHeight = stage.offsetHeight

		const totalSlides = slides.length
		const angleStep = 360 / totalSlides
		const radius = stageWidth / (2 * Math.tan(Math.PI / totalSlides))

		slides.forEach((slide, i) => {
			slide.style.width = `${stageWidth}px`
			slide.style.height = `${stageHeight}px`
			const angle = angleStep * i
			slide.style.transform = `
      rotateY(${angle}deg)
      translateZ(${radius}px)
    `
		})

		let currentAngle = 0
		let isPaused = false
		let frameId = null

		const rotateRing = () => {
			if (!isPaused) {
				ring.style.transform = `rotateY(${currentAngle}deg)`
				currentAngle += 0.1
			}
			frameId = requestAnimationFrame(rotateRing)
		}

		// --- FIXED HANDLERS ---
		const handleEnter = () => (isPaused = true)
		const handleLeave = () => (isPaused = false)

		slides.forEach((slide) => {
			slide.addEventListener("mouseenter", handleEnter)
			slide.addEventListener("mouseleave", handleLeave)
		})

		rotateRing()

		return () => {
			cancelAnimationFrame(frameId)

			slides.forEach((slide) => {
				slide.removeEventListener("mouseenter", handleEnter)
				slide.removeEventListener("mouseleave", handleLeave)
			})
		}
	}, []) */

	return (
		<>
			{/* {projects?.map((project, i) => (
				<div className="project_blk" key={i}>
					<div className="inner">
						<img
							src={cmsFileUrl(project?.image1, "projects")}
							alt={project?.title}
						/>
						<div className="overlay">
							<div className="title">
								<Text string={project?.title} />
							</div>
							<div className="btn_blk">
								<Link href={project.btn_link} className="view_btn link">
									<span>View Project</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			))} */}
			<section id="banner">
				<div className="content text-center">
					<h1 className="h1">
						<Text string={content?.banner_heading} />
					</h1>
					<p>
						<Text string={content?.banner_text} />
					</p>
				</div>
				<div className="curved_carousel">
					<div
						className="curved_carousel__stage"
						style={{
							width: "33.8095rem",
							height: "60rem",
						}}
					>
						<div
							className="curved_carousel__ring"
							style={{
								transform: "rotateY(0deg)",
								transition: "all linear 0.3s",
							}}
						>
							{projects?.length > 0 &&
								Array.from({ length: 20 }).map((_, i) => {
									const project = projects[i % projects.length]
									return (
										<div className="curved_carousel__slide" key={i}>
											<img
												width={450}
												height={600}
												src={cmsFileUrl(project?.image1, "projects")}
												className="curved_carousel__media"
												alt={project?.title || `Project ${i + 1}`}
											/>
											<img
												width={450}
												height={600}
												src={cmsFileUrl(project?.image2, "projects")}
												className="curved_carousel__media_hover"
												alt={project?.title || `Project ${i + 1}`}
											/>
										</div>
									)
								})}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
