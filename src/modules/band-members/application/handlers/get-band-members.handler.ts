// src/application/handlers/get-band-members.handler.ts
import { BandMemberRepository } from "@/modules/band-members/domain/band-member.repository";

export class GetBandMembersHandler {
  constructor(private repo: BandMemberRepository) {}

  execute() {
    return this.repo.getAll();
  }
}