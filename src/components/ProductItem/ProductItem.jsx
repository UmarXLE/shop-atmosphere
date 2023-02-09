import React from 'react';
import styles from './productitem.module.css'

const ProductItem = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <img src={props.img} alt="" />
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>{props.name}</h2>
                <p className={styles.price}>{props.price}</p>
                <p className={styles.size}>{props.size}</p>
            </div>
        </div>
    );
};

export default ProductItem;