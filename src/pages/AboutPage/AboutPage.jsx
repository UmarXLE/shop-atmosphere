import React from 'react';
import Header from '../../components/Header/Header';
import styles from './aboutpage.module.css'
import Footer from '../../components/Footer/Footer'
import Route from '../../components/Route/Route';
const AboutPage = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <Header />
            <Route name='О нас'/>
            <div className={styles.contentWrapper}>
                <div className={styles.info}>
                    <h2 className={styles.title}>О нас</h2>
                    <p className={styles.text}></p>
                </div>
                <div className={styles.icon}>
                    <img src="./assets/about.png" alt="" />
                </div>
            </div>
        </div>
        <Footer />
        </>
        
    );
};

export default AboutPage;