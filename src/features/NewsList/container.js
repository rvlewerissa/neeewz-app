// @flow

import { compose } from "recompose";
import fetch from "fetch-hoc";
import { connect } from "react-redux";

import { API_KEY } from "../../constants/APIKey";
import NewsList from "./newslist";
import { BACK, NAVIGATE } from "../../constants/navigateActions";

let mapStateToProps = state => {
  let routes = state.nav.routes;
  let route = routes[routes.length - 1];
  let params = route.params || {};
  return { source: params.source };
};

let mapDispatchToProps = dispatch => {
  return {
    navigateBack() {
      dispatch({ type: BACK });
    },
    navigateTo(newsURI: string, newsTitle: string) {
      dispatch({
        type: NAVIGATE,
        routeName: "NewsPage",
        params: { newsURI, newsTitle }
      });
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  fetch(
    props =>
      `https://newsapi.org/v1/articles?source=${props.source}&apiKey=${API_KEY}`
  )
)(NewsList);
