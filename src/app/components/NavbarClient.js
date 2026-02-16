"use client";

import { useEffect } from "react";
import styles from "./Navbar.module.css";

export default function NavbarClient() {
  useEffect(() => {
    const menu = document.getElementById("navbarMenu");
    const phoneButton = document.getElementById("phoneMenuIcon");
    const downloadLink = document.querySelector("#idLiDownloadAppNav a");
    const contactLink = document.querySelector("#idLiContactNav a");

    if (!menu || !phoneButton) return;

    const setOpen = (open) => {
      menu.classList.toggle(styles.ulNavbarOpen, open);
    };

    const syncMenuWithViewport = () => {
      if (window.innerWidth >= 601) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    const toggleMenu = () => {
      setOpen(!menu.classList.contains(styles.ulNavbarOpen));
    };

    const scrollToSelector = (selector, offset = 0) => {
      const target = document.querySelector(selector);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const handleDownload = (event) => {
      event.preventDefault();
      scrollToSelector(".clsAsideTagAppDown", -300);
    };

    const handleContact = (event) => {
      event.preventDefault();
      scrollToSelector(".clsFooterTag", 0);
    };

    syncMenuWithViewport();
    window.addEventListener("resize", syncMenuWithViewport);
    phoneButton.addEventListener("click", toggleMenu);
    downloadLink?.addEventListener("click", handleDownload);
    contactLink?.addEventListener("click", handleContact);

    return () => {
      window.removeEventListener("resize", syncMenuWithViewport);
      phoneButton.removeEventListener("click", toggleMenu);
      downloadLink?.removeEventListener("click", handleDownload);
      contactLink?.removeEventListener("click", handleContact);
    };
  }, []);

  return null;
}
