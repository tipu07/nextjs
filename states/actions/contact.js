import http from "../../helpers/http";
import { doObjToFormData } from "../../helpers/helpers";
import toast from "react-hot-toast";

import {
  SAVE_CONTACT_QUERY,
  SAVE_CONTACT_QUERY_SUCCESS,
  SAVE_CONTACT_QUERY_FAILED,
  SAVE_NWESLETTER_QUERY,
  SAVE_NWESLETTER_QUERY_SUCCESS,
  SAVE_NWESLETTER_QUERY_FAILED,
  SAVE_PROJECT_QUERY,
  SAVE_PROJECT_QUERY_SUCCESS,
  SAVE_PROJECT_QUERY_FAILED,
  SAVE_JOB_QUERY,
  SAVE_JOB_QUERY_SUCCESS,
  SAVE_JOB_QUERY_FAILED,
} from "./actionTypes";
import Text from "@/components/components/text";

export const saveContactQuery = (formData) => (dispatch) => {
  dispatch({
    type: SAVE_CONTACT_QUERY,
    payload: null,
  });
  http
    .post("save-contact-message", doObjToFormData(formData))
    .then(({ data }) => {
      if (data.validationErrors) {
        toast.error(<Text string={data.validationErrors} parse={true} />);
      } else if (data?.status === 1) {
        toast.success(data?.msg);
      } else {
        toast.error(data?.msg);
      }
      dispatch({
        type: SAVE_CONTACT_QUERY_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SAVE_CONTACT_QUERY_FAILED,
        payload: error,
      });
    });
};

export const saveJobApplications = (formData) => (dispatch) => {
  dispatch({
    type: SAVE_JOB_QUERY,
    payload: null,
  });
  http
    .post("job_applications", doObjToFormData(formData))
    .then(({ data }) => {
      if (data.validationErrors) {
        toast.error(<Text string={data.validationErrors} parse={true} />);
      } else if (data?.status === 1) {
        toast.success(data?.msg);
      } else {
        toast.error(data?.msg);
      }
      dispatch({
        type: SAVE_JOB_QUERY_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SAVE_JOB_QUERY_FAILED,
        payload: error,
      });
    });
};

export const saveProjectRequest = (formData) => (dispatch) => {
  dispatch({
    type: SAVE_PROJECT_QUERY,
    payload: null,
  });
  http
    .post("project_requests", doObjToFormData(formData))
    .then(({ data }) => {
      if (data.validationErrors) {
        toast.error(<Text string={data.validationErrors} parse={true} />);
      } else if (data?.status === 1) {
        toast.success(data?.msg);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
      } else {
        toast.error(data?.msg);
      }
      dispatch({
        type: SAVE_PROJECT_QUERY_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SAVE_PROJECT_QUERY_FAILED,
        payload: error,
      });
    });
};
export const saveNewsletterQuery = (formData) => (dispatch) => {
  dispatch({
    type: SAVE_NWESLETTER_QUERY,
    payload: null,
  });
  http
    .post("save-newsletter-message", doObjToFormData(formData))
    .then(({ data }) => {
      if (data.validationErrors) {
        toast.error(<Text string={data.validationErrors} parse={true} />);
      } else if (data?.status === 1) {
        toast.success(data?.msg);
      } else {
        toast.error(data?.msg);
      }
      dispatch({
        type: SAVE_NWESLETTER_QUERY_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SAVE_NWESLETTER_QUERY_FAILED,
        payload: error,
      });
    });
};
