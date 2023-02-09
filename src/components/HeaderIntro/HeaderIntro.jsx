import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';

const HeaderIntro = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.menu}>

            </div>

            <div className={styles.logo}>
                LOGO
            </div>

            <div className={styles.nav}>
                <Link to='/catalog'>Каталог</Link>
            </div>
        </div>
    );
};

export default HeaderIntro;