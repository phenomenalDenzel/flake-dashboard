import React, { Component } from "react";
import Aux from "../../hoc/Aux";

import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";
import Collection from "../../components/collections/collection/collection";
import Acquisition from "../../components/collections/acquisition/Acquisition";
import { Route, Switch } from "react-router-dom";

class CollectionBuilder extends Component {
  state = {
    collections: [1, 2, 3],
    materialsBorrowed: [],
    frequentlyUsed: [],
    infrequentlyUsed: [],
    renderedMaterials: [],
    attributes: [],
    showTable: false,
    tableTitle: "",
    collectionsInfo: {
      totalCollections: 0,
      borrowedCollection: 0,
      frequentlyUsed: 0,
      infrequentlyUsed: 0,
    },
  };

  componentDidMount() {
    console.log("In CollectionBuilder");
  }

  render() {
    const links = [
      { name: "collection", link: this.props.match.path },
      { name: "acquisition", link: this.props.match.path + "/acquisition" },
    ];

    return (
      <Aux>
        <header>
          <nav>
            <NavigationItems items={links} />
          </nav>
        </header>
        <div className="container">
          <div className="title-area">
            <h4 className="title">Collections</h4>
          </div>
          <Switch>
            <Route
              path={this.props.match.path + "/acquisition"}
              component={Acquisition}
            />
            <Route
              path={this.props.match.path}
              render={() => (
                <Collection collectionsInfo={this.state.collectionsInfo} />
              )}
            />
          </Switch>
        </div>
      </Aux>
    );
  }
}
export default CollectionBuilder;
