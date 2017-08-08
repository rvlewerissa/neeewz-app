// @flow
import React from "react";
import { connect } from "react-redux";
import { TabNavigator, addNavigationHelpers } from "react-navigation";

import type { Dispatch } from "../../types/actions";

import DashboardNavigator from "./DashboardNavigator";

export let TabNav = TabNavigator(
  {
    HomeTab: {
      screen: DashboardNavigator,
      navigationOptions: {
        tabBarLabel: "Dashboard"
      }
    }
  },
  {
    initialRouteName: "HomeTab",
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false
  }
);

type Props = {
  dispatch: Dispatch,
  routeState: Object
};

// Component to pass navigation props to router
function Wrapper(props: Props) {
  let { dispatch, routeState } = props;
  return (
    <TabNav
      navigation={addNavigationHelpers({
        dispatch,
        state: routeState
      })}
    />
  );
}

let mapDataToProps = state => {
  return {
    routeState: state.tabNavigation
  };
};

export default connect(mapDataToProps)(Wrapper);
