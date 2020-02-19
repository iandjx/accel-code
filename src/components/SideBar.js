import React from "react";
import ChipInput from "material-ui-chip-input";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

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

  return (
    <ChipInput
      value={techStack}
      onAdd={chip => handleAddChip(chip)}
      onDelete={(chip, index) => handleDeleteChip(chip, index)}
    />
  );
};

export default SideBar;
