"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import Link from "next/link";
import Layout from "../components/layout";
import http from "../helpers/http";
import Text from "../components/text";
import { cmsFileUrl } from "../helpers/helpers";
import SimilarProject from "./sections/similar-project";
import MetaGenerator from "../components/meta-generator";

export const getServerSideProps = async () => {
  const result = await http
    .get("work")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

const PortfolioColumn = ({ data, fade }) => (
  <div className="column">
    <div className="inner">
      <div
        className="image"
        data-aos={fade}
        data-aos-easing="linear"
        data-aos-offset="50"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        <Link href={data?.btn_link || "#"} target="_blank">
          <img src={cmsFileUrl(data?.image1, "projects")} alt={data?.title} />
        </Link>
      </div>
      <div className="text">
        <h2 className="title">
          <Link href={data?.btn_link || "#"} target="_blank">
            <Text string={data?.title} />
          </Link>
        </h2>
        <div className="data">
          <Link
            href={data?.btn_link || "#"}
            target="_blank"
            className="view_btn link"
          >
            <span>View Project</span>
          </Link>
          <div className="small">2024</div>
        </div>
      </div>
    </div>
  </div>
);

export default function Portfolio({ result }) {
  const similarProjectRef = useRef(null);
  const { page_title, meta_desc, content, portfolio } = result;

  useLayoutEffect(() => {
    if (!similarProjectRef.current) return;

    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = similarProjectRef.current.querySelector(".wrapper");
    const panels = gsap.utils.toArray(wrapper.querySelectorAll(".column"));
    const firstColumn = panels[0];

    if (!wrapper || !panels.length || !firstColumn) return;

    const getStart = () => {
      const rect = firstColumn.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const elementBottom = rect.top + scrollY + rect.height;
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      return elementBottom - window.innerHeight + 5 * rem;
    };

    const getEnd = () => wrapper.scrollWidth - wrapper.clientWidth + 200;

    gsap.to(panels, {
      x: () => -(wrapper.scrollWidth - wrapper.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: similarProjectRef.current,
        start: getStart,
        end: () => "+=" + getEnd(),
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = () => setModalOpen(!modalOpen);
  const openProject = (project) => {
    setSelectedProject(project);
    toggleModal();
  };

  return (
    <>
      <MetaGenerator page_title={page_title} meta_desc={meta_desc} />
      <section id="portfolio">
        <div className="top_block">
          <div className="contain">
            <h1 className="h1">
              <Text string={content?.banner_heading} />
            </h1>
            <p>
              <Text string={content?.banner_text} />
            </p>
          </div>
        </div>
        <div className="works">
          <div className="contain">
            <div className="wrapper">
              {portfolio?.slice(0, 6).map((project, i) => (
                <PortfolioColumn
                  key={i}
                  data={project}
                  fade={i % 2 === 0 ? "fade-right" : "fade-down"}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="notch">
          <div className="contain-fluid">
            <div className="content">
              <div className="h1 fw_700">
                <Text string={content?.top_pro_heading} />
              </div>
              <hr className="opacity-[0.4]" />
              <p className="fw_500">
                <Text string={content?.top_pro_text} />
              </p>
            </div>
            <div className="wrapper">
              {portfolio?.slice(0, 5).map((project, i) => (
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
                        <Link
                          href={project?.btn_link}
                          className="view_btn link"
                        >
                          <span>View Project</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div id="similar_project" ref={similarProjectRef}>
        <SimilarProject
          projects={portfolio}
          heading={content?.offbeat_heading}
          text={content?.offbeat_text}
        />
      </div>
      {/* </Layout> */}
    </>
  );
}
