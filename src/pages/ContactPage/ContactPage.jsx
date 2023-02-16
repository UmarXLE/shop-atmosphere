import React,{useEffect} from 'react';
import styles from './contactpage.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Route from '../../components/Route/Route'
import DG from '2gis-maps';

const ContactPage = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <Header/>
                <Route name='Контакты'/>  
            </div>
            <div>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Контакты</h2>
                        <a className={styles.number} href="">+996 99 99 99</a>
                        <p className={styles.chart}>пн — пт с 9.00 до 19.00</p>
                        <div className={styles.socialMedia}>
                            <a className={styles.socialItem} href="">
                                <img src="./assets/whatsapp.png" alt="" />
                            </a>
                            <a className={styles.socialItem} href="">
                                <img src="./assets/instagram.png" alt="" />
                            </a>
                        </div>
                        <div className={styles.map}>
                             <MapAPI /> 
                        </div>
                    </div>
                </div>
            </div>
            <div>
             <Footer/>
            </div>
            
        </div>
    );
};

const MapAPI = () => {
    useEffect(() => {
            let map
            map = DG.map('map-container',{
            center:[42.906872, 74.63971],
            zoom:20
        })

        DG.marker([42.906872, 74.63971]).addTo(map)
    },[])
    return (
        <div id='map-container' className={styles.mapApi}>
            
        </div>
    )
}


export default ContactPage;