// @flow

import React from "react";
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";

import { routeConfig, navigatorConfig } from "../../lib/routeConfig";

export let AppNavigator = StackNavigator(routeConfig, navigatorConfig);

function Navigator(props) {
  let { dispatch, nav } = props;
  return (
    <AppNavigator
      navigation={addNavigationHelpers({
        dispatch,
        state: nav
      })}
    />
  );
}

let mapDataToProps = state => {
  return {
    nav: state.nav
  };
};

export default connect(mapDataToProps)(Navigator);
