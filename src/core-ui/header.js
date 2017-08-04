// @flow

import React from "react";
import { Header } from "react-native-elements";

type Props = {
  text: string,
  leftIcon?: string,
  rightIcon?: string
};

const BACKGROUND_COLOR = "rgb(255, 161, 19)";
const TEXT_COLOR = "#fff";

export default function header(props: Props) {
  let { leftIcon, rightIcon, text } = props;
  let centerIcon = {
    text,
    style: { color: TEXT_COLOR }
  };

  return (
    <Header
      leftComponent={getIcon(leftIcon)}
      centerComponent={centerIcon}
      rightComponent={getIcon(rightIcon)}
      outerContainerStyles={{ backgroundColor: BACKGROUND_COLOR }}
    />
  );
}

function getIcon(icon?: string) {
  return icon ? { icon, color: TEXT_COLOR } : null;
}
