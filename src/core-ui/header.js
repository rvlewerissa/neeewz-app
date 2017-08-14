// @flow

import React, { Component } from "react";
import autobind from "class-autobind";
import { Header } from "react-native-elements";
import { WHITE, JAGGER } from "../constants/Color";

type Props = {
  text: string,
  icon?: string,
  onPress?: () => void
};

export default class TopBar extends Component {
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    return (
      <Header
        leftComponent={this._getLeftComponent()}
        centerComponent={this._getPageTitle()}
        outerContainerStyles={styles.containerStyles}
      />
    );
  }

  _getLeftComponent() {
    let { icon, onPress } = this.props;
    return icon ? { icon, color: WHITE, onPress } : null;
  }

  _getPageTitle() {
    let { text } = this.props;
    return {
      text,
      style: styles.title
    };
  }
}

let styles = {
  containerStyles: {
    zIndex: 2,
    backgroundColor: JAGGER,
    borderBottomWidth: 0
  },
  title: {
    color: WHITE,
    marginBottom: 3
  }
};
