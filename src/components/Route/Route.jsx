import React from "react";
import styles from "./route.module.css";
import { Link } from "react-router-dom";

const Route = (props) => {
  return (
    <div className={styles.route}>
      <Link to='/'>Главная</Link>
      <div className={styles.icon}>
        <img src="./assets/icon.png" alt="" />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Route;
