import * as React from "react";
import logo from "../../images/logo.jpg";
import * as styles from "./styles.module.scss";
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_left}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.header_right}>
            <ul>
              <li>Career</li>
              <li>Blogs</li>
              <li>Leadership</li>
              <li>Fees</li>
            </ul>
            <button className={styles.header_btn}>Trade Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
