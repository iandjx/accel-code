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
      techStack: ["Python", "ReactJS"]
    },
    {
      title: "Javascript Full Stack",
      description:
        "This forex trading robot can take trades based on several indicators such as bollinger, moving averages, RSI. Grid and Martingale trading can be added but not a priority. Lot trading should be managed as well.",
      contributers: "A pretty red scarf.",
      techStack: ["Python", "ReactJS"]
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
      techStack: ["MQL5", "Python", "ReactJS", "C++"]
    }
  ],
  searchResult: [],
  filteredResult: []
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
        draftState.filteredResult = [];
      });
      console.log(nextState);
      return nextState;

    case actionTypes.FILTER_PROJECT:
      const filteredState = produce(state, draftState => {
        let arr = [];
        state.searchResult.length <= 0
          ? (arr = state.projects)
          : (arr = state.searchResult);
        draftState.filteredResult = arr.filter(project => {
          console.log(project.techStack.includes("MQL5"));
          return action.chipArray.every(
            element => project.techStack.indexOf(element) > -1
          );
        });
      });
      console.log(filteredState);
      return filteredState;

    default:
      return state;
  }
};

export default filterReducer;
