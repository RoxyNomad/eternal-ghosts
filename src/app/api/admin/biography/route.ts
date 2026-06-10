// src/app/api/admin/biography/route.ts
import { NextResponse } from "next/server";
import { DbBiographyRepository } from "@/modules/biography/infrastructure/db-biography.repository";
import { CreateBiographyCommand } from "@/modules/biography/application/commands/create-biography.command";

const command = new CreateBiographyCommand(new DbBiographyRepository());

export async function POST(req: Request) {
    const body = await req.json();

    return NextResponse.json(
        await command.execute({
            title: body.title,
            content: body.content,
        })
    );
}
