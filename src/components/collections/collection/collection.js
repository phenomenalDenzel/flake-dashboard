import React, { Component } from "react";
import "./collection.css";
import Aux from "../../../hoc/Aux";
import Card from "../../../ui/card/CardItem/CardItem";
import { Books } from "../../logo/BookLogo";
import Table from "../../../ui/table/Table";
class Collection extends Component {
  state = {
    showTable: false,
    collections: [],
    attributes: [],
    active: "",
  };

  componentDidMount() {}
  getAllCollections = () => {
    const attributes = [
      "Title",
      "Author",
      "Pagination",
      "PrintType",
      "Acquisition Date",
      "ISBN-13",
    ];
    this.setState((prevState) => {
      return {
        attributes,
        showTable: !prevState.showTable,
        tableTitle: "Total Collections",
        active: "collections",
      };
    });
  };

  getBorrowedMaterials = () => {
    const attributes = [
      "Title",
      "Author",
      "User",
      "PrintType",
      "Borrowed Date",
      "Due Date",
      "ISBN-13",
    ];
    this.setState((prevState) => {
      return {
        attributes,
        showTable: !prevState.showTable,
        tableTitle: "Matrials Borrowed",
        active: "borrowed",
      };
    });
  };

  getFrequentAskedMaterials = () => {
    const attributes = [
      "Title",
      "Author",
      "ISBN-13",
      "Pagination",
      "Number of Times Requested",
      "Available",
      "Date Requested",
    ];
    this.setState((prevState) => {
      return {
        attributes,
        showTable: !prevState.showTable,
        tableTitle: "Frquently Used",
        active: "frequent",
      };
    });
  };

  render() {
    let cardsClasses = ["collections-card"];
    return (
      <Aux>
        <div className="cards">
          <div
            className={
              this.state.active === "collections"
                ? "collections-card active"
                : "collections-card"
            }
            onClick={this.getAllCollections}
          >
            <Card
              icon={<Books />}
              label="Total Collections-card"
              value={this.props.collectionsInfo.totalCollections}
            />
          </div>
          <div
            className={
              this.state.active === "borrowed"
                ? "collections-card active"
                : "collections-card"
            }
            onClick={this.getBorrowedMaterials}
          >
            <Card
              icon={<Books />}
              label="Materials Borrowed"
              value={this.props.collectionsInfo.borrowedCollection}
            />
          </div>
          <div
            className={
              this.state.active === "frequent"
                ? "collections-card active"
                : "collections-card"
            }
            onClick={this.getFrequentAskedMaterials}
          >
            <Card
              icon={<Books />}
              label="Frequently Used"
              value={this.props.collectionsInfo.frequentlyUsed}
            />
          </div>
          <div className={cardsClasses.join("")}>
            <Card
              icon={<Books />}
              label="InFrequently Used"
              value={this.props.collectionsInfo.infrequentlyUsed}
            />
          </div>
        </div>
        {this.state.showTable ? (
          <Table
            title={this.state.tableTitle}
            headers={this.state.attributes}
            data={this.state.collections}
          />
        ) : null}
      </Aux>
    );
  }
}
export default Collection;
