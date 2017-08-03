// @flow

import Dashboard from "../features/Dashboard/dashboard";

export let routeConfig = {
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: "Dashboard"
    })
  }
};

export let navigatorConfig = {
  initialRouteName: "Dashboard",
  headerMode: "float"
};
