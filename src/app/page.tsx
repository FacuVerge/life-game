import styles from "./page.module.css";
import Link from "next/link";
import Title from "./Title";
import Rules from "./Rules";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title big={true} />
      <Rules />
      <Link className={styles.start_button} href={"/game"}>
        Start Game
      </Link>
    </main>
  );
}
