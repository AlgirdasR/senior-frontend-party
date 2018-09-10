import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.css";
import { injectGlobal } from "styled-components";

ReactDOM.render(<App />, document.getElementById("root"));

injectGlobal`
  html, body, #root, #App {
    height: 100%;
    width: 100%;
  }
`;
