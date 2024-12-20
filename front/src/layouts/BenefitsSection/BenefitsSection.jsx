import styles from './BenefitsSection.module.css'
    
export const BenefitsSection = () => {
  return (
    <div>
        <ul className={styles.benefitsCards}>
            <div className={styles.benefitsCards__card}>
                <h2 className={styles.benefitsCards__card__title}>Ahorra <br /> Tiempo</h2>
                <p className={styles.benefitsCards__card__description}>Simplifica la división de gastos <br /> y el seguimiento de pagos,<br /> ahorrando tiempo y<br /> reduciendo el estrés.</p>
            </div>
            <div className={styles.benefitsCards__card}>
                <h2 className={styles.benefitsCards__card__title}>Cuentas <br /> Claras</h2>
                <p className={styles.benefitsCards__card__description}>Evita malentendidos y <br /> conflictos sobre quién pagó <br /> qué, manteniendo la armonía <br /> en las cuentas compartidas.</p>
            </div>
            <div className={styles.benefitsCards__card}>
                <h2 className={styles.benefitsCards__card__title}>Pagos <br /> Puntuales</h2>
                <p className={styles.benefitsCards__card__description}>Reduce olvidos y retrasos, <br /> asegurando que las cuentas se <br /> mantengan al día gracias a las <br /> notificaciones automáticas.</p>
            </div>
            <div className={styles.benefitsCards__card}>
                <h2 className={styles.benefitsCards__card__title}>Vive <br /> Tranquilo</h2>
                <p className={styles.benefitsCards__card__description}>Olvídate de las preocupaciones <br /> financieras y disfruta de la <br /> tranquilidad de tener todo bajo <br /> control.</p>
            </div>
        </ul>   
    </div>
  )
}
