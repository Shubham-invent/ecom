import {
  SET_ORDER_ITEMS_SYSTEM_1,
  SET_ORDER_ITEMS_SYSTEM_2,
  SET_ORDER_PAGE,
  SET_ORDER_PAYLOAD
} from "../actions/types";

const initialState = {
  orderItemsFetchedSys1: false,
  orderItemsFetchingSys1: false,
  errOrderItemsSys1: false,
  orderItemsFetchedSys2: false,
  orderItemsFetchingSys2: false,
  errOrderItemsSys2: false,
  payload: [],
  resSystem1: [],
  resSystem2: [],
  page: 1
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ORDER_ITEMS_SYSTEM_1:
      return Object.assign({}, state, {
        orderItemsFetchedSys1: true,
        orderItemsFetchingSys1: false,
        errOrderItemsSys1: false,
        resSystem1: action.data,
        payload: [...state.resSystem2, ...action.data]
      });
    case SET_ORDER_ITEMS_SYSTEM_2:
      return Object.assign({}, state, {
        orderItemsFetchedSys2: true,
        orderItemsFetchingSys2: false,
        errOrderItemsSys2: false,
        resSystem2: action.data,
        payload: [...state.resSystem1, ...action.data]
      });
    case SET_ORDER_PAGE:
      return Object.assign({}, state, {
        page: action.data
      });
    case SET_ORDER_PAYLOAD:
      return Object.assign({}, state, {
        payload: action.data
      });

    default:
      return state;
  }
};
