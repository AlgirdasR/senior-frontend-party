import React, { Component } from "react";
import StyledInput from "./StyledInput";

class FormInput extends Component {
  static defaultProps = {
    value: "",
    type: "text",
    name: "",
    value: "",
    placeholder: "",
    onChange: () => {}
  };

  render() {
    const { value, type, name, placeholder, onChange } = this.props;

    return (
      <div className="form-group">
        <StyledInput
          className="form-control"
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default FormInput;
