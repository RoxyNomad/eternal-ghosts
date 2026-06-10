// src/app/api/admin/biography/[id]/route.ts
import { NextResponse } from "next/server";
import { DbBiographyRepository } from "@/modules/biography/infrastructure/db-biography.repository";
import { UpdateBiographyCommand } from "@/modules/biography/application/commands/update-biography.command";

const command = new UpdateBiographyCommand(new DbBiographyRepository());

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const body = await req.json();
    const { id } = await params;

    return NextResponse.json(
        await command.execute({
            id: Number(id),
            title: body.title,
            content: body.content,
        })
    );
}