"use client";
import styles from "./page.module.css";

export default function Cell({
  state,
  index,
  handleClick,
  playing,
}: {
  state: boolean;
  index: number;
  handleClick: any;
  playing: boolean;
}) {
  return (
    <button
      disabled={playing ? true : false}
      className={state ? styles.cell_checked : styles.cell_unchecked}
      onClick={() => handleClick(index)}
    />
  );
}
