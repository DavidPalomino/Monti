import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Monti.</h1>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Beneficios</li>
        <li className={styles.menuItem}>Como funciona?</li>
        <li className={styles.menuItem}>FAQ</li>
        <div className={styles.registrate}>
          <li className={styles.regGratis}>Registrate gratis</li>
        </div>
      </ul>
    </div>  
  )
}
