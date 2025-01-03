import styles from './HeroSection.module.css'

export const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSectionImage}>
        <div className={styles.heroSectionContent}>
            <h1 className={styles.heroSectionTitle}>¿Salir con amigos y dividir <br /> gastos es un lío?</h1>
            <p className={styles.heroSectionDescription}>Monti te ayuda a dividir gastos, seguir pagos y mantener la <br/> armonía financiera entre amigos y familiares.</p>
            <button className={styles.heroSectionButton}>Descarga ahora</button>
        </div>
      </div>
    </div>
  )
}