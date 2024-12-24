import styles from './SharedExpenseSteps.module.css';
import SharedExpenseStepsImage from '../../../assets/PhoneImg.svg';

export const SharedExpenseSteps = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Tus gastos compartidos de manera <br/> simple y sin interés</h1>
      <div className={styles.content}>
        <div className={styles.steps}>
          <div className={styles.stepsList}>
            <ul className={styles.stepsListItems}>
              <li className={styles.stepsItem}>
                <div className={styles.stepsItemIcon}> <p className={styles.stepsItemIconNumber}>01</p> </div>
                <div className={styles.stepsItemContent}>
                  <h2 className={styles.stepsItemTitle}>Crea tu Grupo</h2>
                  <p className={styles.stepsItemDescription}>Forma un grupo para cada actividad que <span> realices con tus amigos. Ya sea un viaje, </span> una cena o cualquier evento.</p>
                </div>
              </li>
              <li className={styles.stepsItem}>
                <div className={styles.stepsItemIcon}> <p className={styles.stepsItemIconNumber}>02</p> </div>
                <div className={styles.stepsItemContent}>
                  <h2 className={styles.stepsItemTitle}>Añade Gastos</h2>
                  <p className={styles.stepsItemDescription}>Añade los gastos de cada amigo en el <span> grupo. Usa la cámara para escanear los </span> recibos fácilmente.</p>
                </div>
              </li> 
              <li className={styles.stepsItem}>
                <div className={styles.stepsItemIcon}> <p className={styles.stepsItemIconNumber}>03</p> </div>
                <div className={styles.stepsItemContent}>
                  <h2 className={styles.stepsItemTitle}>Balance Automatico</h2>
                  <p className={styles.stepsItemDescription}>La app calcula automáticamente el <span>balance y notifica a tus amigos sobre </span>cuánto deben pagar cada uno.</p>
                </div>
              </li>     
            </ul>
          </div>
        </div>
        <div className={styles.stepsImageContainer}>
          <img src={SharedExpenseStepsImage} alt="salmon" className={styles.stepsImage} />
        </div>
      </div>    
    </div>
  );
};