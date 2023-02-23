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

        {/* <nav className={styles.item}>
          <h2 className={styles.title}>ПОКУПАТЕЛЮ</h2>
          <Link className={styles.link} to="">
            Избранное
          </Link>
          <Link className={styles.link} to="">
            Политика конфиденциальности
          </Link>
        </nav> */}

        <nav className={styles.item}>
          <h2 className={styles.title}>КОНТАКТЫ</h2>
          <div className={styles.socialWrapper}>
          <div className={styles.social}>
            <a href="https://wa.me/996706354574" 
            target='_blank'
            className={styles.socialItem}>
              <img src="./assets/whatsapp.png" alt="" />
            </a>
            <a
             target='_blank'
              href="https://www.instagram.com/atmosphere_shop/"
              className={styles.socialItem}
            >
              <img src="./assets/instagram.png" alt="" />
            </a>
          </div>
          <div className={styles.socailLink}>
          <a href="tel:+996706354574"className={styles.link}>+996 706 35 45 74</a>
          <a className={styles.link}>atmosphere.shop312@gmail.com</a>
          </div>
          </div>

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
              <Typography
                className={styles.footerSocial}
                style={{ marginBottom: "15px" }}
              >
                <a className={styles.number} href="tel:+996706354574">
                  +996 706 35 45 74
                </a>
                <div className={styles.socialFooterItems}>
                  <a target="_blank" href="https://wa.me/996706354574">
                    <img src="./assets/whatsapp.png" alt="" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/atmosphere_shop/"
                  >
                    <img src="./assets/instagram.png" alt="" />
                  </a>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className={styles.text}>©️ 2023 Atmosphere. All rights reserved</div>
    </div>
  );
};

export default Footer;
