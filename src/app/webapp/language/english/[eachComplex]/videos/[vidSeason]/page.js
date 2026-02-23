import RetryButton from "@/app/webapp/components/RetryButton";
import { ArrowLeft, BadgeCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./vidseason.module.css";
const apiUrl = process.env.API_URL || "https://learningvalley.ir/zzzmvc/api/";
const API_URL_COMPLEXES = `${apiUrl}getInfoAllEpisodeSeason.php`;
const REVALIDATE_SECONDS = 2; // 10 minutes

async function fetchInfoAllVidSeason(eachComplex, seasonDecresNumber) {
  const body = new URLSearchParams({
    numbery: "09",
    emailyTriim: "artak",
    emailyFull: "artak@gmail.com",
    timSigny: "111",
    serialy: "serryy123",
    advertisId: "7faass-a5a5a-a556",
    osName: "webappData",
    manufactur: "s",
    model: "S",
    screenWidth: 360,
    verSdk: 20,
    nameMarket: "artak",
    appVerCod: 10,
    idComplx: 2,
    idSeason: seasonDecresNumber,
    usernameComplx: eachComplex,
  });

  const resAllEpsComplex = await fetch(API_URL_COMPLEXES, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    next: { revalidate: REVALIDATE_SECONDS },
    body,
  });

  if (!resAllEpsComplex.ok) {
    return { ok: false, statusCode: resAllEpsComplex.status };
  }

  const dataAllEpsSeasComplex = await resAllEpsComplex.json();
  const status = dataAllEpsSeasComplex?.status ?? null;
  const usernameComplx =
    dataAllEpsSeasComplex?.usernameComplx ?? "englishtoday";
  const explain1Complx =
    dataAllEpsSeasComplex?.explain1Complx ?? "Learn English";
  const explain2Complx =
    dataAllEpsSeasComplex?.explain2Complx ?? "آموزش زبان انگلیسی";

  const complxAllEpsList =
    dataAllEpsSeasComplex?.status === "vv1" &&
    Array.isArray(dataAllEpsSeasComplex?.jsnAllEpsSeason)
      ? dataAllEpsSeasComplex.jsnAllEpsSeason
      : null;

  return {
    ok: true,
    status,
    usernameComplx,
    explain1Complx,
    explain2Complx,
    complxAllEpsList,
  };
}

export default async function SeasonVideos({ params }) {
  const { eachComplex, vidSeason } = await params;

  const match = /^season-([1-9]\d*)$/i.exec(vidSeason);
  if (!match) {
    notFound();
  }

  const seasonNumber = Number(match[1]);
  const seasonDecresNumber = seasonNumber - 1;

  const {
    ok,
    status,
    usernameComplx,
    explain1Complx,
    explain2Complx,
    complxAllEpsList,
  } = await fetchInfoAllVidSeason(eachComplex, seasonDecresNumber);

  console.log(status);
  // console.log(complxAllEpsList);

  if (status === "vv2") {
    notFound();
  }
  if (status !== "vv1") {
    const message = "خطا سرور. دوباره تلاش کنید:";
    return <RetryButton subText={message} txtButton="درخواست مجدد" />;
  }

  return (
    <div className={styles.pageAllEpsSeasonVids}>
      <div className={styles.containerAllEpsSeasonVids}>
        <div className={styles.divNavSeasonVidsTitle}>
          <ArrowLeft size={29} strokeWidth={2} />
          <h1 className="h1OnlyForSs">
            {explain2Complx} - فصل {seasonNumber}{" "}
          </h1>
          <p className={styles.pTittlNavSeasonVidsAllEpsMain}>
            Season {seasonNumber}
          </p>
        </div>
        {/* نمایش بخش تمام مجموعه های آموزشی */}
        {Array.isArray(complxAllEpsList) && complxAllEpsList.length > 0 ? (
          <div className={styles.divAllEpsSeasVids}>
            <div className={`${styles.divAllEpsSeasVids2}`}>
              {complxAllEpsList.map((itemEps, idEpsX) => {
                // console.log("----" + JSON.stringify(itemEps));
                // console.log("----" + idEpsX);

                const hrefSeasVidsEps = usernameComplx
                  ? `/webapp/language/english/${encodeURIComponent(usernameComplx)}/videos/season-${seasonNumber}/episode-${itemEps?.idEpisodeLes + 1}`
                  : "/webapp/language/english";

                return (
                  <Link
                    key={itemEps?.idEpsCmplx ?? idx}
                    className={styles.stylLinkEvryEpsSeasnVidCard}
                    href={hrefSeasVidsEps}
                    // prefetch={false}
                    aria-disabled={!usernameComplx}
                  >
                    <div className={styles.divEvryEpsSeasnVid}>
                      <div className={styles.divImgEvryEpsSeasnVid}>
                        {itemEps?.linkEpisodePic ? (
                          <Image
                            priority
                            src={itemEps?.linkEpisodePic}
                            alt={
                              explain2Complx +
                              "فصل " +
                              seasonNumber +
                              "-" +
                              "قسمت " +
                              itemEps?.idEpisodeLes +
                              " , " +
                              explain1Complx +
                              "Season " +
                              seasonNumber +
                              "-" +
                              "Episode " +
                              itemEps?.idEpisodeLes
                            }
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                          />
                        ) : null}
                      </div>
                      <p className={styles.pNumbEachVidInSeason}>
                        {idEpsX + 1}
                      </p>
                      <span
                        className={styles.iconWatchTicEachVidInSeason}
                        aria-label="not-watched"
                      >
                        {/* <CheckCircle2 size={48} /> */}
                        <BadgeCheck size={32} />
                      </span>

                      <div className={styles.divMetaVideoInfoInSeason}>
                        <span>{itemEps?.episodeTime ?? "00:00"}</span>
                        <span className={styles.spMetaDotInSeason}>•</span>
                        <span>
                          {Math.round(itemEps?.sizEpisodeKB / 1024) + "MB" ??
                            "0 MB"}
                        </span>
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
      </div>
    </div>
  );
}
