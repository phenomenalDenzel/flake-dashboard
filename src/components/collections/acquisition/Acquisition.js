import React, { Component } from "react";
import styles from "./Acquisition.module.css";
import Aux from "../../../hoc/Aux";
import Table from "../../../ui/table/Table";
import { Line } from "react-chartjs-2";
import Button from "../../../ui/button/button";

class Acquisition extends Component {
  state = {
    acquisitions: [],
    error: null,
  };
  componentDidMount = () => {
    // if (sessionStorage.getItem("toAcquire")) {
    //   this.setState({ toAcquire: sessionStorage.getItem("toAcquire") });
    // }
    console.log(this.props);
  };

  toAcquirePage = () => {
    this.props.history.push("/acquire_new");
  };

  render() {
    const data = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Year 2020",
          data: [22, 19, 27, 23, 22, 24, 17, 25, 23, 24, 20, 19],
          fill: false, // Don't fill area under the line
          borderColor: "#6c0ba9", // Line color
        },
      ],
    };

    const option = {
      maintainAspectRatio: false,
      legend: {
        // display: true,
        // position: "right",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    const attributes = [
      "Date Of Acquisition",
      "Number Of Books Acquired",
      "Budget Cost",
    ];

    return (
      <Aux>
        <Button
          btnType="primary"
          style={{ float: "right" }}
          clicked={this.toAcquirePage}
        >
          Go Acquire
        </Button>
        <div className="clr" style={{ marginBottom: "0.75rem" }}></div>
        <div className={styles.LineChart}>
          <Line data={data} options={option} style={{ width: "100%" }} />
        </div>
        <div className={styles.acquired}>
          <Table
            headers={attributes}
            title="Acquisitions"
            data={this.state.acquisitions}
          />
        </div>
      </Aux>
    );
  }
}
export default Acquisition;
