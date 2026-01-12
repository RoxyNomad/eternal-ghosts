// src/modules/events/queries.ts
import { Event } from "./types";
import * as repo from "./repository";

export async function getAllEvents(): Promise<Event[]> {
    return repo.getAllEvents();
}
