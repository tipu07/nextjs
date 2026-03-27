import React from "react";
import Link from "next/link";
import { cmsFileUrl } from "@/components/helpers/helpers";
import Text from "@/components/components/text";

export default function SimilarProject({ projects, heading, text }) {
  return (
    <>
      <section id="similar_project_inner">
        <div className="contain">
          <div className="out_wrapper">
            <div className="content text-center">
              <div className="h1">
                <Text string={heading} />
              </div>
              <p>
                <Text string={text} />
              </p>
            </div>
            <div className="wrapper">
              {projects?.map((project, i) => (
                <div className="column flex" key={i}>
                  <div className="inner w-full">
                    <Link href={project.btn_link} target="_blank">
                      <img
                        src={cmsFileUrl(project?.image1, "projects")}
                        alt={project?.title}
                      />
                    </Link>
                    <div className="overlay">
                      <h2 className="title">
                        <Text string={project?.title} />
                      </h2>
                      <div className="h5">View Project</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
