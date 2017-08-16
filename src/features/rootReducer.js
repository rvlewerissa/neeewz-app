// @flow

import { combineReducers } from "redux";
import {
  tabNavigationReducer,
  dashboardNavigationReducer
} from "./Navigator/reducer";
import { fetchHOCReducer } from "fetch-hoc-redux";
import { newsSourceReducer } from "./Dashboard/reducer";

export default combineReducers({
  tabNavigation: tabNavigationReducer,
  dashboardNavigation: dashboardNavigationReducer,
  newsSource: newsSourceReducer,
  __FETCHER__: fetchHOCReducer
});
