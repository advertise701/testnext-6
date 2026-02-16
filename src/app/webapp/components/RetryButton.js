"use client";
import styles from "./RetryButton.module.css";

import { useRouter } from "next/navigation";

export default function RetryButton({ subText, txtButton }) {
  const router = useRouter();
  console.log("chid-" + subText);
  console.log("chid-" + txtButton);

  return (
    <>
      <div className={styles.stateBox}>
        {subText ? <p className={styles.subText}>{subText}</p> : null}
        <button
          type="button"
          className={styles.retryButton}
          onClick={() => router.refresh()}
        >
          {txtButton || "درخواست مجدد"}
        </button>
      </div>
    </>
  );
}
