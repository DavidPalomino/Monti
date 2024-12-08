import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Monti.</h1>
      <ul className={styles.menu}>
        <li>Beneficios</li>
        <li>Como funciona?</li>
        <li>FAQ</li>
        <div className={styles.registrate}>
          <li className={styles.regGratis}>Registrate gratis</li>
        </div>
      </ul>
    </div>  
  )
}
