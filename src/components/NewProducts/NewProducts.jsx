import React , {useState} from "react";
import styles from "./newproducts.module.css";

const NewProducts = () => {
  const [value , setValue ]= useState('')
  

  const handleGmail = (e) => {
    e.preventDefault()
    try {
      fetch('https://formsubmit.co/85ef3c809c2e1a8eaa71f97c228e7200', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    })
    setValue('')
    console.log(Object.fromEntries(new FormData(e.target)))
    alert('почта успешно отправлено !')
    } catch (error) {
      console.log('не отправлео')
    }
  }

  const handleValue = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    // console.log(e.target.value)
  }


  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Узнайте первым о новинках</h2>
      <form className={styles.form} onSubmit={e => handleGmail(e)}>
        <input 
        type="email" 
        name="email"
        value={value}
        placeholder="Ваш e-mail*" 
        onChange={handleValue}
        />
        <button type="submit">ПОДПИСАТЬСЯ</button>
      </form>

      <p className={styles.text}>
        Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
        персональных данных и ознакомлен(а) с условиями конфиденциальности.
      </p>
    </div>
  );
};

export default NewProducts;
