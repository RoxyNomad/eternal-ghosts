"use client";
import Link from "next/link";
import { useAdminLocations } from "@/modules/gallery/ui/hooks/useAdminLocations";
import styles from "@/ui/styles/pages/adminGallery.module.scss";

export default function AdminGalleryPage() {
  const { locations, loading, error } = useAdminLocations();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.galleryPage}>
      <h1>Locations</h1>
      <div className={styles.locationsGrid}>
        {locations.map(loc => (
          <Link key={loc.id} href={`/admin/gallery/${encodeURIComponent(loc.name)}`} className={styles.locationCard}>
            <img src={loc.imageUrl || "/placeholder.jpg"} alt={loc.name} />
            <p>{loc.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
