import React, { useState } from 'react';
import styles from './productitem.module.css'

const ProductItem = (props) => {
    const [card , setCard ] = useState(true)
    const handleCard = () => {
        setCard(!card)
    }
    return (
        <div className={styles.item}>
            <div className={styles.img}  onClick={handleCard}>
                
                {
                    card ? (<><img src={props.img} alt=""  /></>):(<><img src={props.imgback} alt=""  /></>)
                }

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