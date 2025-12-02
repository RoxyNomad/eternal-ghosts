// src/app/gallery/[location]/page.tsx
"use client";
import Link from "next/link";
import HeaderNav from "@/ui/components/layout/Header";
import GalleryGrid from "@/ui/components/gallery/GalleryGrid";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal";

import styles from "@/ui/styles/pages/gallery.module.scss";

interface Props {
  params: {
    location: string;
  };
}

export default function LocationGalleryPage({ params }: Props) {
  const decodedLocation = decodeURIComponent(params.location);

  return (
    <NoScrollHorizontal>
      <div className={styles.galleryPage}>
        <HeaderNav active="gallery" />
        <div className={styles.content}>
          <div className={styles.header}>
            <Link href="/gallery" className={styles.backLink}>
              ← Back
            </Link>
            <h1 className={styles.title}>{decodedLocation}</h1>
          </div>
          <GalleryGrid location={decodedLocation} />
        </div>
      </div>
    </NoScrollHorizontal>
  );
}
