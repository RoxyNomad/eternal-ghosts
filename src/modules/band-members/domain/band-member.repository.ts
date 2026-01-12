// src/domain/repositories/band-member.repository.ts
import { BandMember } from "./band-member.entity";

export interface BandMemberRepository {
  getAll(): Promise<BandMember[]>;
  create(member: Omit<BandMember, "id">): Promise<BandMember>;
  delete(id: number): Promise<void>;
}
