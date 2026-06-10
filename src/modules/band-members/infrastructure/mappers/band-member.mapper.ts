// src/modules/band-members/infrastructure/mappers/band-member.mappers.ts

export interface BandMemberRow {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
}

export function toBandMember(row: BandMemberRow): BandMemberRow {
    return {
        id: row.id,
        name: row.name,
        role: row.role,
        imageUrl: row.imageUrl,
    };
}