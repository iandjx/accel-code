import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    height: 48,
    display: "flex",
    justifyContent: "space-between",
    border: 2
  },
  searchIconButton: {
    marginRight: -48
  },
  icon: {
    opacity: 0.54,
    transition: "opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)"
  },
  input: {
    width: "100%"
  },
  searchContainer: {
    margin: "auto 16px",
    width: "calc(100% - 48px - 32px)" // 48px button + 32px margin
  }
}));

const Search = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <div className={classes.searchContainer}>
          <Input fullwidth className={classes.input} disableUnderline />
        </div>
        <IconButton classes={classes.searchIconButton}></IconButton>
      </Paper>
    </div>
  );
};

export default Search;
