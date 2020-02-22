import { LOGOUT, SET_LOGIN_USER } from "./types";

export function setLoginUser(data) {
  return {
    type: SET_LOGIN_USER,
    data
  };
}
export function logOut() {
  return dispatch => {
    dispatch({ type: LOGOUT });
  };
}
export function getLoginUser(data) {
  return dispatch => {
    dispatch(setLoginUser(data));
  };
}
