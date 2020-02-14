import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "MQL5",
    description:
      "This forex trading robot can take trades based on several indicators such as bollinger, moving averages, RSI. Grid and Martingale trading can be added but not a priority. Lot trading should be managed as well.",
    contributers: "A pretty red scarf.",
    techStack: ["MQL5", "Python", "ReactJS"]
  },
  {
    title: "MQL5",
    description:
      "This forex trading robot can take trades based on several indicators such as bollinger, moving averages, RSI. Grid and Martingale trading can be added but not a priority. Lot trading should be managed as well.",
    contributers: "A pretty red scarf.",
    techStack: ["MQL5", "Python", "ReactJS"]
  },
  {
    title: "MQL5",
    description:
      "This forex trading robot can take trades based on several indicators such as bollinger, moving averages, RSI. Grid and Martingale trading can be added but not a priority. Lot trading should be managed as well.",
    contributers: "A pretty red scarf.",
    techStack: ["MQL5", "Python", "ReactJS"]
  },
  {
    title: "MQL5",
    description:
      "This forex trading robot can take trades based on several indicators such as bollinger, moving averages, RSI. Grid and Martingale trading can be added but not a priority. Lot trading should be managed as well.",
    contributers: "A pretty red scarf.",
    techStack: ["MQL5", "Python", "ReactJS"]
  }
];

const ProjectList = () => {
  return (
    <div>
      {projects.map(project => (
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
