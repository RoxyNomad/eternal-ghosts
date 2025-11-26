// src/app/page.tsx
import { redirect } from "next/navigation";

// This replaces the index.tsx redirect from Pages Router
export default function Home() {
  redirect("/news");
}
