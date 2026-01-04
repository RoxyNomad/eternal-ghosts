// src/ui/components/gallery/GalleryLocations.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useGalleryLocations } from "@/modules/gallery/ui/hooks/useGalleryLocations";
import styles from "@/ui/styles/components/GalleryLocations.module.scss";

export default function GalleryLocations() {
  const { locations, loading, error } = useGalleryLocations();

  if (loading) return <p>Loading locations...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!locations || locations.length === 0) return;

  return (
    <div className={styles.locationsGrid}>
      {locations.map((loc) => (
        <Link
          key={loc.id}
          href={`/gallery/${encodeURIComponent(loc.name)}`}
          className={styles.locationCard}
        >
          <div className={styles.imageWrapper}>
            {/* Using next/image is recommended if image domains are configured in next.config.js */}
            <Image
              src={loc.imageUrl || "/placeholder.jpg"}
              alt={loc.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.info}>
            <h3 className={styles.name}>{loc.name}</h3>
            <p className={styles.count}>{loc.pictureCount} picture{loc.pictureCount !== 1 ? "s" : ""}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
