import React from "react";
import styles from "./category.module.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Категории</h2>
      <div className={styles.container}>
        <Link className={styles.item} to="/tricko">
          <div className={styles.name}>Тренч</div>
        </Link>
        <Link className={styles.item} to="/palto">
          <div className={styles.name}>Пальто</div>
        </Link>
        <Link className={styles.item} to="/plash">
          <div className={styles.name}>Плащ</div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
