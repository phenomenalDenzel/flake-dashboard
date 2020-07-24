import React, { Component } from "react";
import styles from "./AcquireBuilder.module.css";
import Button from "../../ui/button/button";
import SearchResult from "./SearchResult/SearchResult";
import { Switch, Route } from "react-router-dom";
import Acquire from "../../components/collections/acquisition/acquire/Acquire";
class AcquireBuilder extends Component {
  state = {
    searchTerm: "",
    book: null,
  };

  componentDidMount() {
    if (sessionStorage.getItem("searchQuery")) {
      this.setState({ searchTerm: sessionStorage.getItem("searchQuery") });
    }
  }
  scrapeBooks = () => {
    const queryString =
      encodeURIComponent("search_query") +
      "=" +
      encodeURIComponent(this.state.searchTerm);
    this.props.history.replace({
      pathname: this.props.match.path + "/results",
      search: "?" + queryString,
    });
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="container">
        {/* <div className="clr" style={{ marginBottom: "0.75rem" }}></div> */}
        <div className={styles.SearchArea}>
          <input
            type="text"
            placeholder="Enter Title"
            onChange={this.handleSearch}
            value={this.state.searchTerm}
          />
          <Button
            btnType="fill tablet"
            clicked={this.scrapeBooks}
            style={{ marginLeft: "0.7rem" }}
          >
            Scrape
          </Button>
        </div>
        <Switch>
          <Route
            path={this.props.match.path + "/results"}
            component={SearchResult}
          />
          <Route path={this.props.match.path + "/:id"} component={Acquire} />
        </Switch>
      </div>
    );
  }
}

export default AcquireBuilder;
