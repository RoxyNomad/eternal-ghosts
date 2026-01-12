// src/modules/gallery/ui/hooks/useGalleryLocations.ts
"use client";
import { useEffect, useState } from "react";

export interface GalleryLocation {
  id: number;
  name: string;
  imageUrl: string | null;
  pictureCount: number;
}

export function useGalleryLocations() {
  const [locations, setLocations] = useState<GalleryLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/gallery/locations");
        if (!res.ok) throw new Error("Failed to load locations");
        const data: GalleryLocation[] = await res.json();
        setLocations(data);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { locations, loading, error };
}
