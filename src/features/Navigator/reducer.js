// @flow

import { AppNavigator } from "./navigator";

let initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("Dashboard")
);

export default function navigationReducer(
  state: Object = initialState,
  action: Object
) {
  let nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}
