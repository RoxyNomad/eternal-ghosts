// src/modules/band-members/infrastructure/mappers/band-member.mapper.ts

import { BandMember } from "../../domain/band-member.entity";

export interface BandMemberRow {
    id: number;
    name: string;
    role: string;
    image_url: string | null;
}

export function toBandMember(row: BandMemberRow): BandMember {
    return {
        id: row.id,
        name: row.name,
        role: row.role,
        imageUrl: row.image_url,
    };
}