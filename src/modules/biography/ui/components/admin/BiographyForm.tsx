// src/modules/biography/ui/components/admin/BiographyForm.tsx
"use client";

import { useAdminBiography } from "@/modules/biography/ui/hooks/useAdminBiography";

import styles from "@/ui/styles/components/BiographyForm.module.scss";

export default function BiographyForm() {
    const {
        form,
        handleChange,
        handleSubmit,
    } = useAdminBiography();

    return (
        <section className={styles.biographyContainer}>
            <h1>Biography</h1>
            <h2>Create Biography</h2>

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
