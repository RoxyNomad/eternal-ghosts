// src/app/api/auth/login/route.ts

import { NextResponse } from "next/server";

import { LoginHandler }
from "@/modules/auth/application/handlers/login.handler";

import { LoginCommand }
from "@/modules/auth/application/commands/login.command";

import { DbAdminUserRepository }
from "@/modules/auth/infrastructure/db-admin-user.repository";

import { JwtService }
from "@/modules/auth/infrastructure/jwt.service";

export async function POST(
    req: Request
) {
    const body = await req.json();

    const handler =
        new LoginHandler(
            new DbAdminUserRepository(),
            new JwtService()
        );

    const token =
        await handler.execute(
            new LoginCommand(
                body.email,
                body.password
            )
        );

    const response =
        NextResponse.json({
            success: true,
        });

    response.cookies.set(
        "auth_token",
        token,
        {
            httpOnly: true,
            secure:
                process.env.NODE_ENV ===
                "production",
            sameSite: "strict",
            path: "/",
        }
    );

    return response;
}