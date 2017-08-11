// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BackHandler,
  View,
  StatusBar,
  StyleSheet,
  Platform
} from "react-native";
import { TabNavigator, addNavigationHelpers } from "react-navigation";
import { Icon } from "react-native-elements";

import type { Dispatch } from "../../types/actions";

import DashboardNavigator from "./DashboardNavigator";
import Credit from "../Credit/Credit";
import { BACK } from "../../constants/navigateActions";

export let TabNav = TabNavigator(
  {
    HomeTab: {
      screen: DashboardNavigator,
      navigationOptions: {
        tabBarLabel: "DASHBOARD",
        tabBarIcon: function TabBarIcon() {
          <Icon name="rowing" />;
        }
      }
    },
    Credit: {
      screen: Credit,
      navigationOptions: {
        tabBarLabel: "CREDIT"
      }
    }
  },
  {
    initialRouteName: "HomeTab",
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: "#F7F7F8",
        borderTopColor: "#A9A8AB",
        borderTopWidth: 0
      },
      labelStyle: {
        color: "#433B47",
        fontSize: 12,
        marginBottom: Platform.OS === "android" ? 5 : "2%",
        backgroundColor: "#F7F7F8",
        padding: Platform.OS === "android" ? 0 : "10%"
      },
      indicatorStyle: {
        backgroundColor: "#A9A8AB"
      },
      activeBackgroundColor: "#A9A8AB"
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
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <TabNav
          navigation={addNavigationHelpers({
            dispatch,
            state: routeState
          })}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

let mapDataToProps = state => {
  return {
    routeState: state.tabNavigation
  };
};

export default connect(mapDataToProps)(Wrapper);
