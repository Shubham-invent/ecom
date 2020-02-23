import { combineReducers } from "redux";
import loginActionsReducer from "./loginActionsReducer";
import orderActionsReducer from "./orderActionsReducer";
import sideMenuActionsReducer from "./sideMenuActionsReducer";

const appReducer = combineReducers({
  loginActionsReducer,
  sideMenuActionsReducer,
  orderActionsReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
