import React from 'react';
import styles from './anchor.module.css'

const Anchor = (props) => {
    return (
        <div className={styles.wrapper}>
            <a  href={props.name} className={styles.anchor}></a>
        </div>
    );
};

export default Anchor;