import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Content from "./components/Content";

import "./assets/styles/global.scss";

const Main = () => {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Content />
      </main>
    </Fragment>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
