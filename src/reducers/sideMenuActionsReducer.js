import { SET_SIDE_MENU } from "../actions/types";

const initialState = {
  sideMenuFetched: false,
  sideMenuFetching: false,
  errSideMenu: false,
  payload: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIDE_MENU:
      return Object.assign({}, state, {
        sideMenuFetched: true,
        sideMenuFetching: false,
        errSideMenu: false,
        payload: action.data
      });
    default:
      return state;
  }
};
