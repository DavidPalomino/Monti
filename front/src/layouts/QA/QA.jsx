import styles from "./QA.module.css";
import arrow from "../../../assets/Arrow.svg";
import { useState } from "react";

export const QA = () => {
  const [openItems, setOpenItems] = useState(new Array(4).fill(false));

  const toggleItem = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div className={styles.qaContainer}>
      <h1 className={styles.qaTitle}>Respuestas a tus <span>preguntas</span></h1>
      <div className={styles.qaContent}>
        <ul className={styles.qaList}>
          <li className={styles.qaItem}>
            <div className={styles.qaQuestionContainer}>
              <h1 className={styles.qaQuestion}>
                ¿Cómo funciona Monti para dividir <span>los gastos?</span>
              </h1>
              <div
                className={styles.qaArrowContainer}
                onClick={() => toggleItem(0)}
                role="button"
                tabIndex={0}
              >
                <img
                  src={arrow}
                  alt="arrow"
                  className={`${styles.qaArrow} ${
                    openItems[0] ? styles.rotated : ""
                  }`}
                  style={{
                    transform: openItems[0] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </div>
            <p className={`${styles.qaAnswer} ${openItems[0] ? styles.open : ""}`}>
              Monti permite que crees grupos para cada actividad o evento.
              Simplemente agrega los gastos de <br />
              cada miembro del grupo y Monti se encargará de dividirlos de
              manera justa y precisa. Todos los
              <br /> miembros podrán ver su balance y recibirán notificaciones
              sobre lo que deben pagar.
            </p>
          </li>
          <li className={styles.qaItem}>
            <div className={styles.qaQuestionContainer}>
              <h1 className={styles.qaQuestion}>
                ¿Es seguro usar Monti para <span>gestionar mis finanzas?</span>
              </h1>
              <div
                className={styles.qaArrowContainer}
                onClick={() => toggleItem(1)}
                role="button"
                tabIndex={0}
              >
                <img
                  src={arrow}
                  alt="arrow"
                  className={`${styles.qaArrow} ${
                    openItems[1] ? styles.rotated : ""
                  }`}
                  style={{
                    transform: openItems[1] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </div>
            <p className={`${styles.qaAnswer} ${openItems[1] ? styles.open : ""}`}>
              Segunda pregunta
            </p>
          </li>
          <li className={styles.qaItem}>
            <div className={styles.qaQuestionContainer}>
              <h1 className={styles.qaQuestion}>¿Monti es gratis?</h1>
              <div
                className={styles.qaArrowContainer}
                onClick={() => toggleItem(2)}
                role="button"
                tabIndex={0}
              >
                <img
                  src={arrow}
                  alt="arrow"
                  className={`${styles.qaArrow} ${
                    openItems[2] ? styles.rotated : ""
                  }`}
                  style={{
                    transform: openItems[2] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </div>
            <p className={`${styles.qaAnswer} ${openItems[2] ? styles.open : ""}`}>
              Tercera pregunta
            </p>
          </li>
          <li className={styles.qaItem}>
            <div className={styles.qaQuestionContainer}>
              <h1 className={styles.qaQuestion}>
                ¿Cómo puedo resolver un <span>problema o contactar soporte?</span>
              </h1>
              <div
                className={styles.qaArrowContainer}
                onClick={() => toggleItem(3)}
                role="button"
                tabIndex={0}
              >
                <img
                  src={arrow}
                  alt="arrow"
                  className={`${styles.qaArrow} ${
                    openItems[3] ? styles.rotated : ""
                  }`}
                  style={{
                    transform: openItems[3] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </div>
            <p className={`${styles.qaAnswer} ${openItems[3] ? styles.open : ""}`}>
              Cuarta pregunta
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
