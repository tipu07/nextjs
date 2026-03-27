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
    .get("careers")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Careers({ result }) {
  const jobsRef = useRef(null);
  let { page_title, meta_desc, content, careers } = result;

  useLayoutEffect(() => {
    if (!jobsRef.current) return;

    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = jobsRef.current.querySelector(".wrapper");
    const panels = gsap.utils.toArray(wrapper.querySelectorAll(".column"));
    const firstColumn = panels[0];

    if (!wrapper || !panels.length || !firstColumn) return;

    const pinTrigger = ScrollTrigger.create({
      trigger: jobsRef.current,
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
      // markers: true
    });

    gsap.to(panels, {
      x: () => -(wrapper.scrollWidth - wrapper.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: jobsRef.current,
        start: () => pinTrigger.start,
        end: () => pinTrigger.end,
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <MetaGenerator page_title={page_title} meta_desc={meta_desc} />
      <section id="careers">
        <div className="top_block">
          <div className="contain">
            <div className="content">
              <h1 className="h1">
                <Text string={content?.banner_heading} />
              </h1>
              <div className="h5">
                <Text string={content?.banner_text} />
              </div>
            </div>
          </div>
        </div>
        <div className="connectivity">
          <div className="contain">
            <div className="wrapper">
              <div className="content">
                <h2 className="h2 !mb-0">
                  <Text string={content?.sub_banner_heading} />
                </h2>
              </div>
              <div className="side">
                <div className="flexor">
                  <div className="column flex">
                    <div className="inner w-full">
                      <div className="icon">
                        <img
                          src={cmsFileUrl(content?.image2, "images")}
                          alt={content?.section2_heading}
                        />
                      </div>
                      <div className="h4">
                        <Text string={content?.sub_ban_heading1} />
                      </div>
                      <p>
                        <Text string={content?.sub_ban_desc1} />
                      </p>
                    </div>
                  </div>
                  <div className="column flex">
                    <div className="inner w-full">
                      <div className="icon">
                        <img
                          src={cmsFileUrl(content?.image3, "images")}
                          alt={content?.section2_heading}
                        />
                      </div>
                      <div className="h4">
                        <Text string={content?.sub_ban_heading2} />
                      </div>
                      <p>
                        <Text string={content?.sub_ban_desc2} />
                      </p>
                    </div>
                  </div>
                  <div className="column flex">
                    <div className="inner w-full">
                      <div className="icon">
                        <img
                          src={cmsFileUrl(content?.image4, "images")}
                          alt={content?.section2_heading}
                        />
                      </div>
                      <div className="h4">
                        <Text string={content?.sub_ban_heading3} />
                      </div>
                      <p>
                        <Text string={content?.sub_ban_desc3} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="choose">
          <div className="contain text-center">
            <div className="content">
              <div className="h1">
                <Text string={content?.section1_heading} />
              </div>
              <p>
                <Text string={content?.section1_text} />
              </p>
              <div className="btn_blk justify-center mt-[2rem]">
                <Link
                  href={content?.section1_link_url}
                  className="site_btn dark round hover_prime"
                >
                  <Text string={content?.section1_link_text} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="jobs" ref={jobsRef}>
          <div className="contain">
            <div className="out_wrapper">
              <div className="content">
                <div className="h1">
                  <Text string={content?.section3_heading} />
                </div>
                {/* <p>
                    Discover the career that truly fits you. We help you explore
                    real opportunities with confidence and clarity. Our guidance
                    ensures you grow in the right direction. Your future starts
                    right here, and you deserve the best.
                  </p> */}
              </div>
              <div className="wrapper">
                {careers?.map((data, i) => {
                  return (
                    <div key={i} className="column flex">
                      <div className="inner w-full">
                        <div className="h4">
                          <Link href={`/apply/${data?.slug}`}>
                            <Text string={data?.title} />
                          </Link>
                        </div>
                        <p>
                          <Text string={data?.short_desc} />
                        </p>
                        <ul>
                          <li>
                            <img src="/images/icon/icon_currency.svg" alt="" />
                            <span>
                              <Text string={data?.salary} />
                            </span>
                          </li>
                          <li>
                            <img src="/images/icon/icon_clock.svg" alt="" />
                            <span>
                              <Text string={data?.job_type} />
                            </span>
                          </li>
                        </ul>
                        <div className="btn_blk mt-[2rem]">
                          <Link
                            href={`/apply/${data?.slug}`}
                            className="site_btn simple round hover_prime"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </Layout> */}
    </>
  );
}
