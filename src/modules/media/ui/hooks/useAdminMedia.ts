"use client";

import { useState, useEffect } from "react";
import { MediaEntity } from "../../domain/media.entity";

export function useAdminMedia() {
  const [mediaList, setMediaList] = useState<MediaEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/media");
      if (!res.ok) throw new Error("Fehler beim Laden der Medien");
      const data = await res.json();
      setMediaList(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Möchtest du dieses Video wirklich löschen?")) return;

    try {
      const res = await fetch(`/api/admin/media/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Löschen fehlgeschlagen");

      setMediaList((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Fehler beim Löschen");
    }
  };

  return {
    mediaList,
    loading,
    error,
    fetchMedia,
    handleDelete,
  };
}