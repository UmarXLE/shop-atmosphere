import React, { useState } from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

const HeaderIntro = () => {
    const [menu , setMenu ] = useState(false)
    const handleMenu = () => {
        setMenu(true)
    }
    const handleCloseMenu = () => {
        setMenu(false)
    }
    return (
        <div className={styles.wrapper}>
            {
                menu && <Menu 
                        close = {handleCloseMenu}
                    />
            }
            <div className={styles.menu} onClick={handleMenu}>

            </div>

            <div className={styles.logo}>
                ATMOSPHERE
            </div>

            <div className={styles.nav}>
                <Link to='/catalog'>Каталог</Link>
            </div>
        </div>
    );
};

export default HeaderIntro;