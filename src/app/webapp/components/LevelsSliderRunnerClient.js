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
    let isChang = false;
    let oldPositonBtLev = 1;

    const widdthDivSvEachLevel = slider.querySelector(
      "[data-hor-seekbar='true']",
    );
    if (!widdthDivSvEachLevel) return;

    const cleanups = [];

    const levelButtons = Array.from(
      document.querySelectorAll("button[id^='idBtnLevv']"),
    );

    const goToLevel = (index) => {
      console.log("--ii--" + index);

      if (index < 0 || index >= slides.length) return;
      if (index === currentIndex) return;
      currentIndex = index;
      isChang = true;
      setPositionByIndex();
    };

    levelButtons.forEach((btn, index) => {
      console.log("--vv--" + index);

      const onClick = () => goToLevel(index);
      btn.addEventListener("click", onClick);

      cleanups.push(() => {
        console.log("--ee--" + index);

        btn.removeEventListener("click", onClick);
      });
    });

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
      chanBackBtn(currentIndex + 1);
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
      if (moveBy < -100 && currentIndex < slides.length - 1) {
        currentIndex += 1;
        isChang = true;
      }
      if (moveBy > 100 && currentIndex > 0) {
        currentIndex -= 1;
        isChang = true;
      }
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

    // function chanBackBtn(levy = 1) {
    //   if (isChang) {
    //     console.log("ssssssssssss");

    //     document.getElementById(`idBtnLevv${levy}`).style.backgroundColor =
    //       "rgba(0, 188, 212, 0.8)";
    //     document.getElementById(
    //       `idBtnLevv${oldPositonBtLev}`,
    //     ).style.backgroundColor = "rgb(255, 255, 255)";
    //     oldPositonBtLev = levy;
    //     isChang = false;
    //   }
    // }
    function chanBackBtn(levy = 1) {
      if (!isChang) return;

      const newBtn = document.getElementById(`idBtnLevv${levy}`);
      const oldBtn = document.getElementById(`idBtnLevv${oldPositonBtLev}`);

      if (newBtn) {
        newBtn.style.backgroundColor = "#8f0177";
        newBtn.style.color = "#eeeded";
      }

      if (oldBtn) {
        oldBtn.style.backgroundColor = "#ffffff";
        oldBtn.style.color = "#212121";
      }

      oldPositonBtLev = levy;
      isChang = false;
    }
    return () => {
      cancelAnimationFrame(animationID);
      cleanups.forEach((off) => off());
    };
  }, [pathname]);

  return null;
}
