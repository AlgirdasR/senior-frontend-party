import React, { Component } from "react";
import StyledButton from "./StyledButton";

export default function FormButton() {
  return (
    <StyledButton className="btn btn-lg btn-block" type="submit">
      Log In
    </StyledButton>
  );
}
