// src/modules/gallery/ui/components/admin/ImageUpload.tsx
"use client";
import { useState } from "react";

import styles from '@/ui/styles/components/ImageUpload.module.scss'

interface Props {
  onUploadAction: (url: string) => void;
  folder?: string;
}

export default function ImageUpload({ onUploadAction, folder = "band-members" }: Props) {
  const [file, setFile] = useState<File | null>(null);

  async function upload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`/api/upload-image/${folder}`, { method: "POST", body: formData });
    const data = await res.json();
    if (data.success) onUploadAction(data.secure_url);
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} /><br />
      <button onClick={upload} className={styles.formButton}>Upload Image</button>
    </div>
  );
}
