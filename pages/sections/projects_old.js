"use client" // if you’re in Next.js App Router

import React from "react"
import Text from "@/components/components/text"
import Link from "next/link"
import { cmsFileUrl } from "@/components/helpers/helpers"

export default function Projects({ content, projects }) {
	return (
		<>
			<section id="project">
				<div className="contain">
					<div className="content">
						<div className="h1 fw_600">
							<Text string={content?.section4_heading} />
						</div>
						<div className="h4">
							Relevés 3D, scan laser et <br /> modélisation BIM en Suisse
							romande
						</div>
						<p className="fw_500">
							<Text string={content?.section4_text} />
						</p>
					</div>
					<div className="wrapper">
						{projects?.map((project, i) => (
							<div className="column" key={i}>
								<div className="inner">
									<div className="image">
										<img
											src={cmsFileUrl(project?.image, "projects")}
											alt={project?.title}
										/>
									</div>
									<div className="text">
										<div className="title">
											<Text string={project?.title} />
										</div>
										<div className="data">
											<a
												href={project.btn_link}
												target="_blank"
												className="view_btn link"
											>
												<span>View Project</span>
											</a>
											<div className="small">2024</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="btn_blk justify-center mt-[4rem]">
						<Link
							href="/portfolio"
							target="_blank"
							className="site_btn dark round"
						>
							View all Projects
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
