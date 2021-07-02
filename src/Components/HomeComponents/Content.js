import React from "react";
import styles from "../../Styles/Content.module.css";
import homeImg from "../../Images/image1.png";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <h1>
          Give Your Workout <br />A New style!
        </h1>
        <p>
          Success isn't always about greatness . It's about consistency.
          Consistent
          <br /> hardwork gains success. Greatness will come.
        </p>
        <Link to="" className={styles.btn}>
          Explore Now &#8594;
        </Link>
      </div>
      <div className={styles.col}>
        <img src={homeImg} alt="" />
      </div>
    </div>
  );
};

export default Content;
