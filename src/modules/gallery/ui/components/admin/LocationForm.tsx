// src/modules/gallery/ui/components/admin/LocationForm.tsx
"use client";
import ImageUpload from "@/modules/gallery/ui/components/admin/ImageUpload";
import { useAdminLocations } from "@/modules/gallery/ui/hooks/useAdminLocations";
import styles from "@/ui/styles/components/LocationForm.module.scss";

export default function LocationForm() {
  const { newLocation, handleChange, handleCreate, setUploadedImage } = useAdminLocations();

  return (
    <div className={styles.locationContainer}>
      <h1 className={styles.formTitle}>Locations</h1>

      <input
        name="name"
        placeholder="LocationEntity Name"
        value={newLocation.name}
        onChange={handleChange}
      /><br />

      <ImageUpload onUpload={setUploadedImage} folder="locations" />

      <button onClick={handleCreate} className={styles.formButton}>
        Add LocationEntity
      </button>
    </div>
  );
}
