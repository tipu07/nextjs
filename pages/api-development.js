"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

import Link from "next/link";
import Faq from "@/components/components/faq";
import Layout from "../components/layout";

import http from "../helpers/http";
import Text from "../components/text";
import { cmsFileUrl } from "../helpers/helpers";

export const getServerSideProps = async () => {
  const result = await http
    .get("api_development")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function APIDevelopment({ result }) {
  let { page_title, meta_desc, content, api_process, api_faqs } = result;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    // 🟢 CHOOSE SECTION
    const chooseCtx = gsap.context(() => {
      const choose = document.querySelector("#services .choose");
      const wrapper = document.querySelector("#services .choose .wrapper");
      const panels = gsap.utils.toArray("#services .choose .wrapper .column");
      const firstColumn = panels[0];

      if (!choose || !wrapper || !panels.length || !firstColumn) return;

      const pinTrigger = ScrollTrigger.create({
        trigger: choose,
        pin: true,
        pinSpacing: true,
        start: () => {
          const rect = firstColumn.getBoundingClientRect();
          const scrollY = window.scrollY || window.pageYOffset;
          const elementBottom = rect.top + scrollY + rect.height;
          return elementBottom + 80 - window.innerHeight;
        },
        end: () => "+=" + (wrapper.scrollWidth - wrapper.clientWidth),
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true,
      });

      gsap.to(panels, {
        x: () => -(wrapper.scrollWidth - wrapper.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: choose,
          start: () => pinTrigger.start,
          end: () => pinTrigger.end,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
    }, "#services .choose");

    // 🟢 PROCESS SECTION
    const processCtx = gsap.context(() => {
      const process = document.querySelector("#services .process");
      const wrapper = document.querySelector("#services .process ul");
      const panels = gsap.utils.toArray("#services .process ul > li");
      const firstColumn = panels[0];

      if (!process || !wrapper || !panels.length || !firstColumn) return;

      const pinTrigger = ScrollTrigger.create({
        trigger: process,
        pin: true,
        pinSpacing: true,
        start: () => {
          const rect = firstColumn.getBoundingClientRect();
          const scrollY = window.scrollY || window.pageYOffset;
          const elementBottom = rect.top + scrollY + rect.height;
          return elementBottom + 120 - window.innerHeight;
        },
        end: () => "+=" + (wrapper.scrollWidth - wrapper.clientWidth),
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true,
      });

      gsap.to(panels, {
        x: () => -(wrapper.scrollWidth - wrapper.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: process,
          start: () => pinTrigger.start,
          end: () => pinTrigger.end,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
    }, "#services .process");

    // ✅ CLEANUP BOTH CONTEXTS
    return () => {
      chooseCtx.revert();
      processCtx.revert();
    };
  }, []);
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
                  <img src="/images/icon/icon_api.svg" alt="" />
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
          <div className="choose">
            <div className="contain">
              <div className="content text-center">
                <div className="h2">
                  <Text string={content?.section1_heading} />
                </div>
              </div>
              <div className="wrapper">
                {api_process?.map((data, i) => {
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
                  );
                })}
              </div>
            </div>
          </div>
          <div className="process">
            <div className="contain">
              <div className="content text-center">
                <div className="h2">
                  <Text string={content?.section2_heading} />
                </div>
                {/* <div className="list">
									<Text string={content?.section2_text} />
								</div> */}
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
              <Faq data={api_faqs} />
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
  );
}
