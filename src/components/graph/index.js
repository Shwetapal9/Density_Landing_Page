import * as React from "react";
import * as styles from "./styles.module.scss";
import graph from "../../images/graph.png";
const Graph = () => {
  return (
    <>
      <div className={styles.graph}>
        <div className={styles.graph_text}>
          <span>Unlock </span>
          <p> New Frontiers.</p>
        </div>
        <div className={styles.graph_small}>
          <span>
            Are you a stock trader looking for new opportunities to make
          </span>
          <span>money? We got you covered!</span>
        </div>
        <div className={styles.card}>
          <div className={styles.card_inner}>
            <div className={styles.card_data}>
              <div className={styles.card_data_inner}>
                <p>Same</p>
                <span>Strategies</span>
              </div>
            </div>
            <div className={styles.card_data}>
              <div className={styles.card_data_inner}>
                <p>Same</p>
                <span>Indicators</span>
              </div>
            </div>
            <div className={styles.card_data}>
              <div className={styles.card_data_inner}>
                <p>Better</p>
                <span>Leverage</span>
              </div>
            </div>
            <div className={styles.card_data}>
              <div className={styles.card_data_inner}>
                <p>24x7</p>
                <span>Trading</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.graph_Image}>
          <img src={graph} />
        </div>
      </div>
    </>
  );
};
export default Graph;
