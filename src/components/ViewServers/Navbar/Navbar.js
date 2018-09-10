import React, { Component } from "react";
import logoDark from "./../../../assets/img/logo_testio_dark.png";

class Navbar extends Component {
  render() {
    const { onLogout } = this.props;
    return (
      <nav className="navbar py-4 bg-white">
        <img src={logoDark} alt="" />
        <a onClick={onLogout} className="nav-link ml-md-auto" href="#">
          Logout
        </a>
      </nav>
    );
  }
}

export default Navbar;
