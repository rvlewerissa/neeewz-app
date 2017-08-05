// @flow

import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { List, ListItem } from "react-native-elements";
import autobind from "class-autobind";

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

type State = {
  searchNews: string
};

export default class NewsList extends Component {
  state: State;
  props: Props;
  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      searchNews: ""
    };
  }

  render() {
    let { data, navigateBack } = this.props;
    let news = data && data.articles;
    return (
      <ScrollView style={styles.root}>
        <Header
          text="News List"
          leftIcon="arrow-back"
          onPress={navigateBack}
          onChangeText={this._onChangeText}
        />
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
    let { searchNews } = this.state;
    return articles
      .filter(({ title }) => title.toLowerCase().includes(searchNews))
      .map(({ title, description, url, urlToImage }, i) =>
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

  _onChangeText(text: string) {
    this.setState({ searchNews: text });
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
