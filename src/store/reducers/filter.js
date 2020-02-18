import * as actionTypes from "../actions/actionTypes";
import produce from "immer";
import Fuse from "fuse.js";

const initialState = {
  projects: [
    {
      title: "MQL5",
      description:
        "This forex trading robot can take trades based on several indicators such as bollinger, moving averages, RSI. Grid and Martingale trading can be added but not a priority. Lot trading should be managed as well.",
      contributers: "A pretty red scarf.",
      techStack: ["MQL5", "Python", "ReactJS"]
    },
    {
      title: "Javascript Full Stack",
      description:
        "This forex trading robot can take trades based on several indicators such as bollinger, moving averages, RSI. Grid and Martingale trading can be added but not a priority. Lot trading should be managed as well.",
      contributers: "A pretty red scarf.",
      techStack: ["MQL5", "Python", "ReactJS"]
    },
    {
      title: "Python Flask",
      description:
        "This forex trading robot can take trades based on several indicators such as bollinger, moving averages, RSI. Grid and Martingale trading can be added but not a priority. Lot trading should be managed as well.",
      contributers: "A pretty red scarf.",
      techStack: ["MQL5", "Python", "ReactJS"]
    },
    {
      title: "GraphQL, MongoDB",
      description:
        "This forex trading robot can take trades based on several indicators such as bollinger, moving averages, RSI. Grid and Martingale trading can be added but not a priority. Lot trading should be managed as well.",
      contributers: "A pretty red scarf.",
      techStack: ["MQL5", "Python", "ReactJS"]
    }
  ],
  searchResult: []
};

var options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ["title", "techStack"]
};

const filterReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actionTypes.SEARCH_PROJECT:
      const nextState = produce(state, draftState => {
        const fuse = new Fuse(state.projects, options);
        const result = fuse.search(action.keyword);
        draftState.searchResult = result;
      });
      console.log(nextState);
      return nextState;

    default:
      return state;
  }
};

export default filterReducer;
