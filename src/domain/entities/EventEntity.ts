// src/domain/entities/Event.ts
export interface Event {
  id: number;
  title: string;
  date: string;       // ISO-String
  location?: string;
  description?: string;
}
