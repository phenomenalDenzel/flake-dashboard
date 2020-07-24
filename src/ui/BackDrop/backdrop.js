import React from "react";
import "./backdrop.css";
const backdrops = props => {
  return props.show ? (
    <div className="BackDrops" onClick={props.clicked} />
  ) : null;
};
export default backdrops;
