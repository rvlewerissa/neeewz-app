// @flow

import { connect } from "react-redux";

import NewsList from "./NewsList";
import fetchHOC from "fetch-hoc-redux";
import { API_KEY } from "../../constants/APIKey";
import { BACK, NAVIGATE } from "../../constants/NavigateActions";
import { getSource } from "../../helpers/helpers";

import type { Dispatch } from "../../types/actions";
import type { State } from "../../types/state";

let mapDispatchToProps = (dispatch: Dispatch) => {
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

const URL =
  "https://newsapi.org/v1/articles?source=${props.source}&apiKey=${API_KEY}";

let mapping = (state: State) => {
  return {
    "${props.source}": getSource(state),
    "${API_KEY}": API_KEY
  };
};

let Fetcher = fetchHOC(URL, mapping)(NewsList);

export default connect(null, mapDispatchToProps)(Fetcher);
