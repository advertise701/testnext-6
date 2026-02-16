"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LevelsSliderRunnerClient() {
  const pathname = usePathname();

  useEffect(() => {
    const slider = document.getElementById("levels-page");
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll("[data-slide='true']"));
    if (!slides.length) return;

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let currentIndex = 0;

    const widdthDivSvEachLevel = slider.querySelector(
      "[data-hor-seekbar='true']",
    );
    if (!widdthDivSvEachLevel) return;

    const cleanups = [];

    const getPositionX = (event) =>
      event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;

    const setSliderPosition = () => {
      slider.style.transform = `translateX(${currentTranslate}px)`;
    };

    const setPositionByIndex = () => {
      // currentTranslate = currentIndex * -window.innerWidth;
      currentTranslate = currentIndex * -widdthDivSvEachLevel.offsetWidth;
      prevTranslate = currentTranslate;
      setSliderPosition();
    };

    const animation = () => {
      setSliderPosition();
      if (isDragging) animationID = requestAnimationFrame(animation);
    };

    const touchStart = (index) => (event) => {
      currentIndex = index;
      startPos = getPositionX(event);
      isDragging = true;
      animationID = requestAnimationFrame(animation);
    };

    const touchMove = (event) => {
      if (!isDragging) return;
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPos;
    };

    const touchEnd = () => {
      isDragging = false;
      cancelAnimationFrame(animationID);

      const moveBy = currentTranslate - prevTranslate;
      if (moveBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
      if (moveBy > 100 && currentIndex > 0) currentIndex -= 1;

      setPositionByIndex();
    };

    slides.forEach((slide, index) => {
      const onTouchStart = touchStart(index);
      const onTouchEnd = touchEnd;
      const onTouchMove = touchMove;
      const onMouseDown = touchStart(index);
      const onMouseUp = touchEnd;
      const onMouseLeave = touchEnd;
      const onMouseMove = touchMove;

      slide.addEventListener("touchstart", onTouchStart);
      slide.addEventListener("touchend", onTouchEnd);
      slide.addEventListener("touchmove", onTouchMove);
      slide.addEventListener("mousedown", onMouseDown);
      slide.addEventListener("mouseup", onMouseUp);
      slide.addEventListener("mouseleave", onMouseLeave);
      slide.addEventListener("mousemove", onMouseMove);

      cleanups.push(() => {
        slide.removeEventListener("touchstart", onTouchStart);
        slide.removeEventListener("touchend", onTouchEnd);
        slide.removeEventListener("touchmove", onTouchMove);
        slide.removeEventListener("mousedown", onMouseDown);
        slide.removeEventListener("mouseup", onMouseUp);
        slide.removeEventListener("mouseleave", onMouseLeave);
        slide.removeEventListener("mousemove", onMouseMove);
      });
    });

    return () => {
      cancelAnimationFrame(animationID);
      cleanups.forEach((off) => off());
    };
  }, [pathname]);

  return null;
}
