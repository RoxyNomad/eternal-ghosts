"use client";

import Image from "next/image";
import { useReleases } from "@/modules/releases/ui/hooks/useReleases";
import styles from "@/ui/styles/components/ReleaseForm.module.scss";

export default function ReleaseForm() {
  const {
    newRelease,
    releases,
    handleChange,
    handleFileChange,
    handleCreate,
    handleDelete,
  } = useReleases();

  return (
    <div className={styles.releaseContainer}>
      <h1 className={styles.formTitle}>Releases</h1>
      <h2 className={styles.formTitle}>Create new release</h2>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={newRelease.title}
          onChange={handleChange}
          required
        />

        <select
          name="type"
          value={newRelease.type}
          onChange={handleChange}
          required
        >
          <option value="Single">Single</option>
          <option value="EP">EP</option>
          <option value="Album">Album</option>
        </select>

        <input
          type="date"
          name="releaseDate"
          value={newRelease.releaseDate}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="cover"
          accept="image/*"
          onChange={handleFileChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description (optional)"
          value={newRelease.description}
          onChange={handleChange}
        />

        <button type="submit" className={styles.formButton}>
          Publish Release
        </button>
      </form>

      <h3>Saved Releases</h3>
      <div className={styles.savedReleasesList}>
        {releases.map((r) => (
          <div key={r.id} className={styles.savedRelease}>
            <div>
              {r.coverImageUrl && (
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", marginBottom: "1vh" }}>
                  <Image
                    src={r.coverImageUrl}
                    alt={r.title}
                    fill
                    style={{ objectFit: "cover", borderRadius: "0.5vh" }}
                  />
                </div>
              )}
              <h4>{r.title}</h4>
              <p><strong>Type:</strong> {r.type}</p>
              <p><strong>Date:</strong> {new Date(r.releaseDate).toLocaleDateString("de-CH")}</p>
              {r.description && <p style={{ fontStyle: "italic" }}>{r.description}</p>}
            </div>
            <button
              onClick={() => handleDelete(r.id)}
              className={styles.formButton}
              style={{ marginTop: "1.5vh", width: "100%" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
