import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.menu}>
                <img src="./assets/burger-header.png" alt="" />
            </div>
            <div className={styles.logo}>
                Atmosphere
            </div>
            <div className={styles.nav}>
                Каталог
            </div>
        </div>
    );
};

export default Header;