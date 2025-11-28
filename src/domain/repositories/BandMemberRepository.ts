// src/domain/repositories/BandMemberRepository.ts
import { BandMember } from "../entities/BandMemberEntity";

export interface BandMemberRepository {
  getAll(): Promise<BandMember[]>;
}
