import React from "react";
import styles from "../ProductsPage/productspage.module.css";
import { products } from "../../database/database";
import ProductItem from "../../components/ProductItem/ProductItem";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Anchor from "../../components/Anchor/Anchor";

const PaltoPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Header id="top"/>
        <div className={styles.route}>
          <Link to="/">Главная</Link>
          <div className={styles.icon}>
            <img src="./assets/icon.png" alt="" />
          </div>
          <p>Пальто</p>
        </div>
      </div>
      <div className={styles.productsWrapper}>
        {products
          .filter((product) => product.category == "palto")
          .map((product) => {
            return (
              <ProductItem
                key={product.id}
                products={products}
                id={product.id}
                name={product.name}
                imgback={product.imgback}
                img={product.img}
                size={product.size}
                price={product.price}
              />
            );
          })}
      </div>

      <div className={styles.bottom}>
        <Footer />
      </div>
      <Anchor name = "#top"/>
    </div>
  );
};

export default PaltoPage;
