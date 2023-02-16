import React,{useEffect} from 'react';
import styles from './menu.module.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = ({close}) => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className={styles.wrapper} data-aos="fade-left" data-aos-duration="1000" >
            <div>
                <div className={styles.top}>
                    <div className={styles.logo}>Atmosphere</div>
                    <div className={styles.close} onClick={close}></div>
                </div>
                <div className={styles.nav}>
                    <Link to='/'>Главная</Link>
                    <Link to='/catalog'>Каталог</Link>
                    <Link to='/palto'>Пальто</Link>
                    <Link to='/tricko'>Тренч</Link>
                    <Link to='/plash'>Плащь</Link>
                    <Link to='/about'>О нас</Link>
                    <Link to='/contact'>Контакты</Link>
                    <Link to='/refund'>Обмен и возврат</Link>
                </div>
            </div>
            
            <div className={styles.social}>
                <div className={styles.socialMedia}>
                    <a href="">
                        <img src="./assets/instagram.png" alt="" />
                    </a>
                    <a href="">
                        <img src="./assets/whatsapp.png" alt="" />
                    </a>
                    <a href="">
                        <img src="./assets/call.png" alt="" />
                    </a>
                </div>
                <div className={styles.number}>+996 706 354 574</div>
                <div className={styles.email}>example@gmail.com</div>

            </div>
        </div>
    );
};

export default Menu;