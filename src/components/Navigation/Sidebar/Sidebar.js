import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";
const sidebar = (props) => {
  return (
    <div className="sidebar">
      <nav>
        <div className="main-nav">
          <NavLink to="/" exact className={props.active ? "active" : null}>
            <i className="fab fa-pied-piper-hat"></i> Overview
          </NavLink>
          <NavLink to="/collections">
            <i className="fas fa-book"></i> Collections
          </NavLink>
          <NavLink to="/client">
            <i className="fas fa-user"></i> Clients
          </NavLink>
          <NavLink to="/analytics">
            <i className="fas fa-chart-area"></i> Analytics
          </NavLink>
        </div>

        <div className="auxilliary">
          <NavLink to="/settings">
            <i className="fas fa-cog"></i> Settings
          </NavLink>
          <NavLink to="/logout">
            <i className="fas fa-power-off"></i> Quit
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default sidebar;
