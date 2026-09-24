export class CreateEventCommand {
    constructor(
        public readonly title: string,
        public readonly date: Date,
        public readonly location?: string
    ) {}
}