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
          <Link className={styles.link} to="/about">
            О нас
          </Link>
          <Link className={styles.link} to="/contact">
            Контакты
          </Link>
        </nav>

        <nav className={styles.item}>
          <h2 className={styles.title}>ПОЛЕЗНОЕ</h2>
          <Link className={styles.link} to="">
            Оплата и доставка
          </Link>
          <Link className={styles.link} to="/refund">
            Обмен и доставка
          </Link>
        </nav>

        <nav className={styles.item}>
          <h2 className={styles.title}>ПОКУПАТЕЛЮ</h2>
          <Link className={styles.link} to="">
            Избранное
          </Link>
          <Link className={styles.link} to="">
            Политика конфиденциальности
          </Link>
        </nav>

        <nav className={styles.item}>
          <h2 className={styles.title}>КОНТАКТЫ</h2>
          <div className={styles.social}>
            <div className={styles.socialItem}>
              <img src="./assets/whatsapp.png" alt="" />
            </div>
            <div className={styles.socialItem}>
              <img src="./assets/instagram.png" alt="" />
            </div>
          </div>
          <a className={styles.link}>
            +38(073) 096 36 44
          </a>
          <a className={styles.link}>
            info@yanki.com
          </a>
        </nav>

        <div className={styles.accordionWrapper}>
          <Accordion style={{ marginBottom: "15px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>КОМПАНИЯ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ marginBottom: "15px" }}>
                <Link className={styles.link} to="/about">
                  О нас
                </Link>
              </Typography>
              <Typography>
                <Link className={styles.link} to="/contact">
                  Контакты
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginBottom: "15px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>ПОЛЕЗНОЕ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ marginBottom: "15px" }}>
                <Link className={styles.link} to="/refund">
                  Оплата и доставка
                </Link>
              </Typography>
              {/* <Typography>
                <Link className={styles.link} to="/contact">Контакты</Link>
              </Typography> */}
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ marginBottom: "15px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>КОНТАКТЫ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.footerSocial} style={{ marginBottom: "15px" }}>
                  <a className={styles.number} href="">+996 99 99 99</a>
                  <div className={styles.socialFooterItems}>
                    <a href=""><img src="./assets/whatsapp.png" alt="" /></a>
                    <a href=""><img src="./assets/instagram.png" alt="" /></a>
                  </div>
                  
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
