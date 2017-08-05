// @flow
import React from "react";
import { WebView } from "react-native";

type Props = {
  newsURI: string
};

export default function NewsPage(props: Props) {
  let { newsURI } = props;
  return <WebView source={{ uri: newsURI }} />;
}
