// @flow

import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../../core-ui/header";
import Thumbnail from "../../core-ui/thumbnail";

import bbcSport from "../../assets/bbc-sport.png";
import cnbc from "../../assets/cnbc.png";
import dailymail from "../../assets/daily-mail.png";
import espn from "../../assets/espn.png";
import huffingtonpost from "../../assets/huffington-post.png";
import mashable from "../../assets/mashable.png";
import talksport from "../../assets/talksport.png";
import economist from "../../assets/the-economist.png";
import time from "../../assets/time.png";

export default function Dashboard(prop) {
  console.log(prop);
  return (
    <ScrollView style={styles.root}>
      <View style={styles.row}>
        <Thumbnail text="BBC Sport" image={bbcSport} />
        <Thumbnail text="CNBC" image={cnbc} />
        <Thumbnail text="Dailymail" image={dailymail} />
        <Thumbnail text="ESPN" image={espn} />
        <Thumbnail text="Mashable" image={mashable} />
        <Thumbnail text="Huffington Post" image={huffingtonpost} />
        <Thumbnail text="Talksport" image={talksport} />
        <Thumbnail text="Economist" image={economist} />
        <Thumbnail text="Time" image={time} />
      </View>
    </ScrollView>
  );
}

Dashboard.navigationOptions = () => {
  return {
    header: <Header text="Dashboard" leftIcon="menu" />
  };
};

let styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: "white"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 5,
    justifyContent: "center"
  }
});
