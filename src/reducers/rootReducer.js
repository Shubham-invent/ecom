import { combineReducers } from "redux";
import loginActionsReducer from "./loginActionsReducer";
import orderActionsReducer from "./orderActionsReducer";
import sideMenuActionsReducer from "./sideMenuActionsReducer";

const rootReducer = combineReducers({
  loginActionsReducer,
  sideMenuActionsReducer,
  orderActionsReducer
});
export default rootReducer;
