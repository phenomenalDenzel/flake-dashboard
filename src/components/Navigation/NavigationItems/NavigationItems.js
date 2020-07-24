import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = (props) => (
  <ul className="navigationItems">
    {props.items.map((item) => (
      <NavigationItem key={item.name} link={item.link}>
        {item.name}
      </NavigationItem>
    ))}
  </ul>
);

export default navigationItems;
