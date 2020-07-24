import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import Sidebar from "../Navigation/Sidebar/Sidebar";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <Sidebar />
      <main className="content">{props.children}</main>
    </Aux>
  );
};

export default layout;
