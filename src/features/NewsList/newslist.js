// @flow

import React, { Component } from "react";
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
  navigateBack: () => void,
  navigateTo: (newsURI: string, newsTitle: string) => void
};

export default class NewsList extends Component {
  props: Props;
  constructor() {
    super(...arguments);
  }

  render() {
    let { data, navigateBack } = this.props;
    let news = data && data.articles;
    return (
      <ScrollView style={styles.root}>
        <Header text="News List" leftIcon="arrow-back" onPress={navigateBack} />
        <View style={styles.contentWrapper}>
          <List>
            {news ? this._renderNews(news) : <LoadingIndicator />}
          </List>
        </View>
      </ScrollView>
    );
  }

  _renderNews(articles: Array<Object>) {
    let { navigateTo } = this.props;
    return articles.map(({ title, description, url, urlToImage }, i) =>
      <ListItem
        roundAvatar
        avatar={{ uri: urlToImage }}
        key={i}
        title={title}
        subtitle={description}
        onPress={() => navigateTo(url, title)}
      />
    );
  }
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
