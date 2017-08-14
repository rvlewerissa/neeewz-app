// @flow

import { TabNav } from "./TabNavigator/TabNavigator";
import { DashboardNav } from "./DashboardNavigator/DashboardNavigator";

let initTabState = TabNav.router.getStateForAction(
  TabNav.router.getActionForPathAndParams("HomeTab")
);

export function tabNavigationReducer(
  state: Object = initTabState,
  action: Object
) {
  let nextState = TabNav.router.getStateForAction(action, state);
  return nextState || state;
}

let initDashboardState = DashboardNav.router.getStateForAction(
  DashboardNav.router.getActionForPathAndParams("Dashboard")
);

export function dashboardNavigationReducer(
  state: Object = initDashboardState,
  action: Object
) {
  let nextState = DashboardNav.router.getStateForAction(action, state);
  return nextState || state;
}
