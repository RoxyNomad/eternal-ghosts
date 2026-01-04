// src/ui/components/gallery/GalleryGrid.tsx
"use client";
import { usePicturesByLocation } from "@/modules/gallery/ui/hooks/usePicturesByLocation";
import styles from "@/ui/styles/components/GalleryGrid.module.scss";

interface Props {
  location: string;
}

export default function GalleryGrid({ location }: Props) {
  const { pictures, loading, error } = usePicturesByLocation(location);

  if (loading) return <p>Loading pictures...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pictures || pictures.length === 0) return;

  return (
    <div className={styles.gallery}>
      {pictures.map((picture) => (
        <div key={picture.id} className={styles.galleryItem}>
          <img src={picture.imageUrl} alt={`Picture from ${picture.location}`} className={styles.image} />
          <div className={styles.overlay}>
            <p>{new Date(picture.date).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
