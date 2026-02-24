"use client";
import { useEffect } from "react";
import { useRegistration } from "@/app/webapp/providers/RegistrationProvider";

export default function ClientVidSeason() {
  console.log("oooooooooooo");

  const { loading, checked, registration, serverResult, timeBuy } =
    useRegistration();
  console.log("loading: " + loading);
  console.log("checked: " + checked);
  console.log("registration: " + JSON.stringify(registration));
  console.log("serverResult: " + JSON.stringify(serverResult));
  console.log("timeBuy: " + timeBuy);
  useEffect(() => {
    console.log("iiiiiiiii");

    if (loading || !checked) return;
    if (
      !registration?.phonenumber ||
      !registration?.email ||
      !registration?.timesign ||
      !registration?.serialy
    )
      return;

    // اینجا API صفحه ویدیو را بزن
    // با registration + timeBuy
  }, [loading, checked, registration, timeBuy]);

  return null;
}
