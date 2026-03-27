"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Layout from "../components/layout";

import http from "../helpers/http";
import Text from "../components/text";
import { cmsFileUrl } from "../helpers/helpers";
import MetaGenerator from "../components/meta-generator";

export const getServerSideProps = async () => {
  const result = await http
    .get("about_us")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function About({ result }) {
  let { page_title, meta_desc, content, ceo, other_team } = result;

  const worksRef = useRef(null);
  const teamsRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const worksCtx = gsap.context(() => {
      const { ScrollTrigger } = require("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const works = worksRef.current;
      const wrapper = works?.querySelector(".wrapper");
      if (!works || !wrapper) return;

      const scrollAmount = wrapper.scrollWidth - wrapper.clientWidth;

      ScrollTrigger.create({
        trigger: works,
        start: "top top",
        end: "+=" + scrollAmount,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      });

      gsap.to(wrapper, {
        x: () => -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: works,
          start: "top top",
          end: "+=" + scrollAmount,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, worksRef);

    const teamsCtx = gsap.context(() => {
      const { ScrollTrigger } = require("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const teams = teamsRef.current;
      const wrapper = teams?.querySelector(".wrapper");
      const panels = gsap.utils.toArray(wrapper?.children || []);
      const firstColumn = panels[0];
      if (!teams || !wrapper || !panels.length || !firstColumn) return;

      const pinTrigger = ScrollTrigger.create({
        trigger: teams,
        pin: true,
        pinSpacing: true,
        start: () => {
          const rem = parseFloat(
            getComputedStyle(document.documentElement).fontSize,
          );
          const offset = 5 * rem;
          const rect = firstColumn.getBoundingClientRect();
          const scrollY = window.scrollY || window.pageYOffset;
          const elementBottom = rect.top + scrollY + rect.height;
          return elementBottom + offset - window.innerHeight;
        },
        end: () => "+=" + (wrapper.scrollWidth - wrapper.clientWidth),
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      gsap.to(panels, {
        x: () => -(wrapper.scrollWidth - wrapper.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: teams,
          start: () => pinTrigger.start,
          end: () => pinTrigger.end,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, teamsRef);

    return () => {
      worksCtx.revert();
      teamsCtx.revert();
    };
  }, []);

  return (
    <>
      <MetaGenerator page_title={page_title} meta_desc={meta_desc} />
      <section id="about">
        <div className="x_banner">
          <div className="contain">
            <div className="content">
              <h1 className="h1">
                <Text string={content?.banner_heading} />
              </h1>
            </div>
            <div className="image">
              <img
                src={cmsFileUrl(content?.image1, "images")}
                alt={content?.banner_heading}
              />
            </div>
          </div>
        </div>
        <div className="fun_facts">
          <div className="contain">
            <div className="wrapper">
              <div className="content">
                <div className="h1">
                  <Text string={content?.section1_heading} />
                </div>
                <p>
                  <Text string={content?.section1_text} />
                </p>
              </div>
              <div className="blocks">
                <div className="flexor">
                  <div className="inner">
                    <div className="number">
                      <Text string={content?.sec1_value1} />
                    </div>
                    <p>
                      <Text string={content?.sec1_short1} />
                    </p>
                  </div>
                  <div className="inner">
                    <div className="number">
                      <Text string={content?.sec1_value2} />
                    </div>
                    <p>
                      <Text string={content?.sec1_short2} />
                    </p>
                  </div>
                  <div className="inner">
                    <div className="number">
                      <Text string={content?.sec1_value3} />
                    </div>
                    <p>
                      <Text string={content?.sec1_short3} />
                    </p>
                  </div>
                  <div className="inner">
                    <div className="number">
                      <Text string={content?.sec1_value4} />
                    </div>
                    <p>
                      <Text string={content?.sec1_short4} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="contain text-center">
            <div className="h1">
              <Text string={content?.section2_heading} />
            </div>
            <div className="wrapper">
              <div className="side">
                <div className="icon">
                  <img
                    src={cmsFileUrl(content?.image3, "images")}
                    alt={content?.sec2_title3}
                  />
                </div>
                <div className="text">
                  <div className="h4">
                    <Text string={content?.sec2_title3} />
                  </div>
                  <p>
                    <Text string={content?.sec2_text3} />
                  </p>
                </div>
              </div>
              <div className="side">
                <div className="icon">
                  <img
                    src={cmsFileUrl(content?.image4, "images")}
                    alt={content?.sec2_title4}
                  />
                </div>
                <div className="text">
                  <div className="h4">
                    <Text string={content?.sec2_title4} />
                  </div>
                  <p>
                    <Text string={content?.sec2_text4} />
                  </p>
                </div>
              </div>
            </div>
            <div className="content text-start">
              <h2 className="h2">
                <Text string={content?.section3_heading} />
              </h2>
              <Text string={content?.section3_text} />
              <div className="btn_blk justify-center mt-[3rem]">
                <Link
                  href={content?.section3_link_url}
                  className="site_btn round simple hover_prime"
                >
                  <Text string={content?.section3_link_text} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="works" ref={worksRef}>
          <div className="contain">
            <div className="out_wrapper">
              <div className="min_wrapper">
                <h3 className="h2 text-center">
                  <Text string={content?.section4_heading} />
                </h3>
                <div className="wrapper">
                  <div className="column flex">
                    <div className="inner w-full">
                      <div className="icon">
                        <img
                          src={cmsFileUrl(content?.image5, "images")}
                          alt={content?.sec4_title5}
                        />
                      </div>
                      <div className="text">
                        <div className="h5">
                          <Text string={content?.sec4_title5} />
                        </div>
                        <p>
                          <Text string={content?.sec4_text5} />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="column flex">
                    <div className="inner w-full">
                      <div className="icon">
                        <img
                          src={cmsFileUrl(content?.image6, "images")}
                          alt={content?.sec4_title6}
                        />
                      </div>
                      <div className="text">
                        <div className="h5">
                          <Text string={content?.sec4_title6} />
                        </div>
                        <p>
                          <Text string={content?.sec4_text6} />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="column flex">
                    <div className="inner w-full">
                      <div className="icon">
                        <img
                          src={cmsFileUrl(content?.image7, "images")}
                          alt={content?.sec4_title7}
                        />
                      </div>
                      <div className="text">
                        <div className="h5">
                          <Text string={content?.sec4_title7} />
                        </div>
                        <p>
                          <Text string={content?.sec4_text7} />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="column flex">
                    <div className="inner w-full">
                      <div className="icon">
                        <img
                          src={cmsFileUrl(content?.image8, "images")}
                          alt={content?.sec4_title8}
                        />
                      </div>
                      <div className="text">
                        <div className="h5">
                          <Text string={content?.sec4_title8} />
                        </div>
                        <p>
                          <Text string={content?.sec4_text8} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content text-center">
                <p>
                  <Text string={content?.section4_project} />
                </p>
              </div>
              <div className="btn_blk justify-center mt-[3rem]">
                <Link
                  href={content?.section4_link_url}
                  className="site_btn dark round hover_prime"
                >
                  <Text string={content?.section4_link_text} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="teams" ref={teamsRef}>
          <div className="contain">
            <div className="out_wrapper">
              <div className="content">
                <div className="h1">
                  <Text string={content?.team_heading} />
                </div>
                <hr />
                <p>
                  <Text string={content?.team_text} />
                </p>
              </div>
              <div className="wrapper text-center">
                {ceo?.map((data, i) => {
                  return (
                    <div className="column flex" key={i}>
                      <div className="inner ceo w-full">
                        <div className="image">
                          <img
                            src={cmsFileUrl(data?.image, "experts")}
                            alt={data?.name}
                          />
                        </div>
                        <div className="name">
                          <Text string={data?.name} />
                        </div>
                        <div className="designation">
                          <Text string={data?.designation} />
                        </div>
                        <div className="text">
                          <p>
                            <Text string={data?.about_expert} />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {other_team?.map((data, i) => {
                  return (
                    <div className="column flex" key={i}>
                      <div className="inner w-full">
                        <div className="image">
                          <img
                            src={cmsFileUrl(data?.image, "experts")}
                            alt={data?.name}
                          />
                        </div>
                        <div className="name">
                          <Text string={data?.name} />
                        </div>
                        <div className="designation">
                          <Text string={data?.designation} />
                        </div>
                        <div className="text">
                          <p>
                            <Text string={data?.about_expert} />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="team_work">
          <div className="contain">
            <div className="h2">
              <Text string={content?.section5_heading} />
            </div>
            <div className="wrapper">
              <div className="content">
                <Text string={content?.section5_text} />
                <div className="btn_blk mt-[2rem]">
                  <Link
                    href={content?.section5_link_url}
                    className="site_btn dark round hover_prime"
                  >
                    <Text string={content?.section5_link_text} />
                  </Link>
                </div>
              </div>
              <div className={`video`}>
                <img src={cmsFileUrl(content?.image9, "images")} alt="" />
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
      </section>
      {/* </Layout> */}
    </>
  );
}
