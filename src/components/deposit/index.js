import * as React from "react";
import * as styles from "./styles.module.scss";
import deposit1 from "../../images/deposit1.png";
import deposit2 from "../../images/deposit2.png";

const Deposit = () => {
  return (
    <>
      <div className={styles.deposit}>
        <div className={styles.deposit_text}>
          <div className={styles.deposit_bigtext}>
            <p>Start Small. Earn Big.</p>
          </div>
          <div className={styles.deposit_subtext}>
            <p>Deposity a minimum of 1000 and get a Deposit bonus + </p>
            <p>dedicagted relationship manager</p>
          </div>
        </div>
        <div className={styles.deposit_Images}>
          <img src={deposit1} alt="deposit1" />
          <img src={deposit2} alt="deposit2" />
        </div>
      </div>
    </>
  );
};
export default Deposit;
