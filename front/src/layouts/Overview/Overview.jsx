import styles from './Overview.module.css'
import OverviewImage from '../../../assets/OverviewImage.svg'

export const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.overviewText}>
      <h1>Divide tus gastos <br /> compartidos de <br /> manera inteligente.</h1>
      <p className={styles.overviewP}>Vive tranquilo y manten todo bajo control con <span className={styles.montiP}>Monti.</span></p>
      <div className={styles.iconsContainer}>
      <button className={styles.descargaButton}>Descarga gratis</button>
      <ul className={styles.icons}>
        <li className={styles.icon}> </li>
        <li className={styles.icon}> </li> 
        <li className={styles.icon}> </li>
        <li className={styles.icon}> </li>
        <li className={styles.icon}> </li>
      </ul> 
      <p className={styles.iconsText}>Ya somos +500 usuarios</p>
      </div>
      </div>
      <div className={styles.overviewImg}>
        <img src={OverviewImage} alt="Vista general de la aplicación" />
      </div>
    </div>
  )
}