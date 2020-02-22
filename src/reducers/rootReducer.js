import { combineReducers } from "redux";
import loginActionsReducer from "./loginActionsReducer";
import sideMenuActionsReducer from "./sideMenuActionsReducer";

const rootReducer = combineReducers({
  loginActionsReducer,
  sideMenuActionsReducer
});
export default rootReducer;
