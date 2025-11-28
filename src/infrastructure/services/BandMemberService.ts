// src/infrastructure/services/BandMemberService.ts
import { BandMemberRepository } from "@/domain/repositories/BandMemberRepository";
import { BandMember } from "@/domain/entities/BandMemberEntity";

export class BandMemberService {
  constructor(private repo: BandMemberRepository) {}

  async getAllMembers(): Promise<BandMember[]> {
    return this.repo.getAll();
  }

  async createMember(member: Omit<BandMember, "id">): Promise<BandMember> {
    return this.repo.create(member);
  }

  async deleteMember(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
