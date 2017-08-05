// @flow

import React from "react";
import { Header } from "react-native-elements";
import { WHITE, ORANGE } from "../constants/color";

type Props = {
  text: string,
  leftIcon?: string,
  onPress?: () => void
};

export default function header(props: Props) {
  let { leftIcon, text, onPress } = props;
  let centerIcon = {
    text,
    style: { color: WHITE }
  };

  return (
    <Header
      leftComponent={getIcon(leftIcon, onPress)}
      centerComponent={centerIcon}
      outerContainerStyles={{ backgroundColor: ORANGE }}
    />
  );
}

function getIcon(icon?: string, onPress?: () => void) {
  return icon ? { icon, color: WHITE, onPress } : null;
}
