import React,{useEffect} from 'react';
import styles from './modalwindow.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ModalWindow = ({close}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className={styles.wrapper} >

            <div className={styles.close} onClick={close}></div>

            <div className={styles.content} data-aos="zoom-in" data-aos-duration="1200" >
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