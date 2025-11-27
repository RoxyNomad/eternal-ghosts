// src/components/layout/HeaderNav.tsx
"use client";

import Link from "next/link";
import clsx from "clsx";
import globalStyles from "@/styles/globals.module.css";

export default function HeaderNav({ active }: { active?: string }) {
  const links = ["news", "band", "live", "gallery", "tour", "releases", "media", "links", "contact"];

  return (
    <header className={globalStyles.header}>
      <nav>
        {links.map((link) => (
          <Link
            key={link}
            href={`/${link}`}
            className={clsx(
              globalStyles.siteTitle,
              active === link && globalStyles.active
            )}
          >
            {link.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
}
