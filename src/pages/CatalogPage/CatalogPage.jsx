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
import Route from '../../components/Route/Route'

const CatalogPage = () => {
  const [status, setStatus] = useState("all");
  // const [filteredProducts, setFilteredProducts] = useState(products)
  // console.log(filteredProducts)

  // const handleChange = (e) => {
   
  //   setStatus(e.target.value)
  //   console.log(status)
  // };
  // console.log(status)

  // useEffect(()=>{
  //   if(status == 'all'){
  //     filteredProducts(products)
  //   }else{
  //     let newArray = [...products].filter(product => product.category == status)
  //     console.error(status)
  //     setFilteredProducts(newArray)
  //     console.log(filteredProducts)
  //   }
  // },[status])
  const handleChange = () => {}
  

  return (
    <div className={styles.mainWrapper}>
      <div>
        <Header />
        <Route name='Каталог'/>
      </div>
      <div className={styles.container}>
        

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
                  value={status}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='all'>Все</MenuItem>
                  <MenuItem value='triko'>Тренч</MenuItem>
                  <MenuItem value='palto'>Пальто</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Цвет</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={status}
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
                  value={status}
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
                  value={status}
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
                    products = {products}
                    id={product.id}
                    name={product.name}
                    imgback = {product.imgback}
                    img={product.img}
                    size={product.size}
                    price={product.price}
                    descr = {product.descr}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  );
};

export default CatalogPage;
