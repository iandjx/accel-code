import React from "react";
import Button from "@material-ui/core/Button";
import Search from "./components/SearchBar";
import SearchBar from "material-ui-search-bar";
import ProjectCard from "./components/ProjectCard";
const App = () => (
  <div>
    <SearchBar />
    <ProjectCard />
  </div>
);
export default App;
