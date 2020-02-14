import React from "react";
import ProjectCard from "./ProjectCard";
const techStack = ["MQL5", "Python", "ReactJS"];

const ProjectList = () => {
  return (
    <ProjectCard
      title="MQL5"
      description="This forex trading robot can take trades based on several indicators
  such as bollinger, moving averages, RSI. Grid and Martingale trading
  can be added but not a priority. Lot trading should be managed as
  well."
      contributers="5"
      techStack={techStack}
    />
  );
};

export default ProjectList;
