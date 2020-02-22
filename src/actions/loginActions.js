import { LOGOUT, SET_LOGIN_USER } from "./types";

import { clearState } from "../store/localStorage";

export function setLoginUser(data) {
  return {
    type: SET_LOGIN_USER,
    data
  };
}
export function logOut() {
  return dispatch => {
    dispatch({ type: LOGOUT });
    clearState();
  };
}
export function getLoginUser(data) {
  return dispatch => {
    dispatch(setLoginUser(data));
  };
}
