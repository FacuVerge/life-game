"use client";
import styles from "./page.module.css";

export default function GameOver({
  numberOfIterations,
  handleAccept,
}: {
  numberOfIterations: number;
  handleAccept: any;
}) {
  return (
    <div className={styles.modal}>
      <h1>Game Over!</h1>
      <p>Your made {numberOfIterations} iterations!</p>
      <button className={styles.button} onClick={handleAccept}>
        Accept
      </button>
    </div>
  );
}
