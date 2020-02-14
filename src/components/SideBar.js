import React from "react";
import ChipInput from "material-ui-chip-input";

const SideBar = () => {
  return <ChipInput defaultValue={["foo", "bar"]} onChange={chips => chips} />;
};

export default SideBar;
