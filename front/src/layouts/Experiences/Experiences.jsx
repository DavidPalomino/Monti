import styles from "./Experiences.module.css"
import arrow from "../../../assets/ButtonArrow.svg"

export const Experiences = () => {
  return (
    <div className={styles.experiences}>
        <div className={styles.experiences__container}>
            <div className={styles.experiences__header}>
                <h2 className={styles.experiences__title}>Descubre cómo<span className={styles.experiences__title__span}> Monti ha transformado <br/> la experiencia </span> de dividir gastos</h2>
                <div className={styles.experiences__buttons}>
                    <button className={styles.experiences__button}><img className={styles.experiences__button__arrow__left} src={arrow} alt="arrow left" /></button>
                    <button className={styles.experiences__button}><img className={styles.experiences__button__arrow__right} src={arrow} alt="arrow right" /></button>
                </div>
            </div>
            <ul className={styles.experiences__list}>
                <li className={styles.experiences__item}>
                    <p className={styles.experiences__item__text}>“Antes, dividir las cuentas era un caos,<br/> pero con Monti todo es tan sencillo. No <br/>más discusiones ni malentendidos. ¡Es la<br/> app que todos mis amigos deberían <br/>tener!”</p>
                    <h1 className={styles.experiences__item__name}>Javier</h1>
                </li>
                <li className={styles.experiences__item}>
                    <p className={styles.experiences__item__text}>“Monti ha cambiado la forma en que mi <br/> grupo de amigos y yo manejamos <br/>nuestros gastos. Ahora, podemos salir y <br/> disfrutar sin preocuparnos por quién debe <br/> qué. ¡Súper recomendado!”</p>
                    <h1 className={styles.experiences__item__name}>Laura</h1>
                </li>
                <li className={styles.experiences__item}>
                    <p className={styles.experiences__item__text}>“Me encanta cómo Monti me ayuda a <br/> mantener mis finanzas en orden. Es genial <br/>saber que no me olvidaré de pagarle a mis <br/>amigos y que todo está claro para todos.”</p>
                    <h1 className={styles.experiences__item__name}>Ana</h1>
                </li>
            </ul>
        </div>
    </div>
  )
}
