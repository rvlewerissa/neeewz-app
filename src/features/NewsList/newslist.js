// @flow

import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

import Header from "../../core-ui/Header";
import ListView from "../../core-ui/ListView";
import LoadingIndicator from "../../core-ui/LoadingIndicator";
import { WHITE } from "../../constants/color";

import type { Article } from "../../types/news";

type Props = {
  data: ?{
    articles: Array<Article>
  },
  source: string,
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
    this.state = {
      searchNews: ""
    };
  }

  render() {
    let { data, navigateBack, navigateTo, source } = this.props;
    let news = data && data.articles;
    let heading =
      (source && source.toUpperCase().split("-").join(" ")) || "NewsList";
    return (
      <ScrollView style={styles.root}>
        <Header
          text={heading}
          leftIcon="arrow-back"
          onPress={navigateBack}
          onChangeText={this._onChangeText}
        />
        <View style={styles.contentWrapper}>
          <View style={styles.headingWrapper}>
            <Icon name="trending-up" color="rgb(224, 224, 224)" />
            <Text style={styles.heading}>TRENDING</Text>
          </View>
          <View>
            {news
              ? <ListView data={this._filterNews(news)} onPress={navigateTo} />
              : <LoadingIndicator />}
          </View>
        </View>
      </ScrollView>
    );
  }

  _filterNews(articles: Array<Article>) {
    return articles.filter(({ title }) =>
      title.toLowerCase().includes(this.state.searchNews)
    );
  }

  _onChangeText(text: string) {
    this.setState({ searchNews: text });
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1
  },
  headingWrapper: {
    backgroundColor: "white",
    borderBottomColor: "rgb(224, 224, 224)",
    borderBottomWidth: 0.5,
    alignItems: "center",
    flexDirection: "row",
    padding: 10
  },
  heading: {
    color: "#A9A8AB",
    fontWeight: "500",
    marginLeft: 5
  },
  contentWrapper: {
    paddingTop: 70
  }
});
