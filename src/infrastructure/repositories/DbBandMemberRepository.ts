// src/infrastructure/repositories/DbBandMemberRepository.ts
import { BandMemberRepository } from "@/domain/repositories/BandMemberRepository";
import { BandMember } from "@/domain/entities/BandMemberEntity";
import { query } from "@/utils/db";

export class DbBandMemberRepository implements BandMemberRepository {
  async getAll(): Promise<BandMember[]> {
    const res = await query(`
      SELECT id, name, role, image_url
      FROM band_members
      ORDER BY id ASC
    `);

    // Map DB-Ergebnis auf Entity
    return res.rows.map((row: any): BandMember => ({
      id: row.id,
      name: row.name,
      role: row.role,
      imageUrl: row.image_url // <-- hier die Cloudinary URL
    }));
  }
}
