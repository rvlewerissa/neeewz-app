// @flow

import type { Action } from "../../types/actions";

export function fetchHOCReducer(state: Object = {}, action: Action) {
  switch (action.type) {
    case "__FETCHER__FETCH_SUCCESSFUL": {
      return {
        ...state,
        [action.endpoint]: action.payload
      };
    }
    default:
      return state;
  }
}
