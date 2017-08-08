// @flow

import React from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";

import type { Article } from "../types/news";

type Props = {
  data: Array<Article>,
  onPress?: (url: string, title: string) => void
};

export default function ListView(props: Props) {
  return <FlatList data={props.data} renderItem={renderItem} />;
}

function renderItem({ item }: { item: Article }) {
  let { title, description, urlToImage } = item;
  return (
    <View style={styles.item}>
      <View style={styles.contentWrapper}>
        <View style={styles.left}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        </View>
        <View style={styles.right}>
          <Image
            source={{ uri: urlToImage }}
            resizeMethod="resize"
            style={styles.image}
          />
        </View>
      </View>
      <Text style={styles.link}>FULL ARTICLE ></Text>
    </View>
  );
}

let styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "white"
  },
  contentWrapper: {
    flexDirection: "row"
  },
  left: {
    flex: 0.8
  },
  right: {
    marginLeft: 10
  },
  title: {
    fontWeight: "500",
    color: "#433B47",
    marginBottom: 5
  },
  description: {
    color: "#A9A8AB"
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 3
  },
  link: {
    fontSize: 12,
    textAlign: "right",
    color: "#DDDEE4",
    fontWeight: "500",
    marginTop: 5
  }
});
