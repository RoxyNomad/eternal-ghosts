// src/ui/components/admin/ImageUpload.tsx
"use client";
import { useState } from "react";

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  async function upload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    setUploadedUrl(data.secure_url);
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={upload}>Upload</button>

      {uploadedUrl && (
        <div>
          <p>Upload erfolgreich:</p>
          <img src={uploadedUrl} width={200} />
        </div>
      )}
    </div>
  );
}
