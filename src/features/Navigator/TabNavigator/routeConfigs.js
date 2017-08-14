// @flow

import React from "react";
import { Icon } from "react-native-elements";

import DashboardNavigator from "../DashboardNavigator/DashboardNavigator";
import Credit from "../../Credit/Credit";
import { Platform } from "react-native";
import { LIGHT_GREY, LIGHT_GREY_2 } from "../../../constants/Color";

export let routes = {
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
};

export let routeConfigs = {
  initialRouteName: "HomeTab",
  tabBarPosition: "bottom",
  animationEnabled: false,
  swipeEnabled: true,
  tabBarOptions: {
    showLabel: true,
    style: {
      backgroundColor: LIGHT_GREY_2,
      borderTopColor: LIGHT_GREY,
      borderTopWidth: 0
    },
    labelStyle: {
      color: "#433B47",
      fontSize: 12,
      marginBottom: Platform.OS === "android" ? 5 : "2%",
      backgroundColor: LIGHT_GREY_2,
      padding: Platform.OS === "android" ? 0 : "10%"
    },
    indicatorStyle: {
      backgroundColor: LIGHT_GREY
    },
    activeBackgroundColor: LIGHT_GREY
  }
};
