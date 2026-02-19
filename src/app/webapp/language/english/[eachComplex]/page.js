import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import RetryButton from "@/app/webapp/components/RetryButton";
import NavbarWebapp from "@/app/webapp/components/NavbarWebapp";
import Footer from "@/app/webapp/components/FooterWebapp";

import styles from "./eachcomplex.module.css";
import Script from "next/script";
import LevelsSliderRunnerClient from "@/app/webapp/components/LevelsSliderRunnerClient";
import { CirclePlay } from "lucide-react";

const apiUrl = process.env.API_URL || "https://learningvalley.ir/zzzmvc/api/";
const API_URL_COMPLEXES = `${apiUrl}getAllComplexesInfo.php`;
const REVALIDATE_SECONDS = 600; // 10 minutes

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
  const name1LevelsRegx = name1Levels
    .split("@uu@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name2Levels = String(matchedComplex?.name2Levels ?? "").trim();
  const name2LevelsRegx = name2Levels
    .split("@uu@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const explain1Levels = String(matchedComplex?.explain1Levels ?? "").trim();
  const explain1LevelsRegx = explain1Levels
    .split("@uu@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی
  const explain2Levels = String(matchedComplex?.explain2Levels ?? "").trim();
  const explain2LevelsRegx = explain2Levels
    .split("@uu@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const idSeasonHa = String(matchedComplex?.idSeasonHa ?? "").trim();
  const idSeasonHaRegx = idSeasonHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name1SeasonHa = String(matchedComplex?.name1SeasonHa ?? "").trim();
  const name1SeasonHaRegx = name1SeasonHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name2SeasonHa = String(matchedComplex?.name2SeasonHa ?? "").trim();
  const name2SeasonHaRegx = name2SeasonHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const idGrammarHa = String(matchedComplex?.idGrammarHa ?? "").trim();
  const idGrammarHaRegx = idGrammarHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name1GrammarHa = String(matchedComplex?.name1GrammarHa ?? "").trim();
  const name1GrammarHaRegx = name1GrammarHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name2GrammarHa = String(matchedComplex?.name2GrammarHa ?? "").trim();
  const name2GrammarHaRegx = name2GrammarHa
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const idG3Ha = String(matchedComplex?.idG3Ha ?? "").trim();
  const idG3HaRegx = idG3Ha
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name1G3Ha = String(matchedComplex?.name1G3Ha ?? "").trim();
  const name1G3HaRegx = name1G3Ha
    .split("@jjj@")
    .map((item) => item.trim())
    .filter(Boolean); // حذف آیتم خالی

  const name2G3Ha = String(matchedComplex?.name2G3Ha ?? "").trim();
  const name2G3HaRegx = name2G3Ha
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
              {name1LevelsRegx.length > 1 ? (
                <h1 className={styles.h1OnlyForSs}>
                  {matchedComplex?.explain2Complx || "آموزش زبان انگلیسی"}
                </h1>
              ) : null}

              <div className={styles.divWraperLevelsAndLastWatch}>
                <div className={styles.divLevBtnAndHzSvLev}>
                  {name1LevelsRegx.length > 1 ? (
                    <div className={styles.divSvLevelsBtn1} id="btsLevel">
                      <div className={styles.divSvLevelsBtn2}>
                        {name1LevelsRegx.map((level, idx) => (
                          // <p key={idx}>{level}</p>
                          <button
                            key={idx}
                            className={styles.btnLevvel}
                            id={`idBtnLevv${idx + 1}`}
                            //   onClick={() => btLevel(idx + 1)}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {name1LevelsRegx.length > 0 ? (
                    <div
                      className={styles.divhzSvLevels}
                      id="levels-page"
                      data-slider="true"
                    >
                      {name1LevelsRegx.map((level, idx) => {
                        const texpLv1 = explain1LevelsRegx[idx]?.trim() ?? "";
                        const texpLv2 = explain2LevelsRegx[idx]?.trim() ?? "";
                        const hasexpLvBoth = texpLv1 !== "" && texpLv2 !== "";
                        const TitleTag =
                          name1LevelsRegx.length === 1 ? "h1" : "p";

                        const zirIdSeasonRegx = String(
                          idSeasonHaRegx[idx] ?? "",
                        )
                          .split("@uu@")
                          .map((item) => item.trim())
                          .filter(Boolean);
                        const zirName1SeasonHaRegx = String(
                          name1SeasonHaRegx[idx] ?? "",
                        )
                          .split("@uu@")
                          .map((item) => item.trim())
                          .filter(Boolean);
                        const zirName2SeasonHaRegx = String(
                          name2SeasonHaRegx[idx] ?? "",
                        )
                          .split("@uu@")
                          .map((item) => item.trim())
                          .filter(Boolean);

                        const ziridGrammarHaRegx = String(
                          idGrammarHaRegx[idx] ?? "",
                        )
                          .split("@uu@")
                          .map((item) => item.trim())
                          .filter(Boolean);
                        const zirName1GrammarHaRegx = String(
                          name1GrammarHaRegx[idx] ?? "",
                        )
                          .split("@uu@")
                          .map((item) => item.trim())
                          .filter(Boolean);
                        const zirName2GrammarHaRegx = String(
                          name2GrammarHaRegx[idx] ?? "",
                        )
                          .split("@uu@")
                          .map((item) => item.trim())
                          .filter(Boolean);

                        const zirIdG3HaRegx = String(idG3HaRegx[idx] ?? "")
                          .split("@uu@")
                          .map((item) => item.trim())
                          .filter(Boolean);
                        const zirName1G3HaRegx = String(
                          name1G3HaRegx[idx] ?? "",
                        )
                          .split("@uu@")
                          .map((item) => item.trim())
                          .filter(Boolean);
                        const zirName2G3HaRegx = String(
                          name2G3HaRegx[idx] ?? "",
                        )
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
                              {texpLv1}
                              {hasexpLvBoth ? (
                                <>
                                  <br />
                                  <span className={styles.secondLine}>
                                    {texpLv2}
                                  </span>
                                </>
                              ) : texpLv2 ? (
                                texpLv2
                              ) : null}
                            </TitleTag>

                            <div className={styles.divSvLessOfLevel}>
                              {zirIdSeasonRegx.map((seasonId, sIdx) => {
                                const tGram1 =
                                  zirName1GrammarHaRegx[sIdx]?.trim() ?? "";
                                const tGram2 =
                                  zirName2GrammarHaRegx[sIdx]?.trim() ?? "";
                                const hasGramBoth =
                                  tGram1 !== "" && tGram2 !== "";

                                const tSeassn1 =
                                  zirName1SeasonHaRegx[sIdx]?.trim() ?? "";
                                const tSeassn2 =
                                  zirName2SeasonHaRegx[sIdx]?.trim() ?? "";
                                const hasSeassnBoth =
                                  tSeassn1 !== "" && tSeassn2 !== "";
                                zirName1SeasonHaRegx;

                                const tG3Wd1 =
                                  zirName1G3HaRegx[sIdx]?.trim() ?? "";
                                const tG3Wd2 =
                                  zirName2G3HaRegx[sIdx]?.trim() ?? "";
                                const hasG3WdBoth =
                                  tG3Wd1 !== "" && tG3Wd2 !== "";
                                zirName2G3HaRegx;

                                return (
                                  <div
                                    key={idx + sIdx}
                                    className={styles.divLesG3Gram}
                                  >
                                    {ziridGrammarHaRegx[sIdx] != "a" && (
                                      <Link
                                        key={`${eachComplex}grammar${seasonId || `${idx}${sIdx}`}`}
                                        className={styles.stylTagGraBtn}
                                        href={
                                          "/webapp/language/english/" +
                                          eachComplex +
                                          "/grammars/season-" +
                                          (Number(seasonId) + 1)
                                        }
                                        aria-disabled={!eachComplex}
                                      >
                                        <p className={styles.pNamBtnHaGram}>
                                          {tGram1}
                                          {hasGramBoth ? (
                                            <>
                                              <br />
                                              <span
                                                className={
                                                  styles.secondHintLesGraLine
                                                }
                                              >
                                                {tGram2}
                                              </span>
                                            </>
                                          ) : tGram2 ? (
                                            tGram2
                                          ) : null}
                                        </p>
                                      </Link>
                                    )}

                                    <Link
                                      key={`${eachComplex}season${seasonId || `${idx}${sIdx}`}`}
                                      className={`${styles.stylTagSeasyBtn} ${
                                        ziridGrammarHaRegx[sIdx] === "a"
                                          ? styles.clsChngBordBtnLes
                                          : ""
                                      }`}
                                      href={
                                        "/webapp/language/english/" +
                                        eachComplex +
                                        "/videos/season-" +
                                        (Number(seasonId) + 1)
                                      }
                                      // prefetch={false}
                                      aria-disabled={!eachComplex}
                                    >
                                      <p className={styles.pNamBtnHaSeasson}>
                                        {tSeassn1}
                                        {hasSeassnBoth ? (
                                          <>
                                            <br />
                                            <span
                                              className={
                                                styles.secondHintLesGraLine
                                              }
                                            >
                                              {tSeassn2}
                                            </span>
                                          </>
                                        ) : tSeassn2 ? (
                                          tSeassn2
                                        ) : null}
                                      </p>
                                      <CirclePlay
                                        size={40}
                                        strokeWidth={2}
                                        className={styles.iconPlayLes}
                                      />
                                    </Link>

                                    {zirIdG3HaRegx[sIdx] != "a" && (
                                      <Link
                                        key={`${eachComplex}words${seasonId || `${idx}${sIdx}`}`}
                                        className={styles.stylTagG3WdBtn}
                                        href={
                                          "/webapp/language/english/" +
                                          eachComplex +
                                          "/words/season-" +
                                          (Number(seasonId) + 1)
                                        }
                                        // prefetch={false}
                                        aria-disabled={!eachComplex}
                                      >
                                        <p className={styles.pNamBtnHaG3Wd}>
                                          {tG3Wd1}
                                          {hasG3WdBoth ? (
                                            <>
                                              <br />
                                              <span
                                                className={
                                                  styles.secondHintLesGraLine
                                                }
                                              >
                                                {tG3Wd2}
                                              </span>
                                            </>
                                          ) : tG3Wd2 ? (
                                            tG3Wd2
                                          ) : null}
                                        </p>
                                      </Link>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>

                <Link
                  key={eachComplex ?? "defaultcomplex"}
                  className={styles.stylLnkLastWatchMain}
                  href={
                    "/webapp/language/english/" +
                    eachComplex +
                    "/season-1/episode-1"
                  }
                  // prefetch={false}
                  aria-disabled={!eachComplex}
                >
                  <div className={styles.divLastWatchMain}>
                    <div className={styles.divLastWatchImgAndTimy}>
                      <div className={styles.divImgLastWatch}>
                        {matchedComplex?.imageLink ? (
                          <Image
                            priority
                            src={matchedComplex?.imageLink ?? ""}
                            alt={
                              matchedComplex?.explain1Complx +
                                " - " +
                                matchedComplex?.explain2Complx ||
                              "آموزش زبان انگلیسی"
                            }
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                          />
                        ) : null}
                      </div>
                      <p className={styles.pLastWatchTime}>00:00</p>
                    </div>

                    <div className={styles.divTitlLastWatch}>
                      <p className={styles.pLastWatchTitle1}>Last Watched:</p>
                      <p className={styles.pLastWatchTitle2}>
                        Season 1 - Episode 1
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
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
