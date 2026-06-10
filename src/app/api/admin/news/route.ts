// src/app/api/admin/news/route.ts

import { NextResponse } from "next/server";

import { DbNewsRepository } from "@/modules/news/infrastructure/db-news.repository";

import { CreateNewsCommand } from "@/modules/news/application/commands/create-news.command";
import { CreateNewsHandler } from "@/modules/news/application/handlers/create-news.handler";

export async function POST(req: Request) {
    const body = await req.json();

    const repo = new DbNewsRepository();

    const handler = new CreateNewsHandler(repo);

    const result = await handler.execute(
        new CreateNewsCommand(
            body.title,
            body.content,
            body.image_url
        )
    );

    return NextResponse.json(result);
}