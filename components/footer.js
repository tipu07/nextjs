import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import NewsletterForm from "../pages/sections/newsletter-form";

import http from "../helpers/http";
import Text from "../components/text";
import { cmsFileUrl } from "../helpers/helpers";
export default function Footer({ siteSettings }) {
  const router = useRouter();
  const date = new Date();
  let year = date.getFullYear();

  const path = router.pathname;
  return (
    <>
      {/* <NewsletterForm /> */}
      <footer>
        <div className="topper">
          <div className="contain">
            <div className="text">
              <div className="h1">
                <Text string={siteSettings?.site_pre_footer_heading} />
              </div>
              <p>
                <Text string={siteSettings?.site_pre_footer_tagline} />
              </p>
            </div>
            <div className="btn_blk mt-[2rem] md:justify-end">
              <Link
                href={siteSettings?.site_pre_footer_field_text}
                className="site_btn simple round hover_prime"
              >
                <Text string={siteSettings?.site_pre_footer_button_text} />
              </Link>
            </div>
          </div>
        </div>
        <div className="contain">
          <div className="wrapper">
            <div className="column">
              <div className="title h6">Menu</div>
              <ul className="list main_list">
                <li>
                  <Link href="/about" className="link">
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="link">
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="link">
                    <span>How works?</span>
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="link">
                    <span>Careers</span>
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="link">
                    <span>Expertise</span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="link">
                    <span>Projects</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="link">
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo_icon.webp" alt="" />
                </Link>
              </div>
            </div>
            <div className="column">
              <ul className="list info_list">
                <li>
                  <Link
                    href={`https://wa.me/${siteSettings?.site_whatsapp?.replace(
                      /[^\d]/g,
                      "",
                    )}`}
                    target="_blank"
                  >
                    {siteSettings?.site_whatsapp}
                  </Link>
                </li>
                <li>
                  <Link href={`tel:${siteSettings?.site_phone}`}>
                    {siteSettings?.site_phone}
                  </Link>
                </li>
                <li>
                  <Link href={`mailto:${siteSettings?.site_email}`}>
                    {siteSettings?.site_email}
                  </Link>
                </li>
                <li className="address">{siteSettings?.site_address}</li>
              </ul>
              <div className="social">
                {/* <a href="https://facebook.com">
                  <img src="/images/social_facebook.svg" alt="" />
                </a> */}
                <Link
                  href={siteSettings?.site_facebook}
                  target="_blank"
                  className="facebook"
                >
                  <img
                    src="/images/social_facebook.svg"
                    alt={siteSettings?.site_facebook}
                  />
                </Link>
                <Link
                  href={siteSettings?.site_instagram}
                  target="_blank"
                  className="instagram"
                >
                  <img
                    src="/images/social_instagram.svg"
                    alt={siteSettings?.site_instagram}
                  />
                </Link>
                {/* <a href="https://instagram.com">
                  <img src="/images/social_instagram.svg" alt="" />
                </a> */}
                <Link
                  href={siteSettings?.site_linkedin}
                  target="_blank"
                  className="linkedin"
                >
                  <img
                    src="/images/social_linkedin.svg"
                    alt={siteSettings?.site_linkedin}
                  />
                </Link>
                {/* <a href="https://www.linkedin.com/">
                  <img src="/images/social_linkedin.svg" alt="" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="contain">
            <div className="flexor">
              <p>
                Copyright © {year}, {siteSettings?.site_name}
                {siteSettings?.site_copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
