// @flow

import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../../core-ui/Header";
import Thumbnail from "../../core-ui/Thumbnail";

import type { RouteNames } from "../../types/actions";
import type { NewsSources } from "../../types/news";

type Props = {
  navigateTo: (routeName: RouteNames) => void,
  newsSource: NewsSources
};

export default function Dashboard(props: Props) {
  let { navigateTo, newsSource } = props;
  return (
    <ScrollView style={styles.root}>
      <Header text="Hello" />
      <View style={styles.row}>
        {newsSource.map((news, i) =>
          <News {...news} navigateTo={navigateTo} key={i} />
        )}
      </View>
    </ScrollView>
  );
}

function News({ title, image, source, navigateTo }) {
  return (
    <Thumbnail text={title} image={image} onPress={() => navigateTo(source)} />
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 5,
    justifyContent: "center",
    paddingTop: 70
  }
});
