"use client";
import { usePicturesByLocation } from "@/modules/gallery/ui/hooks/usePicturesByLocation";
import { useParams } from "next/navigation";
import styles from "@/ui/styles/pages/adminGallery.module.scss";

export default function AdminLocationPicturesPage() {
  const params = useParams();
  const location = decodeURIComponent(params.location as string);
  const { pictures, loading, error } = usePicturesByLocation(location);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.galleryPage}>
      <h1>{location} - Live Pictures</h1>
      <div className={styles.pictureGrid}>
        {pictures.map(p => (
          <div key={p.id} className={styles.pictureCard}>
            <img src={p.imageUrl} alt={`Picture ${p.id}`} />
            <p>{new Date(p.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
