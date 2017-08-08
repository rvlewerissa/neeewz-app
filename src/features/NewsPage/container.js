// @flow

import { connect } from "react-redux";

import { BACK } from "../../constants/navigateActions";
import NewsPage from "./newspage";

function mapStateToProps(state) {
  let { dashboardNavigation } = state;
  let routes = dashboardNavigation.routes;
  let route = routes[routes.length - 1];
  let newsURI = route.params.newsURI;
  let newsTitle = route.params.newsTitle;
  return {
    newsURI,
    newsTitle
  };
}

let mapDispatchToProps = dispatch => {
  return {
    navigateBack() {
      dispatch({ type: BACK });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
