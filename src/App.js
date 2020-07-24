import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Overview from "./container/overview/Overview";
import CollectionBuilder from "./container/collection/CollectionBuilder";
import AcquireBuilder from "./container/AquireBuilder/AcquireBuilder";

class App extends Component {
  // changeHandler = (ev, person) => {
  //   // const persons = this.state.persons.splice();
  //   const persons = [...this.state.persons];
  //   const index = persons.indexOf(person);
  //   const newperson = persons[index];
  //   newperson.name = ev.target.value;
  //   this.setState({ persons });
  // };

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/collections" component={CollectionBuilder} />
            <Route path="/acquire_new" component={AcquireBuilder} />
            <Route path="/" component={Overview} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
