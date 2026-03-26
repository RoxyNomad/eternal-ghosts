// src/modules/biography/ui/hooks/useAdminBiography.ts
"use client";

import { useState } from "react";

export function useAdminBiography() {
    const [form, setForm] = useState({
        title: "",
        content: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        await fetch("/api/admin/biography", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        setForm({ title: "", content: "", });
    };

    return {
        form,
        handleChange,
        handleSubmit,
    };
}
