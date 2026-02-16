import Image from "next/image";
import AppDownloadClient from "./AppDownloadClient";
import styles from "./AppDownload.module.css";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const assetUrl = process.env.NEXT_PUBLIC_ASSET_URL;

export default function AppDownload() {
  return (
    <aside
      id="idAppDownload"
      className={`${styles.clsAsideTagAppDown} clsAsideTagAppDown`}
    >
      <div className={`${styles.coverDivDown} flexy`}>
        <h4 id="h4IdDownload" className={styles.h4DownApp}>
          دانلود اپلیکیشن اندروید و آیفون
        </h4>
        <div className={`${styles.divMarkets} flexy`}>
          <a
            // id="appDownDirect"
            className={`${styles.aTagDirect} flexy`}
            data-tag-id="appDownDirect"
            href={`${assetUrl}apkfiles/LearnValley.apk`}
            title="title text"
            target="_blank"
            rel="nofollow noopener noreferrer"
            data-kindy="Site-direct-Down-App-Click"
          >
            <Image
              className={styles.logosDown1}
              src="/sitefiles/images/androidDirect-min.png"
              alt="بهترین اپلیکیشن آموزش زبان انگلیسی برای اندروید"
              width={200}
              height={60}
            />
          </a>

          <a
            // id="appDownBazaar"
            className={`${styles.aTagBazaar} flexy`}
            data-tag-id="appDownBazaar"
            href="https://cafebazaar.ir/app/ir.Learn.Valley.g5"
            target="_blank"
            rel="nofollow noopener noreferrer"
            data-kindy="Site-bazaar-Down-App-Click"
          >
            <Image
              className={styles.logosDown2}
              src="/sitefiles/images/bazaricon.png"
              alt="بهترین اپلیکیشن آموزش زبان انگلیسی رایگان"
              width={200}
              height={60}
            />
          </a>

          {/* <a
            // id="appDownMyket"
            className={`${styles.aTagMyket} flexy`}
            data-tag-id="appDownMyket"
            href="https://myket.ir/app/ir.Learn.Valley.g5?utm_source=search-ads-gift&utm_medium=cpc"
            target="_blank"
            rel="nofollow noopener noreferrer"
            data-kindy="Site-myket-Down-App-Click"
          >
            <Image
              className={styles.logosDown3}
              src="/sitefiles/images/get2-fa.png"
              alt="بهترین اپلیکیشن آموزش زبان انگلیسی"
              width={200}
              height={68}
            />
          </a> */}

          <Link
            href="/webapp/language/english"
            // id="appDownWebApp"
            className={`${styles.aTagWebApp} flexy`}
            data-tag-id="appDownWebApp"
            data-kindy="Site-webapp-Down-App-Click"
          >
            <Image
              id="logosIdDown4"
              className={styles.logosDown4}
              src="/sitefiles/images/ios-web-app.png"
              alt="بهترین اپلیکیشن آموزش زبان انگلیسی برای آیفون"
              width={220}
              height={90}
            />
          </Link>
        </div>
      </div>
      <AppDownloadClient />
    </aside>
  );
}
