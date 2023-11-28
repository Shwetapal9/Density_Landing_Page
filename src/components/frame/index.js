import * as React from "react";
import * as styles from "./styles.module.scss";
import group1 from "../../images/group1.png";
import group2 from "../../images/group2.png";
import group3 from "../../images/group3.png";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
const Frame = () => {
  return (
    <>
      <div className={styles.frame_outer}>
        <div className={styles.frame_inner}>
          <div className={styles.frame_data}>
            <div className={styles.frame_data_inner}>
              <p>00%</p>
              <span>Conversion Fee</span>
            </div>
          </div>
          <div className={styles.frame_data}>
            <div className={styles.frame_data_inner}>
              <p>500 Mn+</p>
              <span>Lifetime Volume Traded</span>
            </div>
          </div>
          <div className={styles.frame_data}>
            <div className={styles.frame_data_inner}>
              <p>250+</p>
              <span>Total Tradable Pairs</span>
            </div>
          </div>
          <div className={styles.frame_data}>
            <div className={styles.frame_data_inner}>
              <p>15,000+</p>
              <span>Traders</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame_group}>
        <div className={styles.frame_group_inner}>
          <img src={group1} alt="group1" />
          <p>
            <span>One App.</span>
            <span>Endless</span>
            <span>Possibilities</span>
          </p>
        </div>
        <div className={styles.frame_group_inner}>
          <img src={group2} alt="group2" />
          <p>
            <span>Future of </span>
            <span>Derivative</span>
            <span>Trading.</span>
          </p>
        </div>
        <div className={styles.frame_group_inner}>
          <img src={group3} alt="group3" />
          <p>
            <span>Is now here,</span>
            <span>for you.</span>
          </p>
        </div>
      </div>
      <div className={styles.frame_text}>
        <div className={styles.frame_text1}>
          <span className={styles.frame_span1}>Trade More. </span>
          <span className={styles.frame_span2}> Pay Less.</span>
        </div>
        <div className={styles.frame_text2}>
          <p>Our low Fees Supercharge Your Profits.</p>
        </div>
      </div>
      <div className={styles.cards}>
        <div>
          <img src={card1} alt="card1" />
          <img src={card2} className = {styles.card2}alt="card2" />
          <img src={card3} alt="card" />
        </div>
      </div>
    </>
  );
};
export default Frame;
