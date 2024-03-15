import styles from "./title.module.css";

export default function Title({ big }: { big: boolean }) {
  return (
    <div className={big ? styles.title_big : styles.title}>
      The
      <br />
      Game of
      <br />
      Life
    </div>
  );
}
