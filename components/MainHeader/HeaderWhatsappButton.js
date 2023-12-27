import React from "react";
import HeaderWhatsappIcon from "./HeaderWhatsappIcon";

import styles from "./HeaderWhatsappButton.module.css";

const HeaderCartButton = (props) => {
  const clickHandler = () => {};
  return (
    <button className={styles.button} onClick={clickHandler}>
      <span className={styles.icon}>
        <HeaderWhatsappIcon />
      </span>
      <span className="font-bold">Contact Us</span>
    </button>
  );
};

export default HeaderCartButton;
