// @flow

import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

import Header from "../../core-ui/Header";
import ListView from "../../core-ui/ListView";
import LoadingIndicator from "../../core-ui/LoadingIndicator";

import {
  JAGGER,
  LIGHT_WHITE,
  LIGHT_GREY_2,
  LIGHT_GREY_3
} from "../../constants/Color";

import type { Article } from "../../types/news";

type Props = {
  data: ?{
    articles: Array<Article>
  },
  source: string,
  navigateBack: () => void,
  navigateTo: (newsURI: string, newsTitle: string) => void
};

export default class NewsList extends Component {
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
            <Icon name="trending-up" color={LIGHT_GREY_3} />
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
    return articles.filter(({ title }) => title.toLowerCase());
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
    backgroundColor: LIGHT_GREY_2,
    borderBottomColor: LIGHT_WHITE
  },
  heading: {
    marginLeft: 10,
    marginBottom: 2,
    color: JAGGER,
    fontWeight: "500"
  },
  contentWrapper: {
    paddingTop: 70
  }
});
