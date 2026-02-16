import styles from "./NavbarWebapp.module.css";

export default function NavbarWebapp({ activeBtnHelp = false }) {
  return (
    <div className={styles.divNavbarWebapp}>
      {activeBtnHelp ? <button>راهنما</button> : null}
      <p className={styles.pTittlWebappNavbar}>Artak</p>
    </div>
  );
}
