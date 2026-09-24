import { useState, useEffect, ChangeEvent } from "react";
import { Release } from "../../domain/releases.entity";

export function useReleases() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [newRelease, setNewRelease] = useState({
    title: "",
    type: "Single" as "Single" | "EP" | "Album",
    releaseDate: "",
    description: "",
  });

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const fetchReleases = async () => {
    try {
      const res = await fetch("/api/releases");
      if (!res.ok) throw new Error("Failed to fetch releases");
      const data = await res.json();
      setReleases(data);
    } catch (err) {
      console.error("Error fetching releases:", err);
    }
  };

  useEffect(() => {
    fetchReleases();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewRelease((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || !files[0]) return;

    if (name === "cover") setCoverFile(files[0]);
    if (name === "audio") setAudioFile(files[0]);
  };

  const handleCreate = async () => {
    if (!coverFile) return alert("Please select a cover image!");

    setIsUploading(true);
    try {
      const imageFormData = new FormData();
      imageFormData.append("file", coverFile);

      const cloudRes = await fetch("/api/upload/image/releases", {
        method: "POST",
        body: imageFormData,
      });

      const cloudData = await cloudRes.json();
      if (!cloudRes.ok) throw new Error(cloudData.error || "Image upload failed");

      let audioUrl = "";
      let audioPublicId = "";

      if (audioFile) {
        const audioFormData = new FormData();
        audioFormData.append("file", audioFile);

        const r2Res = await fetch("/api/upload/audio", {
          method: "POST",
          body: audioFormData,
        });

        const r2Data = await r2Res.json();
        if (!r2Res.ok) throw new Error(r2Data.error || "Audio upload failed");

        audioUrl = r2Data.url;
        audioPublicId = r2Data.key;
      }

      const dbRes = await fetch("/api/releases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newRelease,
          coverImageUrl: cloudData.url,
          coverImagePublicId: cloudData.public_id,
          audioUrl: audioUrl || undefined,
          audioPublicId: audioPublicId || undefined,
        }),
      });

      if (!dbRes.ok) throw new Error("Failed to save release in database");

      // Reset Form
      setNewRelease({ title: "", type: "Single", releaseDate: "", description: "" });
      setCoverFile(null);
      setAudioFile(null);
      fetchReleases();
    } catch (err) {
      console.error("Error creating release:", err);
      alert(err instanceof Error ? err.message : "Error creating release");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this release?")) return;
    try {
      const res = await fetch(`/api/releases/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete release");
      fetchReleases();
    } catch (err) {
      console.error("Error deleting release:", err);
    }
  };

  return {
    newRelease,
    releases,
    isUploading,
    handleChange,
    handleFileChange,
    handleCreate,
    handleDelete,
  };
}