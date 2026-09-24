// src/modules/auth/application/handlers/login.handler.ts

import bcrypt from "bcryptjs";

import { LoginCommand } from "../commands/login.command";

import { AdminUserRepository }
from "../../domain/admin-user.repository";

import { JwtService }
from "../../infrastructure/jwt.service";

export class LoginHandler {

    constructor(
        private readonly repo:
            AdminUserRepository,

        private readonly jwt:
            JwtService
    ) {}

    async execute(
        command: LoginCommand
    ) {

        const user =
            await this.repo.findByEmail(
                command.email
            );

        if (!user) {
            throw new Error(
                "Invalid credentials"
            );
        }

        const valid =
            await bcrypt.compare(
                command.password,
                user.passwordHash
            );

        if (!valid) {
            throw new Error(
                "Invalid credentials"
            );
        }

        return this.jwt.sign(user.id);
    }
}