// @flow

import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../../core-ui/Header";
import Thumbnail from "../../core-ui/Thumbnail";

import type { RouteNames } from "../../types/actions";
import type { NewsSources, NewsSource } from "../../types/news";

type Props = {
  navigateTo: (routeName: RouteNames) => void,
  newsSource: NewsSources
};

export default function Dashboard(props: Props) {
  let { navigateTo, newsSource } = props;
  return (
    <View style={styles.flexOne}>
      <Header text="Dashboard" />
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          {newsSource.map((news, i) =>
            <News {...news} navigateTo={navigateTo} key={i} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

type NewsProp = NewsSource & { navigateTo: Function };

function News({ title, image, source, navigateTo }: NewsProp) {
  return (
    <Thumbnail text={title} image={image} onPress={() => navigateTo(source)} />
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  flexOne: {
    flex: 1
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: "5%",
    paddingTop: 70
  }
});
