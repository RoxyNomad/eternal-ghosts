export class CreateMediaCommand {
  constructor(
    public readonly title: string,
    public readonly youtubeUrl: string,
    public readonly description?: string
  ) {}
}