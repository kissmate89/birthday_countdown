import React, { Fragment } from "react";
import { Fireworks } from "fireworks/lib/react";

import birthdayGirl from "../../assets/images/on_the_birthday.jpg";

import styles from "./birthdayContent.scss";

const Content = () => {
  const handleFireworksCalc = (props, i) => ({
    ...props,
    x: 100 + (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
    y: 400 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
  });

  return (
    <Fragment>
      <h2 className={styles.title}>Happy birthday Emi!!!</h2>
      <img src={birthdayGirl} alt="Emese is blowing the candles on her cake" />
      <Fireworks
        count={3}
        interval={700}
        colors={["#cc3333", "#4CAF50", "#81C784"]}
        calc={handleFireworksCalc}
      />
    </Fragment>
  );
};

export default Content;
