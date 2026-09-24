import { ReleasesRepository } from '../../domain/releases.repository';
import { CreateReleaseCommand } from '../commands/create-release.command';

export class CreateReleaseHandler {
  constructor(private repo: ReleasesRepository) {}

  async execute(command: CreateReleaseCommand) {
    return await this.repo.create(command);
  }
}