// @flow

import React, { Component } from "react";
import { Provider } from "react-redux";

import Navigator from "./src/features/Navigator/navigator";
import dataStore from "./src/lib/storeConfig";

export default class App extends Component {
  render() {
    return (
      <Provider store={dataStore}>
        <Navigator />
      </Provider>
    );
  }
}
