import axios from "axios";
import { actionType } from "./type";
import { createAction } from "./index";
import { TOKEN } from "../../util/config";
import { authSerivce } from "../../services/AuthService";
import { history } from "../../App";
import swal from "sweetalert";
import Swal from "sweetalert2";

export const SignIn = (data, callback) => {
  return async (dispatch) => {
    try {
      const res = await authSerivce.signIn(data);
      localStorage.setItem(TOKEN, res.data.token);

      setTimeout(() => {
        dispatch(createAction(actionType.SET_SIGN_IN, true));
        dispatch(createAction(actionType.SET_ME, res.data.user));
      }, 400);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign in success",
        showConfirmButton: false,
        timer: 1200
      });
      setTimeout(() => {
        history.goBack();
      }, 1500);

      console.log("signin", res);
      if (callback) {
        callback();
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email or password is not correct"
      });
      console.log(err);
    }
  };
};

export const signOut = (callback) => {
  return async (dispatch) => {
    dispatch(createAction(actionType.SET_ME, null));
    localStorage.removeItem(TOKEN);

    if (callback) {
      callback();
    }
  };
};

export const signUp = (data, callback) => {
  return async (dispatch) => {
    try {
      const res = await authSerivce.signUp(data);
      dispatch(actionType.SET_SIGN_UP, true);
      history.push("/signin");
      console.log("signup", res);
      if (callback) {
        callback();
      }
    } catch (err) {
      swal("Sever errors :(", "Please try again later");
      console.log(err);
    }
  };
};

export const fetchMe = (callback) => {
  return async (dispatch) => {
    try {
      const res = await authSerivce.fetchMe();
      dispatch(createAction(actionType.SET_SIGN_IN, res.data));
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};
