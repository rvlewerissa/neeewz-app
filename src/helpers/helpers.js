// @flow

import type { State } from "../types/state";

export function getNewsMeta(state: State) {
  let { dashboardNavigation } = state;
  let routes = dashboardNavigation.routes;
  let route = routes[routes.length - 1];
  let params = route.params;
  let newsURI = params && params.newsURI;
  let newsTitle = params && params.newsTitle;
  return { newsURI, newsTitle };
}

export function getSource(state: State) {
  let routes = state.dashboardNavigation.routes;
  let route = routes[routes.length - 1];
  let params = route.params || {};
  return params.source;
}
