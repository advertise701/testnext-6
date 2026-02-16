import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import RetryButton from "@/app/webapp/components/RetryButton";
import NavbarWebapp from "@/app/webapp/components/NavbarWebapp";
import Footer from "@/app/webapp/components/FooterWebapp";

import styles from "./eachcomplex.module.css";
import Script from "next/script";
import LevelsSliderRunnerClient from "@/app/webapp/components/LevelsSliderRunnerClient";

const apiUrl = process.env.API_URL || "https://learningvalley.ir/zzzmvc/api/";
const API_URL_COMPLEXES = `${apiUrl}getAllComplexesInfo.php`;
const REVALIDATE_SECONDS = 2; // 10 minutes

async function fetchComplexesInfo() {
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
    },
    next: { revalidate: REVALIDATE_SECONDS },
    body,
  });

  if (!resComplexes.ok) {
    return { ok: false, statusCode: resComplexes.status };
  }

  const dataComplexes = await resComplexes.json();
  const status = dataComplexes?.status ?? null;
  const complxesList =
    dataComplexes?.status === "vv1" && Array.isArray(dataComplexes?.jsnDataTbl)
      ? dataComplexes.jsnDataTbl
      : null;

  return { ok: true, status, complxesList };
}

export default async function EachComplex({ params }) {
  const { eachComplex } = await params;
  const target = decodeURIComponent((eachComplex ?? "").trim()).toLowerCase();

  const { ok, status, complxesList } = await fetchComplexesInfo();
  //   if (!ok || status !== "vv1" || !Array.isArray(complxesList)) {
  //     notFound();
  //   }

  if (!ok) {
    const message = `سرور پاسخ نداد. کد: ${statusCode ?? "-"}`;
    return (
      <div className={styles.pageEachComplxMain}>
        <div className={styles.containerEachComplxMain}>
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
      <div className={styles.pageEachComplxMain}>
        <div className={styles.containerEachComplxMain}>
          <RetryButton
            subText={message}
            txtButton={"درخواست مجدد 2"}
          ></RetryButton>
        </div>
      </div>
    );
  }

  const matchedComplex = complxesList.find((item) => {
    const usernameComplx = String(item?.usernameComplx ?? "")
      .trim()
      .toLowerCase();
    return usernameComplx === target;
  });

  //   const matchedComplex = "";
  // console.log("---dd--" + JSON.stringify(matchedComplex));

  if (!matchedComplex) {
    notFound();
  }

  const shouldShowHelpButton = String(matchedComplex?.isHelpy ?? "") !== "a";

  const name1Levels = String(matchedComplex?.name1Levels ?? "").trim();
  const name1LevelsSplt = name1Levels
    .split("@uu@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name2Levels = String(matchedComplex?.name2Levels ?? "").trim();
  const name2LevelsSplt = name2Levels
    .split("@uu@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const explain1Levels = String(matchedComplex?.explain1Levels ?? "").trim();
  const explain1LevelsSplt = explain1Levels
    .split("@uu@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی
  const explain2Levels = String(matchedComplex?.explain2Levels ?? "").trim();
  const explain2LevelsSplt = explain2Levels
    .split("@uu@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const idSeasonHa = String(matchedComplex?.idSeasonHa ?? "").trim();
  const idSeasonHaSplt = idSeasonHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name1SeasonHa = String(matchedComplex?.name1SeasonHa ?? "").trim();
  const name1SeasonHaSplt = name1SeasonHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name2SeasonHa = String(matchedComplex?.name2SeasonHa ?? "").trim();
  const name2SeasonHaSplt = name2SeasonHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const idGrammarHa = String(matchedComplex?.idGrammarHa ?? "").trim();
  const idGrammarHaSplt = idGrammarHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name1GrammarHa = String(matchedComplex?.name1GrammarHa ?? "").trim();
  const name1GrammarHaSplt = name1GrammarHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name2GrammarHa = String(matchedComplex?.name2GrammarHa ?? "").trim();
  const name2GrammarHaSplt = name2GrammarHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const idG3Ha = String(matchedComplex?.idG3Ha ?? "").trim();
  const idG3HaSplt = idG3Ha
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name1G3Ha = String(matchedComplex?.name1G3Ha ?? "").trim();
  const name1G3HaSplt = name1G3Ha
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name2G3Ha = String(matchedComplex?.name2G3Ha ?? "").trim();
  const name2G3HaSplt = name2G3Ha
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  return (
    <>
      <div className={styles.pageEachComplxMain}>
        <div className={styles.containerEachComplxMain}>
          <NavbarWebapp activeBtnHelp={shouldShowHelpButton} />

          {matchedComplex ? (
            <div className={`${styles.divEachComplxMain}`}>
              {name1LevelsSplt.length > 1 ? (
                <h1 className={styles.h1OnlyForSs}>
                  {matchedComplex?.explain2Complx || "آموزش زبان انگلیسی"}
                </h1>
              ) : null}
              {name1LevelsSplt.length > 1 ? (
                <div className={styles.divSvLevelsBtn} id="btsLevel">
                  {name1LevelsSplt.map((level, idx) => (
                    // <p key={idx}>{level}</p>
                    <button
                      key={idx}
                      className={styles.btnLevvel}
                      id={`idLev${idx + 1}`}
                      //   onClick={() => btLevel(idx + 1)}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              ) : null}

              {name1LevelsSplt.length > 0 ? (
                <div
                  className={styles.divhzSvLevels}
                  id="levels-page"
                  data-slider="true"
                >
                  {name1LevelsSplt.map((level, idx) => {
                    const t1 = explain1LevelsSplt[idx]?.trim() ?? "";
                    const t2 = explain2LevelsSplt[idx]?.trim() ?? "";
                    const hasBoth = t1 !== "" && t2 !== "";
                    const TitleTag = name1LevelsSplt.length === 1 ? "h1" : "p";
                    const zirIdSeasonSplt = String(idSeasonHaSplt[idx] ?? "")
                      .split("@uu@")
                      .map((item) => item.trim())
                      .filter(Boolean);
                    return (
                      <div
                        key={idx}
                        className={styles.divSvEachLevel}
                        data-slide="true"
                        data-hor-seekbar="true"
                      >
                        <TitleTag className={styles.h3ExpainComplx}>
                          {t1}
                          {hasBoth ? (
                            <>
                              <br />
                              <span className={styles.secondLine}>{t2}</span>
                            </>
                          ) : t2 ? (
                            t2
                          ) : null}
                        </TitleTag>

                        <div className={styles.divSvLessOfLevel}>
                          <div
                            className={styles.divLesG3Gram}
                            id={`p-${idx + 1}`}
                          >
                            <button
                              className={styles.graBtn}
                              id={`g-${idx + 1}`}
                            >
                              Grammar 1
                            </button>

                            <button
                              className={styles.lesBtn}
                              id={`l-${idx + 1}`}
                            >
                              Lesson 1
                              <span className={styles.iconPlayLes}></span>
                            </button>

                            <button
                              className={styles.g3Btn}
                              id={`g3-${idx + 1}`}
                            >
                              G3-1
                            </button>
                          </div>
                          {zirIdSeasonSplt.map((seasonId, sIdx) => (
                            <div key={seasonId || sIdx}>{seasonId}</div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}

              <div className={styles.divSsdsdsd}>ssdsdsd</div>

              {/* <div className={styles.divhzSvLevels} id="levels-page"></div> */}

              {/* <div>
                <p>{matchedComplex.firstNameComplx}</p>
                <p>{matchedComplex.explain1Complx}</p>
                <p>{matchedComplex.explain2Complx}</p>{" "}
              </div> */}
            </div>
          ) : (
            <RetryButton
              subText="داده‌ای برای نمایش وجود ندارد"
              txtButton="درخواست مجدد"
            />
          )}

          <Footer active="levels" />
        </div>
      </div>

      <LevelsSliderRunnerClient />
      {/* <Script
        id="site-script"
        src="/codes/js/eachComplex.js"
        strategy="afterInteractive"
      /> */}
    </>
  );
}
