// src/ui/components/admin/EventForm.tsx
"use client";
import { useEvents } from "@/hooks/useEvents";

export default function EventForm() {
  const { newEvent, handleChange, handleCreate, events, handleDelete } = useEvents();

  return (
    <div>
      <h2>Neues Event erstellen</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
      >
        <input
          name="title"
          placeholder="Titel"
          value={newEvent.title}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Ort"
          value={newEvent.location}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Beschreibung"
          value={newEvent.description}
          onChange={handleChange}
        />
        <button type="submit">Speichern</button>
      </form>

      <h3>Bestehende Events</h3>
      {events.map((e) => (
        <div key={e.id}>
          <h4>{e.title}</h4>
          <p>{new Date(e.date).toLocaleString()}</p>
          {e.location && <p>{e.location}</p>}
          {e.description && <p>{e.description}</p>}
          <button onClick={() => handleDelete(e.id)}>Löschen</button>
        </div>
      ))}
    </div>
  );
}
