import React from 'react';
import Header from '../../components/Header/Header';
import styles from './aboutpage.module.css'
import Footer from '../../components/Footer/Footer'
import Route from '../../components/Route/Route';
const AboutPage = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <Header />
                <Route name='О нас'/>
            </div>
            <div>
            <div className={styles.contentWrapper}>
                <div className={styles.info}>
                    <h2 className={styles.title}>О нас</h2>
                    <p className={styles.text}>
                        Добро пожаловать на наш сайт . Мы на рынке Кыргызстана с 2015 года , на нашем сайте вы сможете найти большой ассортимент плащей , тренч , польт
                    </p>
                </div>
                <div className={styles.icon}>
                    <img src="./assets/about.png" alt="" />
                </div>
            </div>
            </div>
            <div>
             <Footer />
            </div>
         
            
        </div>        
    );
};

export default AboutPage;