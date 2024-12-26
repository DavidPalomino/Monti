import React from "react";
import styles from "./Header.module.css";
import { useState } from "react";

export const Header = ({ viewportWidth, onScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      {!isMenuOpen && (
      <h1 className={styles.title}>Monti.</h1>
    )}
      {viewportWidth < 728 ? (
        <>
          {!isMenuOpen && (
          <button 
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
          )}
          
          {isMenuOpen && (
            <div className={styles.sideBar}>
              <div className={styles.closeButton} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            <ul className={`${styles.menu} ${styles.mobileMenu}`}>
            <a className={styles.menuItem} onClick={() => {setIsMenuOpen(!isMenuOpen) ,onScroll("benefits")}}>Beneficios</a>
            <div className={styles.separationBar}/>
            <a className={styles.menuItem} onClick={() => {setIsMenuOpen(!isMenuOpen),onScroll("HowWorks")}}>Como funciona?</a>
            <div className={styles.separationBar}/>
            <a className={styles.menuItem} onClick={() => {setIsMenuOpen(!isMenuOpen),onScroll("FAQ")}}>FAQ</a>
            <button className={styles.registrate}>Registrate gratis</button>
            </ul>
            </div>
          )}
        </>
      ) : (
        <ul className={styles.menu}>
          <a className={styles.menuItem} onClick={() => onScroll("benefits")}>Beneficios</a>
          <a className={styles.menuItem} onClick={() => onScroll("HowWorks")}>Como funciona?</a>
          <a className={styles.menuItem} onClick={() => onScroll("FAQ")}>FAQ</a>
          <button className={styles.registrate}>Registrate gratis</button>
        </ul>
      )}
    </div>
  );
};

