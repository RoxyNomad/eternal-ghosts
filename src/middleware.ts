// src/middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(
    request: NextRequest
) {
    const token =
        request.cookies.get("auth_token")?.value;

    if (!token) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }

    try {
        await jwtVerify(
            token,
            new TextEncoder().encode(
                process.env.JWT_SECRET!
            )
        );

        return NextResponse.next();
    } catch {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }
}

export const config = {
    matcher: ["/admin/:path*"],
};