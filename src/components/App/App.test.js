import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow } from "enzyme";

describe("Login View Component", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists("#App")).toBe(true);
  });
});

//TODO: Test routing
