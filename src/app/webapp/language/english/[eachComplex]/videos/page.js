import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const LAST_WATCH_COOKIE_PREFIX = "lv_last_watch_";

function toPositiveInt(value, fallback) {
  const parsed = Number.parseInt(String(value ?? "").trim(), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getCookieName(eachComplex) {
  return `${LAST_WATCH_COOKIE_PREFIX}${encodeURIComponent(eachComplex)}`;
}

function getDestinationFromCookie(cookieValue) {
  if (!cookieValue) {
    return { season: 1, episode: 1 };
  }

  try {
    const parsed = JSON.parse(cookieValue);
    return {
      season: toPositiveInt(parsed?.season, 1),
      episode: toPositiveInt(parsed?.episode, 1),
    };
  } catch {
    return { season: 1, episode: 1 };
  }
}

export default async function VideosPage({ params }) {
  const { eachComplex } = await params;
  const slug = decodeURIComponent(String(eachComplex ?? "").trim());

  if (!slug) {
    redirect("/webapp/language/english");
  }

  const cookieStore = await cookies();
  const lastWatchCookie = cookieStore.get(getCookieName(slug))?.value;
  console.log("---a----" + lastWatchCookie);

  const { season, episode } = getDestinationFromCookie(lastWatchCookie);

  //   redirect(
  //     `/webapp/language/english/${encodeURIComponent(slug)}/season-${season}/episode-${episode}`,
  //   );
}
