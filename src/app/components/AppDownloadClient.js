"use client";

import { useEffect } from "react";

export default function AppDownloadClient() {
  useEffect(() => {
    const links = document.querySelectorAll("[data-kindy]");
    if (!links.length) return;

    const handleClick = (event) => {
      const kindy = event.currentTarget?.getAttribute("data-kindy");
      if (!kindy) return;

      if (typeof window !== "undefined" && typeof window.opensite === "function") {
        window.opensite(kindy);
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return null;
}
