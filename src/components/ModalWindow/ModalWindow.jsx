import React from 'react';
import styles from './modalwindow.module.css'

const ModalWindow = ({close}) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.close} onClick={close}></div>

            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>
                        Заказать
                    </h2>
                    <div>
                        <img src="./assets/order.png" alt="" />
                    </div>
                </div>

                <div className={styles.contacts}>
                    <div className={styles.whatsapp}>
                        <a href="">+996 99 99 99</a>
                        <img src="./assets/whatsapp.png" alt="" />
                    </div>
                    <div className={styles.call}>
                        <a href="">+996 99 99 99</a>
                        <img src="./assets/call.png" alt="" />

                    </div>
                </div>

             </div>
            
        </div>
    );
};

export default ModalWindow;