import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import Test from "./test";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performances inn your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
reportWebVitals(console.log);
