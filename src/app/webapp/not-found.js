import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
      <div style={{ textAlign: "center" }}>
        <h1>صفحه پیدا نشد</h1>
        <p>آدرس وارد شده معتبر نیست.</p>
        <Link
          href="/webapp/language/english"
          className="inline-block m-4 p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          رفتن به صفحه وب‌اپلیکیشن
        </Link>
      </div>
    </div>
  );
}
