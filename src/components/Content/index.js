import React, { Fragment } from "react";

import birthdayGirl from "../../assets/images/birthdaygirl.jpg";
import Countdown from "../Countdown";

import styles from "./content.scss";

const Content = () => (
  <div className={styles.contentWrapper}>
    <img
      className={styles.contentImage}
      src={birthdayGirl}
      alt="Emese is sitting on a chair watching her birthdaycake approching"
    />
    <Countdown className={styles.countdown} />
  </div>
);

export default Content;
