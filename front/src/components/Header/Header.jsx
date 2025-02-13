import React from "react";
import styles from "./Header.module.css";
import { useState } from "react";
import MontiIcon from "../../../assets/MontiIcon.svg"

export const Header = ({ viewportWidth, onScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      {!isMenuOpen && (
      <img src={MontiIcon} className={styles.montiIcon}></img>
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
            <a className={styles.menuItem} onClick={() => {setIsMenuOpen(!isMenuOpen),onScroll("HowWorks")}}>¿Cómo funciona?</a>
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
          <a className={styles.menuItem} onClick={() => onScroll("HowWorks")}>¿Cómo funciona?</a>
          <a className={styles.menuItem} onClick={() => onScroll("FAQ")}>FAQ</a>
          <button className={styles.registrate}>Registrate gratis</button>
        </ul>
      )}
    </div>
  );
};

