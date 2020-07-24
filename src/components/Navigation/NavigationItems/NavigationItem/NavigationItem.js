import React from "react";
import "./NavigationItem.css";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => (
  <li className="navigationItem">
    <NavLink to={props.link} exact className={props.active ? "active" : null}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
