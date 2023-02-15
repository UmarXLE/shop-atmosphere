import React, { useState } from "react";
import styles from "./productitem.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";

const ProductItem = (props) => {
  const [card, setCard] = useState(true);
  const [window, setWindow] = useState(false);
  const handleCard = () => {
    setCard(!card);
  };
  const handleWindow = () => {
    setWindow(true);
  };
  const handleClose = () => {
    setWindow(false);
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.img} onClick={handleCard}>
          {card ? (
            <>
              <img src={props.img} alt="" />
            </>
          ) : (
            <>
              <img src={props.imgback} alt="" />
            </>
          )}
        </div>
        <div className={styles.info} onClick={handleWindow}>
          <h2 className={styles.title}>{props.name}</h2>
          <p className={styles.price}>{props.price}</p>
          <p className={styles.size}>{props.size}</p>
          <p className={styles.descr}>{props.descr}</p>
        </div>
      </div>

      {window && <ModalWindow close={handleClose} />}
    </>
  );
};

export default ProductItem;
