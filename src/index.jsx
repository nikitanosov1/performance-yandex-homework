import "../reset.css";
import "../styles.css";
import ReactDOM from "react-dom";
import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <>
    <Header />
    <Main />
  </>
);
