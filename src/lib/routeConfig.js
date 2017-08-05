// @flow

import Dashboard from "../features/Dashboard/container";
import NewsList from "../features/NewsList/container";

export let routeConfig = {
  Dashboard: {
    screen: Dashboard
  },
  NewsList: {
    screen: NewsList
  }
};

export let navigatorConfig = {
  initialRouteName: "Dashboard",
  headerMode: "none"
};
