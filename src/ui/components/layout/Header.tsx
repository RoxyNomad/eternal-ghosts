// src/ui/components/layout/HeaderNav.tsx
"use client";

import Link from "next/link";
import clsx from "clsx";
import styles from "@/ui/styles/components/Header.module.scss";

export default function HeaderNav({ active }: { active?: string }) {
  const links = ["news", "band", "live", "gallery", "tour", "releases", "media", "links", "contact"];

  return (
    <header className={styles.header}>
      <nav>
        {links.map((link) => (
          <Link
            key={link}
            href={`/${link}`}
            className={clsx(
              styles.siteTitle,
              active === link && styles.active
            )}
          >
            {link.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
}
