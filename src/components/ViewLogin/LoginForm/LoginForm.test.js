import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import renderer from "react-test-renderer";

import { shallow, mount, render } from "enzyme";

// TODO: Test styled componenents
// https://github.com/styled-components/jest-styled-components

// describe("Login View Component", () => {
//   it("should render without throwing an error", () => {
//     const wrapper = shallow(<LoginForm />);
//     expect(wrapper.exists(".form-signin")).toBe(true);
//   });

//   it("renders an email input", () => {
//     expect(shallow(<LoginForm />).find("#inputUsername").length).toEqual(1);
//   });

//   it("renders an password input", () => {
//     expect(shallow(<LoginForm />).find("#inputPassword").length).toEqual(1);
//   });

//   it("renders correctly", () => {
//     const tree = renderer.create(<LoginForm />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   describe("Username input", () => {
//     it("should respond to change event and change the state of the Login Component", () => {
//       const wrapper = shallow(<LoginForm />);
//       wrapper.find("#inputUsername").simulate("change", {
//         target: { name: "username", value: "testerUsernameVal" }
//       });
//       expect(wrapper.state("username")).toEqual("testerUsernameVal");
//     });
//   });

//   describe("Password input", () => {
//     it("should respond to change event and change the state of the Login Component", () => {
//       const wrapper = shallow(<Login />);
//       wrapper.find("#password").simulate("change", {
//         target: { name: "password", value: "testerPasswordVal" }
//       });
//       expect(wrapper.state("password")).toEqual("testerPasswordVal");
//     });
//   });
// });
