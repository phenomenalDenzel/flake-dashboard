import React from "react";
import "./Chart.css";

import LineChart from "./line/Line";
import DoughnutChart from "./doughnut/Doughnut";

const chart = (props) => {
  return (
    <div className="charts">
      <div className="line">
        <LineChart />
      </div>
      <div className="doughnut">
        <DoughnutChart />
      </div>
    </div>
  );
};
export default chart;
