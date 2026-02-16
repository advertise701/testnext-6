import HeaderClient from "./HeaderClient";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.divHeader}>
      <div className={`${styles.coverHeader} flexy`}>
        <h1 className={styles.h1Home}>
          آرتاک | آموزش اصولی زبان انگلیسی با ویدیو
        </h1>

        <div className={styles.brandText} aria-label="ArtakVar">
          <span className={styles.brandLetter}>A</span>
          <span className={styles.brandLetter}>r</span>
          <span className={styles.brandLetter}>t</span>
          <span className={styles.brandLetter}>a</span>
          <span className={styles.brandLetter}>k</span>
          <span className={styles.brandLetter}>V</span>
          <span className={styles.brandLetter}>a</span>
          <span className={styles.brandLetter}>r</span>
        </div>

        <button className={styles.btDownHeader} id="btDownHeader" type="button">
          دانلود اپلیکیشن
        </button>
      </div>
      <HeaderClient />
    </div>
  );
}
