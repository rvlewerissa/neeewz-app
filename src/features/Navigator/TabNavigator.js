// @flow
import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { TabNavigator, addNavigationHelpers } from "react-navigation";
import { Icon } from "react-native-elements";

import type { Dispatch } from "../../types/actions";

import DashboardNavigator from "./DashboardNavigator";

type TabBarProps = {
  focused: boolean,
  tintColor: string
};

export let TabNav = TabNavigator(
  {
    HomeTab: {
      screen: DashboardNavigator,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: function TabBarIcon({ focused, tintColor }: TabBarProps) {
          return (
            <View style={{ backgroundColor: "red" }}>
              <Text>Dashboard</Text>
            </View>
          );
        }
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
