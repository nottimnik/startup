import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import Snowfall from "react-snowfall"

ReactDOM.render(
  <React.StrictMode>
    <Snowfall />
    <App />
  </React.StrictMode>
  ,
  document.getElementById("root")
);
