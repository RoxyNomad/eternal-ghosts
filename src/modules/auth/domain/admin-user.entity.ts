// src/modules/auth/domain/admin-user.entity.ts

export interface AdminUser {
    id: number;
    email: string;
    passwordHash: string;
}