import React from "react";
import "./button.css";

const button = (props) => {
  return (
    <button
      className={["btn", props.btnType].join(" ")}
      onClick={props.clicked}
      style={{ ...props.style }}
    >
      {props.children}
    </button>
  );
};
export default button;
