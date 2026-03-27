"use client"

import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import http from "../helpers/http"

import Layout from "../components/layout"
import Link from "next/link"
import SimilarProject from "./sections/similar-project"

export const getServerSideProps = async () => {
	const result = await http
		.get("work")
		.then((res) => res.data)
		.catch((err) => err.response?.data?.message || "Error fetching data")

	return { props: { result } }
}

export default function ProjectDetail({ result }) {
	const launchRef = useRef(null)
	const chooseRef = useRef(null)
	const similarRef = useRef(null)
	const { portfolio } = result

	useLayoutEffect(() => {
		const { ScrollTrigger } = require("gsap/ScrollTrigger")
		gsap.registerPlugin(ScrollTrigger)

		const contexts = []

		// --- Launch Section ---
		if (launchRef.current) {
			const wrapper = launchRef.current.querySelector(".wrapper")
			if (wrapper) {
				contexts.push(
					gsap.context(() => {
						const distance = Math.max(
							wrapper.scrollWidth - wrapper.clientWidth,
							2000
						)
						gsap.fromTo(
							wrapper,
							{ x: 200 },
							{
								x: -distance,
								ease: "none",
								scrollTrigger: {
									trigger: launchRef.current,
									start: "top bottom",
									end: "bottom top",
									scrub: true,
									invalidateOnRefresh: true,
								},
							}
						)
					}, launchRef.current)
				)
			}
		}

		// --- Choose Section ---
		if (chooseRef.current) {
			const wrapper = chooseRef.current.querySelector(".wrapper")
			if (wrapper) {
				const scrollAmount = wrapper.scrollWidth - wrapper.clientWidth
				contexts.push(
					gsap.context(() => {
						ScrollTrigger.create({
							trigger: chooseRef.current,
							start: "top top",
							end: "+=" + scrollAmount,
							pin: true,
							scrub: true,
							invalidateOnRefresh: true,
						})
						gsap.to(wrapper, {
							x: () => -scrollAmount,
							ease: "none",
							scrollTrigger: {
								trigger: chooseRef.current,
								start: "top top",
								end: "+=" + scrollAmount,
								scrub: true,
								invalidateOnRefresh: true,
							},
						})
					}, chooseRef.current)
				)
			}
		}

		// --- Similar Project Section ---
		if (similarRef.current) {
			const wrapper = similarRef.current.querySelector(".wrapper")
			const panels = gsap.utils.toArray(wrapper.querySelectorAll(".column"))
			const firstColumn = panels[0]

			if (wrapper && panels.length && firstColumn) {
				contexts.push(
					gsap.context(() => {
						const getStart = () => {
							const rect = firstColumn.getBoundingClientRect()
							const scrollY = window.scrollY || window.pageYOffset
							const elementBottom = rect.top + scrollY + rect.height
							const rem = parseFloat(
								getComputedStyle(document.documentElement).fontSize
							)
							return elementBottom - window.innerHeight + 5 * rem
						}
						const getEnd = () => wrapper.scrollWidth - wrapper.clientWidth + 200

						ScrollTrigger.create({
							trigger: similarRef.current,
							start: getStart,
							end: () => "+=" + getEnd(),
							pin: true,
							scrub: true,
							invalidateOnRefresh: true,
						})

						gsap.to(panels, {
							x: () => -(wrapper.scrollWidth - wrapper.clientWidth),
							ease: "none",
							scrollTrigger: {
								trigger: similarRef.current,
								start: getStart,
								end: () => "+=" + getEnd(),
								scrub: true,
								invalidateOnRefresh: true,
							},
						})
					}, similarRef.current)
				)
			}
		}

		return () => contexts.forEach((ctx) => ctx.revert())
	}, [])

	const metaInfo = {
		meta_title: "Hero Solutions | Website Design and Development",
		meta_description:
			"We are a leading web agency specializing in web design, development, and digital marketing. Contact us for stunning websites and online solutions.",
		meta_keywords:
			"web agency, web design, creative agency, web development, digital marketing, api development, ui/ux design, mobile application development",
		og_title: "Hero Solutions",
		og_description: "We create stunning websites and digital solutions.",
		og_image: "/images/home_og.png",
		image: "/images/home_og.png",
	}

	return (
		<>
			<Layout meta_info={metaInfo} page_title={"Project Details"}>
				<section id="work_detail">
					<div className="top_block">
						<div className="contain">
							<div className="content">
								<h1 className="h1">
									UK Visa Jobs – Visa-Sponsored Job Search & Career Support
									Platform
								</h1>
							</div>
							<div className="wrapper">
								<div className="inner">
									<div className="image">
										<img
											src="/images/new/sub_images/hire_candidate.png"
											alt=""
										/>
										<div className="title">Hire Candidate</div>
									</div>
									<div className="image">
										<img src="/images/new/sub_images/jobs.png" alt="" />
										<div className="title">Jobs</div>
									</div>
									<div className="image">
										<img src="/images/new/sub_images/resources.png" alt="" />
										<div className="title">Resources</div>
									</div>
									<div className="image">
										<img src="/images/new/sub_images/post_job.png" alt="" />
										<div className="title">Post Jobs</div>
									</div>
								</div>
								<div className="side">
									<div className="column">
										<div className="author">
											<div className="icon">
												<img src="/images/piro-polo.png" alt="piro-polo" />
											</div>
											<div className="text">
												<p>
													Working with the herosolutions team has been an
													absolute pleasure. Their dedication, professionalism,
													and expertise are unparalleled.
												</p>
												<div className="h5 !mb-[0] uppercase">Piro Polo</div>
											</div>
										</div>
									</div>
									<div className="column">
										<div className="list">
											<ul>
												<li>
													<span>Category:</span>
													<strong>UI UX Design</strong>
												</li>
												<li>
													<span>Software:</span>
													<strong>FIGMA</strong>
												</li>
												<li>
													<span>Service:</span>
													<strong>UI UX Designing | Branding</strong>
												</li>
												<li>
													<span>Client:</span>
													<strong>Alex</strong>
												</li>
												<li>
													<span>Date:</span>
													<strong>OCTOBER 6, 2024</strong>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="launch" ref={launchRef}>
						<div className="contain">
							<div className="wrapper">
								<Link href="/project-request">Launch Project</Link>
								<Link href="/project-request">Launch Project</Link>
								<Link href="/project-request">Launch Project</Link>
							</div>
						</div>
					</div>
					<div className="choose" ref={chooseRef}>
						<div className="contain">
							<div className="out_wrapper">
								<div className="content text-center">
									<h2 className="h2">
										Complete Digital Solutions for Businesses
									</h2>
									<p>
										We provide complete digital solutions designed to grow your
										business. From modern websites and intuitive UI/UX to
										reliable API development and ongoing support, we handle
										everything with care. Our team also boosts your online
										presence through smart digital marketing and builds powerful
										mobile apps to keep you ahead in the digital world.
									</p>
								</div>
								<div className="wrapper">
									<div className="column flex">
										<div className="inner w-full">
											<div className="icon">
												<img src="/images/apple.png" alt="" />
											</div>
											<div className="text">
												<div className="h5">iOS App Development</div>
												<p>
													Welcome to our Mobile Application Development Services
													page! We specialize in creating cutting-edge mobile
													apps that cater to your unique business needs and user
													requirements. With a team of experienced developers,
													designers, and strategists, we are committed to
													delivering top-notch mobile solutions.
												</p>
											</div>
											<div className="btn_blk">
												<Link href="?" className="link_btn">
													Explore More
												</Link>
											</div>
										</div>
									</div>
									<div className="column flex">
										<div className="inner w-full">
											<div className="icon">
												<img src="/images/android.png" alt="" />
											</div>
											<div className="text">
												<div className="h5">Android App Development</div>
												<p>
													We build powerful, feature-packed Android apps that
													perform smoothly across all major devices. From
													startups to growing brands, we help you reach the
													massive Android market with reliable, high-quality
													mobile experiences.
												</p>
											</div>
											<div className="btn_blk">
												<Link href="?" className="link_btn">
													Explore More
												</Link>
											</div>
										</div>
									</div>
									<div className="column flex">
										<div className="inner w-full">
											<div className="icon">
												<img src="/images/cross-platform.png" alt="" />
											</div>
											<div className="text">
												<div className="h5">Cross-Platform Development</div>
												<p>
													We help businesses build high-quality apps that run
													smoothly on both iOS and Android. Leverage the power
													of cross-platform development tools to save time and
													resources while reaching users on every device.
													Whether you're a startup or an established brand, we
													make sure your app performs like a champ across
													platforms.
												</p>
											</div>
											<div className="btn_blk">
												<Link href="?" className="link_btn">
													Explore More
												</Link>
											</div>
										</div>
									</div>
									<div className="column flex">
										<div className="inner w-full">
											<div className="icon">
												<img src="/images/ux-design.png" alt="" />
											</div>
											<div className="text">
												<div className="h5">UI/UX Design</div>
												<p>
													We provide small to medium sized businesses with a
													full range of Web Services including high quality
													Custom Website Design, Website Development and Search
													Marketing services. Our clients range from small
													start-up businesses, to sizeable, brand recognisable
													organisations. Whatever your business, we will help it
													to perform better just like we've done for our
													clients.
												</p>
											</div>
											<div className="btn_blk">
												<Link href="?" className="link_btn">
													Explore More
												</Link>
											</div>
										</div>
									</div>
									<div className="column flex">
										<div className="inner w-full">
											<div className="icon">
												<img src="/images/software-development.png" alt="" />
											</div>
											<div className="text">
												<div className="h5">API Development</div>
												<p>
													Welcome to HeroSolutions's API Development Services.
													In today's interconnected digital landscape, APIs
													(Application Programming Interfaces) play a critical
													role in enabling seamless communication between
													different software systems. Our team of experts is
													here to help you design, build, and maintain robust
													APIs that drive innovation and enhance your digital
													ecosystem.
												</p>
											</div>
											<div className="btn_blk">
												<Link href="?" className="link_btn">
													Explore More
												</Link>
											</div>
										</div>
									</div>
									<div className="column flex">
										<div className="inner w-full">
											<div className="icon">
												<img src="/images/app-development1.png" alt="" />
											</div>
											<div className="text">
												<div className="h5">App Maintenance and Support</div>
												<p>
													Welcome to HeroSolutions's Support and Maintenance
													Services. We understand that a successful online
													presence requires not only a well-designed website but
													also consistent support and proactive maintenance to
													keep it running smoothly. We're here to ensure that
													your web assets are always in top shape.
												</p>
											</div>
											<div className="btn_blk">
												<Link href="?" className="link_btn">
													Explore More
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="together">
						<div className="contain">
							<div className="wrapper">
								<h3 className="h3 !mb-[0]">Let’s Work Together</h3>
								<div className="text">
									<p>
										We are proud of uncompromising quality Thank you for
										visiting our site! You are at the right place!
									</p>
									<div className="btn_blk mt-[2rem] justify-center md:justify-start">
										<a href="?" className="site_btn round dark">
											Hire ur on Fiver
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="connectivity">
						<div className="contain">
							<div className="wrapper">
								<div className="content">
									<h2 className="h2 !mb-0">We Make the World Feel Closer</h2>
								</div>
								<div className="side">
									<div className="flexor">
										<div className="column flex">
											<div className="inner w-full">
												<div className="icon">
													<img src="/images/icon_3.svg" alt="" />
												</div>
												<div className="h4">Developing together</div>
												<p>
													We strive for excellence in every aspect of our work,
													setting high standards and surpassing expectations.
												</p>
											</div>
										</div>
										<div className="column flex">
											<div className="inner w-full">
												<div className="icon">
													<img src="/images/icon1.svg" alt="" />
												</div>
												<div className="h4">Improving together</div>
												<p>
													Trust and integrity form the foundation of our
													interactions, both with clients and within our team.
												</p>
											</div>
										</div>
										<div className="column flex">
											<div className="inner w-full">
												<div className="icon">
													<img src="/images/icon_1.svg" alt="" />
												</div>
												<div className="h4">Working together</div>
												<p>
													In the fast-paced digital world, we understand the
													importance of continuous learning and upskilling to
													stay ahead.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div id="similar_project" ref={similarRef}>
					<SimilarProject projects={portfolio} />
				</div>
			</Layout>
		</>
	)
}
