// src/ui/components/admin/EventForm.tsx
"use client";
import { useEvents } from "@/hooks/useEvents";

import styles from '@/ui/styles/components/EventForm.module.scss'

export default function EventForm() {
  const { newEvent, handleChange, handleCreate, events, handleDelete } = useEvents();

  return (
    <div className={styles.eventContainer}>
      <h1 className={styles.formTitle}>Events</h1>
      <h2 className={styles.formTitle}>Create new event</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
      >
        <input
          name="title"
          placeholder="Title"
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
          placeholder="Location"
          value={newEvent.location}
          onChange={handleChange}
        /><br />
        <button type="submit" className={styles.formButton}>Publish</button>
      </form>

      <h3>Saved Events</h3>
      {events.map((e) => (
        <div key={e.id} className={styles.savedEvent}>
          <h4>{e.title}</h4>
          <p>{new Date(e.date).toLocaleString()}</p>
          {e.location && <p>{e.location}</p>}
          {e.description && <p>{e.description}</p>}
          <button onClick={() => handleDelete(e.id)} className={styles.formButton}>Delete</button>
        </div>
      ))}
    </div>
  );
}
