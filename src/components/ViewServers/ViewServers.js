import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";

class ViewServers extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange(event) {
    this.setState(([event.target.name]: event.target.value));
  }

  render() {
    console.log(this.props);
    const { onLogout } = this.props;

    return (
      <React.Fragment>
        <Navbar onLogout={onLogout} />
        <div className="text-center">
          <h1 className="h1 mb-3">Servers</h1>
          <h3 className="h3 mb-3 font-weight-normal">TODO</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewServers;
