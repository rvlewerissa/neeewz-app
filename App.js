// @flow

import React, { Component } from "react";
import { Provider } from "react-redux";

import Root from "./src/features/Navigator/navigator";
import dataStore from "./src/lib/storeConfig";

export default class App extends Component {
  render() {
    return (
      <Provider store={dataStore}>
        <Root />
      </Provider>
    );
  }
}
