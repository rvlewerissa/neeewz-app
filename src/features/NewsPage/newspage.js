// @flow
import React from "react";
import { WebView, StyleSheet, View } from "react-native";
import Header from "../../core-ui/Header";

import LoadingIndicator from "../../core-ui/LoadingIndicator";

type Props = {
  newsURI: string,
  newsTitle: string,
  navigateBack: () => void
};

export default function NewsPage(props: Props) {
  let { newsURI, newsTitle, navigateBack } = props;
  return (
    <View style={styles.wrapper}>
      <Header onPress={navigateBack} text={newsTitle} icon="arrow-back" />
      <WebView
        source={{ uri: newsURI }}
        startInLoadingState
        style={styles.webview}
        renderLoading={() =>
          <View style={styles.root}>
            <LoadingIndicator />
          </View>}
      />
    </View>
  );
}

let styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  root: {
    marginTop: 50
  },
  webview: {
    flex: 1,
    marginTop: 70
  }
});
