import styles from './BenefitsSection.module.css'
import { forwardRef } from "react";

export const BenefitsSection = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
        <ul className={styles.benefitsCards}>
            <div className={styles.benefitsCards__card}>
                <h2 className={styles.benefitsCards__card__title}>Ahorra <br /> Tiempo</h2>
                <p className={styles.benefitsCards__card__description}>Simplifica la división de gastos <span> y el seguimiento de pagos,</span> ahorrando tiempo y<span> reduciendo el estrés.</span></p>
            </div>
            <div className={styles.benefitsCards__card}>
                <h2 className={styles.benefitsCards__card__title}>Cuentas <br /> Claras</h2>
                <p className={styles.benefitsCards__card__description}>Evita malentendidos y <span> conflictos sobre quién pagó </span> qué, manteniendo la armonía <span> en las cuentas compartidas.</span></p>
            </div>
            <div className={styles.benefitsCards__card}>
                <h2 className={styles.benefitsCards__card__title}>Pagos <br /> Puntuales</h2>
                <p className={styles.benefitsCards__card__description}>Reduce olvidos y retrasos, <span> asegurando que las cuentas se </span> mantengan al día gracias a las <span> notificaciones automáticas.</span></p>
            </div>
            <div className={styles.benefitsCards__card}>
                <h2 className={styles.benefitsCards__card__title}>Vive <br /> Tranquilo</h2>
                <p className={styles.benefitsCards__card__description}>Olvídate de las preocupaciones <span> financieras y disfruta de la </span> tranquilidad de tener todo bajo <span> control.</span></p>
            </div>
        </ul>   
    </div>
  )
})
