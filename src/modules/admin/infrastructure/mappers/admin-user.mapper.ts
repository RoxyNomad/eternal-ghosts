// src/modules/admin/infrastructure/mappers/admin-user.mapper.ts
import { AdminUser } from '../../domain/admin-user.entity';
import { SelectAdminUserDb } from '../db/admin-users.schema';

export class AdminUserMapper {
  static toDomain(raw: SelectAdminUserDb): AdminUser {
    // Wenn AdminUser ein type/interface ist, erstelle direkt ein Objekt:
    return {
      id: raw.id.toString(),
      email: raw.email,
      passwordHash: raw.passwordHash,
      createdAt: raw.createdAt,
    };
  }
}