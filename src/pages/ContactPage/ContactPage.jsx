import React from 'react';
import styles from './contactpage.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Route from '../../components/Route/Route'

const ContactPage = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <Header/>
                <Route name='Контакты'/>  
            </div>
            <div>
                <div className={styles.container}>

                </div>
            </div>
            <div>
             <Footer/>
            </div>
            
        </div>
    );
};

export default ContactPage;