import React, { useEffect } from "react";
import styles from "./menu.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = ({ close }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={styles.wrapper}
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div>
        <div className={styles.top}>
          <div className={styles.logo}>Atmosphere</div>
          <div className={styles.close} onClick={close}></div>
        </div>
        <div className={styles.nav}>
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/palto">Пальто</Link>
          <Link to="/tricko">Тренч</Link>
          <Link to="/plash">Плащь</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contact">Контакты</Link>
          <Link to="/refund">Обмен и возврат</Link>
        </div>
      </div>

      <div className={styles.social}>
        <div className={styles.socialMedia}>
          <a target="_blank" href="https://www.instagram.com/atmosphere_shop/">
            <img src="./assets/instagram.png" alt="" />
          </a>
          <a target="_blank" href="https://wa.me/996706354574">
            <img src="./assets/whatsapp.png" alt="" />
          </a>
          <a href="tel:+996706354574">
            <img src="./assets/call.png" alt="" />
          </a>
        </div>
        <a href='tel:+996706354574"' className={styles.number}>
          +996 706 354 574
        </a>
        <a href="" className={styles.email}>
          atmosphere.shop312@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Menu;
