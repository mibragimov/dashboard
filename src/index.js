import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "components/app/app.component";

ReactDOM.render(
  <BrowserRouter basename="dashboard">
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
