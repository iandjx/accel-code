import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import ProjectList from "../components/ProjectList";
import SideBar from "../components/SideBar";
const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    top: 0,
    height: "100vh"
  }
});

const Dashboard = props => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <SideBar />
      <SearchBar
        onChange={() => console.log("onChange")}
        onRequestSearch={() => console.log("onRequestSearch")}
        style={{
          margin: "0 auto",
          maxWidth: 800
        }}
      />
      <ProjectList />
    </div>
  );
};
export default Dashboard;
