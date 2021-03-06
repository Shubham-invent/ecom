import {
  SET_ORDER_ITEMS_SYSTEM_1,
  SET_ORDER_ITEMS_SYSTEM_2,
  SET_ORDER_PAGE,
  SET_ORDER_PAYLOAD
} from "./types";
import { system1API, system2API } from "../env";

export function setOrderItemsSystem1(data) {
  return {
    type: SET_ORDER_ITEMS_SYSTEM_1,
    data
  };
}

export function setOrderItemsSystem2(data) {
  return {
    type: SET_ORDER_ITEMS_SYSTEM_2,
    data
  };
}
export function getOrderItemsSystem1() {
  return dispatch => {
    return fetch(system1API)
      .then(res => res.json())
      .then(res => {
        dispatch(setOrderItemsSystem1(res));
      });
  };
}
export function getOrderItemsSystem2() {
  return dispatch => {
    return fetch(system2API)
      .then(res => res.json())
      .then(res => {
        dispatch(setOrderItemsSystem2(res));
      });
  };
}

export function setOrderPage(data) {
  return {
    type: SET_ORDER_PAGE,
    data
  };
}

export function getOrderPage(page) {
  return dispatch => {
    dispatch(setOrderPage(page));
  };
}

export function setOrderPayload(data) {
  return {
    type: SET_ORDER_PAYLOAD,
    data
  };
}

export function getOrderPayload(page) {
  return dispatch => {
    dispatch(setOrderPayload(page));
  };
}
