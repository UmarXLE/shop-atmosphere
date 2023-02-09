import React from 'react';
import Header from '../../components/Header/Header';
import styles from './refundpage.module.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'
import RefundItem from '../../components/RefundItem/RefundItem';

const RefundPage = () => {
    const info = [
        {
            img:'./assets/refund-1.png',
            descr:'если заказ не был использован и сохранил товарный вид(в том числе не нарушены бирки, ярлыки, упаковочные материалы)'
        },
        {
            img:'./assets/refund-2.png',
            descr:'возврат и обмен осуществляется в течение двух дней с момента получения заказа'
        },
        {
            img:'./assets/refund-3.png',
            descr:'возврат и обмен товара возможен только при отправке по Украине            '
        },
        {
            img:'./assets/refund-4.png',
            descr:'бланк возврата присутствует в каждой посылке '
        },
        {
            img:'./assets/refund-5.png',
            descr:'все расходы по обмену и возврату товара несет покупатель            '
        },
        {
            img:'./assets/refund-6.png',
            descr:'после получения возврата мы делаем перевод денежных средств на карту клиента'
        }
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Header />
                <div className={styles.route}>
                    <Link to='/'>Главная </Link>
                    <div className={styles.icon}><img src="./assets/icon.png" alt="" /></div>
                    <p>Обмен и возврат</p>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}></h2>
                    <p className={styles.subTitle}></p>
                    <div className={styles.info}>
                        {
                            info.map(info => {
                                return <RefundItem
                                            key = {info.id}
                                            img = {info.img}
                                            descr = {info.descr}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />

            
        </div>
    );
};

export default RefundPage;