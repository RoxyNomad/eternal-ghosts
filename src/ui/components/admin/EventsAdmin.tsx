// src/ui/components/admin/EventsAdmin.tsx
"use client";

import React, { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  location?: string;
  description?: string;
}

export default function EventsAdmin() {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Omit<Event, "id">>({
    title: "",
    date: "",
    location: "",
    description: ""
  });

  const fetchEvents = async () => {
    const res = await fetch("/api/events");
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent)
    });
    setNewEvent({ title: "", date: "", location: "", description: "" });
    fetchEvents();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/events/${id}`, { method: "DELETE" });
    fetchEvents();
  };

  return (
    <div>
      <h2>Admin: Events</h2>
      <div>
        <input name="title" placeholder="Title" value={newEvent.title} onChange={handleChange} />
        <input name="date" type="datetime-local" value={newEvent.date} onChange={handleChange} />
        <input name="location" placeholder="Location" value={newEvent.location} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleChange} />
        <button onClick={handleCreate}>Create Event</button>
      </div>

      <div>
        {events.map(e => (
          <div key={e.id}>
            <h3>{e.title}</h3>
            <p>{new Date(e.date).toLocaleString()}</p>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
