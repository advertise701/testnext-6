import Link from "next/link";
import { House, Layers, UserRound } from "lucide-react";
import styles from "./FooterWebapp.module.css";

export default function FooterWebapp({ active = "" }) {
  return (
    <div className={styles.divFooterWebapp}>
      <Link
        href="/webapp/language/english"
        className={`${styles.footerIconBtn} ${active === "home" ? styles.footerIconBtnActive : ""}`}
        aria-label="home"
      >
        <House size={29} strokeWidth={2} />
      </Link>

      <Link
        href="/webapp/language/english/englishtoday"
        className={`${styles.footerIconBtn} ${active === "levels" ? styles.footerIconBtnActive : ""}`}
        aria-label="levels"
      >
        <Layers size={29} strokeWidth={2} />
      </Link>

      <Link
        href="/webapp/menu"
        className={`${styles.footerIconBtn} ${active === "menu" ? styles.footerIconBtnActive : ""}`}
        aria-label="menu"
      >
        <UserRound size={29} strokeWidth={2} />
      </Link>
    </div>
  );
}
