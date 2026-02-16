import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer
      id="idFooter"
      className={`${styles.clsFooterTag} flexy clsFooterTag`}
    >
      <div className={`${styles.suport} flexy`}>
        <h5 className={styles.h5Suport}>تماس با پشتیبانی</h5>
        <p className={styles.pSuport}>پشتیبانی 24 ساعته پاسخگوی شماست.</p>
        <div className={`${styles.suportApp} flexy`}>
          <a
            className={`${styles.aTagWhatsapp} flexy`}
            href="https://wa.me/message/NV3VCKT35YDAC1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.imgWhatsapp}
              src="/sitefiles/icon/whatsap.png"
              alt="پشتیبانی واتس‌اپ آموزش زبان انگلیسی با ویدیو برنامه دره یادگیری"
              width={45}
              height={45}
            />
          </a>
          <a
            className={`${styles.aTagInstagram} flexy`}
            href="https://instagram.com/learningvly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.imgInstagram}
              src="/sitefiles/icon/instagram.png"
              alt="پیج اینستاگرام آموزش زبان انگلیسی با ویدیو برنامه دره یادگیری"
              width={45}
              height={45}
            />
          </a>
          <a
            className={`${styles.aTagTelegram} flexy`}
            href="https://t.me/learningvalleysupport"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.imgTelegram}
              src="/sitefiles/icon/telgic.png"
              alt="پشتیبانی تلگرام آموزش زبان انگلیسی با ویدیو برنامه دره یادگیری"
              width={45}
              height={45}
            />
          </a>
        </div>
      </div>

      <div className={`${styles.sotial} flexy`}>
        <h5 className={styles.h5Sotial}>شبکه‌های اجتماعی</h5>
        <p className={styles.pSotial}>
          جهت اطلاع از آخرین بروزرسانی‌ها و ویدیوهای آموزشی، ما را در شبکه‌های
          اجتماعی دنبال کنید.
        </p>
        <div className={`${styles.suportApp} flexy`}>
          <a
            className={`${styles.aTagInstagram} flexy`}
            href="https://instagram.com/learningvly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.imgInstagram}
              src="/sitefiles/icon/instagram.png"
              alt="پیج اینستاگرام آموزش مکالمه زبان انگلیسی با ویدیو و فیلم و سریال"
              width={45}
              height={45}
            />
          </a>
          <a
            className={`${styles.aTagTelegram} flexy`}
            href="https://t.me/learningvly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.imgTelegram}
              src="/sitefiles/icon/telgic.png"
              alt="کانال تلگرام آموزش زبان انگلیسی با ویدیو برنامه دره یادگیری"
              width={45}
              height={45}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
