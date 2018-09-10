import React, { Component } from "react";
import StyledLoginForm from "./StyledLoginForm";
import logo from "./../../../assets/img/logo_testio.png";

import FormInput from "./FormInput/FormInput";
import FormButton from "./FormButton/FormButton";

class LoginForm extends Component {
  render() {
    const { onChange, onSubmit } = this.props;

    return (
      <StyledLoginForm onSubmit={onSubmit} className="form-signin">
        <img className="mb-4" src={logo} alt="" />
        <FormInput
          onChange={onChange}
          type="text"
          id="inputUsername"
          name="username"
          className="form-control-lg"
          placeholder="Username"
          required
          autoFocus
        />
        <FormInput
          onChange={onChange}
          type="password"
          id="inputPassword"
          name="password"
          className="form-control-lg"
          placeholder="Password"
          required
        />
        <FormButton className="btn btn-lg btn-block" type="submit">
          Log In
        </FormButton>
      </StyledLoginForm>
    );
  }
}

export default LoginForm;
