// src/domain/repositories/BandMemberRepository.ts
import { BandMember } from "../entities/BandMemberEntity";

export interface BandMemberRepository {
  getAll(): Promise<BandMember[]>;
  create(member: Omit<BandMember, "id">): Promise<BandMember>;
  delete(id: number): Promise<void>;
}
