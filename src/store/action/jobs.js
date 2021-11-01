import axios from "axios";
import { actionType } from "./type";
import { createAction } from "./index";
import { TOKEN } from "../../util/config";
import { jobsSerivce } from "../../services/JobsService";

export const fetchListJobs = (callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await jobsSerivce.fetchListJobs();

      dispatch(createAction(actionType.SET_LIST_JOBS, res.data));

      console.log("listJobs", res);
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log("listJobs", err);
    }

    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 1000);
  };
};

export const fetchTitleJobs = (callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await jobsSerivce.fetchTitleJobs();

      dispatch(createAction(actionType.SET_TITLE_JOBS, res.data));
      if (callback) {
        callback();
      }
      console.log('title', res)
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 1000);
  };
};

export const fetchSubTypeJobs = (type, callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.IS_LOADING, true));
    try {
      const res = await jobsSerivce.fetchSubTypeJobs(type);

      dispatch(createAction(actionType.SET_SUB_TYPE_JOBS, res.data.type));
      if (callback) {
        callback();
      }
      console.log('subtype', res)
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      dispatch(createAction(actionType.IS_LOADING, false));
    }, 1000);
  };
};
