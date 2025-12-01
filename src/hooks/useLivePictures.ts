// src/hooks/useLivePictures.ts
"use client";
import { useState, useEffect } from "react";
import { LivePicture } from "@/domain/entities/PictureEntity";

export interface NewLivePicture {
  location: string;
  date: string;
  imageUrl: string;
}

export function useLivePictures() {
  const [pictures, setPictures] = useState<LivePicture[]>([]);
  const [newLivePicture, setNewLivePicture] = useState({
    location: "",
    date: "",
    imageUrl: ""
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

    setNewLivePicture({ location: "", date: "", imageUrl: "" });
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
    handleChange,
    handleCreate,
    handleDelete,
    setUploadedImage,
  };
}
