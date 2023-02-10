import React, { useState } from "react";
import styles from "./catalogpage.module.css";
import Header from "../../components/Header/Header";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { products } from "../../database/database";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const CatalogPage = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        <Header />
        <div className={styles.route}>
          <Link to="/">Главная</Link>
          <div className={styles.icon}>
            <img src="./assets/icon.png" alt="" />
          </div>
          <p>Каталог</p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.navigation}>
            <h2 className={styles.title}>Каталог</h2>
            <nav className={styles.navigation}>
              <button className={styles.btn}>Пальто</button>
              <button className={styles.btn}>Плащ</button>
              <button className={styles.btn}>Тренч</button>
              <button className={styles.btn}>Все</button>
            </nav>
          </div>
          <div className={styles.wrapperContent}>
            <div className={styles.filter}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Размер</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Цвет</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Цена</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
                <InputLabel id="demo-select-small">Сортировка по </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className={styles.content}>
              {products.map((product) => {
                return (
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    img={product.img}
                    size={product.size}
                    price={product.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CatalogPage;
