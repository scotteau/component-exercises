import React from "react";
import ReactDOM from "react-dom";
// import LoginForm from "./components/LoginForm";
import "./index.css";
import App from "./components/App";
import LoginForm from "./components/LoginForm";

ReactDOM.render(
  <div className={"flex items-start h-screen"}>
    <LoginForm />
    <App />
  </div>,
  document.querySelector("#root")
);
