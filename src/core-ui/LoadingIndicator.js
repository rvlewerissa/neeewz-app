// @flow

import React from "react";
import { ActivityIndicator, StyleSheet, View, Dimensions } from "react-native";

let { height } = Dimensions.get("window");

export default function LoadingIndicator() {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" color="#947172" />
    </View>
  );
}

let styles = StyleSheet.create({
  root: {
    marginTop: height / 2 - 100
  }
});
