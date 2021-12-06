import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppTemp from "./AppTemp"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    {/* Inject Experiment here. */}
    {/*<MichelsonInterferometer />*/}
    <App />
    {/*  <AppTemp />
     */}
  </React.StrictMode>,
  document.getElementById("root")
);