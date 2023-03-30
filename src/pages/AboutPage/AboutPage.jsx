import React from "react";
import Header from "../../components/Header/Header";
import styles from "./aboutpage.module.css";
import Footer from "../../components/Footer/Footer";
import Route from "../../components/Route/Route";
const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Header />
        <Route name="О нас" />
      </div>
      <div>
        <div className={styles.contentWrapper}>
          <div className={styles.info}>
            <h2 className={styles.title}>О нас</h2>
            <p className={styles.text}>
              <p className={styles.textMargin}>
                Наш сайт - это место, где вы можете найти широкий выбор
                качественных пальто по доступным ценам. Мы сотрудничаем с
                надежными производителями, чтобы предоставить нашим клиентам
                только лучшее качество.
              </p>
              <p className={styles.textMargin}>
                
                На нашем сайте вы найдете пальто различных цветов, размеров и
                стилей, подходящих для любой погоды и сезона. Мы обеспечиваем
                быструю и удобную доставку, чтобы вы могли получить свою покупку
                как можно скорее.
              </p>
              <p className={styles.textMargin}>
                Мы гарантируем, что каждое пальто на нашем сайте изготовлено из
                высококачественных материалов и соответствует нашим стандартам
                качества. Мы также предоставляем подробные описания и фотографии
                для каждого товара, чтобы вы могли сделать правильный выбор.{" "}
              </p>
              <p className={styles.textMargin}>
                
                Наша команда всегда готова помочь вам в выборе пальто и ответить
                на любые вопросы. Мы ценим наших клиентов и стремимся обеспечить
                максимальное удобство и удовлетворение от покупки на нашем
                сайте.
              </p>
              <p className={styles.textMargin}>
                
                Так что, если вы ищете стильное и качественное пальто, загляните
                на наш сайт и найдите свою идеальную модель уже сегодня!
              </p>
            </p>
          </div>
          <div className={styles.icon}>
            <img src="./assets/about.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
