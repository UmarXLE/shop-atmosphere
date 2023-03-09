import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Menu from "../Menu/Menu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(true);
  };
  const handleCloseMenu = () => {
    setMenu(false);
  };
    return (
    <div className={styles.wrapper}>
      {menu && <Menu close={handleCloseMenu} />}
      <div className={styles.menu} onClick={handleMenu}>
        <img src="./assets/burger-header.png" alt="" />
      </div>
      <div className={styles.logo}>ATMOSPHERE</div>
      <div className={styles.nav}>Каталог</div>
    </div>
  );
};

export default Header;
