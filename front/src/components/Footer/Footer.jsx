import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__left}>
            <h1 className={styles.footer__left__logo}>Monti.</h1>
            <h1 className={styles.footer__left__title}>Beneficios</h1>
            <h1 className={styles.footer__left__title}>FAQ</h1>
            <h1 className={styles.footer__left__title}>Experiencias</h1>
            <h1 className={styles.footer__left__title}>Descargar</h1>
        </div>
        <div className={styles.footer__right}>
            <h1 className={styles.footer__right__title}>Monti © 2024</h1>
        </div>
    </div>
  )
}
