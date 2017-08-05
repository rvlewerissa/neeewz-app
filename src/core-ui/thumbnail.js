// @flow
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

type ThumbnailProps = {
  text: string,
  image: number,
  onPress?: () => void
};

export default function Thumbnail(props: ThumbnailProps) {
  let { text, image, onPress } = props;
  return (
    <View style={styles.imageWrapper}>
      <TouchableOpacity onPress={onPress}>
        <Image source={image} resizeMethod="resize" style={styles.image} />
      </TouchableOpacity>
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
