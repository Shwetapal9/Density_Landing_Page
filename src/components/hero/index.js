import * as React from "react";
import * as styles from "./styles.module.scss";
import phone1 from "../../images/phone1.jpg";
import phone2 from "../../images/phone2.jpg";
import phone3 from "../../images/phone3.jpg";
import frame from "../../images/frame.jpg";
const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.frame}>
          <div className={styles.frame_top}>
            <p>It’s time to trade,</p>
            <p>
              the
              <span> future.</span>
            </p>
          </div>
          <div className={styles.frame_content}>
            <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.outer}>
            <div className={styles.frame1}>
              <img src={frame} alt="frame1" />
              <div className={styles.phone1}>
                <img src={phone1} alt="phone1" />
              </div>
            </div>
            <div className={styles.frame2}>
              <img src={frame} alt="frame2" />
              <div className={styles.phone2}>
                <img src={phone2} alt="phone2" />
              </div>
            </div>
            <div className={styles.frame3}>
              <img src={frame} alt="frame3" />
              <div className={styles.phone3}>
                <img src={phone3} alt="phone3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
