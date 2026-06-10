// src/modules/events/application/commands/create-event.handler.ts

import { EventRepository } from "../../domain/events.repository";
import { CreateEventCommand } from "../commands/create-event.command";

export class CreateEventHandler {
    constructor(private repo: EventRepository) {}

    async execute(cmd: CreateEventCommand) {
        return this.repo.create({
            title: cmd.title,
            date: cmd.date,
            location: cmd.location,
        });
    }
}