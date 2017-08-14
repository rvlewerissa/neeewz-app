// @flow

export type Dispatch = (action: Action) => void;

// prettier-ignore
export type Action = {
  type: "__FETCHER__FETCH_SUCCESSFUL",
  endpoint: string,
  payload: Object
} | {
  type: NavigationActions,
  routeName?: RouteNames,
  params?: { [key: string]: string }
};

export type RouteNames = "NewsList" | "Dashboard" | "NewsPage";

type NavigationActions =
  | "Navigation/NAVIGATE"
  | "Navigation/RESET"
  | "Navigation/SET_PARAMS"
  | "Navigation/URI"
  | "Navigation/BACK"
  | "Navigation/INIT";
