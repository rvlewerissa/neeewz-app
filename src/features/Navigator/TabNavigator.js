// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { BackHandler } from "react-native";
import { TabNavigator, addNavigationHelpers } from "react-navigation";
import { Icon } from "react-native-elements";

import type { Dispatch } from "../../types/actions";

import DashboardNavigator from "./DashboardNavigator";
import Settings from "../Settings/Settings";
import { BACK } from "../../constants/navigateActions";

export let TabNav = TabNavigator(
  {
    HomeTab: {
      screen: DashboardNavigator,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: function TabBarIcon() {
          <Icon name="rowing" />;
        }
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Settings"
      }
    }
  },
  {
    initialRouteName: "HomeTab",
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: "#F7F7F8",
        borderTopColor: "#A9A8AB",
        borderTopWidth: 0.2
      },
      labelStyle: {
        color: "#433B47"
      },
      indicatorStyle: {
        backgroundColor: "#A9A8AB"
      }
    }
  }
);

type Props = {
  dispatch: Dispatch,
  routeState: Object
};

// Component to pass navigation props to router
class Wrapper extends Component {
  props: Props;

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.dispatch({ type: BACK });
      return true;
    });
  }

  render() {
    let { dispatch, routeState } = this.props;
    return (
      <TabNav
        navigation={addNavigationHelpers({
          dispatch,
          state: routeState
        })}
      />
    );
  }
}

let mapDataToProps = state => {
  return {
    routeState: state.tabNavigation
  };
};

export default connect(mapDataToProps)(Wrapper);
