// src/components/layout/PageBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import SocialIconsBand from "./social-icons/SocialIconsBand";

import styles from "@/styles/components/PageBar.module.scss";

interface LinkItem {
  href: string;
  label: string;
}

interface PageBarProps {
  className?: string;
  leftLink: LinkItem;
  rightLink: LinkItem;
}

export default function PageBar({ className, leftLink, rightLink }: PageBarProps) {
  const pathname = usePathname();

  // Aktiv, wenn URL mit href übereinstimmt
  const isLeftActive = pathname === leftLink.href;
  const isRightActive = pathname === rightLink.href;

  return (
    <div className={styles.navPageBar}>
      <div className={clsx(className)}>
        {/* LEFT LINK */}
        <Link
          href={leftLink.href}
          className={clsx(
            styles.navPageTitleTwo,
            isLeftActive && styles.active
          )}
        >
          {leftLink.label}
        </Link>

        {/* CENTER ICONS */}
        <SocialIconsBand />

        {/* RIGHT LINK */}
        <Link
          href={rightLink.href}
          className={clsx(
            styles.navPageTitleThree,
            isRightActive && styles.active
          )}
        >
          {rightLink.label}
        </Link>
      </div>
    </div>
  );
}
