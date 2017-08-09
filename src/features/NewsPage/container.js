// @flow

import { connect } from "react-redux";

import { BACK } from "../../constants/navigateActions";
import NewsPage from "./newspage";
import { getNewsMeta } from "../../helpers/helpers";

import type { State } from "../../types/state";
import type { Dispatch } from "../../types/actions";

function mapStateToProps(state: State) {
  let { newsURI, newsTitle } = getNewsMeta(state);
  return {
    newsURI,
    newsTitle
  };
}

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    navigateBack() {
      dispatch({ type: BACK });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
