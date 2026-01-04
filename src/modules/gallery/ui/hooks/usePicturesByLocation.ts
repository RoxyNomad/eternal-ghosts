// src/hooks/usePicturesByLocation.ts
"use client";
import { useEffect, useState } from "react";

export interface Picture {
  id: number;
  date: string;
  location: string;
  imageUrl: string;
}

export function usePicturesByLocation(location: string) {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!location) return;

    const fetchPictures = async () => {
      try {
        setLoading(true);
        const encoded = encodeURIComponent(location);
        const res = await fetch(`/api/gallery/${encoded}`);
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
  }, [location]);

  return { pictures, loading, error };
}
