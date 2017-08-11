// @flow

import { connect } from "react-redux";

import NewsList from "./Dashboard";
import { NAVIGATE } from "../../constants/navigateActions";
import type { Dispatch, RouteNames } from "../../types/actions";

function mapStateToProps(state) {
  return {
    newsSource: state.newsSource
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    navigateTo(routeName: RouteNames) {
      dispatch({
        type: NAVIGATE,
        routeName: "NewsList",
        params: { source: routeName }
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
