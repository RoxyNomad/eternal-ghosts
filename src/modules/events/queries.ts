// src/modules/events/queries.ts
import { Event } from "./domain";
import * as repo from "./repository";

export async function getAllEvents(): Promise<Event[]> {
    return repo.getAllEvents();
}
