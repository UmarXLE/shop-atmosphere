import React from "react";
import styles from "./newproducts.module.css";

const NewProducts = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Узнайте первым о новинках</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Ваш e-mail*" />
        <button>ПОДПИСАТЬСЯ</button>
      </form>

      <p className={styles.text}>
        Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
        персональных данных и ознакомлен(а) с условиями конфиденциальности.
      </p>
    </div>
  );
};

export default NewProducts;
