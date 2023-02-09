import React from 'react';
import styles from './category.module.css'
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className={styles.wrapper}> 
            <h2 className={styles.title}>Категории</h2>
            <div className={styles.container}>
                <Link className={styles.item} to=''>
                    <div className={styles.name}>Куртки</div>
                </Link>
                <Link className={styles.item} to=''>
                    <div className={styles.name}>Пальто</div>
                </Link>
                <Link className={styles.item} to=''>
                    <div className={styles.name}>Шубы</div>
                </Link>
            </div>
        </div>
    );
};

export default Category;