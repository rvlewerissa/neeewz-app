// @flow

import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { List, ListItem } from "react-native-elements";

import Header from "../../core-ui/Header";
import LoadingIndicator from "../../core-ui/LoadingIndicator";
import { WHITE } from "../../constants/color";

type Articles = Array<{
  title: string,
  description: string,
  urlToImage: string
}>;

type Props = {
  data: ?{
    articles: Articles
  },
  navigateBack: () => void
};

export default function NewsList(props: Props) {
  let { data, navigateBack } = props;
  let news = data && data.articles;
  return (
    <ScrollView style={styles.root}>
      <Header text="News List" leftIcon="arrow-back" onPress={navigateBack} />
      <View style={styles.contentWrapper}>
        <List>
          {news ? renderNews(news) : <LoadingIndicator />}
        </List>
      </View>
    </ScrollView>
  );
}

function renderNews(articles: Array<Object>) {
  return articles.map((article, i) =>
    <ListItem
      roundAvatar
      avatar={{ uri: article.urlToImage }}
      key={i}
      title={article.title}
      subtitle={article.description}
    />
  );
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: WHITE
  },
  contentWrapper: {
    paddingTop: 45
  }
});
