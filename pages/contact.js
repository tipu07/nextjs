import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import ContactForm from "./sections/contact-form";
import http from "../helpers/http";
import Text from "../components/text";
import MetaGenerator from "../components/meta-generator";

export const getServerSideProps = async () => {
  const result = await http
    .get("contact-us")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Contact({ result }) {
  let { page_title, meta_desc, content, site_settings } = result;

  return (
    <>
      <MetaGenerator page_title={page_title} meta_desc={meta_desc} />
      <section id="contact">
        <div className="top_block">
          <div className="contain">
            <div className="content">
              <h1 className="h1">
                <Text string={content?.banner_heading} />
              </h1>
              <p>
                <Text string={content?.banner_text} />
              </p>
            </div>
          </div>
        </div>
        <div className="contain">
          <div className="wrapper">
            <div className="data">
              <div className="h4 !mb-[2rem]">Contact info</div>
              <ul className="contact_info_lst">
                <li>
                  <img
                    src="/images/icon-map-marker.svg"
                    alt={site_settings?.site_address}
                  />
                  <span>
                    <Text string={site_settings?.site_address} />
                  </span>
                </li>
                <li>
                  <img
                    src="/images/icon-envelope-fill.svg"
                    alt={site_settings?.site_email}
                  />
                  <Link href={`mailto:${site_settings?.site_email}`}>
                    <Text string={site_settings?.site_email} />
                  </Link>
                </li>
              </ul>
              {/* <ul className="social">
									<li>
										<Link
											href={site_settings?.site_facebook}
											target="_blank"
											className="facebook"
										>
											<img
												src="/images/facebook.svg"
												alt={site_settings?.site_facebook}
											/>
										</Link>
									</li>
									<li>
										<Link
											href={site_settings?.site_instagram}
											target="_blank"
											className="instagram"
										>
											<img
												src="/images/instagram.svg"
												alt={site_settings?.site_instagram}
											/>
										</Link>
									</li>
									<li>
										<Link
											href={site_settings?.site_linkedin}
											target="_blank"
											className="linkedin"
										>
											<img
												src="/images/linkedin.svg"
												alt={site_settings?.site_linkedin}
											/>
										</Link>
									</li>
								</ul> */}
              {/* <h4>You can call us on:</h4>
								<Link
									href={`https://wa.me/${site_settings?.site_whatsapp?.replace(
										/[^\d]/g,
										""
									)}`}
									target="_blank"
									className="flag_lnk"
								>
									<div className="flag_icon">
										<img
											src="/images/us.svg"
											alt={site_settings?.site_whatsapp}
										/>
									</div>
									<span className="small_text dark_lnk">
										<Text string={site_settings?.site_whatsapp} />
									</span>
								</Link>
								<div className="mini_br"></div>
								<Link
									href={`tel:${site_settings?.site_phone}`}
									className="flag_lnk"
								>
									<div className="flag_icon">
										<img src="/images/pk.svg" alt={site_settings?.site_phone} />
									</div>
									<span className="small_text dark_lnk">
										<Text string={site_settings?.site_phone} />
									</span>
								</Link> */}
            </div>
            <div className="contact_form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* </Layout> */}
    </>
  );
}
