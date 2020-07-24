import React from "react";
import { Doughnut } from "react-chartjs-2";

const doughnut = (props) => {
  const data = {
    labels: ["Satisfied", "Partially Satisfied", "Not Satisfied"],
    datasets: [
      {
        label: "points",
        data: [23, 52, 25],
        backgroundColor: ["#fff", "#51087e", "#2980b9"],
      },
    ],
  };

  const option = {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "right",
    },
  };

  return <Doughnut data={data} options={option} />;
};

export default doughnut;
