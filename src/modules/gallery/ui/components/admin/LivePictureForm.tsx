import ImageUpload from "@/modules/gallery/ui/components/admin/ImageUpload";
import { useLivePictures } from "@/modules/gallery/ui/hooks/useLivePictures";
import { useAdminLocations } from "@/modules/gallery/ui/hooks/useAdminLocations";
import LocationForm from "@/modules/gallery/ui/components/admin/LocationForm";
import styles from "@/ui/styles/components/LivePictureForm.module.scss";

export default function LivePictureForm() {
    const {
        newLivePicture,
        setNewLivePicture,
        handleChange,
        handleCreate,
        setUploadedImage,
    } = useLivePictures();

    const { locations, loading } = useAdminLocations();

    return (
        <div className={styles.pictureContainer}>
            <div className={styles.newPictureForm}>
                <h1 className={styles.formTitle}>Live Pictures</h1>

                <select
                    value={newLivePicture.locationId}
                    onChange={(e) =>
                        setNewLivePicture({
                            ...newLivePicture,
                            locationId: Number(e.target.value),
                        })
                    }
                    disabled={loading}
                >
                    <option value="">Select location</option>
                    {locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                            {loc.name}
                        </option>
                    ))}
                </select>

                <br />

                <input
                    type="date"
                    name="date"
                    value={newLivePicture.date}
                    onChange={handleChange}
                />

                <br />

                <ImageUpload onUpload={setUploadedImage} folder="live-pictures" />

                <button
                    onClick={handleCreate}
                    className={styles.formButton}
                    disabled={!newLivePicture.locationId || !newLivePicture.date}
                >
                    Add Picture
                </button>
            </div>

            <div className={styles.pictureGallery}>
                <LocationForm />
            </div>
        </div>
    );
}
