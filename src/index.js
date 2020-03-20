import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Countdown from "./components/Countdown";

import "./assets/styles/global.scss";

const Main = () => {
  return (
    <div>
      <Header />
      <Countdown />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
