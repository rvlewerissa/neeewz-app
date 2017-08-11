// @flow

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import Header from "../../core-ui/Header";

export default function Credit(props) {
  return (
    <View style={styles.root}>
      <Header text="Credit" />
      <View style={styles.textWrapper}>
        <Text>Created with </Text>
        <View style={styles.icon}>
          <Icon name="favorite" color="red" size={16} raised />
        </View>
        <Text> with </Text>
        <Text style={styles.bold}>React Native</Text>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 70
  },
  textWrapper: {
    flexDirection: "row"
  },
  bold: {
    fontWeight: "500"
  },
  icon: {
    bottom: 16
  }
});
