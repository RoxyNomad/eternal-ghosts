import { MediaRepository } from "../../domain/media.repository";
import { DeleteMediaCommand } from "../commands/delete-media.command";

export class DeleteMediaHandler {
  constructor(private readonly repository: MediaRepository) {}

  async execute(command: DeleteMediaCommand): Promise<void> {
    if (Number.isNaN(command.id)) {
      throw new Error("Invalid Media ID");
    }
    await this.repository.delete(command.id);
  }
}