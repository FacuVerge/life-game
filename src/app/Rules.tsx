import styles from "./rules.module.css";

export default function Rules() {
  return (
    <div className={styles.rules}>
      <h2>Rules</h2>

      <div>
        <br />
        1. Each cell with one or no neighbors dies, as if by solitude.
        <br />
        2. Each cell with four or more neighbors dies, as if by overpopulation.
        <br />
        3. Each cell with two or three neighbors survives.
        <br />
        <br />
        For a space that is empty or unpopulated:
        <br />
        4. Each cell with three neighbors becomes populated.
      </div>
    </div>
  );
}
