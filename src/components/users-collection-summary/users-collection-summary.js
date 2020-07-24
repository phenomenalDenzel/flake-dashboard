import React from "react";
import "./users-collection-summary.css";

const summary = (props) => {
  return (
    <div className="cards">
      <div className="card card-md">
        <span className="label">Total Users</span>
        <span className="value">2000</span>
      </div>
      <div className="card card-md">
        <span className="label">Active of Users</span>
        <span className="value">1000</span>
      </div>
      <div className="card card-md">
        <span className="label">Total Collections</span>
        <span className="value">5000</span>
      </div>
      <div className="card card-md">
        <span className="label">Collections borrowed</span>
        <span className="value">200</span>
      </div>
    </div>
  );
};

export default summary;
