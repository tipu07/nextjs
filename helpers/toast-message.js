import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../config/settings";

export default function toastMessage(
  message = "404:default-string-showing",
  type = "success"
) {
  if (type == "success") return toast.success(message, TOAST_SETTINGS);
  else return toast.error(message, TOAST_SETTINGS);
}
