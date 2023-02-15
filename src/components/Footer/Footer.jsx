import React from 'react';
import styles from './footer.module.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className={styles.wrapper}>
            

            <div className={styles.container}>
                <nav className={styles.item}>
                    <h2 className={styles.title}>Компания</h2>
                    <Link to='/about'>О нас</Link>
                    <Link to='/contact'>Контакты</Link>
                </nav>

                <nav className={styles.item}>
                    <h2 className={styles.title}>ПОЛЕЗНОЕ</h2>
                    <Link to=''>Оплата и доставка</Link>
                    <Link to='/refund'>Обмен и доставка</Link>
                </nav>

                <nav className={styles.item}>
                    <h2 className={styles.title}>ПОКУПАТЕЛЮ</h2>
                    <Link to=''>Избранное</Link>
                    <Link to=''>Политика конфиденциальности</Link>
                </nav>

                <nav className={styles.item}>
                    <h2 className={styles.title}>КОНТАКТЫ</h2>
                    <div className={styles.social}>
                        <div className={styles.socialItem}>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <Link to=''>+38(073) 096 36 44</Link>
                    <Link to=''>info@yanki.com</Link>
                </nav>
            </div>


            <div className={styles.text}>
                ©️ 2021 Yanki. All rights reserved
            </div>


        </div>
    );
};

export default Footer;