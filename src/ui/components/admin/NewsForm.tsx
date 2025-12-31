// src/ui/components/admin/NewsForm.tsx
"use client";

import { useAdminNews } from "@/hooks/useAdminNews";
import ImageUpload from "@/ui/components/admin/ImageUpload";

import styles from "@/ui/styles/components/NewsForm.module.scss";

export default function NewsForm() {
    const {
        form,
        handleChange,
        handleSubmit,
        setUploadedImage,
    } = useAdminNews();

    return (
        <section className={styles.newsForm}>
            <h2>Create News</h2>

            {/* Title */}
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
            />

            {/* Content */}
            <textarea
                name="content"
                placeholder="Content"
                value={form.content}
                onChange={handleChange}
            />

            {/* Image Upload → Cloudinary /news */}
            <ImageUpload
                folder="news"
                onUpload={setUploadedImage}
            />

            {/* Submit */}
            <button
                onClick={handleSubmit}
                className={styles.formButton}
            >
                Publish
            </button>
        </section>
    );
}
