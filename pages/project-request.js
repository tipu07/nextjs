import React from "react";
import Layout from "../components/layout";
import RequestForm from "./sections/request-form";
import http from "../helpers/http";
import Text from "../components/text";
import MetaGenerator from "../components/meta-generator";

export const getServerSideProps = async () => {
  const result = await http
    .get("launch_project")
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function ProjectRequest({ result }) {
  let { page_title, meta_desc, content } = result;
  return (
    <>
      <MetaGenerator page_title={page_title} meta_desc={meta_desc} />
      <section id="launch_project">
        <div className="top_block">
          <div className="contain">
            <div className="content">
              <h1 className="h1">
                <Text string={content?.banner_heading} />
              </h1>
            </div>
          </div>
        </div>
        <div className="contain">
          <div className="wrapper">
            <div className="request_form">
              <Text string={content?.form_text} />
              <RequestForm />
            </div>
          </div>
        </div>
      </section>
      {/* </Layout> */}
    </>
  );
}
