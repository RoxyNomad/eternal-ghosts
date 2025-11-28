// src/ui/components/admin/ImageUpload.tsx
"use client";
import { useState } from "react";

interface Props {
  onUpload: (url: string) => void;
}

export default function ImageUpload({ onUpload }: Props) {
  const [file, setFile] = useState<File | null>(null);

  async function upload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload-image", { method: "POST", body: formData });
    const data = await res.json();
    if (data.success) onUpload(data.secure_url);
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={upload}>Upload Image</button>
    </div>
  );
}
