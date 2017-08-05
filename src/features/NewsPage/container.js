// @flow

import { connect } from "react-redux";

import { BACK } from "../../constants/navigateActions";
import NewsPage from "./newspage";

function mapStateToProps(state) {
  let { nav } = state;
  let routes = nav.routes;
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
