// @flow

import bbcSport from "../../assets/bbc-sport.png";
import cnbc from "../../assets/cnbc.png";
import dailymail from "../../assets/daily-mail.png";
import espn from "../../assets/espn.png";
import huffingtonpost from "../../assets/huffington-post.png";
import mashable from "../../assets/mashable.png";
import talksport from "../../assets/talksport.png";
import economist from "../../assets/the-economist.png";
import time from "../../assets/time.png";

import type { NewsSources } from "../../types/news";

let initialState = [
  { title: "CNBC", source: "cnbc", image: cnbc },
  { title: "Dailymail", source: "daily-mail", image: dailymail },
  { title: "Mashable", source: "mashable", image: mashable },
  { title: "Talksport", source: "talksport", image: talksport },
  { title: "The Economist", source: "the-economist", image: economist },
  { title: "Time", source: "time", image: time },
  { title: "BBC Sport", source: "bbc-sport", image: bbcSport },
  {
    title: "Huffington Post",
    source: "the-huffington-post",
    image: huffingtonpost
  },
  { title: "ESPN", source: "espn", image: espn }
];

export function newsSourceReducer(state: NewsSources = initialState) {
  return state;
}
