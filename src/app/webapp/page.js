import { redirect } from "next/navigation";
// import { notFound } from "next/navigation";

export default function WebappPage() {
  // notFound();
  redirect("/webapp/language/english");
}
