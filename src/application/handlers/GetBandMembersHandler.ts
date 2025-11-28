// src/application/handlers/GetBandMembersHandler.ts
import { BandMember } from "@/domain/entities/BandMemberEntity";
import { BandMemberRepository } from "@/domain/repositories/BandMemberRepository";

export class GetBandMembersHandler {
  constructor(private repository: BandMemberRepository) {}

  async execute(): Promise<BandMember[]> {
    return this.repository.getAll();
  }
}
