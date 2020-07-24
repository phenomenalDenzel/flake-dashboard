import React, { Component } from "react";
import styles from "./Overview.module.css";
import Chart from "../../components/chart/dashboard/Chart";
import Feedbacks from "../../components/feedback/Feedback";
import UCSummary from "../../components/users-collection-summary/users-collection-summary";
import Aux from "../../hoc/Aux";
import Table from "../../ui/table/Table";

class Overview extends Component {
  state = {
    data: [
      {
        SN: 1,
        "book Name": "JavaScript the good part",
        author: "James mike",
        "Number Of Times Requestes": 3,
        Available: "yes",
      },
      {
        SN: 2,
        bookName: "JavaScript the good part",
        author: "James mike",
        NumberOfTimesRequestes: 3,
        Available: "yes",
      },
      {
        SN: 3,
        bookName: "JavaScript the good part",
        author: "James mike",
        NumberOfTimesRequestes: 3,
        Available: "yes",
      },
      {
        SN: 4,
        bookName: "JavaScript the good part",
        author: "James mike",
        NumberOfTimesRequestes: 3,
        Available: "yes",
      },
    ],

    date: new Date(),
  };

  componentDidMount() {
    console.log("Hello in overview");
  }

  render() {
    const { date } = this.state;

    const constructedDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    const attributes = [
      "S/N",
      "Book Name",
      "Author",
      "Number Of Times Requested",
      "Availble",
    ];
    return (
      <Aux>
        {/* <header>
          <nav>
            <NavigationItems items={links} />
          </nav>
        </header> */}

        <div className="main-contents">
          <div className="title-area">
            <h4 className="title">Overview</h4>
            <h4 className="date">{constructedDate}</h4>
          </div>
          <Chart />
          <section className={styles.overviewSummary}>
            <div className={styles.ucSummary}>
              <UCSummary />
              <Table
                title="Frequently Requested Materials"
                headers={attributes}
                data={this.state.data}
              />
            </div>
            <div className={styles.feedbacks}>
              <Feedbacks />
            </div>
          </section>
        </div>
      </Aux>
    );
  }
}

export default Overview;
