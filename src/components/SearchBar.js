import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import React, { useState, useEffect, useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import * as actions from "../store/actions/index";

const useStyles = makeStyles({
  text: {
    maxWidth: "80%"
  }
});

const Search = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(projects);
  };
  const onSearchHandler = keyword => {
    dispatch(actions.searchProject(keyword));
  };
  const keyPressed = (event, keyword) => {
    if (event.key === "Enter") {
      onSearchHandler(keyword);
    }
  };
  const projects = useSelector(state => state.filter.searchResult);

  return (
    <TextField
      onKeyPress={event => keyPressed(event, searchTerm)}
      value={searchTerm}
      onChange={handleChange}
      className={classes.text}
      id="outlined-full-width"
      style={{ margin: 8 }}
      placeholder="Placeholder"
      helperText="Full width!"
      margin="normal"
      fullWidth
      InputLabelProps={{
        shrink: true
      }}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={() => onSearchHandler(searchTerm)}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

export default Search;
