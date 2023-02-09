import React from 'react';
import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import Intro from '../../components/Intro/Intro';
import NewProducts from '../../components/NewProducts/NewProducts';
import styles from './homepage.module.css'

const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Intro />
            <Category />
            <NewProducts />
            <Footer />
        </div>
    );
};

export default HomePage;