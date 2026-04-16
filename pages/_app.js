import React from "react";

import { parse } from "cookie";
import http from "../helpers/http";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/layout";

import "../styles/css/tailwind.min.css";
import "../styles/scss/final.generic.scss";

export default function App({
  Component,
  pageProps,
  siteSettings,
  headerServices,
}) {
  const renderWithLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <NextNProgress color="#ee2524ff" />
        <Layout siteSettings={siteSettings} headerServices={headerServices}>
          {page}
        </Layout>
      </>
    ));

  return renderWithLayout(<Component {...pageProps} />);
}

App.getInitialProps = async ({ ctx }) => {
  const cookies = parse(ctx?.req?.headers?.cookie || "");
  const authToken = cookies?.authToken || "";

  const siteData = await http
    .post("site-settings", { token: authToken })
    .then((response) => response?.data)
    .catch(() => null);

  return {
    siteSettings: siteData?.site_settings || {},
    headerServices: siteData?.header_services || [],
  };
};
