console.log("aaaaaaaaaaaaaaaaaaa");
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runApp);
} else {
  runApp();
}

navbarMenu = document.getElementById("navbarMenu");
liMenu = document.querySelectorAll(".liMenu");
// liMenu2 = document.getElementById("idLiDownloadAppNav");
// liMenu3 = document.getElementById("idLiLanguageNav");
function runApp() {
  // function containerClick() {
  //   if (screen.width < 601) {
  //     navbarMenu.style.width = "0";
  //     liMenu.forEach((el) => {
  //       el.style.display = "none";
  //     });
  //     // liMenu2.style.display = "none";
  //     // liMenu3.style.display = "none";
  //   }
  // }
  // const containerHome = document.querySelector(".containerHome");
  // if (containerHome) {
  //   containerHome.addEventListener("click", containerClick);
  // }

  //  iPhone Or Other

  let osVersion = 0;
  let SERVER_URL_onsertwb = "https://learnvalley.ir/zzza/ounsert.php";
  let xhrOnsertwb;

  //   let appDownDirect = document.querySelector("#appDownDirect");
  //   let appDownBazaar = document.querySelector("#appDownBazaar");
  //   let appDownMyket = document.querySelector("#appDownMyket");
  //   let appDownWebApp = document.querySelector("#appDownWebApp");

  const appDownDirect = document.querySelectorAll(
    '[data-tag-id="appDownDirect"]',
  );
  const appDownBazaar = document.querySelectorAll(
    '[data-tag-id="appDownBazaar"]',
  );
  //   const appDownMyket = document.querySelectorAll(
  //     '[data-tag-id="appDownMyket"]',
  //   );
  const appDownWebApp = document.querySelectorAll(
    '[data-tag-id="appDownWebApp"]',
  );

  let logosIdDown4 = document.querySelector("#logosIdDown4");

  const setDisplay = (list, value) => {
    list.forEach((el) => {
      el.style.display = value;
    });
  };

  /**
   * Determine the mobile operating system.
   * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
   *
   * @returns {String}
   */
  let userAgent;
  function getMobileOperatingSystem() {
    userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    // if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return "iOS";
    }

    return "unknown";
  }

  function iOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }

  function getAndroidVersion() {
    let ua = navigator.userAgent.toLowerCase();
    var match = ua.match(/android\s([0-9\.]*)/i);
    return match ? match[1] : undefined;
  }

  function iOS_versiony() {
    let iosVery;

    if (navigator.userAgent.match(/ipad|iphone|ipod/i)) {
      //if the current device is an iDevice
      var ios_info = {};
      ios_info.User_Agent = navigator.userAgent;
      ios_info.As_Reported =
        navigator.userAgent.match(/OS (\d)?\d_\d(_\d)?/i)[0];
      ios_info.Major_Release = navigator.userAgent
        .match(/OS (\d)?\d_\d(_\d)?/i)[0]
        .split("_")[0];
      ios_info.Full_Release = navigator.userAgent
        .match(/OS (\d)?\d_\d(_\d)?/i)[0]
        .replace(/_/g, ".");
      ios_info.Major_Release_Numeric = +navigator.userAgent
        .match(/OS (\d)?\d_\d(_\d)?/i)[0]
        .split("_")[0]
        .replace("OS ", "");
      ios_info.Full_Release_Numeric = +navigator.userAgent
        .match(/OS (\d)?\d_\d(_\d)?/i)[0]
        .replace("_", ".")
        .replace("_", "")
        .replace("OS ", ""); //converts versions like 4.3.3 to numeric value 4.33 for ease of numeric comparisons
      // return (ios_info.Full_Release);
      iosVery = ios_info.Full_Release;

      osVersion = iosVery;
      // opensite("ios - Site");
    }
  }

  if (iOS()) {
    // appDownDirect.style.display = "none";
    // appDownBazaar.style.display = "none";
    // appDownMyket.style.display = "none";

    setDisplay(appDownDirect, "none");
    setDisplay(appDownBazaar, "none");
    // setDisplay(appDownMyket, "none");
    setDisplay(appDownWebApp, "inline-flex");

    let h4IdDownload = document.querySelector("#h4IdDownload");
    h4IdDownload.innerHTML = "نصب وب اپلیکیشن آیفون";
    iOS_versiony();

    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isInstagram = ua.indexOf("Instagram") > -1 ? true : false;
    if (isInstagram) {
      opensite("Site-ios-insta");
    } else {
      opensite("Site-webapp-safari");
    }

    // window.open("https://learningvalley.ir/apps/webapp/wbapp.html", "_self");
  } else {
    // appDownWebApp.style.display = "none";

    // setDisplay(appDownWebApp, "none");
    setDisplay(appDownDirect, "inline-flex");
    setDisplay(appDownBazaar, "inline-flex");
    // setDisplay(appDownMyket, "inline-flex");

    osVersion = getAndroidVersion();

    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isInstagram = ua.indexOf("Instagram") > -1 ? true : false;
    if (isInstagram) {
      opensite("Site-insta");
    } else {
      opensite("Site-");
    }

    // window.open("https://learningvalley.ir/apps/android", "_self");
  }

  function opensite(kindy = "main-shoro") {
    xhrOnsertwb = new XMLHttpRequest();
    xhrOnsertwb.open("POST", SERVER_URL_onsertwb);
    xhrOnsertwb.responseType = "json";
    xhrOnsertwb.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded",
    );
    xhrOnsertwb.send(
      "noomber=01" +
        "&kindy=" +
        kindy +
        "&serial=ddd1" +
        "&model=site" +
        "&screensiz=" +
        screen.width +
        "&manufac=site" +
        "&versdk=" +
        osVersion +
        "&market=zarin" +
        "&verapp=5",
    );
  }
}
