import { getCookie } from "cookies-next";

export function siteLang() {
    return getCookie("site_lang") ?? "en";
}
