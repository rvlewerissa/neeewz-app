// @flow

import Dashboard from "../features/Dashboard/container";
import NewsList from "../features/NewsList/container";
import NewsPage from "../features/NewsPage/container";

export let routeConfig = {
  Dashboard: {
    screen: Dashboard
  },
  NewsList: {
    screen: NewsList
  },
  NewsPage: {
    screen: NewsPage
  }
};

export let navigatorConfig = {
  initialRouteName: "Dashboard",
  headerMode: "none"
};
