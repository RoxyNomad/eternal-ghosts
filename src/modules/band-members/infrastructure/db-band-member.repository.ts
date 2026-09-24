import { eq, asc } from 'drizzle-orm';
import { db } from '@/infrastructure/neon';
import { bandMembersTable } from './db/band-members.schema';
import { BandMemberRepository } from '@/modules/band-members/domain/band-member.repository';
import { BandMember } from '@/modules/band-members/domain/band-member.entity';
import { toBandMember } from '@/modules/band-members/infrastructure/mappers/band-member.mapper';

export class DbBandMemberRepository implements BandMemberRepository {
  async getAll(): Promise<BandMember[]> {
    const rows = await db
      .select()
      .from(bandMembersTable)
      .orderBy(asc(bandMembersTable.name));

    return rows.map(toBandMember);
  }

  async create(member: Omit<BandMember, 'id'>): Promise<BandMember> {
    const [inserted] = await db
      .insert(bandMembersTable)
      .values({
        name: member.name,
        role: member.role,
        imageUrl: member.imageUrl ?? null,
      })
      .returning();

    return toBandMember(inserted);
  }

  async delete(id: number): Promise<void> {
    await db
      .delete(bandMembersTable)
      .where(eq(bandMembersTable.id, id));
  }
}