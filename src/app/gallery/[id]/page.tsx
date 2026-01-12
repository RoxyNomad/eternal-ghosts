// src/app/gallery/[id]/page.tsx
"use client";

import Link from "next/link";
import HeaderNav from "@/ui/components/layout/Header";
import GalleryGrid from "@/modules/gallery/ui/components/GalleryGrid";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal";

import styles from "@/ui/styles/pages/gallery[location].module.scss";

interface Props {
  params: {
    id: string;
  };
}

export default function LocationGalleryPage({ params }: Props) {
  const locationId = Number(params.id);

  return (
      <NoScrollHorizontal>
        <div className={styles.galleryPage}>
          <HeaderNav active="gallery" />
          <div className={styles.content}>
            <div className={styles.header}>
              <Link href="/gallery" className={styles.backLink}>
                ← Back
              </Link>
              <h1 className={styles.title}>Location #{locationId}</h1>
            </div>

            <GalleryGrid locationId={locationId} />
          </div>
        </div>
      </NoScrollHorizontal>
  );
}
