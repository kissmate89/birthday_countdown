import React, { useState, useEffect, Fragment } from "react";

import styles from "./countdown.scss";

const calculateTimeLeft = () => {
  const today = new Date();
  const difference = +new Date(`${today.getFullYear()}-05-20`) - +today;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        <span className={styles.timeLeftText}>{timeLeft[interval]} </span>
        {interval}{" "}
      </span>
    );
  });

  return (
    <div className={styles.countdownWrapper}>
      <h2 className={styles.countdownText}>
        {timerComponents.length ? (
          <Fragment>
            {timerComponents} <p>left until you birthday Emi</p>
          </Fragment>
        ) : (
          <span>Time's up!</span>
        )}
      </h2>
    </div>
  );
};

export default Countdown;
