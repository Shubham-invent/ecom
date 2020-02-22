import { SET_SIDE_MENU } from "./types";
import { sidebarMenuAPI } from "../env";

export function setSideMenu(data) {
  return {
    type: SET_SIDE_MENU,
    data
  };
}
export function getSideMenu() {
  return dispatch => {
    return fetch(sidebarMenuAPI)
      .then(res => res.json())
      .then(res => {
        dispatch(setSideMenu(res));
      });
  };
}
