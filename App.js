// @flow

import React, { Component } from "react";
import { Provider } from "react-redux";

import RootNavigator from "./src/features/Navigator/RootNavigator";
import dataStore from "./src/lib/storeConfig";

export default class App extends Component {
  render() {
    return (
      <Provider store={dataStore}>
        <RootNavigator />
      </Provider>
    );
  }
}
