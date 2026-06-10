"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { usePicturesByLocation } from "@/modules/gallery/ui/hooks/usePicturesByLocation";
import styles from "@/ui/styles/pages/adminGallery.module.scss";

export default function AdminLocationPicturesPage() {
    const params = useParams();

    const locationId = Number(params.locationId);

    const { pictures, loading, error } = usePicturesByLocation(locationId);

    if (Number.isNaN(locationId)) {
        return <p>Invalid location</p>;
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.galleryPage}>
            <h1>Location #{locationId} – Live Pictures</h1>

            <div className={styles.pictureGrid}>
                {pictures.map((p) => (
                    <div key={p.id} className={styles.pictureCard}>
                        <Image src={p.imageUrl} alt={`Picture ${p.id}`} />
                        <p>{new Date(p.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}