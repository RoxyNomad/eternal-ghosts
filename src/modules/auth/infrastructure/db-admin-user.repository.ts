// src/modules/auth/infrastructure/db-admin-user.repository.ts

import { query } from "@/utils/db";

import {
    AdminUserRepository
} from "../domain/admin-user.repository";

import {
    AdminUser
} from "../domain/admin-user.entity";

import {
    AdminUserMapper,
    AdminUserRow
} from "./mappers/admin-user.mapper";

export class DbAdminUserRepository
    implements AdminUserRepository
{
    async findByEmail(
        email: string
    ): Promise<AdminUser | null> {

        const res =
            await query<AdminUserRow>(
                `
                SELECT *
                FROM admin_users
                WHERE email = $1
                `,
                [email]
            );

        if (res.rows.length === 0) {
            return null;
        }

        return AdminUserMapper.toDomain(
            res.rows[0]
        );
    }
}