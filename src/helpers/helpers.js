// @flow

import type { DashboardNavigation } from "../types/state";

export function getNewsMeta(state: DashboardNavigation) {
  let { dashboardNavigation } = state;
  let routes = dashboardNavigation.routes;
  let route = routes[routes.length - 1];
  let params = route.params;
  let newsURI = params && params.newsURI;
  let newsTitle = params && params.newsTitle;
  return { newsURI, newsTitle };
}
