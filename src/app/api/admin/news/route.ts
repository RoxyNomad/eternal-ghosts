// src/app/api/admin/news/route.ts
import { NextResponse } from "next/server";
import { DbNewsRepository } from "@/modules/news/infrastructure/db-news.repository";
import { CreateNewsCommand } from "@/modules/news/application/commands/create-news.command";

const command = new CreateNewsCommand(new DbNewsRepository());

export async function POST(req: Request) {
    const body = await req.json();

    return NextResponse.json(
        await command.execute({
            title: body.title,
            content: body.content,
            imageUrl: body.image_url,
        })
    );
}
