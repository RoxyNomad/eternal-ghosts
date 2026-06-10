// src/modules/events/application/commands/delete-event.handler.ts

import { EventRepository } from "../../domain/events.repository";
import { DeleteEventCommand } from "../commands/delete-event.command";

export class DeleteEventHandler {
    constructor(private repo: EventRepository) {}

    async execute(cmd: DeleteEventCommand) {
        await this.repo.delete(cmd.id);
    }
}