// src/hooks/useGallery.ts
// Keep for backward compatibility; returns the simpler shape (without pictureCount).
"use client";
import { useState, useEffect } from "react";

export interface LocationData {
  id: number;
  name: string;
  imageUrl: string | null;
}

export function useGallery() {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch("/api/gallery/locations");
        if (!res.ok) throw new Error("Failed to fetch locations");
        const data = await res.json();
        // map to the simpler interface in case backend returns pictureCount
        setLocations(data.map((d: any) => ({ id: d.id, name: d.name, imageUrl: d.imageUrl })));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return { locations, loading, error };
}
