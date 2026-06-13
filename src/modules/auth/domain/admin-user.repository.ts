// src/modules/auth/domain/admin-user.repository.ts

import { AdminUser } from "./admin-user.entity";

export interface AdminUserRepository {
    findByEmail(
        email: string
    ): Promise<AdminUser | null>;
}