import styles from './Overview.module.css'
import OverviewImage from '../../../assets/OverviewImage.svg'

export const Overview = (viewportWidth) => {
  return (
    <div className={styles.overview}>
      <div className={styles.overviewText}>
      <h1 className={styles.overviewTitle}>Divide tus gastos <br /> compartidos de <br /> manera inteligente.</h1>
      <p className={styles.overviewP}>
        Vive tranquilo y manten todo bajo control
        <span className={styles.overviewPspan}> con <span className={styles.montiP}> Monti.</span> </span>
      </p>
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
      <div className={styles.overviewImgContainer}>
        <img src={OverviewImage} className={styles.overviewImg} alt="Vista general de la aplicación" />
      </div>
    </div>
  )
}
