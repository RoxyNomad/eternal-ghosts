// src/modules/events/commands.ts
import { CreateEventInput } from "./types";
import * as repo from "./repository";

export async function createEvent(input: CreateEventInput) {
    return repo.createEvent(input);
}

export async function deleteEvent(id: number) {
    return repo.deleteEvent(id);
}
