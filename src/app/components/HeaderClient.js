"use client";

import { useEffect } from "react";

export default function HeaderClient() {
  useEffect(() => {
    const button = document.getElementById("btDownHeader");
    if (!button) return;

    const scrollToSelector = (selector, offset = 0) => {
      const target = document.querySelector(selector);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const handleClick = (event) => {
      event.preventDefault();
      scrollToSelector(".clsAsideTagAppDown", -300);
    };

    button.addEventListener("click", handleClick);
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
