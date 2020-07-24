import React from "react";
import "./CardItem.css";
const CardItem = (props) => {
  return (
    <div className="card card-md" onClick={props.clicked}>
      {props.icon}
      <span className="label">{props.label}</span>
      <span className="value">{props.value}</span>
    </div>
  );
};

export default CardItem;
