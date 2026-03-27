import React from "react"
import Text from "@/components/components/text"
import Link from "next/link"
import { cmsFileUrl } from "@/components/helpers/helpers"

export default function Project({ content, projects }) {
	return (
		<>
			<section id="project">
				<div className="contain-fluid">
					<div className="content">
						<div className="h1 fw_700">
							<Text string={content?.section4_heading} />
						</div>
						<hr className="opacity-[0.4]" />
						<p className="fw_500">
							<Text string={content?.section4_text} />
						</p>
					</div>
					<div className="wrapper">
						{projects?.map((project, i) => (
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
						))}
					</div>
				</div>
			</section>
		</>
	)
}
