// @flow

import React, { Component } from "react";
import { SideMenu } from "react-native-elements";
import autobind from "class-autobind";

type State = {
  isOpen: boolean
};

type Props = {
  children: ReactElement<*>
};

export default class Sidemenu extends Component {
  state: State;
  props: Props;
  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      isOpen: false
    };
  }

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let { children } = this.props;
    return (
      <SideMenu isOpen={this.state.isOpen}>
        {children}
      </SideMenu>
    );
  }
}
