import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            exact
            render={() => (
              <Layout>
                <BurgerBuilder />
              </Layout>
            )}
          />

          <Route
            path="/checkout"
            exact
            render={() => (
              <Layout>
                <Checkout />
              </Layout>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
