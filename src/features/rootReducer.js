// @flow

import { combineReducers } from "redux";
import navigationReducer from "./Navigator/reducer";
import { newsSourceReducer } from "./Dashboard/reducer";

export default combineReducers({
  nav: navigationReducer,
  newsSource: newsSourceReducer
});
