"use client";

import { useEffect, useState } from "react";
import { SelectMediaDb } from "../../infrastructure/db/media.schema";

export function usePublicMedia() {
  const [mediaItems, setMediaItems] = useState<SelectMediaDb[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMedia() {
      try {
        const res = await fetch("/api/media");
        if (!res.ok) throw new Error("Fehler beim Laden der Medien");
        const data = await res.json();
        setMediaItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unbekannter Fehler");
      } finally {
        setLoading(false);
      }
    }

    fetchMedia();
  }, []);

  return { mediaItems, loading, error };
}