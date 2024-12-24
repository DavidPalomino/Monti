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
                    <p className={styles.experiences__item__text}>“Antes, dividir las cuentas era un caos,<span/> pero con Monti todo es tan sencillo. No <span/>más discusiones ni malentendidos. ¡Es la<span/> app que todos mis amigos deberían <span/>tener!”</p>
                    <h1 className={styles.experiences__item__name}>Javier</h1>
                </li>
                <li className={styles.experiences__item}>
                    <p className={styles.experiences__item__text}>“Monti ha cambiado la forma en que mi <span/> grupo de amigos y yo manejamos <span/>nuestros gastos. Ahora, podemos salir y <span/> disfrutar sin preocuparnos por quién debe <span/> qué. ¡Súper recomendado!”</p>
                    <h1 className={styles.experiences__item__name}>Laura</h1>
                </li>
                <li className={styles.experiences__item}>
                    <p className={styles.experiences__item__text}>“Me encanta cómo Monti me ayuda a <span/> mantener mis finanzas en orden. Es genial <span/>saber que no me olvidaré de pagarle a mis <span/>amigos y que todo está claro para todos.”</p>
                    <h1 className={styles.experiences__item__name}>Ana</h1>
                </li>
            </ul>
        </div>
    </div>
  )
}
