import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import ProjectList from "../components/ProjectList";
import SideBar from "../components/SideBar";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "relative",
    top: 0,
    height: "100vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Dashboard = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper>
            <SideBar />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper>
            <SearchBar
              onChange={() => console.log("onChange")}
              onRequestSearch={() => console.log("onRequestSearch")}
              style={{
                margin: "0 auto",
                maxWidth: 800
              }}
            />
            <ProjectList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
