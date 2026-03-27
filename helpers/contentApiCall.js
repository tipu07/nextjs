import http from "./http";
import { doObjToFormData } from "./helpers";

const contentApiCall = async (path, params = {}) => {
  const referralLink =
    typeof window !== "undefined" ? window.localStorage.getItem("ref") : false;

  params = { ...params, ref: referralLink };
  const result = await http
    .post(path, doObjToFormData(params))
    .then((response) => response.data)
    .catch((error) => error);
  return result;
};

export default contentApiCall;
