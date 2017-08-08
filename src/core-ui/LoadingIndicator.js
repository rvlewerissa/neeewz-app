// @flow

import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

import { ZERO_OPACITY } from "../constants/color";

export default function LoadingIndicator() {
  return (
    <Spinner
      visible
      overlayColor={ZERO_OPACITY}
      color="rgb(148, 113, 114)"
      cancellable
    />
  );
}
