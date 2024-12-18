import React from "react";
import styles from "./Header.module.css";
import { useState } from "react";

export const Header = ({ viewportWidth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Monti.</h1>
      
      {viewportWidth < 500 ? (
        <>
          <button 
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
          
          {isMenuOpen && (
            <ul className={`${styles.menu} ${styles.mobileMenu}`}>
              <li className={styles.menuItem}>Beneficios</li>
              <li className={styles.menuItem}>Como funciona?</li>
              <li className={styles.menuItem}>FAQ</li>
              <button className={styles.registrate}>Registrate gratis</button>
            </ul>
          )}
        </>
      ) : (
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Beneficios</li>
          <li className={styles.menuItem}>Como funciona?</li>
          <li className={styles.menuItem}>FAQ</li>
          <button className={styles.registrate}>Registrate gratis</button>
        </ul>
      )}
    </div>
  );
};

