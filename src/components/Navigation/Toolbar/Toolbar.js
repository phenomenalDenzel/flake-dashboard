import React from "react";
import "./Toolbar.css";
import { Link } from "react-router-dom";

const toolbar = (props) => {
  return (
    <header className="toolbar">
      <div className="logo-area">
        <h2 className="logo">
          <span className="logo-primary">
            <i className="fas fa-book-open"></i> Flake
          </span>
          Software
        </h2>
      </div>
      <div className="user-area">
        <Link to="/notify" className="notification">
          <i className="far fa-bell"></i>
          <span className="circle">
            {/* Adding the p tag so i can easily give a styling to the value inside */}
            <p>2</p>
          </span>
        </Link>
        <Link to="/user">
          <div className="user-image"></div>
          <div className="user-names">
            <p>Prof. Stephen Kings</p>
            <p>Chief Librarian</p>
          </div>
          <i className="fas fa-caret-down"></i>
        </Link>
      </div>
    </header>
  );
};

export default toolbar;
