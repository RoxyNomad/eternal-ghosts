// src/modules/biography/ui/components/admin/BiographyForm.tsx
"use client";

import { useAdminBiography } from "@/modules/biography/ui/hooks/useAdminBiography";
import { useAdminBiographyList } from "@/modules/biography/ui/hooks/useAdminBiographyList";
import styles from "@/ui/styles/components/BiographyForm.module.scss";

type BiographyFormProps = {
    id?: number;
    title?: string;
    content?: string;
};

function BiographyProps({ id, title, content }: BiographyFormProps) {
    const { form, handleChange, handleSubmit } = useAdminBiography({
        id,
        title,
        content,
    });

    return (
        <div className={styles.formBox}>
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
            <button onClick={handleSubmit} className={styles.formButton}>
                {id ? "Update" : "Publish"}
            </button>
        </div>
    );
}

export default function BiographyForm() {
    const { biographies, loading } = useAdminBiographyList();
    const existingBio = biographies.length > 0 ? biographies[0] : null;

    return (
        <section className={styles.biographyContainer}>
            <h1>Biography</h1>

            <div className={styles.leftSide}>
                <h2>Create</h2>
                <BiographyProps />
            </div>

            <div className={styles.rightSide}>
                <h2>Edit</h2>

                {loading && <p>Loading...</p>}

                {!loading && !existingBio && <p>No biography found.</p>}

                {!loading && existingBio && (
                    <BiographyProps
                        id={existingBio.id}
                        title={existingBio.title}
                        content={existingBio.content}
                    />
                )}
            </div>
        </section>
    );
}