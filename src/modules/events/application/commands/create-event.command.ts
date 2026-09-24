export class CreateEventCommand {
    constructor(
        public readonly title: string,
        public readonly date: string | Date,
        public readonly location?: string
    ) {}
}