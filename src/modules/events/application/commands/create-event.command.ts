// src/modules/events/application/commands/create-event.command.ts

export class CreateEventCommand {
    constructor(
        public readonly title: string,
        public readonly date: string,
        public readonly location?: string
    ) {}
}