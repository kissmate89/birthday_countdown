import React, { useState, useEffect, Fragment } from "react";

import birthdayGirl from "../../assets/images/birthdaygirl.jpg";
import CountdownContent from "../CountdownContent";
import BirthdayContent from "../BirthdayContent";

import styles from "./content.scss";

const calculateTimeLeft = () => {
  const today = new Date();
  const difference = +new Date(`${today.getFullYear()}-05-19`) - +today;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Content = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
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
    <div className={styles.contentWrapper}>
      {timerComponents.length ? (
        <Fragment>
          <img
            className={styles.contentImage}
            src={birthdayGirl}
            alt="Emese is sitting on a chair watching her birthdaycake approching"
          />
          <CountdownContent
            className={styles.countdown}
            timerComponents={timerComponents}
          />
        </Fragment>
      ) : (
        <BirthdayContent />
      )}
    </div>
  );
};

export default Content;
