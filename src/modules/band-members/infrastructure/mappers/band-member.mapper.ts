import { BandMember } from '../../domain/band-member.entity';
import { SelectBandMemberDb } from '../db/band-members.schema';

export function toBandMember(raw: SelectBandMemberDb): BandMember {
  return {
    id: raw.id,
    name: raw.name,
    role: raw.role,
    imageUrl: raw.imageUrl ?? null,
  };
}