import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Checkout extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return <h1> Shit </h1>;
  }
}

export default withRouter(Checkout);
