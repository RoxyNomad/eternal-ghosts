// src/modules/auth/infrastructure/jwt.service.ts

import jwt from "jsonwebtoken";

export type JwtPayload = {
    userId: number;
};

export class JwtService {
    sign(userId: number): string {
        return jwt.sign(
            { userId },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d",
            }
        );
    }

    verify(token: string): JwtPayload {
        return jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as JwtPayload;
    }
}