import styles from "./FloatingActionButton.module.css";

export default function FloatingActionButton({ onClick }) {
  return (
    <button className={styles.fabContainer} onClick={onClick}>
      <div className={styles.fabButton}>폴더추가 +</div>
    </button>
  );
}
