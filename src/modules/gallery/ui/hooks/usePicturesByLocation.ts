// src/modules/gallery/ui/hooks/usePicturesByLocation.ts
"use client";

import { useEffect, useState } from "react";

export interface Picture {
  id: number;
  date: string;
  imageUrl: string;
  locationId: number;
  locationName?: string;
}

export function usePicturesByLocation(locationId: number) {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!locationId) return;

    const fetchPictures = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/gallery/${locationId}`);
        if (!res.ok) throw new Error("Failed to fetch pictures");

        const data: Picture[] = await res.json();
        setPictures(data);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPictures();
  }, [locationId]);

  return { pictures, loading, error };
}
