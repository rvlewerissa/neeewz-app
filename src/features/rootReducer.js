// @flow

import { combineReducers } from "redux";
import navigationReducer from "./Navigator/reducer";

export default combineReducers({
  nav: navigationReducer
});
