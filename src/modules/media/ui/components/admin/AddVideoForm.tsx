"use client";

import { useState } from "react";
import styles from "@/ui/styles/components/AddVideoForm.module.scss";

interface Props {
  onVideoAdded: () => void;
}

export default function AddVideoForm({ onVideoAdded }: Props) {
  const [title, setTitle] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, youtubeUrl, description }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Fehler beim Speichern");
      }

      setTitle("");
      setYoutubeUrl("");
      setDescription("");
      onVideoAdded();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Fehler beim Erstellen");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.mediaContainer}>
      <h1 className={styles.formTitle}>Videos</h1>
      <h2 className={styles.formTitle}>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titel"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="https://www.youtube.com/watch?v=..."
          value={youtubeUrl}
          name="url"
          onChange={(e) => setYoutubeUrl(e.target.value)}
          required
        />
        <textarea
          placeholder="Beschreibung (optional)"
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className={styles.formButton} type="submit" disabled={loading}>
          {loading ? "Speichert..." : "Video hinzufügen"}
        </button>
      </form>
    </div>
  );
}