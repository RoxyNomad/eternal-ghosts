// src/modules/biography/ui/hooks/useAdminBiography.ts
"use client";

import { useState } from "react";

export function useAdminBiography(initial?: {
    id?: number;
    title?: string;
    content?: string;
}) {
    const [form, setForm] = useState({
        title: initial?.title ?? "",
        content: initial?.content ?? "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const method = initial?.id ? "PUT" : "POST";
        const url = initial?.id
            ? `/api/admin/biography/${initial.id}`
            : "/api/admin/biography";

        await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        // reset nur wenn CREATE
        if (!initial?.id) {
            setForm({ title: "", content: "" });
        }
    };

    return {
        form,
        handleChange,
        handleSubmit,
    };
}