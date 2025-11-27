// src/components/layout/SocialIcons.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/SocialIconsBand.module.scss";

interface IconItem {
  src: string;
  href: string;
  alt: string;
  className?: string;
}

export default function SocialIcons() {
  const icons: IconItem[] = [
    {
      src: "/pictures/facebook-icon.png",
      href: "https://www.facebook.com/profile.php?id=61573032031881",
      alt: "Facebook",
      className: styles.facebookIcon,
    },
    {
      src: "/pictures/youtube-icon.png",
      href: "https://www.youtube.com/watch?v=B_YRm7NKeas",
      alt: "YouTube",
      className: styles.youtubeIcon,
    },
    {
      src: "/pictures/instagram-icon.png",
      href: "https://www.instagram.com/eternalghosts0/",
      alt: "Instagram",
      className: styles.instagramIcon,
    },
  ];

  return (
    <div>
      {icons.map((icon, i) => (
        <Link key={i} href={icon.href} target="_blank">
          <Image
            src={icon.src}
            width={94}
            height={94}
            alt={icon.alt}
            className={icon.className}
          />
        </Link>
      ))}
    </div>
  );
}
