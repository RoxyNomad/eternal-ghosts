// src/app/api/admin/biography/[id]/route.ts
import { NextResponse } from "next/server";
import { DbBiographyRepository } from "@/modules/biography/infrastructure/db-biography.repository";
import { UpdateBiographyCommand } from "@/modules/biography/application/commands/update-biography.command";

const command = new UpdateBiographyCommand(new DbBiographyRepository());

export async function PUT(req: Request, context: { params: { id: string } }) {
    const body = await req.json();
    const id = Number(context.params.id);

    return NextResponse.json(
        await command.execute({
            id,
            title: body.title,
            content: body.content,
        })
    );
}