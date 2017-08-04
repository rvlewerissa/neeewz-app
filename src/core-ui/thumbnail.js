// @flow
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type BoxProps = {
  text: string,
  image: number
};

export default function Box(props: BoxProps) {
  let { text, image } = props;
  return (
    <View style={styles.imageWrapper}>
      <Image source={image} resizeMethod="resize" style={styles.image} />
      <Text style={styles.title}>
        {text}
      </Text>
    </View>
  );
}

let styles = StyleSheet.create({
  imageWrapper: {
    margin: 10,
    marginHorizontal: 5,
    marginVertical: 10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4
  },
  title: {
    fontFamily: "sans-serif-medium",
    marginTop: 5,
    textAlign: "center",
    fontWeight: "300"
  }
});
