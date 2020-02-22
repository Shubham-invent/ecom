import {
  SET_ORDER_ITEMS_SYSTEM_1,
  SET_ORDER_ITEMS_SYSTEM_2
} from "../actions/types";

const initialState = {
  orderItemsFetched: false,
  orderItemsFetching: false,
  errOrderItems: false,
  payload: [],
  resSystem1: [],
  resSystem2: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ORDER_ITEMS_SYSTEM_1:
      console.log("1", state);
      return Object.assign({}, state, {
        orderItemsFetched: true,
        orderItemsFetching: false,
        errOrderItems: false,
        resSystem1: action.data,
        payload: [...state.resSystem2, ...action.data]
      });
    case SET_ORDER_ITEMS_SYSTEM_2:
      return Object.assign({}, state, {
        orderItemsFetched: true,
        orderItemsFetching: false,
        errOrderItems: false,
        resSystem2: action.data,
        payload: [...state.resSystem1, ...action.data]
      });
    default:
      return state;
  }
};
