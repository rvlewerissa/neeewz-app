// @flow

import React, { Component } from "react";
import { View, StatusBar, StyleSheet, BackHandler } from "react-native";
import { BACK } from "../../constants/NavigateActions";
import { connect } from "react-redux";

import TabNavigator from "./TabNavigator/TabNavigator";

import type { Dispatch } from "../../types/actions";

type Props = {
  dispatch: Dispatch
};

class RootNavigator extends Component {
  props: Props;

  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.dispatch({ type: BACK });
      return true;
    });
  }

  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <TabNavigator />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default connect()(RootNavigator);
