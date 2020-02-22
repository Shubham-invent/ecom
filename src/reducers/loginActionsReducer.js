import { LOGOUT, SET_LOGIN_USER } from "../actions/types";

const initialState = {
  loginFetched: false,
  loginFetching: false,
  errLogin: false,
  payload: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_USER:
      return Object.assign({}, state, {
        loginFetched: true,
        loginFetching: false,
        errLogin: false,
        payload: action.data
      });
    case LOGOUT: {
      return { payload: { message: "" } };
    }

    default:
      return state;
  }
};
