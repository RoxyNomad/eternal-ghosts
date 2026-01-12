// src/modules/gallery/ui/hooks/useAdminLocations.ts
"use client";
import { useState, useEffect } from "react";
import { LocationEntity } from "../../domain/location.entity";

export interface AdminLocation extends LocationEntity {
  pictureCount?: number;
}

export function useAdminLocations() {
  const [locations, setLocations] = useState<AdminLocation[]>([]);
  const [newLocation, setNewLocation] = useState({ name: "", imageUrl: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all locations
  const fetchLocations = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/locations");
      if (!res.ok) throw new Error("Failed to fetch locations");
      const data = await res.json();
      setLocations(data);
    } catch (err: any) {
      setError(err.message ?? "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLocation({ ...newLocation, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      await fetch("/api/admin/locations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLocation),
      });
      setNewLocation({ name: "", imageUrl: "" });
      fetchLocations();
    } catch (err) {
      console.error(err);
    }
  };

  const setUploadedImage = (url: string) => {
    setNewLocation({ ...newLocation, imageUrl: url });
  };

  return {
    locations,
    newLocation,
    handleChange,
    handleCreate,
    setUploadedImage,
    loading,
    error,
  };
}
