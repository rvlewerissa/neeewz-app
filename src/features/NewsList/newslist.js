// @flow

import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

import Header from "../../core-ui/Header";
import ListView from "../../core-ui/ListView";
import LoadingIndicator from "../../core-ui/LoadingIndicator";

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
  }

  render() {
    let { navigateBack } = this.props;
    let heading = this._getHeading();
    return (
      <View style={styles.root}>
        <Header text={heading} icon="arrow-back" onPress={navigateBack} />
        {this._renderNews()}
      </View>
    );
  }

  _renderNews() {
    let { data, navigateTo } = this.props;
    let news = data && data.articles;
    return (
      <ScrollView style={styles.root}>
        <View style={styles.contentWrapper}>
          <View style={styles.headingWrapper}>
            <Icon name="trending-up" color="rgb(224, 224, 224)" />
            <Text style={styles.heading}>TRENDING</Text>
          </View>
          {news
            ? <ListView data={this._filterNews(news)} onPress={navigateTo} />
            : <LoadingIndicator />}
        </View>
      </ScrollView>
    );
  }

  _filterNews(articles: Array<Article>) {
    return articles.filter(({ title }) =>
      title.toLowerCase().includes(this.state.searchNews)
    );
  }

  _getHeading() {
    let { source } = this.props;
    return (source && source.toUpperCase().split("-").join(" ")) || "NewsList";
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1
  },
  headingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 0.5,
    backgroundColor: "#F7F7F8",
    borderBottomColor: "rgb(224, 224, 224)"
  },
  heading: {
    marginLeft: 10,
    marginBottom: 2,
    color: "#433B47",
    fontWeight: "500"
  },
  contentWrapper: {
    paddingTop: 70
  }
});
