import SiteMaster from "./sitemaster";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
export default function Layout({
  children,
  meta_info,
  page_title,
  siteSettings,
  headerServices,
}) {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <SiteMaster meta_info={meta_info} page_title={page_title} />
      {/* <Header siteSettings={siteSettings} headerServices={headerServices} /> */}
      {children}
      {/* <Footer siteSettings={siteSettings} headerServices={headerServices} /> */}
    </>
  );
}
