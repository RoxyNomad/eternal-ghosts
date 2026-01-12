// src/modules/gallery/ui/components/GalleryGrid.tsx
"use client";
import { usePicturesByLocation } from "@/modules/gallery/ui/hooks/usePicturesByLocation";
import styles from "@/ui/styles/components/GalleryGrid.module.scss";

interface Props {
  locationId: number;
}

export default function GalleryGrid({ locationId }: Props) {
  const { pictures, loading, error } = usePicturesByLocation(locationId);

  if (loading) return <p>Loading pictures...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pictures || pictures.length === 0) return;

  return (
    <div className={styles.gallery}>
      {pictures.map((picture) => (
        <div key={picture.id} className={styles.galleryItem}>
          <img src={picture.imageUrl} alt={`Picture from ${picture.locationId}`} className={styles.image} />
          <div className={styles.overlay}>
            <p>{new Date(picture.date).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
