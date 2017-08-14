// @flow

import React, { Component } from "react";
import { connect } from "react-redux";

import type { Dispatch } from "../../types/actions";

type Props = {
  endpoint: string,
  fetchData: Object,
  dispatch: Dispatch
};

type State = {
  isLoading: boolean,
  isSuccess: ?boolean
};

export default (url: string, variableMapping: Function) => (
  Instance: Object
) => {
  class Fetcher extends Component {
    state: State;
    props: Props;

    constructor() {
      super(...arguments);
      this.state = {
        isLoading: true,
        isSuccess: null
      };
    }

    componentDidMount() {
      let { endpoint } = this.props;
      fetch(endpoint)
        .then(data => {
          this.props.dispatch({
            type: "__FETCHER__FETCH_SUCCESSFUL",
            endpoint,
            payload: JSON.parse(data._bodyInit)
          });
          this.setState({
            isLoading: false,
            isSuccess: true
          });
        })
        .reject(() =>
          this.setState({
            isSuccess: false,
            isLoading: false
          })
        );
    }

    render() {
      let { fetchData, ...rest } = this.props;
      let { isLoading, isSuccess } = this.state;
      return (
        <Instance
          data={fetchData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          {...rest}
        />
      );
    }
  }

  function mapStateToProps(state) {
    let mapping = variableMapping(state);
    let endpoint = Object.keys(mapping).reduce((result, variable) => {
      return result.replace(variable, mapping[variable]);
    }, url);
    return {
      endpoint,
      fetchData: state.__FETCH_DATA__[endpoint]
    };
  }

  return connect(mapStateToProps)(Fetcher);
};
