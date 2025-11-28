// src/infrastructure/repositories/DbBandMemberRepository.ts
import { BandMemberRepository } from "@/domain/repositories/BandMemberRepository";
import { BandMember } from "@/domain/entities/BandMemberEntity";
import { query } from "@/utils/db";

export class DbBandMemberRepository implements BandMemberRepository {
  async getAll(): Promise<BandMember[]> {
    const res = await query(`SELECT * FROM band_members ORDER BY name ASC`);
    return res.rows.map((r: any) => ({
      id: r.id,
      name: r.name,
      role: r.role,
      imageUrl: r.image_url,
    }));
  }

  async create(member: Omit<BandMember, "id">): Promise<BandMember> {
    const res = await query(
      `INSERT INTO band_members (name, role, image_url) VALUES ($1,$2,$3) RETURNING *`,
      [member.name, member.role, member.imageUrl]
    );
    return res.rows[0];
  }

  async delete(id: number): Promise<void> {
    await query(`DELETE FROM band_members WHERE id = $1`, [id]);
  }
}
