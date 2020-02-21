import ProjectCard from "./ProjectCard";
import React, { useState, useEffect, useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

//TODO Use useSelector() to pull project list from Redux
const ProjectList = () => {
  const projects = useSelector(state => state.filter.projects);
  const searchResult = useSelector(state => {
    return state.filter.searchResult;
  });

  const filteredResult = useSelector(state => {
    return state.filter.filteredResult;
  });

  let searchArray = [];

  filteredResult.length > 0
    ? (searchArray = filteredResult)
    : searchResult.length > 0
    ? (searchArray = searchResult)
    : (searchArray = projects);

  return (
    <div>
      {searchArray &&
        searchArray.map(project => (
          <ProjectCard
            title={project.title}
            description={project.description}
            contributers={project.contributers}
            techStack={project.techStack}
          />
        ))}
    </div>
  );
};

export default ProjectList;
