// src/modules/biography/ui/hooks/useEditBiography.ts
"use client";

import { useState } from "react";

export function useEditBiography(id: number, initialData?: { title: string; content: string }) {
    const [form, setForm] = useState({
        title: initialData?.title ?? "",
        content: initialData?.content ?? "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        await fetch(`/api/admin/biography/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
    };

    return {
        form,
        handleChange,
        handleSubmit,
    };
}