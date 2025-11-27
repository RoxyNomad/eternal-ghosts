// src/components/layout/PageBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import SocialIcons from "./SocialIcons";

import bandStyles from "@/styles/band.module.css";

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
    <div className={bandStyles.navPageBar}>
      <div className={clsx(className)}>
        {/* LEFT LINK */}
        <Link
          href={leftLink.href}
          className={clsx(
            bandStyles.navPageTitleTwo,
            isLeftActive && bandStyles.active
          )}
        >
          {leftLink.label}
        </Link>

        {/* CENTER ICONS */}
        <SocialIcons />

        {/* RIGHT LINK */}
        <Link
          href={rightLink.href}
          className={clsx(
            bandStyles.navPageTitleThree,
            isRightActive && bandStyles.active
          )}
        >
          {rightLink.label}
        </Link>
      </div>
    </div>
  );
}
