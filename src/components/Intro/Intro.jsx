import React from 'react';
import styles from './intro.module.css'
import { Link } from 'react-router-dom';
import HeaderIntro from '../HeaderIntro/HeaderIntro';

const Intro = () => {
    return (
        <div className={styles.wrapper}>
                <HeaderIntro />
                <div className={styles.content}>
                    <h2 className={styles.title}>Новая коллекция </h2>
                    <span className={styles.line}></span>
                    <Link to='/catalog' className={styles.subTitle}>смотреть новинки ... </Link>
                </div>
        </div>
    );
};

export default Intro;