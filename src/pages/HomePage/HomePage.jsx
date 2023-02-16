import React from "react";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import NewProducts from "../../components/NewProducts/NewProducts";
import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Intro />
      <Category />
      <NewProducts />
      <div style={{ width: "80%", margin: "auto" }}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
