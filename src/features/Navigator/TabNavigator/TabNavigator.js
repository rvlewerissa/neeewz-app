// @flow

import React from "react";
import { connect } from "react-redux";
import { TabNavigator, addNavigationHelpers } from "react-navigation";

import { routes, routeConfigs } from "./routeConfigs";

import type { Dispatch } from "../../../types/actions";

export let TabNav = TabNavigator(routes, routeConfigs);

type Props = {
  dispatch: Dispatch,
  routeState: Object
};

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
