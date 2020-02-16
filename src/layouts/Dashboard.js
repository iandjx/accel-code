import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";
import SideBar from "../components/SideBar";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

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
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Dashboard = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppBar position="static" style={{ background: "#2E3B55" }}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h6" className={classes.title}>
                ACCEL CODE
              </Typography>
              <Button color="inherit">Create a Project</Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <SideBar />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper>
            <SearchBar />
            <ProjectList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
