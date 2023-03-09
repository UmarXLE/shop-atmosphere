import React from "react";
import styles from "./refunditem.module.css";

const RefundItem = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <img src={props.img} alt="" />
      </div>
      <p className={styles.descr}>{props.descr}</p>
    </div>
  );
};

export default RefundItem;
