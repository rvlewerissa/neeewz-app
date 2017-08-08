// @flow

import React, { Component } from "react";
import autobind from "class-autobind";
import { Header, SearchBar, Icon } from "react-native-elements";
import { WHITE, JAGGER } from "../constants/color";

type Props = {
  text: string,
  leftIcon?: string,
  onPress?: () => void,
  onChangeText?: (text: string) => void
};

type State = {
  showSearchBar: boolean
};

export default class TopBar extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      showSearchBar: false
    };
  }

  render() {
    let { leftIcon, onPress } = this.props;
    return (
      <Header
        leftComponent={getIcon(leftIcon, onPress)}
        centerComponent={this._getCenterComponent()}
        rightComponent={this._getRightComponent()}
        outerContainerStyles={{ backgroundColor: JAGGER }}
      />
    );
  }

  _getRightComponent() {
    let { showSearchBar } = this.state;
    let { text } = this.props;
    if (text !== "News List") return null;
    return !showSearchBar
      ? <Icon
        name="search"
        color={WHITE}
        onPress={() => this.setState({ showSearchBar: true })}
      />
      : <Icon
        name="close"
        color={WHITE}
        onPress={() => this.setState({ showSearchBar: false })}
      />;
  }

  _getCenterComponent() {
    let { showSearchBar } = this.state;
    let { text } = this.props;
    return showSearchBar
      ? this._renderSearchBar()
      : {
        text,
        style: { color: WHITE }
      };
  }

  _renderSearchBar() {
    return (
      <SearchBar
        round
        lightTheme
        onChangeText={this._onChangeText}
        inputStyle={{
          backgroundColor: WHITE
        }}
        containerStyle={{
          backgroundColor: JAGGER,
          borderBottomColor: JAGGER,
          borderTopColor: JAGGER,
          width: 250
        }}
      />
    );
  }

  _onChangeText(text: string) {
    let { onChangeText } = this.props;
    onChangeText && onChangeText(text);
  }
}

function getIcon(icon?: string, onPress?: () => void) {
  return icon ? { icon, color: WHITE, onPress } : null;
}
