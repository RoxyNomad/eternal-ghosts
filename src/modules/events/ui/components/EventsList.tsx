// src/ui/components/events/EventsList.tsx
"use client";

import React, { useEffect, useState } from "react";

import styles from '@/ui/styles/components/EventList.module.scss'

interface Event {
  id: number;
  title: string;
  date: string;
  location?: string;
  description?: string;
}

export default function EventsList() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then(setEvents)
      .catch((err) => console.error(err));
  }, []);

  const now = new Date();

  const upcoming = events
    .filter(e => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // aufsteigend

  const past = events
    .filter(e => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // absteigend

  return (
    <div className={styles.eventsContainer}>
      <div className={styles.upcomingEvents}>
        <h2 className={styles.containerTitle}>Upcoming Events</h2>
        {upcoming.length ? (
          upcoming.map(e => (
            <div key={e.id}>
              <h3>{e.title}</h3>
              <p>{new Date(e.date).toLocaleString()}</p>
              {e.location && <p>{e.location}</p>}
              {e.description && <p>{e.description}</p>}
            </div>
          ))
        ) : (
          <p>No upcoming events</p>
        )}
      </div>

      <div className={styles.pastEvents}>
        <h2 className={styles.containerTitle}>Past Events</h2>
        {past.length ? (
          past.map(e => (
            <div key={e.id}>
              <h3>{e.title}</h3>
              <p>{new Date(e.date).toLocaleString()}</p>
              {e.location && <p>{e.location}</p>}
              {e.description && <p>{e.description}</p>}
            </div>
          ))
        ) : (
          <p>No past events</p>
        )}
      </div>
    </div>
  );
}
