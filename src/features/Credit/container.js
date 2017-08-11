// @flow

import { connect } from "react-redux";
import { BACK } from "../../constants/navigateActions";

import Credit from "./Credit";

import type { Dispatch } from "../../types/actions";

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    navigateBack() {
      dispatch({ type: BACK });
    }
  };
}

export default connect(mapDispatchToProps)(Credit);
