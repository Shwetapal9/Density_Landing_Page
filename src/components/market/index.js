import * as React from "react";
import * as styles from "./styles.module.scss";
import playground from "../../images/playground.png"
const Market = () => {
  return (
    <>
      <div className={styles.market}>
        <div className={styles.market_top1}>
          <p>Explore the Markets </p>
          <div className={styles.market_top1_inner}>
            <p>like it is your </p>
            <span> Playground.</span>
          </div>
        </div>
        <div className={styles.market_top2}>
          <p>Search for your favorite coins and stay ahead of the market.</p>
        </div>
        <div className={styles.playground}>
            <img src={playground} alt="playground" />
        </div>
        <div className={styles.market_btn}>
        <button >Explore Market</button>
        </div>
      </div>
    </>
  );
};

export default Market;
