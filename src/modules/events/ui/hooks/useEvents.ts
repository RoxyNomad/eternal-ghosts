// src/modules/events/ui/useEvents.ts
"use client";

import { useState, useEffect } from "react";
import { Event } from "@/modules/events/types";

export function useEvents() {
    const [events, setEvents] = useState<Event[]>([]);
    const [newEvent, setNewEvent] = useState<Omit<Event, "id">>({
        title: "",
        date: "",
        location: "",
        description: "",
    });

    const fetchEvents = async () => {
        const res = await fetch("/api/events");
        const data = await res.json();
        setEvents(data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    const handleCreate = async () => {
        await fetch("/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
        });

        setNewEvent({ title: "", date: "", location: "", description: "" });
        fetchEvents();
    };

    const handleDelete = async (id: number) => {
        await fetch(`/api/events/${id}`, { method: "DELETE" });
        fetchEvents();
    };

    return {
        events,
        newEvent,
        handleChange,
        handleCreate,
        handleDelete,
    };
}
