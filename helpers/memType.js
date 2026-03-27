import { getCookie } from "cookies-next";

export function memType() {
    return getCookie("mem_type") ?? "";
}
