import * as actionTypes from "./actionTypes";
export const searchProject = keyword => {
  return {
    type: actionTypes.SEARCH_PROJECT,
    keyword: keyword
  };
};
