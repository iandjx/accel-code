import * as actionTypes from "./actionTypes";
export const searchProject = keyword => {
  return {
    type: actionTypes.SEARCH_PROJECT,
    keyword: keyword
  };
};
export const filterProject = chipArray => {
  return {
    type: actionTypes.FILTER_PROJECT,
    chipArray: chipArray
  };
};
