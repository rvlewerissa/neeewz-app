// @flow

import type { NewsSources } from "./news";

type Router = Object;

export type DashboardNavigation = Router;
export type TabNavigation = Router;

export type State = {
  tabNavigation: TabNavigation,
  dashboardNavigation: DashboardNavigation,
  newsSource: NewsSources
};
