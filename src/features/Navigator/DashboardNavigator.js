// @flow

import React from "react";
import { connect } from "react-redux";
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import type { Dispatch } from "../../types/actions";

import Dashboard from "../Dashboard/container";
import NewsList from "../NewsList/container";
import NewsPage from "../NewsPage/container";

export let DashboardNav = StackNavigator(
  {
    Dashboard: {
      screen: Dashboard
    },
    NewsList: {
      screen: NewsList
    },
    NewsPage: {
      screen: NewsPage
    }
  },
  {
    initialRouteName: "Dashboard",
    headerMode: "none"
  }
);

type Props = {
  dispatch: Dispatch,
  routeState: Object
};

// Component to pass navigation props to router
function Wrapper(props: Props) {
  let { dispatch, routeState } = props;
  console.log(dispatch.toString());
  return (
    <DashboardNav
      navigation={addNavigationHelpers({
        dispatch,
        state: routeState
      })}
    />
  );
}

let mapDataToProps = state => {
  return {
    routeState: state.dashboardNavigation
  };
};

export default connect(mapDataToProps)(Wrapper);
