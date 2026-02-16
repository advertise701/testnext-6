import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./english.module.css";
import RetryButton from "@/app/webapp/components/RetryButton";
import Footer from "@/app/webapp/components/FooterWebapp";
import NavbarWebapp from "@/app/webapp/components/NavbarWebapp";

const apiUrl = process.env.API_URL || "https://learningvalley.ir/zzzmvc/api/";
const API_URL_COMPLEXES = `${apiUrl}getAllComplexesInfo.php`;
const REVALIDATE_SECONDS = 600; // 10 minutes
console.log("--mmmm-");

export async function fetchComplexesInfo() {
  const body = new URLSearchParams({
    numbery: "09107080900",
    emailyTriim: "meysamabbasi68gmailcom",
    timSigny: "1770079419778",
    advertisId: "7fa0b8e0-04e7-41f7-802b-9465d751850b",
    manufactur: "samsung",
    model: "SM-G570F",
    lastTimeUpdaty: "0",
  });

  const resComplexes = await fetch(API_URL_COMPLEXES, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // "X-Dev-Key": process.env.DEV_KEY,
      // // cookie: cookies,
      // // cache: "no-store",
    },
    // cache: "no-store",
    next: { revalidate: REVALIDATE_SECONDS }, // Revalidate every 10 minutes
    body,
  });
  if (!resComplexes.ok) {
    return { ok: false, statusCode: resComplexes.status };
  }

  const dataComplexes = await resComplexes.json();
  const status = dataComplexes?.status ?? null; //vv1, vv6 | rateLimit
  const complxesList = extractComplexesList(dataComplexes);
  // const complxesList = "a";
  // const status = "vv2";
  return { ok: true, status, complxesList };
}
const extractComplexesList = (dataComplexes) =>
  dataComplexes?.status === "vv1" && Array.isArray(dataComplexes?.jsnDataTbl)
    ? dataComplexes.jsnDataTbl
    : null;

// const STATUS_MESSAGES = {
//   status = vv2: "داده جدیدی برای دریافت وجود ندارد.",
//   status = vv3: "کمتر از 100 دقیقه قبل بررسی شده است.",
//   status = vv4: "پیام از سرور دریافت شد.",
//   vv5: "ثبت نام حذف شده است.",
//   vv6: "خطای داخلی سرور.",
// };

export default async function EnglishPage() {
  const { ok, statusCode, status, complxesList } = await fetchComplexesInfo();
  console.log(
    "ok: " +
      ok +
      "--" +
      " statusCode: " +
      statusCode +
      "--" +
      " status: " +
      status,
  );

  // console.log(" complxesList: " + JSON.stringify(complxesList));

  console.log("FETCH RUN:", new Date().toISOString());

  if (!ok) {
    const message = `سرور پاسخ نداد. کد: ${statusCode ?? "-"}`;
    return (
      <div className={styles.pageAllComplxMain}>
        <div className={styles.containerAllComplxMain}>
          <RetryButton
            subText={message}
            txtButton={"درخواست مجدد"}
          ></RetryButton>
        </div>
      </div>
    );
  }

  if (status !== "vv1") {
    const message = status
      ? "یک دقیقه دیگر دوباره تلاش کنید"
      : "پاسخ نامعتبر از سرور دریافت شد.";

    return (
      <div className={styles.pageAllComplxMain}>
        <div className={styles.containerAllComplxMain}>
          <RetryButton
            subText={message}
            txtButton={"درخواست مجدد 2"}
          ></RetryButton>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageAllComplxMain}>
      <div className={styles.containerAllComplxMain}>
        <NavbarWebapp activeBtnHelp={false} />

        {/* نمایش بخش تمام مجموعه های آموزشی */}
        {Array.isArray(complxesList) && complxesList.length > 0 ? (
          <div className={styles.divComplexesMain}>
            <div className={`${styles.divAllComplx2}`}>
              {complxesList.map((item, idx) => {
                // console.log("----" + JSON.stringify(item));
                console.log("----" + idx);

                const explain1Complx =
                  item?.explain1Complx ?? "Learn English with Film and Series";

                const explain2Complx =
                  item?.explain2Complx ?? "آموزش زبان انگلیسی با فیلم و سریال";

                // console.log(explain1Complx + " - " + explain2Complx);

                const imageUrl = item?.imageLink ?? "";
                const usernameComplx = item?.usernameComplx ?? "";
                const href = usernameComplx
                  ? `/webapp/language/english/${encodeURIComponent(usernameComplx)}`
                  : "/webapp/language/english";

                return (
                  <Link
                    key={item?.idComplx ?? idx}
                    className={styles.stylLinkEveryComplexCard}
                    href={href}
                    // prefetch={false}
                    aria-disabled={!usernameComplx}
                  >
                    <div className={styles.divEveryComplexCardMain}>
                      <div className={styles.divImgEveryComplxMain}>
                        {imageUrl ? (
                          <Image
                            priority
                            src={imageUrl}
                            alt={explain1Complx + " - " + explain2Complx}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                          />
                        ) : null}
                      </div>
                      <div className={styles.divTitleEveryComplexCardMain}>
                        {explain2Complx}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <RetryButton
            subText={"داده‌ای برای نمایش وجود ندارد"}
            txtButton={"درخواست مجدد 3"}
          ></RetryButton>
        )}

        <Footer active="home" />
        {/* <Footer active="profile" /> */}
      </div>
    </div>
  );
}
