// src/modules/events/application/queries/get-events.handler.ts

import { EventRepository } from "../../domain/events.repository";

export class GetEventsHandler {
    constructor(private repo: EventRepository) {}

    async execute() {
        return this.repo.getAll();
    }
}