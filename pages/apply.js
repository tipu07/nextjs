import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import ApplyForm from "./sections/appy-form";

import http from "../helpers/http";
import Text from "../components/text";
import { cmsFileUrl } from "../helpers/helpers";
import MetaGenerator from "../components/meta-generator";

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const result = await http
    .get(`apply/${slug}`)
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};
export default function Apply({ result }) {
  let { page_title, meta_desc, content, apply } = result;

  const router = useRouter();

  return (
    <>
      <MetaGenerator page_title={page_title} meta_desc={meta_desc} />
      <main>
        <section className="common_banner apply_banner_new">
          <div className="contain">
            <div className="cntnt" data-aos="fade-up" data-aos-duration="1500">
              <h1>
                <Text string={content?.banner_heading} />
              </h1>
              <p className="new_pera_white">
                <Text string={content?.banner_text} />
              </p>
            </div>
          </div>
        </section>
        <section className="contact_sec project_request_form">
          <div className="contain">
            <div className="flex">
              <div className="colL" data-aos="fade-up" data-aos-duration="1500">
                <h3>React Junior developer</h3>
                <p>
                  As a Junior React Developer at HeroSolutions, you will have
                  the opportunity to work on exciting projects and collaborate
                  with experienced developers to enhance your skills
                </p>
              </div>
              <div className="colR">
                <div
                  className="contact_form"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <ApplyForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* </Layout> */}
    </>
  );
}
