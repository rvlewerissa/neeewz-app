// @flow
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";

let { width } = Dimensions.get("window");

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
    width: width / 4,
    height: width / 4,
    borderRadius: 4
  },
  title: {
    fontFamily:
      Platform.OS === "android" ? "sans-serif-light" : "Helvetica Neue",
    marginTop: 5,
    textAlign: "center",
    fontWeight: "300"
  }
});
