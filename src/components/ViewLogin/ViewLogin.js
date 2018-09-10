import React, { Component } from "react";
import LoginForm from "./LoginForm/LoginForm";
import StyledViewLogin from "./StyledViewLogin";

class ViewLogin extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState(([event.target.name]: event.target.value));
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onLogin();
  };

  render() {
    //const {onChange, onSubmit} = this.props;

    return (
      <StyledViewLogin className="row text-center container-fluid h-100">
        <LoginForm onSubmit={this.onSubmit} onChange={this.handleChange} />
      </StyledViewLogin>
    );
  }
}

export default ViewLogin;
