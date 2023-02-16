import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.item}>
          <h2 className={styles.title}>Компания</h2>
          <Link className={styles.link} to="/about">О нас</Link>
          <Link className={styles.link} to="/contact">Контакты</Link>
        </nav>

        <nav className={styles.item}>
          <h2 className={styles.title}>ПОЛЕЗНОЕ</h2>
          <Link className={styles.link} to="">Оплата и доставка</Link>
          <Link className={styles.link} to="/refund">Обмен и доставка</Link>
        </nav>

        <nav className={styles.item}>
          <h2 className={styles.title}>ПОКУПАТЕЛЮ</h2>
          <Link className={styles.link} to="">Избранное</Link>
          <Link className={styles.link} to="">Политика конфиденциальности</Link>
        </nav>

        <nav className={styles.item}>
          <h2 className={styles.title}>КОНТАКТЫ</h2>
          <div className={styles.social}>
            <div className={styles.socialItem}>
              <img src="" alt="" />
            </div>
          </div>
          <Link className={styles.link} to="">+38(073) 096 36 44</Link>
          <Link className={styles.link} to="">info@yanki.com</Link>
        </nav>

        <div className={styles.accordionWrapper}>
          <Accordion style={{marginBottom:'15px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Компания</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{marginBottom:'15px'}}>
                <Link className={styles.link} to="/about">О нас</Link>
              </Typography>
              <Typography>
                <Link className={styles.link} to="/contact">Контакты</Link>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{marginBottom:'15px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Компания</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{marginBottom:'15px'}}>
                <Link className={styles.link} to="/about">О нас</Link>
              </Typography>
              <Typography>
                <Link className={styles.link} to="/contact">Контакты</Link>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{marginBottom:'15px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Компания</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{marginBottom:'15px'}}>
                <Link className={styles.link} to="/about">О нас</Link>
              </Typography>
              <Typography>
                <Link className={styles.link} to="/contact">Контакты</Link>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{marginBottom:'15px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Компания</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{marginBottom:'15px'}}>
                <Link className={styles.link} to="/about">О нас</Link>
              </Typography>
              <Typography>
                <Link className={styles.link} to="/contact">Контакты</Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          
        </div>
      </div>

      <div className={styles.text}>©️ 2021 Yanki. All rights reserved</div>
    </div>
  );
};

export default Footer;
