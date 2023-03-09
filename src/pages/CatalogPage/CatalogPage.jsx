import React, { useEffect, useState } from "react";
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
import Route from "../../components/Route/Route";
import TextField from "@mui/material/TextField";
import Anchor from "../../components/Anchor/Anchor";

const CatalogPage = () => {
  const [status, setStatus] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [color, setColor] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (status == "all") {
      setFilteredProducts(products);
    } else if (status) {
      let newProducts = [...products].filter(
        (product) => product.category === status
      );
      setFilteredProducts(newProducts);
    }
  }, [status, color]);

  const handleChange = (e) => {
    setStatus(e.target.value);
    setColor(e.target.value);
  };

  const searchFilteredProducts = filteredProducts.filter((product) => {
    return product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <div className={styles.mainWrapper} >
      <div>
        <Header id='top'/>
        <Route name="Каталог" />
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperContent}>
            <div className={styles.filter}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small"></InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={status}
                  label="Age"
                  onChange={(e) => handleChange(e)}
                >
                  <MenuItem value="all">Все</MenuItem>
                  <MenuItem value="triko">Тренч</MenuItem>
                  <MenuItem value="palto">Пальто</MenuItem>
                  <MenuItem value="plash">Плащ</MenuItem>
                </Select>
              </FormControl>

              <TextField
                onChange={(e) => setValue(e.target.value)}
                size="small"
                id="outlined-basic"
                label="Поиск товара"
                variant="outlined"
              />
            </div>

            <div className={styles.content}>
              {searchFilteredProducts.map((product) => {
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
                    descr={product.descr}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Anchor name='#top'/>

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CatalogPage;
