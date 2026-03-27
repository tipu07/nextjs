"use client"

import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

import Link from "next/link"
import Faq from "@/components/components/faq"
import Layout from "../components/layout"

import http from "../helpers/http"
import Text from "../components/text"
import { cmsFileUrl } from "../helpers/helpers"

export const getServerSideProps = async () => {
	const result = await http
		.get("web_development")
		.then((response) => response.data)
		.catch((error) => error.response.data.message)

	return { props: { result } }
}

export default function WebsiteDevelopment({ result }) {
	const { page_title, meta_desc, content, why_us, web_faqs } = result
	const chooseRef = useRef(null)

	useLayoutEffect(() => {
		if (!chooseRef.current) return

		const { ScrollTrigger } = require("gsap/ScrollTrigger")
		gsap.registerPlugin(ScrollTrigger)

		const wrapper = chooseRef.current.querySelector(".wrapper")
		if (!wrapper) return

		const scrollAmount = wrapper.scrollWidth - wrapper.clientWidth

		// Pin the section while horizontal scroll happens
		ScrollTrigger.create({
			trigger: chooseRef.current,
			start: "top top",
			end: "+=" + scrollAmount,
			pin: true,
			scrub: true,
			invalidateOnRefresh: true,
			// markers: true,
		})

		// Horizontal scroll animation
		gsap.to(wrapper, {
			x: () => -scrollAmount,
			ease: "none",
			scrollTrigger: {
				trigger: chooseRef.current,
				start: "top top",
				end: "+=" + scrollAmount,
				scrub: true,
				invalidateOnRefresh: true,
				// markers: true,
			},
		})

		return () => ScrollTrigger.getAll().forEach((t) => t.kill())
	}, [])
	return (
		<>
			<Layout page_title={page_title} meta_desc={meta_desc}>
				<section id="services">
					<div className="top_block">
						<div className="contain">
							<div className="content">
								<h1 className="h1">
									<Text string={content?.banner_heading} />
								</h1>
								<div className="icon_text">
									<img src="/images/icon/icon_development.svg" alt="" />
									<div className="h5 !mb-[0] w-full">
										<Text string={content?.banner_text} />
									</div>
								</div>
							</div>
							<div className="wrapper">
								<div className="text">
									<Text string={content?.banner_desc} />
								</div>
								<div className={`video`}>
									<img src="/images/wooden-desk-near-window.webp" alt="" />
									<button
										type="button"
										// onClick={() => togglePlay(i)}
										style={{
											backgroundImage: "url('/images/play_icon.svg')",
											// activeIndex === i
											// ? "url('/images/pause_icon.svg')"
											// : "url('/images/play_icon.svg')",
										}}
									></button>
								</div>
							</div>
						</div>
					</div>
					<div className="choose" ref={chooseRef}>
						<div className="contain">
							<div className="out_wrapper">
								<div className="content text-center">
									<h2 className="h2">
										{/* <Text string={content?.section1_heading} /> */}
										Complete Solutions: Web, UI/UX, API, Support, Marketing, and
										Mobile Apps
									</h2>
								</div>
								<div className="wrapper">
									{why_us?.map((data, i) => {
										return (
											<div key={i} className="column flex">
												<div className="inner w-full">
													<div className="icon">
														<img
															src={cmsFileUrl(data?.image, "images")}
															alt={data?.title}
														/>
													</div>
													<div className="text">
														<div className="h5">
															<Text string={data?.title} />
														</div>
														<p>
															<Text string={data?.detail} />
														</p>
													</div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					</div>
					<div className="process">
						<div className="contain">
							<div className="content">
								<div className="h2">
									<Text string={content?.section2_heading} />
								</div>
								<div className="list">
									<Text string={content?.section2_text} />
								</div>
								<div className="btn_blk justify-center mt-[3rem]">
									<Link
										href={content?.section2_link_url}
										className="site_btn simple round hover_prime"
									>
										<Text string={content?.section2_link_text} />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="faqs">
						<div className="contain">
							<div className="content text-center">
								<div className="h2">
									<Text string={content?.section3_heading} />
								</div>
								<p>
									<Text string={content?.section3_text} />
								</p>
							</div>
							<Faq data={web_faqs} />
						</div>
					</div>
					<div className="goals">
						<div className="contain">
							<div className="content">
								<div className="h2">
									<Text string={content?.section4_heading} />
								</div>
								<p>
									<Text string={content?.section4_text} />
								</p>
								<div className="btn_blk mt-[3rem]">
									<Link
										href={content?.section4_link_url}
										className="site_btn simple round hover_prime"
									>
										<Text string={content?.section4_link_text} />
									</Link>
								</div>
							</div>
							<div className="wrapper">
								<div className="column flex">
									<div className="inner w-full">
										<div className="h5 !mb-[0]">
											<Text string={content?.sec4_heading1} />
										</div>
									</div>
								</div>
								<div className="column flex">
									<div className="inner w-full">
										<div className="h5 !mb-[0]">
											<Text string={content?.sec4_heading2} />
										</div>
									</div>
								</div>
								<div className="column flex">
									<div className="inner w-full">
										<div className="h5 !mb-[0]">
											<Text string={content?.sec4_heading3} />
										</div>
									</div>
								</div>
								<div className="column flex">
									<div className="inner w-full">
										<div className="h5 !mb-[0]">
											<Text string={content?.sec4_heading4} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
