// src/modules/events/service.ts
import { CreateEventInput } from "./domain";
import * as repo from "./repository";

export async function createEvent(input: CreateEventInput) {
    // Hier wäre Platz für Domain-Logik
    return repo.createEvent(input);
}

export async function deleteEvent(id: number) {
    return repo.deleteEvent(id);
}
