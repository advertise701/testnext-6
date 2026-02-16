import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "./codes/css/fonts.css";
import "./codes/css/style.css";
// import "./codes/layouts-css/navbar/navbar.css";
// import "./codes/layouts-css/header/header.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// این قسمت خودم اضافه کردم
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// این قسمت خودم اضافه کردم
export const metadata = {
  icons: {
    icon: "/favicon.ico",
    apple: [
      {
        url: "/sitefiles/icon/icon-72x72.png",
        sizes: "72x72",
      },
      {
        url: "/sitefiles/icon/icon-96x96.png",
        sizes: "96x96",
      },
      {
        url: "/sitefiles/icon/icon-128x128.png",
        sizes: "128x128",
      },
      {
        url: "/sitefiles/icon/icon-144x144.png",
        sizes: "144x144",
      },
      {
        url: "/sitefiles/icon/icon-152x152.png",
        sizes: "152x152",
      },
      {
        url: "/sitefiles/icon/icon-192x192.png",
        sizes: "192x192",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      {/* <head>
        <Script
          id="gtag"
          src="https://www.googletagmanager.com/gtag/js?id=G-59105Y4TQ4"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-59105Y4TQ4');`}
        </Script>

        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5BLNH86');`}
        </Script>
      </head> */}
      <body
        // دو خط زیر خودم اضافه کردم
        itemScope
        itemType="https://schema.org/WebPage"
        // تا اینجا
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
