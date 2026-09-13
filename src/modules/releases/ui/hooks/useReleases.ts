"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Release } from "../../domain/releases.entity";

interface NewReleaseState {
  title: string;
  type: Release["type"];
  releaseDate: string;
  description: string;
  cover: File | null;
}

export function useReleases() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [newRelease, setNewRelease] = useState<NewReleaseState>({
    title: "",
    type: "Single",
    releaseDate: "",
    description: "",
    cover: null,
  });

  // Initiale Releases für den Admin-Bereich laden
  useEffect(() => {
    fetchReleases();
  }, []);

  const fetchReleases = async () => {
    try {
      const res = await fetch("/api/admin/releases"); // Fallback falls DELETE über die gleiche Route läuft
      if (res.ok) {
        const data = await res.json();
        setReleases(data);
      }
    } catch (err) {
      console.error("Fehler beim Laden der Releases:", err);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewRelease((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewRelease((prev) => ({ ...prev, cover: e.target.files![0] }));
    }
  };

  const handleCreate = async () => {
    if (!newRelease.cover) {
      alert("Bitte lade ein Cover-Bild hoch!");
      return;
    }

    const formData = new FormData();
    formData.append("title", newRelease.title);
    formData.append("type", newRelease.type);
    formData.append("releaseDate", newRelease.releaseDate);
    formData.append("description", newRelease.description);
    formData.append("cover", newRelease.cover);

    try {
      const res = await fetch("/api/admin/releases", {
        method: "POST",
        body: formData, // Kein Content-Type Header setzen, der Browser setzt multipart/form-data automatisch
      });

      if (res.ok) {
        const created: Release = await res.json();
        setReleases((prev) => [created, ...prev]);
        setNewRelease({
          title: "",
          type: "Single",
          releaseDate: "",
          description: "",
          cover: null,
        });
        // Input-Feld für File im DOM zurücksetzen
        const fileInput = document.getElementsByName("cover")[0] as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        const errData = await res.json();
        alert(`Fehler beim Speichern: ${errData.error}`);
      }
    } catch (err) {
      console.error("Fehler beim Erstellen des Releases:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Möchtest du dieses Release wirklich löschen?")) return;

    try {
      const res = await fetch(`/api/admin/releases?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setReleases((prev) => prev.filter((r) => r.id !== id));
      } else {
        alert("Löschen fehlgeschlagen.");
      }
    } catch (err) {
      console.error("Fehler beim Löschen des Releases:", err);
    }
  };

  return {
    newRelease,
    releases,
    handleChange,
    handleFileChange,
    handleCreate,
    handleDelete,
  };
}
