import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const assetUrl = process.env.NEXT_PUBLIC_ASSET_URL;

export const metadata = {
  metadataBase: new URL(`${baseUrl}`),
  title: {
    default: "آرتاک | آموزش اصولی زبان انگلیسی با ویدیو",
    template: "%s | آرتاک",
  },
  description:
    "اپلیکیشن و وب اپلیکیشن اندروید و آیفون آموزش مکالمه زبان انگلیسی با فیلم و سریال از پایه تا پیشرفته بهمراه ترجمه کلمات و تشریح گرامر با زیرنویس انگلیسی و فارسی همزیان",
  keywords: [
    "آموزش زبان انگلیسی",
    "اپلیکیشن و وب اپلیکیشن اندروید و آیفون آموزش مکالمه زبان انگلیسی",
    "ترجمه کلمات انگلیسی",
    "تشریح کامل گرامر",
    "اصطلاحات زبان انگلیسی",
    "آموزش مکالمه انگلیسی",
    "بهترین روش‌های آموزش زبان",
    "مهارت‌های زبان انگلیسی",
    "یادگیری زبان انگلیسی از صفر تا صد در خانه",
    "اپلیکیشن آموزش زبان انگلیسی با ویدیو",
  ],
  authors: [{ name: "Artak" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    locale: "fa_IR",
    type: "website",
    url: `${baseUrl}`,
    siteName: "Artak",
    title: "آرتاک | آموزش اصولی زبان انگلیسی با ویدیو",
    description:
      "اپلیکیشن و وب اپلیکیشن اندروید و آیفون آموزش مکالمه زبان انگلیسی با فیلم و سریال از پایه تا پیشرفته بهمراه ترجمه کلمات و تشریح گرامر با زیرنویس انگلیسی و فارسی همزیان",
    images: [
      {
        url: `${assetUrl}sitefiles/images/sitePreview.png`,
        width: 1200,
        height: 630,
        alt: "اپلیکیشن آموزش زبان انگلیسی آرتاک",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      name: "Learning Valley",
      url: baseUrl,
      sameAs: ["https://instagram.com/learningvly/"],
      logo: {
        "@type": "ImageObject",
        "@id": `${baseUrl}#logo`,
        url: `${assetUrl}sitefiles/icon/icon-128x128.png`,
        contentUrl: `${assetUrl}sitefiles/icon/icon-128x128.png`,
        caption: "Learning Valley",
        inLanguage: "fa-IR",
        width: "128",
        height: "128",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+989336633856",
        contactType: "customer support",
        contactOption: "TollFree",
        areaServed: "IR",
        availableLanguage: "Persian",
      },
      location: {
        "@id": `${baseUrl}#place`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      url: baseUrl,
      name: "Learning Valley",
      publisher: { "@id": `${baseUrl}#organization` },
      inLanguage: "fa-IR",
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}?query={search_term_string}`,
        "query-input": {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueMaxlength: 100,
          valueName: "search_term_string",
        },
      },
    },
    {
      "@type": "ImageObject",
      url: `${assetUrl}siteContent/language/english/english-today/images/english-today-app-2.png`,
      "@id": `${assetUrl}siteContent/language/english/english-today/images/english-today-app-2.png`,
      width: "325",
      height: "600",
      caption: "آموزش زبان انگلیسی با ویدیوهای انگلیش تودی",
      inLanguage: "fa-IR",
    },
    {
      "@type": "WebPage",
      "@id": `${baseUrl}#webpage`,
      url: baseUrl,
      name: "آموزش صفر تا صد زبان انگلیسی با ویدیو و فیلم",
      datePublished: "2021-02-23T20:53:18+00:00",
      dateModified: "2023-10-06T13:35:21+00:00",
      about: { "@id": `${baseUrl}#organization` },
      isPartOf: { "@id": `${baseUrl}#website` },
      primaryImageOfPage: {
        "@id": `${assetUrl}siteContent/language/english/english-today/images/english-today-app-2.png`,
      },
      inLanguage: "fa-IR",
    },
    {
      "@type": "VideoObject",
      name: "بهترین اپلیکیشن آموزش صفر تا صد زبان انگلیسی با ویدیوهای انگلیش تودی و فیلم - learn english with english today videos",
      description:
        "اپلیکیشن آموزش زبان انگلیسی از پایه تا پیشرفته به‌همراه ترجمه کلمات و اصطلاحات ویدیوها و تشریح کامل نکات گرامری ویدیوهای انگلیش تودی قابل استفاده همزمان در گوشی‌های اندروید و آیفون - بهترین اپلیکیشن آموزش صفر تا صد زبان انگلیسی با ویدیوهای انگلیش تودی و فیلم - learn english with english today videos",
      thumbnailUrl: `${assetUrl}siteContent/language/english/english-today/images/english-today-app-present.jpg`,
      uploadDate: "2021-02-23T20:53:18+00:00",
      duration: "PT1M13S",
      contentUrl: `${assetUrl}siteContent/language/english/english-today/videos/english-today-app-present.mp4`,
      publisher: {
        "@type": "Organization",
        name: "learning valley",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${assetUrl}sitefiles/icon/icon-128x128.png`,
        },
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5BLNH86"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript> */}

      <Navbar idCss="navbar80" />
      {/* <SearchBox /> */}

      <div className="flexy containerHome">
        <Header />

        <div className="flexy divAdvertiseApp">
          <h2 className="h2StepByStep">
            <p style={{ padding: 0, margin: 0, color: "#003285" }}>
              اپلیکیشن آموزش زبان انگلیسی{" "}
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
                color: "#efbf04",
                textShadow: "1px 1px 1px black",
              }}
            >
              آرتاک
            </p>
          </h2>

          <div className="flexy divBoxAdvertise">
            <div className="flexy div1">
              <svg
                className="img1"
                style={{ color: "#8f0177" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"
                  fill="#8f0177"
                />
              </svg>
              <p className="p1-1">
                This app is established to help you learn English with
                confidence.
              </p>
              <p className="p1-2">
                این برنامه ساخته شده تا کمک کند شما <b>انگلیسی</b> را با اعتماد
                بنفس بیاموزید.
              </p>
            </div>

            <div className="flexy div1">
              <div className="flexy img2">
                <svg
                  className="svgimg2-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"
                  />
                </svg>

                <svg
                  className="svgimg2-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <p className="p2-1">
                در یادگیری هر زبانی با تقویت مهارت <b> شنیداری</b>، فرایند
                یادگیری تسهیل می‌یابد.
              </p>
              <p className="p2-2">
                ویدیوهای آموزشی این مجموعه با لهجه‌ای بسیار سلیس،{" "}
                <b>زبان انگلیسی</b> را از پایه تا پیشرفته آموزش می‌دهد.
              </p>
            </div>

            {/* <div className="flexy div1">
              <svg
                className="img3"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z" />
              </svg>
              <strong className="p3-1">
                ویدیوهای <span className="blue">English Today</span> یکی از
                بهترین منابع برای یادگیری زبان انگلیسی است که کاملا اصولی و
                حرفه‌ای، زبان انگلیسی را به شما آموزش می‌دهد.
              </strong>
            </div> */}
          </div>
        </div>

        <div className="flexy screenshot">
          <div className="screenshot1">
            <div className="flexy screenshotAll">
              <Image
                priority
                className="imgScreen1"
                src={`${assetUrl}siteContent/language/english/english-today/images/english-today-app-1.webp`}
                alt="اپلیکیشن آموزش زبان انگلیسی با امکان دانلود ویدیوهای english today با حجم کم و کیفیت بالا"
                width={325}
                height={600}
              />
              <Image
                priority
                className="imgScreen1"
                src={`${assetUrl}siteContent/language/english/english-today/images/english-today-app-2.webp`}
                alt="اپلیکیشن آموزش زبان انگلیسی انگلیش تودی به همراه کلمات و گرامر"
                width={325}
                height={600}
              />
              <Image
                className="imgScreen1"
                src={`${assetUrl}siteContent/language/english/english-today/images/english-today-app-3.webp`}
                alt="اپلیکیشن آموزش زبان انگلیسی English today"
                width={325}
                height={600}
              />
              <Image
                priority
                className="imgScreen1"
                src={`${assetUrl}siteContent/language/english/english-today/images/english-today-app-4.webp`}
                alt="اپلیکیشن آموزش زبان انگلیسی و یادگیری کلمات با متد g5 english"
                width={325}
                height={600}
              />
              <Image
                priority
                className="imgScreen1"
                src={`${assetUrl}siteContent/language/english/english-today/images/english-today-app-5.webp`}
                alt="برترین اپلیکیشن آموزش زبان انگلیسی و یادگیری کلمات با متد جی5"
                width={325}
                height={600}
              />
              <Image
                priority
                className="imgScreen1"
                src={`${assetUrl}siteContent/language/english/english-today/images/english-today-app-6.webp`}
                alt="آموزش گرامر زبان انگلیسی از مبتدی تا پیشرفته"
                width={325}
                height={600}
              />
              <Image
                priority
                className="imgScreen1"
                src={`${assetUrl}siteContent/language/english/english-today/images/english-today-app-7.webp`}
                alt="آموزش پایه تا پیشرفته گرامر زبان انگلیسی"
                width={325}
                height={600}
              />
              <Image
                priority
                className="imgScreen1"
                src={`${assetUrl}siteContent/language/english/english-today/images/english-today-app-8.webp`}
                alt="ترجمه انگلیسی به فارسی ویدیوهای انگلیش تودی"
                width={325}
                height={600}
              />
            </div>
          </div>
        </div>

        {/* <div className="flexy divVideo">
          <video
            className="video"
            controls
            playsInline
            preload="metadata"
            poster={`${assetUrl}siteContent/language/english/english-today/images/english-today-app-present.jpg`}
          >
            <source
              src={`${assetUrl}siteContent/language/english/english-today/videos/english-today-app-present.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
            <time dateTime="2022-01-05T19:20:30">
              Published on January 05, 2022
            </time>
            <h2>
              اپلیکیشن آموزش زبان انگلیسی با ویدیوهای انگلیش تودی - English
              Today
            </h2>
            <p>
              اپلیکیشن آموزش مکالمه زبان انگلیسی با ویدیوهای انگلیش تودی به
              همراه آموزش صفر تا صد گرامر و معنی کلمات و اصطلاحات ویدیوها -
              یادگیری لغات با متد جی5
            </p>
          </video>
        </div> */}
        <AppDownload />
        {/* <Footer /> */}
      </div>

      <Script
        id="site-script"
        src="/codes/js/script.js"
        strategy="afterInteractive"
      />

      {/* goftino widget code */}
      {/* <Script id="goftino" strategy="afterInteractive">
        {`!function(){var i="g8lNUB",a=window,d=document;
function g(){var g=d.createElement("script"),
s="https://www.goftino.com/widget/"+i,
l=localStorage.getItem("goftino_"+i);
g.async=!0,g.src=l?s+"?o="+l:s;
d.getElementsByTagName("head")[0].appendChild(g)}
"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`}
      </Script> */}
    </>
  );
}
