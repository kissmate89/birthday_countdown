import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Countdown from "./components/Countdown";

import "./assets/styles/global.scss";

const Main = () => {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Countdown />
      </main>
    </Fragment>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
