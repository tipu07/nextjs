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
} from "../actions/actionTypes";

const initialState = {
  error: false,
  isFormProcessing: false,
  isNewsLetterFormProcessing: false,
  isContactCompleted: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SAVE_CONTACT_QUERY:
      return {
        ...state,
        isFormProcessing: true,
        isContactCompleted: false,
      };
    case SAVE_CONTACT_QUERY_SUCCESS:
      if (payload?.status) {
        return {
          ...state,
          isFormProcessing: false,
          isContactCompleted: true,
        };
      } else {
        return {
          ...state,
          isFormProcessing: false,
        };
      }

    case SAVE_CONTACT_QUERY_FAILED:
      return {
        ...state,
        isFormProcessing: false,
      };

    case SAVE_PROJECT_QUERY:
      return {
        ...state,
        isFormProcessing: true,
        isRequestCompleted: false,
      };
    case SAVE_PROJECT_QUERY_SUCCESS:
      if (payload?.status) {
        return {
          ...state,
          isFormProcessing: false,
          isRequestCompleted: true,
        };
      } else {
        return {
          ...state,
          isFormProcessing: false,
        };
      }

    case SAVE_PROJECT_QUERY_FAILED:
      return {
        ...state,
        isFormProcessing: false,
      };
    case SAVE_NWESLETTER_QUERY:
      return {
        ...state,
        isNewsLetterFormProcessing: true,
      };
    case SAVE_NWESLETTER_QUERY_SUCCESS:
      return {
        ...state,
        isNewsLetterFormProcessing: false,
      };
    case SAVE_NWESLETTER_QUERY_FAILED:
      return {
        ...state,
        isNewsLetterFormProcessing: false,
      };

    case SAVE_JOB_QUERY:
      return {
        ...state,
        isFormProcessing: true,
        isJobCompleted: false,
      };

    case SAVE_JOB_QUERY_SUCCESS:
      if (payload?.status) {
        return {
          ...state,
          isFormProcessing: false,
          isJobCompleted: true,
        };
      } else {
        return {
          ...state,
          isFormProcessing: false,
        };
      }

    case SAVE_JOB_QUERY_FAILED:
      return {
        ...state,
        isFormProcessing: false,
      };

    default:
      return state;
  }
}
