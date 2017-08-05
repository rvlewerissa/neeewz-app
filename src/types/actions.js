// @flow

export type Dispatch = (action: Action) => void;

type Action = {
  type: NavigationActions,
  routeName: RouteNames
  params?: {[key: string]: string}
};

export type RouteNames = "NewsList" | "Dashboard";

type NavigationActions =
  | "Navigation/NAVIGATE"
  | "Navigation/RESET"
  | "Navigation/SET_PARAMS"
  | "Navigation/URI";
