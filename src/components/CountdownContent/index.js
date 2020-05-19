import React, { Fragment } from "react";

import styles from "./countdownContent.scss";

const CountdownContent = ({ timerComponents }) => {
  return (
    <div className={styles.countdownWrapper}>
      <h2 className={styles.countdownText}>
        <Fragment>
          {timerComponents} <p>left until your birthday Emi</p>
        </Fragment>
      </h2>
    </div>
  );
};

export default CountdownContent;
