import { ReleasesRepository } from '../../domain/releases.repository';

export class GetReleasesHandler {
  constructor(private repo: ReleasesRepository) {}

  async execute() {
    return await this.repo.findAll();
  }
}