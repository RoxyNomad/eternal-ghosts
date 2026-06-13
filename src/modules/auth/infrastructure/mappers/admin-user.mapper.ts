// src/modules/auth/infrastructure/mappers/admin-user.mapper.ts

import { AdminUser } from "../../domain/admin-user.entity";

export interface AdminUserRow {
    id: number;
    email: string;
    password_hash: string;
}

export class AdminUserMapper {
    static toDomain(
        row: AdminUserRow
    ): AdminUser {
        return {
            id: row.id,
            email: row.email,
            passwordHash: row.password_hash,
        };
    }
}