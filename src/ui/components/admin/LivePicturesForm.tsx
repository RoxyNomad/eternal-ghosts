// src/ui/components/admin/LivePictureForm.tsx
import ImageUpload from "@/ui/components/admin/ImageUpload";
import { useLivePictures } from "@/hooks/useLivePictures";
import LocationForm from '@/ui/components/admin/LocationForm'
import styles from '@/ui/styles/components/LivePictureForm.module.scss'

export default function LivePictureForm() {
  const { pictures, newLivePicture, handleChange, handleCreate, handleDelete, setUploadedImage } = useLivePictures();

  return(
    <div className={styles.pictureContainer}>
      <div className={styles.newPictureForm}>
        <h1 className={styles.formTitle}>Live Pictures</h1>

        <input
          name='location'
          placeholder='Location'
          value={newLivePicture.location}
          onChange={handleChange}
        /><br />

        {/* ✔️ Hier kommt das Datum hinein */}
        <input
          type="date"
          name="date"
          value={newLivePicture.date}
          onChange={handleChange}
        /><br />

        <ImageUpload onUpload={setUploadedImage} folder="live-pictures" />

        <button onClick={handleCreate} className={styles.formButton}>
          Add Picture
        </button>
      </div>

      <div className={styles.pictureGallery}>
        <LocationForm />
      </div>
    </div>
  )
}
