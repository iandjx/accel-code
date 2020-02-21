import React from "react";
import ChipInput from "material-ui-chip-input";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1em 1em 1em 1em"
  },
  chip: {
    borderStyle: "solid"
  }
});

const techStack = [];

const SideBar = () => {
  const dispatch = useDispatch();

  const handleAddChip = keyword => {
    techStack.push(keyword);
    dispatch(actions.filterProject(techStack));
  };
  const handleDeleteChip = (key, idx) => {
    techStack.splice(idx, 1);
    dispatch(actions.filterProject(techStack));
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ChipInput
        className={classes.chip}
        value={techStack}
        onAdd={chip => handleAddChip(chip)}
        onDelete={(chip, index) => handleDeleteChip(chip, index)}
        variant="outlined"
        disableUnderline="true"
        label="Tech Stack"
        fullWidth
        fullWidthInput
        size="small"
      />
    </div>
  );
};

export default SideBar;
