import { eq } from 'drizzle-orm';
import { db } from '@/infrastructure/neon';
import { adminUsersTable } from './db/admin-users.schema';
import { AdminUserRepository } from '../domain/admin-user.repository';
import { AdminUser } from '../domain/admin-user.entity';
import { AdminUserMapper } from './mappers/admin-user.mapper';

export class DbAdminUserRepository implements AdminUserRepository {
  async findByEmail(email: string): Promise<AdminUser | null> {
    const rows = await db
      .select()
      .from(adminUsersTable)
      .where(eq(adminUsersTable.email, email))
      .limit(1);

    if (rows.length === 0) {
      return null;
    }

    return AdminUserMapper.toDomain(rows[0]);
  }
}