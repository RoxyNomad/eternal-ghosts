// src/modules/gallery/ui/hooks/useLivePictures.ts
"use client";
import { useState, useEffect } from "react";
import { PictureEntity } from "../../domain/picture.entity";

export interface NewLivePicture {
  date: string;
  imageUrl: string;
  locationId: number | "";
}

export function useLivePictures() {
  const [pictures, setPictures] = useState<PictureEntity[]>([]);
  const [newLivePicture, setNewLivePicture] = useState<NewLivePicture>({
    date: "",
    imageUrl: "",
    locationId: "",
  });

  const fetchPictures = async () => {
    const res = await fetch("/api/admin/live-pictures");
    const data = await res.json();
    setPictures(data);
  };

  useEffect(() => {
    fetchPictures();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLivePicture({
      ...newLivePicture,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = async () => {
    await fetch("/api/admin/live-pictures", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newLivePicture,
        date: newLivePicture.date, // ISO string
      }),
    });

    setNewLivePicture({ locationId: "", date: "", imageUrl: ""});
    fetchPictures();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/admin/live-pictures/${id}`, { method: "DELETE" });
    fetchPictures();
  };

  const setUploadedImage = (url: string) => {
    setNewLivePicture({ ...newLivePicture, imageUrl: url });
  };

  return {
    pictures,
    newLivePicture,
    setNewLivePicture,
    handleChange,
    handleCreate,
    handleDelete,
    setUploadedImage,
  };
}
