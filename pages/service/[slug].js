"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

import Link from "next/link";
import Faq from "@/components/components/faq";
// import Layout from "../components/layout";

import http from "@/components/helpers/http";
import Text from "@/components/components/text";
import { cmsFileUrl } from "@/components/helpers/helpers";
import MetaGenerator from "@/components/components/meta-generator";

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const result = await http
    .get(`our_services/${slug}`)
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};
export default function UIUX({ result }) {
  let {
    page_title,
    meta_desc,
    content,
    service_detail,
    services_solutions,
    services_faqs,
  } = result;

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
      <MetaGenerator
        page_title={page_title}
        meta_info={meta_desc}
        image={cmsFileUrl(service_detail?.image2, "services")}
      />

      {/* <Layout page_title={page_title} meta_desc={meta_desc}> */}
      <section id="services">
        <div className="top_block">
          <div className="contain">
            <div className="content">
              <h1 className="h1">
                <Text string={service_detail?.title} />
              </h1>
              <div className="icon_text">
                <img
                  src={cmsFileUrl(service_detail?.image1, "services")}
                  alt={service_detail?.d_heading}
                />
                <div className="h5 !mb-[0] w-full">
                  <Text string={service_detail?.d_heading} />
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="text">
                <Text string={service_detail?.detail} />
              </div>
              <div className={`video`}>
                <img
                  src={cmsFileUrl(service_detail?.image2, "services")}
                  alt={service_detail?.d_heading}
                />
                {/* <button
                  type="button"
                  // onClick={() => togglePlay(i)}
                  style={{
                    backgroundImage: "url('/images/play_icon.svg')",
                    // activeIndex === i
                    // ? "url('/images/pause_icon.svg')"
                    // : "url('/images/play_icon.svg')",
                  }}
                ></button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="choose">
          <div className="contain">
            <div className="content text-center">
              <h2 className="h2">
                <Text string={service_detail?.sec1_title} />
              </h2>
            </div>
            <div className="wrapper">
              <div className="column flex">
                <div className="inner w-full">
                  <div className="icon">
                    <img
                      src={cmsFileUrl(service_detail?.image3, "services")}
                      alt={service_detail?.title}
                    />
                  </div>
                  <div className="text">
                    <div className="h5">
                      <Text string={service_detail?.icon_title3} />
                    </div>
                    <p>
                      <Text string={service_detail?.icon_text3} />
                    </p>
                  </div>
                </div>
              </div>

              <div className="column flex">
                <div className="inner w-full">
                  <div className="icon">
                    <img
                      src={cmsFileUrl(service_detail?.image4, "services")}
                      alt={service_detail?.title}
                    />
                  </div>
                  <div className="text">
                    <div className="h5">
                      <Text string={service_detail?.icon_title4} />
                    </div>
                    <p>
                      <Text string={service_detail?.icon_text4} />
                    </p>
                  </div>
                </div>
              </div>

              <div className="column flex">
                <div className="inner w-full">
                  <div className="icon">
                    <img
                      src={cmsFileUrl(service_detail?.image5, "services")}
                      alt={service_detail?.title}
                    />
                  </div>
                  <div className="text">
                    <div className="h5">
                      <Text string={service_detail?.icon_title5} />
                    </div>
                    <p>
                      <Text string={service_detail?.icon_text5} />
                    </p>
                  </div>
                </div>
              </div>

              <div className="column flex">
                <div className="inner w-full">
                  <div className="icon">
                    <img
                      src={cmsFileUrl(service_detail?.image6, "services")}
                      alt={service_detail?.title}
                    />
                  </div>
                  <div className="text">
                    <div className="h5">
                      <Text string={service_detail?.icon_title6} />
                    </div>
                    <p>
                      <Text string={service_detail?.icon_text6} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="process">
          <div className="contain">
            <div className="content text-center">
              <div className="h2">
                <Text string={service_detail?.sec2_heading} />
              </div>

              <div className="list">
                {services_solutions?.map((item, index) => (
                  <div key={index} className="item">
                    <h5>
                      <Text string={item?.title} />
                    </h5>
                    <Text string={item?.detail} />
                  </div>
                ))}
              </div>
              {/* <div className="list">
                <Text string={service_detail?.sec2_text} />
              </div> */}
              <div className="btn_blk justify-center mt-[3rem]">
                <Link
                  href={service_detail?.sec2_btn_link}
                  className="site_btn simple round hover_prime"
                >
                  <Text string={service_detail?.sec2_btn_text} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="faqs">
          <div className="contain">
            <div className="content text-center">
              <div className="h2">
                <Text string={service_detail?.sec3_heading} />
              </div>
              <p>
                <Text string={service_detail?.sec3_text} />
              </p>
            </div>
            <Faq data={services_faqs} />
          </div>
        </div>
        <div className="goals">
          <div className="contain">
            <div className="content">
              <div className="h2">
                <Text string={service_detail?.sec4_heading} />
              </div>
              <p>
                <Text string={service_detail?.sec4_text} />
              </p>
              <div className="btn_blk mt-[3rem]">
                <Link
                  href={service_detail?.sec4_btn_link}
                  className="site_btn simple round hover_prime"
                >
                  <Text string={service_detail?.sec4_btn_text} />
                </Link>
              </div>
            </div>
            <div className="wrapper">
              <div className="column flex">
                <div className="inner w-full">
                  <div className="h5 !mb-[0]">
                    <Text string={service_detail?.sec4_text1} />
                  </div>
                </div>
              </div>
              <div className="column flex">
                <div className="inner w-full">
                  <div className="h5 !mb-[0]">
                    <Text string={service_detail?.sec4_text2} />
                  </div>
                </div>
              </div>
              <div className="column flex">
                <div className="inner w-full">
                  <div className="h5 !mb-[0]">
                    <Text string={service_detail?.sec4_text3} />
                  </div>
                </div>
              </div>
              <div className="column flex">
                <div className="inner w-full">
                  <div className="h5 !mb-[0]">
                    <Text string={service_detail?.sec4_text4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </Layout> */}
    </>
  );
}
