// @flow

import { combineReducers } from "redux";
import {
  tabNavigationReducer,
  dashboardNavigationReducer
} from "./Navigator/reducer";
import { fetchHOCReducer } from "../core-ui/FetchHOC/reducer";
import { newsSourceReducer } from "./Dashboard/reducer";

export default combineReducers({
  tabNavigation: tabNavigationReducer,
  dashboardNavigation: dashboardNavigationReducer,
  newsSource: newsSourceReducer,
  __FETCH_DATA__: fetchHOCReducer
});
