// src/proxy.js
import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // اجازه برای /webapp و زیرمسیرها
  if (pathname === "/webapp" || pathname.startsWith("/webapp/")) {
    return NextResponse.next();
  }

  // اجازه برای صفحه اصلی
  if (pathname === "/") {
    return NextResponse.next();
  }

  // اجازه برای فایل‌های استاتیک و api
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // بقیه مسیرها -> صفحه اصلی
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/:path*",
};
