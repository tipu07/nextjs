import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { Provider } from "react-redux";
import store from "../states/store";

import { parse } from "cookie";
import http from "../helpers/http";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/layout";

import "../styles/css/tailwind.min.css";
// import "../styles/scss/web.generic.scss";
import "../styles/scss/final.generic.scss";
// import "aos/dist/aos.css";

import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useRouter } from "next/router";

export default function App({
  Component,
  pageProps,
  siteSettings,
  headerServices,
}) {
  console.log(headerServices);
  const lenisRef = useRef();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const prevScrollRef = useRef(0);
  const routeChangingRef = useRef(false);

  // Initialize AOS and GSAP ticker
  useEffect(() => {
    AOS.init({ once: true }); // initialize only once per page

    function update(time) {
      if (!routeChangingRef.current) {
        lenisRef.current?.lenis?.raf(time * 1000);
      }
    }

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  // Handle route changes to reset scroll instantly
  useEffect(() => {
    const handleRouteChangeStart = () => {
      routeChangingRef.current = true;
    };

    const handleRouteChangeComplete = () => {
      lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
      routeChangingRef.current = false;
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  // Track scroll direction for your visible state
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    function onScroll({ scroll }) {
      const scrollingDown = scroll > prevScrollRef.current;
      setVisible(!scrollingDown);
      prevScrollRef.current = scroll;
    }

    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, []);

  //   const renderWithLayout = Component.getLayout || ((page) => <>{page}</>);

  //   return (
  //     <Provider store={store}>
  //       <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
  //         {renderWithLayout(<Component {...pageProps} visible={visible} />)}
  //       </ReactLenis>
  //     </Provider>
  //   );

  const renderWithLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <NextNProgress color="#ee2524ff" />
        <Provider store={store}>
          <Layout siteSettings={siteSettings} headerServices={headerServices}>
            {page}
          </Layout>
        </Provider>
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
