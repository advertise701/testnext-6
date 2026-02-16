import Link from "next/link";
import styles from "./Navbar.module.css";
import NavbarClient from "./NavbarClient";

export default function Navbar({ idCss = "navbar80" }) {
  const navClass =
    idCss === "widthNavbar100" ? styles.widthNavbar100 : styles.navbar80;

  return (
    <nav id={idCss} className={navClass}>
      <button
        className={`${styles.phoneMenuIcon} flexy`}
        id="phoneMenuIcon"
        type="button"
        aria-label="Toggle navigation menu"
      >
        <svg
          className={styles.menuIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <ul className={styles.ulNavbar} id="navbarMenu">
        <li className={styles.liMenu}>
          <Link href="/" className={styles.aTag}>
            <svg
              className={styles.iconMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
            صفحه اصلی
          </Link>
        </li>

        <li className={styles.liMenu} id="idLiDownloadAppNav">
          <a href="#idAppDownload" className={styles.aTag}>
            <svg
              className={styles.iconMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
            </svg>
            دانلود اپلیکیشن
          </a>
        </li>

        <li className={styles.liMenu}>
          <Link href="/webapp/language/english" className={styles.aTag}>
            <svg
              className={styles.iconMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3 5.25C3 4.56 3.56 4 4.25 4h15.5C20.44 4 21 4.56 21 5.25v13.5c0 .69-.56 1.25-1.25 1.25H4.25C3.56 20 3 19.44 3 18.75V5.25zm6.5 2.92v7.66c0 .72.78 1.16 1.4.78l6.07-3.83a.9.9 0 0 0 0-1.56L10.9 7.39a.9.9 0 0 0-1.4.78z" />
            </svg>
            ویدیوهای آموزشی
          </Link>
        </li>

        {/* <li className={`${styles.liMenu} ${styles.liContact}`} id="idLiContactNav">
          <a href="#idFooter" className={styles.aTag}>
            <svg
              className={styles.iconMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
              />
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
            پشتیبانی
          </a>
        </li> */}
      </ul>

      <div className={styles.liLogo} />
      <NavbarClient />
    </nav>
  );
}
