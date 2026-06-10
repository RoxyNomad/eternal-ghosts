// src/hooks/useAdminNews.ts
"use client";

import { useState } from "react";

export function useAdminNews() {
    const [form, setForm] = useState({
        title: "",
        content: "",
        image_url: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const setUploadedImage = (url: string) => {
        setForm({ ...form, image_url: url });
    };

    const handleSubmit = async () => {
        await fetch("/api/admin/news", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        setForm({ title: "", content: "", image_url: "" });
    };

    return {
        form,
        handleChange,
        handleSubmit,
        setUploadedImage,
    };
}
