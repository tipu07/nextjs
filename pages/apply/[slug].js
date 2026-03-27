import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import Layout from "@/components/components/layout";
import ApplyForm from "../sections/appy-form";

import http from "@/components/helpers/http";
import Text from "@/components/components/text";
import MetaGenerator from "@/components/components/meta-generator";

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

  //   const router = useRouter();

  return (
    <>
      <MetaGenerator page_title={page_title} meta_desc={meta_desc} />
      <section id="apply">
        <div className="top_block">
          <div className="contain">
            <div className="content">
              <div className="h1">
                <Text string={content?.banner_heading} />
              </div>
              <p>
                <Text string={content?.banner_text} />
              </p>
            </div>
          </div>
        </div>
        <div className="contain">
          <div className="wrapper">
            <div className="job_info">
              <div className="text">
                <div className="h3">
                  <Text string={apply?.title} />
                </div>
                <p>
                  <Text string={apply?.short_desc} />
                </p>
              </div>
              <div className="info">
                <div className="salary">
                  {apply?.salary}
                  <img src="/images/icon/icon_currency.svg" alt="" />
                </div>
                <div className="job_type">
                  {apply?.job_type}
                  <img src="/images/icon/icon_clock.svg" alt="" />
                </div>
              </div>
            </div>
            <ApplyForm careerId={apply?.id} />
          </div>
        </div>
      </section>
      {/* </Layout> */}
    </>
  );
}
