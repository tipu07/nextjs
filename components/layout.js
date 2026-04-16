import SiteMaster from "./sitemaster";
import { useRouter } from "next/router";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
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
      <SiteMaster meta_info={meta_info} page_title={page_title} />
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}
