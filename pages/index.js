"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Layout from "../components/layout";
import Link from "next/link";
import http from "../helpers/http";
import Text from "@/components/components/text";
import { cmsFileUrl } from "@/components/helpers/helpers";
import MetaGenerator from "../components/meta-generator";

export const getServerSideProps = async () => {
  const result = await http
    .get("home")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Home({ result }) {
  const serveRef = useRef(null);
  const folioRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePlay = (index) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;
    if (activeIndex === index) {
      currentVideo.paused ? currentVideo.play() : currentVideo.pause();
      setActiveIndex(currentVideo.paused ? null : index);
    } else {
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) v.pause();
      });
      currentVideo.play();
      setActiveIndex(index);
    }
  };

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    let cleanupCarousel;

    const ring = document.querySelector(".curved_carousel__ring");
    const slides = ring?.querySelectorAll(".curved_carousel__slide");
    const stage = document.querySelector(".curved_carousel__stage");

    if (ring && slides?.length && stage) {
      const stageWidth = stage.offsetWidth;
      const stageHeight = stage.offsetHeight;
      const totalSlides = slides.length;
      const angleStep = 360 / totalSlides;
      const radius = stageWidth / (2 * Math.tan(Math.PI / totalSlides));

      slides.forEach((slide, i) => {
        slide.style.width = `${stageWidth}px`;
        slide.style.height = `${stageHeight}px`;
        const angle = angleStep * i;
        slide.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
      });

      let currentAngle = 0;
      let isPaused = false;
      let frameId = null;

      const rotateRing = () => {
        if (!isPaused) {
          ring.style.transform = `rotateY(${currentAngle}deg)`;
          currentAngle += 0.1;
        }
        frameId = requestAnimationFrame(rotateRing);
      };

      const handleEnter = () => (isPaused = true);
      const handleLeave = () => (isPaused = false);

      slides.forEach((slide) => {
        slide.addEventListener("mouseenter", handleEnter);
        slide.addEventListener("mouseleave", handleLeave);
      });

      rotateRing();

      cleanupCarousel = () => {
        if (frameId) cancelAnimationFrame(frameId);
        slides.forEach((slide) => {
          slide.removeEventListener("mouseenter", handleEnter);
          slide.removeEventListener("mouseleave", handleLeave);
        });
      };
    }

    const serveCtx = gsap.context(() => {
      const { ScrollTrigger } = require("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const serve = serveRef.current;
      if (!serve) return;
      const wrapper = serve.querySelector(".wrapper");
      const panels = gsap.utils.toArray(serve.querySelectorAll(".column"));
      const firstColumn = panels[0];
      if (!wrapper || !panels.length || !firstColumn) return;

      const pinTrigger = ScrollTrigger.create({
        trigger: serve,
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
          trigger: serve,
          start: () => pinTrigger.start,
          end: () => pinTrigger.end - 500,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, serveRef);

    const folioCtx = gsap.context(() => {
      const { ScrollTrigger } = require("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const folio = folioRef.current;
      if (!folio) return;
      const wrapper = folio.querySelector(".wrapper");
      const panels = gsap.utils.toArray(folio.querySelectorAll(".folio_blk"));
      const firstColumn = panels[0];
      if (!wrapper || !panels.length || !firstColumn) return;

      const pinTrigger = ScrollTrigger.create({
        trigger: folio,
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
          trigger: folio,
          start: () => pinTrigger.start,
          end: () => pinTrigger.end,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, folioRef);

    return () => {
      cleanupCarousel?.();
      serveCtx?.revert();
      folioCtx?.revert();
    };
  }, []);

  useEffect(() => {
    if (!videoRefs.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          // Pause if video leaves viewport
          if (!entry.isIntersecting) {
            if (!video.paused) {
              video.pause();
              setActiveIndex(null);
            }
          }
        });
      },
      {
        threshold: 0.3,
      },
    );
    videoRefs.current.forEach((v) => v && observer.observe(v));
    return () => observer.disconnect();
  }, []);

  const { page_title, meta_desc, content, testimonials, projects, services } =
    result;

  return (
    <>
      {/* <style>{`
				header {
					background: transparent;
				}
			`}</style> */}
      <MetaGenerator page_title={page_title} meta_desc={meta_desc} />
      <section id="banner">
        <div className="content text-center">
          <h1 className="h1">
            <Text string={content?.banner_heading} />
          </h1>
          <Text string={content?.banner_text} />
        </div>
        <div className="curved_carousel">
          <div
            className="curved_carousel__stage"
            style={{ width: "33.8095rem", height: "60rem" }}
          >
            <div
              className="curved_carousel__ring"
              style={{
                transform: "rotateY(0deg)",
                transition: "all linear 0.3s",
              }}
            >
              {projects?.length > 0 &&
                Array.from({ length: 20 }).map((_, i) => {
                  const project = projects[i % projects.length];
                  return (
                    <div className="curved_carousel__slide" key={i}>
                      <img
                        width={450}
                        height={600}
                        src={cmsFileUrl(project?.image1, "projects")}
                        className="curved_carousel__media"
                        alt={project?.title || `Project ${i + 1}`}
                      />
                      <img
                        width={450}
                        height={600}
                        src={cmsFileUrl(project?.image2, "projects")}
                        className="curved_carousel__media_hover"
                        alt={project?.title || `Project ${i + 1}`}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <section id="serve" ref={serveRef}>
        <div className="contain">
          <div className="content">
            <div className="h1 fw_700">
              <Text string={content?.section1_heading} />
            </div>
            <Text string={content?.section1_text} />
          </div>
          <div className="wrapper">
            {services?.map((data, index) => {
              return (
                <div className="column flex" key={data?.id || index}>
                  <div className="inner w-full">
                    <div className="image">
                      <img
                        src={cmsFileUrl(data?.image1, "services")}
                        alt={data?.title}
                      />
                    </div>
                    <div className="title">
                      <Text string={data?.title} />
                    </div>
                    <p>
                      <Text string={data?.short_desc} />
                    </p>
                    <div className="btn_blk mt-auto">
                      <Link
                        href={`/service/${data?.slug}`}
                        className="link_btn"
                        aria-label="Website development"
                      >
                        Explore More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="column flex">
                <div className="inner w-full">
                  <div className="image">
                    <img src="/images/icon/icon_design.svg" alt="" />
                  </div>
                  <div className="title">Ui/Ux design</div>
                  <p>
                    We provide small to medium sized businesses with a full
                    range of Web Services including high quality Custom Website
                    Design, Website Development and Search Marketing services.
                    Our clients range from small start-up businesses, to
                    sizeable, brand recognisable organisations. Whatever your
                    business, we will help it to perform better just like we've
                    done for our clients.
                  </p>
                  <div className="btn_blk mt-auto">
                    <Link
                      href="/ui-ux"
                      className="link_btn"
                      aria-label="Ui/Ux design"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="column flex">
                <div className="inner w-full">
                  <div className="image">
                    <img src="/images/icon/icon_api.svg" alt="" />
                  </div>
                  <div className="title">API development</div>
                  <p>
                    Welcome to HeroSolutions's API Development Services. In
                    today's interconnected digital landscape, APIs (Application
                    Programming Interfaces) play a critical role in enabling
                    seamless communication between different software systems.
                    Our team of experts is here to help you design, build, and
                    maintain robust APIs that drive innovation and enhance your
                    digital ecosystem.
                  </p>
                  <div className="btn_blk mt-auto">
                    <Link
                      href="/api-development"
                      className="link_btn"
                      aria-label="API development"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="column flex">
                <div className="inner w-full">
                  <div className="image">
                    <img src="/images/icon/icon_support.svg" alt="" />
                  </div>
                  <div className="title">Support and maintenance</div>
                  <p>
                    Welcome to HeroSolutions's Support and Maintenance Services.
                    We understand that a successful online presence requires not
                    only a well-designed website but also consistent support and
                    proactive maintenance to keep it running smoothly. We're
                    here to ensure that your web assets are always in top shape.
                  </p>
                  <div className="btn_blk mt-auto">
                    <Link
                      href="/support_maintenance"
                      className="link_btn"
                      aria-label="Support and maintenance"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="column flex">
                <div className="inner w-full">
                  <div className="image">
                    <img src="/images/icon/icon_marketing.svg" alt="" />
                  </div>
                  <div className="title">Digital marketing</div>
                  <p>
                    In today's digital age, having a strong online presence is
                    crucial for the success of your business. Our team of
                    experts is here to help you navigate the complex world of
                    digital marketing and achieve your goals.
                  </p>
                  <div className="btn_blk mt-auto">
                    <Link
                      href="/digital-marketing"
                      className="link_btn"
                      aria-label="Digital marketing"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="column flex">
                <div className="inner w-full">
                  <div className="image">
                    <img src="/images/icon/icon_application.svg" alt="" />
                  </div>
                  <div className="title">Mobile Application development</div>
                  <p>
                    Welcome to our Mobile Application Development Services page!
                    We specialize in creating cutting-edge mobile apps that
                    cater to your unique business needs and user requirements.
                    With a team of experienced developers, designers, and
                    strategists, we are committed to delivering top-notch mobile
                    solutions.
                  </p>
                  <div className="btn_blk mt-auto">
                    <Link
                      href="/app-development"
                      className="link_btn"
                      aria-label="Mobile Application development"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </section>
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
      <section id="folio" ref={folioRef}>
        <div className="contain">
          <div className="content">
            <div className="h1">
              <Text string={content?.section2_heading} />
            </div>
          </div>
          <div className="wrapper">
            {testimonials?.map((data, i) => {
              return (
                <div className="folio_blk" key={i}>
                  <div
                    className={`video ${activeIndex === i ? "played" : null}`}
                  >
                    <video
                      // controls
                      ref={(el) => (videoRefs.current[i] = el)} // keep refs
                      poster={cmsFileUrl(data?.image, "testimonials")}
                      src={cmsFileUrl(data?.video, "testimonials")}
                      type="video/mp4"
                      // autoPlay
                      // muted={false}
                    />
                    {/* <img src={cmsFileUrl(data?.image, "testimonials")} alt="" /> */}
                    <button
                      type="button"
                      aria-label="Play Button"
                      onClick={() => togglePlay(i)}
                      style={{
                        backgroundImage:
                          activeIndex === i
                            ? "url('/images/pause_icon.svg')"
                            : "url('/images/play_icon.svg')",
                      }}
                    ></button>
                  </div>
                  <div className="text">
                    <img src="/images/comma.svg" alt="" />
                    <div className="info">
                      <Text string={data?.heading} />
                    </div>
                    <p>
                      <Text string={data?.detail} />
                    </p>
                    <div className="name">
                      <Text string={data?.name} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* </Layout> */}
    </>
  );
}
