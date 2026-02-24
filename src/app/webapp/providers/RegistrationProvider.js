"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL || "https://learningvalley.ir/zzzmvc/api/";
const API_URL_COMPLEXES = `${apiUrl}yBuyOld.php`;

let registrationState = {
  loading: true,
  checked: false,
  registration: null,
  serverResult: null,
  timeBuy: null,
};

const listeners = new Set();

function setRegistrationState(partial) {
  registrationState = { ...registrationState, ...partial };
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return registrationState;
}

export function RegistrationProvider() {
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    console.log("--qqqq--");

    async function run() {
      try {
        let regData = null;

        try {
          const raw = localStorage.getItem("registration");
          regData = raw ? JSON.parse(raw) : null;
        } catch {
          regData = null;
        }

        console.log("sklkdlskl");

        if (!regData) return;

        console.log("ttttttttt");

        const phonenumber = regData?.phonenumber;
        const email = regData?.email;
        const timesign = regData?.timesign;
        const serialy = regData?.serialy;

        if (!phonenumber || !email || !timesign || !serialy) return;

        const registration = { ...regData, serialy };
        setRegistrationState({ registration });

        localStorage.setItem("registration", JSON.stringify(registration));

        const body = new URLSearchParams({
          numbery: phonenumber,
          emailyTriim: email,
          emailyFull: email,
          timSigny: String(timesign),
          serialy,
          advertisId: serialy,
          osName: "webappData",
          manufactur: "s",
          model: "S",
          screenWidth: String(window.innerWidth || 360),
          verSdk: "20",
          nameMarket: "artak",
          appVerCod: "10",
          idComplx: "2",
        });

        const res = await fetch(API_URL_COMPLEXES, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        });

        const data = await res.json().catch(() => null);
        const timeBuy =
          data?.timeBuy ??
          data?.timebuy ??
          data?.timBuy ??
          data?.timbuy ??
          null;

        setRegistrationState({
          serverResult: {
            ok: res.ok,
            statusCode: res.status,
            data,
          },
          timeBuy,
        });
      } catch (err) {
        setRegistrationState({
          serverResult: {
            ok: false,
            statusCode: 0,
            error: String(err),
          },
        });
      } finally {
        setRegistrationState({
          checked: true,
          loading: false,
        });
      }
    }

    run();
  }, []);

  return null;
}

export function useRegistration() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
