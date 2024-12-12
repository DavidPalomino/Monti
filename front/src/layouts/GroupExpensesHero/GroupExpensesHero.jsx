import CTAimage from "../../../assets/CTAimage.jpeg"
import styles from "./GroupExpensesHero.module.css"
export const GroupExpensesHero = () => {
  return (
    <div className={styles.groupExpensesHero}>
      <div className={styles.groupExpensesHero__container}>
        <h1 className={styles.groupExpensesHero__title}>Divide gastos entre amigos fácil y <br /> sin complicaciones.</h1>
        <p className={styles.groupExpensesHero__text}>Olvídate de los malentendidos y las cuentas interminables. Monti te ayuda a mantener todo claro y justo.</p>
      </div>
      <div className={styles.groupExpensesHero__imageContainer}>  
      <img className={styles.groupExpensesHero__image} src={CTAimage} alt="group expenses hero" />
      <button className={styles.groupExpensesHero__button}>Comenzar ahora</button>
      </div>
    </div>
  )
}
